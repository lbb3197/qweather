import { NowCard } from "./_components/now-card";
// import { DayCard } from "./_components/day-card";

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = searchParams.query;

  return (
    <>
      <NowCard query={query} />
      {/* <DayCard /> */}
    </>
  );
}
