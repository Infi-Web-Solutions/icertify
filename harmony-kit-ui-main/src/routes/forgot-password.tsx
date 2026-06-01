import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/AuthLayout";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot password — iCertify" },
      { name: "description", content: "Request a password reset link for your iCertify account." },
    ],
  }),
  component: ForgotPassword,
});

function ForgotPassword() {
  return (
    <AuthLayout
      footer={
        <>
          Reset links are single-use and expire in 60 minutes.
          <br />
          If your account is locked, the reset link will not unlock it — contact your administrator.
        </>
      }
    >
      <div className="text-center">
        <h2 className="text-[20px] font-semibold text-neutral-800">Forgot your password?</h2>
        <p className="mt-2 text-[13px] text-neutral-600 leading-relaxed">
          Enter the email address linked to your iCertify account and we will send you a reset link.
        </p>
      </div>

      <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="email" className="field-label">Email</label>
          <input id="email" type="email" placeholder="you@example.com" className="field-input" autoComplete="email" />
        </div>
        <button type="submit" className="btn-primary">Send reset link</button>
      </form>

      <div className="mt-6 pt-5 border-t border-neutral-200 text-center text-[13px] text-neutral-600">
        Just remembered it?{" "}
        <Link to="/" className="auth-link inline-flex items-center gap-1">Log in →</Link>
      </div>
    </AuthLayout>
  );
}
