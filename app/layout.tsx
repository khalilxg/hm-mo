import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
title: "مرشد قانون - منصة القانون التونسي للطلبة",
description: "أكثر من 5000 وثيقة قانونية تونسية، ودعم بالذكاء الاصطناعي لمساعدتك على المراجعة والنجاح في الامتحانات",
generator: "AIBC",
icons: {
icon: "/favicon.svg",
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
