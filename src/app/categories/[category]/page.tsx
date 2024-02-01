import { PT_Sans } from 'next/font/google';
import { NewsByCategory } from '@/components/news-by-category';

const ptSans = PT_Sans({
  weight: ['700'],
  subsets: ['latin']
});

const categoryColors = {
  general: 'bg-blue-700',
  entertainment: 'bg-sky-700',
  business: 'bg-violet-700',
  health: 'bg-rose-700',
  science: 'bg-emerald-700',
  sports: 'bg-cyan-700',
  technology: 'bg-indigo-700'
};

type Category =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';

export default async function CategoryPage({
  params
}: {
  params: { category: Category };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 dark:bg-gray-800">
      <h1
        className={`font-bold text-3xl py-5 text-white ${ptSans.className} ${categoryColors[params.category]} w-full text-center max-w-[1220px]`}
      >
        {params.category.toUpperCase()}
      </h1>
      <NewsByCategory category={params.category} />
    </main>
  );
}
