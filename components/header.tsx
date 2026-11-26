import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          aria-label="Swag Store home"
          className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <svg
            width="22"
            height="20"
            viewBox="0 0 24 21"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className="shrink-0"
          >
            <path d="M12 0L24 21H0L12 0Z" />
          </svg>

          <span>Swag Store</span>
        </Link>

        <Link
          href="/search"
          aria-label="Search products"
          title="Search products"
          className="inline-flex size-11 items-center justify-center rounded-md transition-colors hover:bg-foreground/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 4.5 4.5" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
