import Link from "next/link";
import { Button } from "../ui/button";

const SignInBtn = () => {
  return (
    <Button asChild className="button bg-purple-gradient bg-cover">
      <Link href="/sign-in">Login</Link>
    </Button>
  );
};

export default SignInBtn;
