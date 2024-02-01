import { Hero } from '@/src/app/components/hero';
import { TopHeadlines } from '@/src/app/components/top-headlines';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 dark:bg-gray-800">
      <Hero />
      <TopHeadlines />
    </main>
  );
}
