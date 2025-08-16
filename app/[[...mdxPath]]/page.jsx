import { generateStaticParamsFor, importPage } from "nextra/pages";
import { getPageMap } from "nextra/page-map";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export default async function Page(props) {
  const params = await props.params;

  try {
    const {
      default: MDXContent,
      toc,
      metadata,
      sourceCode,
    } = await importPage(params.mdxPath);

    const pageMap = await getPageMap();

    const pageOpts = {
      pageMap,
      route: `/${(params.mdxPath || []).join("/")}`,
      frontMatter: metadata || {},
      title: metadata?.title || "",
    };

    return <MDXContent />;
  } catch (error) {
    console.error("Error loading page:", error);
    return <div>Page not found</div>;
  }
}
