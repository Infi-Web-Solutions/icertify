import type { ReactNode } from "react";
import pbcLogo from "@/assets/pbc-logo.svg";

interface AuthLayoutProps {
  children: ReactNode;
  showBrandName?: boolean;
  footer?: ReactNode;
}

export function AuthLayout({ children, showBrandName = true, footer }: AuthLayoutProps) {
  return (
    <div className="login-bg min-h-screen flex flex-col items-center px-4 py-12 sm:py-16">
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="auth-card">
          <div className="flex flex-col items-center text-center">
            <img
              src={pbcLogo}
              alt="Project Building Certifiers"
              className="h-14 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            {showBrandName && (
              <h1 className="mt-4 text-[26px] font-bold text-primary-500 tracking-tight">
                iCertify
              </h1>
            )}
          </div>
          <div className="mt-6">{children}</div>
        </div>
        {footer && (
          <div className="mt-6 text-center text-[12px] text-neutral-500 max-w-[440px]">
            {footer}
          </div>
        )}
      </main>
      <footer className="pt-10 text-center text-[12px] text-neutral-500">
        © 2026 Project Building Certifiers Pty Ltd
      </footer>
    </div>
  );
}
