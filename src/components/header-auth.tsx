import { createClient } from "@/lib/supabase/server";
import { signOutAction } from "@/server/auth/action";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
      <div className="flex w-full items-center justify-between p-3 px-5 text-sm">
        <div className="flex items-center gap-5 font-semibold">
          <Link href={"/"}>Next TSDB</Link>
        </div>
        {user ? (
          <div className="flex items-center gap-4">
            Hey, {user.email}!
            <form action={signOutAction}>
              <Button type="submit" variant={"outline"}>
                Sign out
              </Button>
            </form>
            <ThemeSwitcher />
          </div>
        ) : (
          <div className="flex gap-2">
            <Button asChild size="sm" variant={"outline"}>
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild size="sm" variant={"default"}>
              <Link href="/sign-up">Sign up</Link>
            </Button>

            <ThemeSwitcher />
          </div>
        )}
      </div>
    </nav>
  );
}
