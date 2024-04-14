"use client";
import { signOut, useSession } from "next-auth/react";
import { AppbarBtn } from "./AppbarBtn";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { DialogClose } from "@radix-ui/react-dialog";
import { CartSidebar } from "./CartSidebar";

export function AccountAuthBtn() {
    const session = useSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <AppbarBtn imgSrc="/account.svg" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {session.data ? (
                    <>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>
                            <div onClick={() => signOut()}>Log Out</div>
                        </DropdownMenuItem>
                    </>
                ) : (
                    <>
                        <DropdownMenuItem>
                            <Link href={"/api/auth/signin"}>Sign In</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={"/auth/signup"}>Sign Up</Link>
                        </DropdownMenuItem>
                    </>
                )}
                <DropdownMenuItem>
                    Cart
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
