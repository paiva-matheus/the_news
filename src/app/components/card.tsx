import { Card as FlowbiteCard } from 'flowbite-react';
import { News } from '@/domain/entities/news';

interface CardProps {
  news: News;
}

export function Card({ news }: CardProps) {
  return (
    <FlowbiteCard className="max-w-sm" imgSrc={news.image}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {news.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {news.description}
      </p>
    </FlowbiteCard>
  );
}
