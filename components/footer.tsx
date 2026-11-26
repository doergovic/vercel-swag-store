export default async function Footer() {
  "use cache";

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="flex justify-center mx-auto w-full max-w-7xl px-5 py-6 sm:px-8">
        <p className="text-sm text-muted">
          © {year} Swag Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
