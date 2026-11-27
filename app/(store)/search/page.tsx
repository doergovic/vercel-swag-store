import type { Metadata } from "next";

const description =
  "Find your next favorite piece of developer swag. Search apparel, accessories, and everyday essentials.";

export const metadata: Metadata = {
  title: "Search",
  description,
  openGraph: {
    title: "Search | Swag Store",
    description,
    url: "/search",
  },
};

export default function SearchPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      Search page
    </section>
  );
}
