import { cn } from "@/lib/utils"
import { AuthCard } from "@daveyplate/better-auth-ui"
import { authViewPaths } from "@daveyplate/better-auth-ui/server"
import Link from "next/link"

export function generateStaticParams() {
    return Object.values(authViewPaths).map((pathname) => ({ pathname }))
}

export default async function AuthPage({ params }: { params: Promise<{ pathname: string }> }) {
    const { pathname } = await params

    return (
        <div className="flex flex-col grow items-center justify-center gap-3">
            <AuthCard pathname={pathname} />

            <p
                className={cn(
                    ["callback", "settings", "sign-out"].includes(pathname) && "hidden",
                    "text-muted-foreground text-xs"
                )}
            >
                Powered by{" "}
                <Link className="underline text-warning" href="https://better-auth.com">
                    better-auth.
                </Link>
            </p>
        </div>
    )
}
