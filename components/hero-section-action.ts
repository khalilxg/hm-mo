'use server'

import { redirect } from 'next/navigation'

export async function handleQuickStart() {
  const API_URL = "https://loi.morched.tn/api/v1";
  const API_KEY = process.env.BOTAPI;
  const WORKSPACE = "loi";
  const username = `web_guest_${Math.floor(Math.random() * 10000)}`;

  try {
    const userRes = await fetch(`${API_URL}/admin/users/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password: "TempPassword123!", role: "default" })
    });

    const userData = await userRes.json();
    const userId = userData.user?.id;
    if (!userId) throw new Error("User ID not returned");

    await fetch(`${API_URL}/admin/workspaces/${WORKSPACE}/manage-users`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userIds: [userId], reset: false })
    });

    const tokenRes = await fetch(`${API_URL}/users/${userId}/issue-auth-token`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });

    const { token } = await tokenRes.json();
    redirect(`https://loi.morched.tn/sso/simple?token=${token}&redirectTo=/workspace/${WORKSPACE}`);

  } catch (error: any) {
    if (error.message === "NEXT_REDIRECT") throw error;
    console.error("SSO flow failed:", error);
    redirect('https://loi.morched.tn/');
  }
}
