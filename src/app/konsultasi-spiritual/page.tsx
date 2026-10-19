import { generatePageMetadata, getPage } from "@/lib/seo-pages";
import { PageHead } from "@/components/aura/page-head";
import { LandingPage } from "@/components/aura/landing-page";

export const metadata = generatePageMetadata("/konsultasi-spiritual");

export default function Page() {
  const page = getPage("/konsultasi-spiritual")!;
  return (
    <>
      <PageHead path="/konsultasi-spiritual" />
      <LandingPage page={page} />
    </>
  );
}
