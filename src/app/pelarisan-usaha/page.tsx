import { generatePageMetadata } from "@/lib/seo-pages";
import { getPage } from "@/lib/seo-pages";
import { PageHead } from "@/components/aura/page-head";
import { LandingPage } from "@/components/aura/landing-page";

export const metadata = generatePageMetadata("/pelarisan-usaha");

export default function Page() {
  const page = getPage("/pelarisan-usaha")!;
  return (
    <>
      <PageHead path="/pelarisan-usaha" />
      <LandingPage page={page} />
    </>
  );
}
