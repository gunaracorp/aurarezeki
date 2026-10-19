import { generatePageMetadata, getPage } from "@/lib/seo-pages";
import { PageHead } from "@/components/aura/page-head";
import { LandingPage } from "@/components/aura/landing-page";

export const metadata = generatePageMetadata("/terapi-aura");

export default function Page() {
  const page = getPage("/terapi-aura")!;
  return (
    <>
      <PageHead path="/terapi-aura" />
      <LandingPage page={page} />
    </>
  );
}
