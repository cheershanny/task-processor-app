"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="ml-5 mt-5 relative">
      <div className="absolute top-0 right-0">
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin" className="mx-5">
            Login
          </Link>
        )}
        {status === "authenticated" && (
          <div>
            {session.user!.name}{" "}
            <Link href="/api/auth/signout" className="mx-5">
              Sign out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
