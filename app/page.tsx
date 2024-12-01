import { SessionWrapper } from "@/components/SessionWrapper"
import SignInComponents from "@/components/login/SignInComponents";
import SignOutComponents from "@/components/login/SignOutComponents";
import { auth } from "@/lib/auth";

export default async function Login() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div>
      <SessionWrapper>
        {isAuthenticated
          ? <SignOutComponents />
          : <SignInComponents />
        }
      </SessionWrapper>
    </div>
  );
}
