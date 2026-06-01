import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, ExternalLink } from "lucide-react";
import { AuthLayout } from "@/components/AuthLayout";

export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Page not found — iCertify" },
      { name: "description", content: "The page you are looking for does not exist." },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <AuthLayout
      footer={<>If you believe this is an error, please contact your administrator.</>}
    >
      <div className="relative flex flex-col items-center text-center">
        <div className="text-[120px] font-bold text-neutral-200 leading-none select-none">404</div>
        <h2 className="-mt-12 text-[20px] font-semibold text-neutral-800 relative">Page not found</h2>
        <p className="mt-2 text-[13px] text-neutral-600 leading-relaxed max-w-[340px]">
          The page you are looking for does not exist, or you do not have access to it.
        </p>
      </div>

      <div className="mt-6 space-y-2.5">
        <Link to="/" className="btn-primary">
          <Home className="h-4 w-4" /> Go to sign in
        </Link>
        <a href="https://pbc.au" target="_blank" rel="noreferrer" className="btn-secondary">
          <ExternalLink className="h-4 w-4" /> Visit pbc.au
        </a>
      </div>

      <div className="mt-6 pt-5 border-t border-neutral-200 text-center text-[13px] text-neutral-600">
        Followed a link from an email? It may have expired.
        <br />
        <Link to="/link-expired" className="auth-link">See expired link options →</Link>
      </div>
    </AuthLayout>
  );
}
