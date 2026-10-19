import { generatePageMetadata, getPage } from "@/lib/seo-pages";
import { PageHead } from "@/components/aura/page-head";
import { LandingPage } from "@/components/aura/landing-page";

export const metadata = generatePageMetadata("/paket-terapi");

export default function Page() {
  const page = getPage("/paket-terapi")!;
  return (
    <>
      <PageHead path="/paket-terapi" />
      <LandingPage page={page} />
    </>
  );
}
