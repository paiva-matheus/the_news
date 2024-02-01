import { News } from '@/src/app/@core/domain/entities/news';

export interface NewsWithTotalRecords {
  news: News[];
  totalResults: number;
}

export interface NewsGateway {
  listAll(params?: {
    [key: string]: string | number;
  }): Promise<NewsWithTotalRecords>;
}
