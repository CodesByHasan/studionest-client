"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Aperture, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const image = formData.get("image");
    const password = formData.get("password");

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
      toast.error(
        "Password needs an uppercase letter, lowercase letter and at least 6 characters."
      );
      return;
    }

    setLoading(true);

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Registration failed.");
      return;
    }

    toast.success("Account created! Please log in.");
    router.push("/login");
  };

  return (
    <section className="flex min-h-[75vh] items-center justify-center bg-[#fbfaf7] px-4 py-16">
      <Card className="w-full max-w-md border-[#e8e3dc] bg-white shadow-sm">
        <CardHeader className="text-center">
          <Aperture className="mx-auto mb-3 size-10 text-[#a65a3c]" />
          <CardTitle className="text-3xl font-semibold text-[#252d42]">
            Create Account
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Join the StudioNest creative community.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Full Name</label>
              <Input name="name" placeholder="Your name" required />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <Input name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Photo URL</label>
              <Input name="image" type="url" placeholder="https://..." required />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Password</label>
              <Input
                name="password"
                type="password"
                placeholder="Create a password"
                required
              />
              <p className="mt-1 text-xs text-muted-foreground">
                At least 6 characters, one uppercase and one lowercase letter.
              </p>
            </div>

            <Button className="h-11 w-full bg-[#a65a3c] hover:bg-[#87472f]" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "Create Account"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already registered?{" "}
            <Link href="/login" className="font-semibold text-[#a65a3c]">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}