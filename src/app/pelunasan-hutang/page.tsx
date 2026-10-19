import { generatePageMetadata, getPage } from "@/lib/seo-pages";
import { PageHead } from "@/components/aura/page-head";
import { LandingPage } from "@/components/aura/landing-page";

export const metadata = generatePageMetadata("/pelunasan-hutang");

export default function Page() {
  const page = getPage("/pelunasan-hutang")!;
  return (
    <>
      <PageHead path="/pelunasan-hutang" />
      <LandingPage page={page} />
    </>
  );
}
