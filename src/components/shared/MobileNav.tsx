import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import SignInBtn from "./SignInBtn";

const MobileNav = () => {
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <Image
                src="/assets/images/logo-text.svg"
                alt="logo"
                width={152}
                height={23}
              />
              <NavList classNames={"header-nav_elements"} />
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <SignInBtn />
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
