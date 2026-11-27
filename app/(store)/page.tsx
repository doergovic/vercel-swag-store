import Banner from "../../components/ui/banner";
import type { Metadata } from "next";

const description =
  "Wear the framework you ship with. Shop developer apparel, accessories, and everyday essentials.";

export const metadata: Metadata = {
  title: "Home",
  description,
  openGraph: {
    title: "Home | Swag Store",
    description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Banner
        message="Bundle & Save — Buy any hoodie + hat combo and save 10% automatically."
        code="BUNDLE10"
      />

      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
        Home page
      </section>
    </>
  );
}
