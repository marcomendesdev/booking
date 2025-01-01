import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl flex w-full items-center px-4 md:px-6">
        <Link href="#" className="mr-6 flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/tables"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Tables
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
          <SignedIn>
            <Link
              href="/my-bookings"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              My Bookings
            </Link>
          </SignedIn>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button>
            <Link href="/tables" prefetch={false}>
              Get Started
            </Link>
          </Button>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-6 p-6">
                <Link
                  href="/"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="/tables"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Tables
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Contact
                </Link>
                <Link
                  href="/my-bookings"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  My Bookings
                </Link>
              </div>
            </SheetContent>
            <ModeToggle />
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
