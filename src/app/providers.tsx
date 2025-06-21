"use client"

import { AuthUIProvider } from "@daveyplate/better-auth-ui"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"
import { Toaster } from "sonner"
import { authClient } from "@/lib/auth-client"
import { ProgressProvider } from '@bprogress/next/app';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { TailwindIndicator } from "@/components/tailwind-indicator"

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthUIProvider
        authClient={authClient}
        navigate={router.push}
        replace={router.replace}
        onSessionChange={() => {
          router.refresh()
        }}
        Link={Link}
      >
        <ProgressProvider
          height='2px'
          color='var(--color-primary)'
          options={{
            showSpinner: false,
          }}
          stopDelay={1000}
          delay={1000}
          startOnLoad
          shallowRouting
        >
          <ViewTransition>
            {children}
          </ViewTransition>
          <Toaster />
          <TailwindIndicator />
        </ProgressProvider>
      </AuthUIProvider>
    </ThemeProvider>
  )
}
