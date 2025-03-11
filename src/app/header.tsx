import { UserButton } from "@daveyplate/better-auth-ui"
import Link from "next/link"

export function Header() {
    return (
        <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex p-3 justify-between items-center">
                <Link href="/" className="font-bold">
                    Better Auth Starter
                </Link>

                <UserButton />
            </div>
        </header>
    )
}
