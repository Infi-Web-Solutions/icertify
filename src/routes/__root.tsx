import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Home, ExternalLink } from "lucide-react";

import appCss from "../styles.css?url";
import logoAsset from "@/assets/pbc-logo.svg.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  const LOGO_SRC = logoAsset.url;
  return (
    <div className="login-bg min-h-screen flex flex-col items-center px-4 py-12 sm:py-16">
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="auth-card">
          <div className="flex flex-col items-center text-center">
            <img
              src={LOGO_SRC}
              alt="Project Building Certifiers"
              className="h-14 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <h1 className="mt-4 text-[26px] font-bold text-primary-500 tracking-tight">iCertify</h1>
          </div>

          <div className="mt-6 relative flex flex-col items-center text-center">
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

        </div>
        <div className="mt-6 text-center text-[12px] text-neutral-500 max-w-[440px]">
          If you believe this is an error, please contact your administrator.
        </div>
      </main>
      <footer className="pt-10 text-center text-[12px] text-neutral-500">
        © 2026 Project Building Certifiers Pty Ltd
      </footer>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
