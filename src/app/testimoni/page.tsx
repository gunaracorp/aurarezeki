import { generatePageMetadata, getPage } from "@/lib/seo-pages";
import { PageHead } from "@/components/aura/page-head";
import { LandingPage } from "@/components/aura/landing-page";

export const metadata = generatePageMetadata("/testimoni");

export default function Page() {
  const page = getPage("/testimoni")!;
  return (
    <>
      <PageHead path="/testimoni" />
      <LandingPage page={page} />
    </>
  );
}
