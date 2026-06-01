import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Eye, EyeOff, Check, Circle } from "lucide-react";
import { AuthLayout } from "@/components/AuthLayout";

export const Route = createFileRoute("/set-password")({
  head: () => ({
    meta: [
      { title: "Set your password — iCertify" },
      { name: "description", content: "Choose a password to activate your iCertify account." },
    ],
  }),
  component: SetPassword,
});

function SetPassword() {
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const checks = useMemo(
    () => ({
      length: pwd.length >= 12,
      letter: /[a-zA-Z]/.test(pwd),
      number: /\d/.test(pwd),
    }),
    [pwd],
  );

  const allValid = checks.length && checks.letter && checks.number && pwd === confirm && confirm.length > 0;

  return (
    <AuthLayout
      footer={
        <>
          Single-use link · Expires in 60 minutes
          <br />
          Do not share this link with anyone.
        </>
      }
    >
      <div className="text-center">
        <h2 className="text-[20px] font-semibold text-neutral-800">Set your password</h2>
        <p className="mt-2 text-[13px] text-neutral-600 leading-relaxed">
          Welcome to iCertify. Choose a password to activate your account.
        </p>
      </div>

      <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="new-password" className="field-label">New password</label>
          <div className="relative">
            <input
              id="new-password"
              type={showPwd ? "text" : "password"}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="At least 12 characters"
              className="field-input pr-10"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPwd((s) => !s)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-neutral-500 hover:text-neutral-700"
              aria-label={showPwd ? "Hide password" : "Show password"}
            >
              {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="confirm-password" className="field-label">Confirm password</label>
          <div className="relative">
            <input
              id="confirm-password"
              type={showConfirm ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Repeat your password"
              className="field-input pr-10"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((s) => !s)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-neutral-500 hover:text-neutral-700"
              aria-label={showConfirm ? "Hide password" : "Show password"}
            >
              {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="rounded-[8px] border border-neutral-200 bg-neutral-100 p-4">
          <p className="text-[11px] font-semibold tracking-wider text-neutral-600 uppercase">
            Password requirements
          </p>
          <ul className="mt-3 space-y-2">
            <Requirement met={checks.length} label="At least 12 characters" />
            <Requirement met={checks.letter} label="Contains a letter" />
            <Requirement met={checks.number} label="Contains a number" />
          </ul>
        </div>

        <button type="submit" className="btn-primary" disabled={!allValid}>
          Confirm
        </button>
      </form>
    </AuthLayout>
  );
}

function Requirement({ met, label }: { met: boolean; label: string }) {
  return (
    <li className="flex items-center gap-2 text-[13px]">
      {met ? (
        <span className="h-4 w-4 rounded-full bg-primary-500 flex items-center justify-center">
          <Check className="h-3 w-3 text-white" strokeWidth={3} />
        </span>
      ) : (
        <Circle className="h-4 w-4 text-neutral-500" />
      )}
      <span className={met ? "text-neutral-800" : "text-neutral-600"}>{label}</span>
    </li>
  );
}
