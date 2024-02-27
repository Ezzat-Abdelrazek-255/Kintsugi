import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import NavList from "./NavList";
import SignInBtn from "./SignInBtn";

const Sidebar = () => {
  return (
    <header className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <SignedIn>
          <nav className="sidebar-nav">
            <NavList endIndex={6} classNames="sidebar-nav_elements" />
            <NavList startIndex={6} classNames="sidebar-nav_elements">
              <li className="cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </NavList>
          </nav>
        </SignedIn>
        <SignedOut>
          <SignInBtn />
        </SignedOut>
      </div>
    </header>
  );
};

export default Sidebar;
