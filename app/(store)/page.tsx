import Banner from "../../components/ui/banner";

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
