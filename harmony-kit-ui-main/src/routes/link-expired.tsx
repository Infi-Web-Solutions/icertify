import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, UserRound } from "lucide-react";
import { AuthLayout } from "@/components/AuthLayout";

export const Route = createFileRoute("/link-expired")({
  head: () => ({
    meta: [
      { title: "Link expired — iCertify" },
      { name: "description", content: "This single-use link is no longer valid. Request a fresh link or contact your administrator." },
    ],
  }),
  component: LinkExpired,
});

function LinkExpired() {
  return (
    <AuthLayout
      footer={
        <>
          Invitation links expire 7 days after they are sent.
          <br />
          Password reset links expire 60 minutes after they are sent.
        </>
      }
    >
      <div className="flex flex-col items-center text-center">
        <div className="h-14 w-14 rounded-full bg-[#FEF3C7] flex items-center justify-center">
          <Clock className="h-7 w-7 text-[#B45309]" />
        </div>
        <h2 className="mt-4 text-[20px] font-semibold text-neutral-800">This link has expired</h2>
        <p className="mt-2 text-[13px] text-neutral-600 leading-relaxed max-w-[340px]">
          The link you followed is no longer valid. Single-use links expire to keep your account secure.
        </p>
      </div>

      <div className="mt-6 rounded-[8px] border border-neutral-200 bg-neutral-100 p-4">
        <p className="text-[11px] font-semibold tracking-wider text-neutral-600 uppercase">What to do next</p>
        <ol className="mt-3 space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-500 text-white text-[11px] font-semibold flex items-center justify-center">1</span>
            <p className="text-[13px] text-neutral-700 leading-relaxed">
              <span className="font-medium text-neutral-800">Resetting your password?</span> Request a fresh link below — it arrives in your inbox within a minute.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-500 text-white text-[11px] font-semibold flex items-center justify-center">2</span>
            <p className="text-[13px] text-neutral-700 leading-relaxed">
              <span className="font-medium text-neutral-800">Activating a new account?</span> Your invitation has expired. Contact your administrator for a fresh invitation.
            </p>
          </li>
        </ol>
      </div>

      <div className="mt-6 space-y-2.5">
        <Link to="/forgot-password" className="btn-primary">
          <Mail className="h-4 w-4" /> Request a fresh link
        </Link>
        <a href="#" className="btn-secondary">
          <UserRound className="h-4 w-4" /> Contact your administrator
        </a>
      </div>

      <div className="mt-6 pt-5 border-t border-neutral-200 text-center text-[13px]">
        <Link to="/" className="auth-link">← Back to sign in</Link>
      </div>
    </AuthLayout>
  );
}
