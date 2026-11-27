import type { Metadata } from "next";

const description =
  "Explore product details, features, and available options from the Swag Store collection.";

export const metadata: Metadata = {
  title: "Product Details",
  description,
  openGraph: {
    title: "Product Details | Swag Store",
    description,
  },
};

export default function ProductDetailsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      Product details page
    </section>
  );
}
