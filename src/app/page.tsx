import { Hero } from '@/src/app/components/hero';
import { TopHeadlines } from '@/src/app/components/top-headlines';
import { HomeSearchInput } from './components/home-search-input';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-slate-100 dark:bg-gray-800">
      <HomeSearchInput />
      <Hero />
      <TopHeadlines />
    </main>
  );
}
