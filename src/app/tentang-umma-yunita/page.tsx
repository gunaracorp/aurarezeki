import { generatePageMetadata, getPage } from "@/lib/seo-pages";
import { PageHead } from "@/components/aura/page-head";
import { LandingPage } from "@/components/aura/landing-page";

export const metadata = generatePageMetadata("/tentang-umma-yunita");

export default function Page() {
  const page = getPage("/tentang-umma-yunita")!;
  return (
    <>
      <PageHead path="/tentang-umma-yunita" />
      <LandingPage page={page} />
    </>
  );
}
