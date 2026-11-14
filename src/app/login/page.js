"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Aperture, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const { error } = await authClient.signIn.email({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Login failed.");
      return;
    }

    toast.success("Welcome back!");
    router.push(searchParams.get("callbackUrl") || "/");
    router.refresh();
  };

  const handleGoogleLogin = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Google login failed.");
    }
  };

  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-[#fbfaf7] px-4 py-16">
      <Card className="w-full max-w-md border-[#e8e3dc] bg-white shadow-sm">
        <CardHeader className="text-center">
          <Aperture className="mx-auto mb-3 size-10 text-[#a65a3c]" />
          <CardTitle className="text-3xl font-semibold text-[#252d42]">
            Welcome Back
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Sign in to continue creating.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Password</label>
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <Button className="h-11 w-full bg-[#a65a3c] hover:bg-[#87472f]" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "Login"}
            </Button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <Button variant="outline" className="h-11 w-full" onClick={handleGoogleLogin}>
            Continue with Google
          </Button>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-[#a65a3c]">
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}