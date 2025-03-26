import { FormMessage, type Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInAction, signInWithGithub } from "@/server/auth/action";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="space-y-5 ">
      <form className="flex min-w-64 flex-1 flex-col">
        <h1 className="font-medium text-2xl">Sign in</h1>
        <p className="text-foreground text-sm">
          Don't have an account?
          <Link
            className="font-medium text-foreground underline"
            href="/sign-up"
          >
            Sign up
          </Link>
        </p>
        <div className="mt-8 flex flex-col gap-2 [&>input]:mb-3">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              className="text-foreground text-xs underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
          <SubmitButton pendingText="Signing In..." formAction={signInAction}>
            Sign in
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <form className="w-full">
        <SubmitButton
          variant={"outline"}
          className="w-full"
          pendingText="Signing In"
          formAction={signInWithGithub}
        >
          Sign In With Github
        </SubmitButton>
      </form>
    </div>
  );
}
