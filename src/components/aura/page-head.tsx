import { generatePageSchemas } from "@/lib/seo-pages";

/**
 * Injects page-specific JSON-LD schemas into <head>.
 * Usage: <PageHead path="/pelarisan-usaha" />
 */
export function PageHead({ path }: { path: string }) {
  const schemas = generatePageSchemas(path);
  if (schemas.length === 0) return null;
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
