import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { AuthLayout } from "@/components/AuthLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sign in — iCertify" },
      { name: "description", content: "Access the iCertify portal for project tracking, documents, and certification." },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      footer={
        <>
          By signing in you agree to PBC's terms of service.
          <br />
          Access restricted to authorised users only.
        </>
      }
    >
      <p className="text-center text-[13px] text-neutral-600 leading-relaxed">
        Access the portal for project tracking, documents, and certification.
      </p>

      <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="email" className="field-label">Email</label>
          <input id="email" type="email" placeholder="you@example.com" className="field-input" autoComplete="email" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="password" className="field-label !mb-0">Password</label>
            <Link to="/forgot-password" className="text-[12px] auth-link">Forgot password?</Link>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••"
              className="field-input pr-10"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-neutral-500 hover:text-neutral-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <button type="submit" className="btn-primary">Sign in</button>
      </form>

      <div className="mt-6 pt-5 border-t border-neutral-200 text-center text-[13px] text-neutral-600">
        New to iCertify?{" "}
        <a href="#" className="auth-link inline-flex items-center gap-1">
          Submit a project enquiry <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </AuthLayout>
  );
}
