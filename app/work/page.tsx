import Link from "next/link";
import WorkCards, { workProjectCount } from "@/components/work/WorkCards";
import ContactProject from "@/components/sections/ContactProject";

const pageSize = 20;

function pageHref(page: number) {
  return page === 1 ? "/work" : `/work?page=${page}`;
}

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page } = await searchParams;
  const totalPages = Math.max(1, Math.ceil(workProjectCount / pageSize));
  const requestedPage = typeof page === "string" && /^\d+$/.test(page) ? Number(page) : 1;
  const currentPage = Math.min(totalPages, Math.max(1, requestedPage));

  return (
    <main className="work-page">
      <div className="work-page__container">
        <h1 className="work-page__title">Our work</h1>
        <WorkCards headingLevel="h2" limit={pageSize} offset={(currentPage - 1) * pageSize} />
        {totalPages > 1 && (
          <nav className="work-page__pagination" aria-label="Work pagination">
            {currentPage > 1 && <Link href={pageHref(currentPage - 1)} rel="prev">Previous</Link>}
            <span aria-current="page">Page {currentPage} of {totalPages}</span>
            {currentPage < totalPages && <Link href={pageHref(currentPage + 1)} rel="next">Next</Link>}
          </nav>
        )}
      </div>
      <ContactProject />
    </main>
  );
}
