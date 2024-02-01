import {
  NewsGateway,
  NewsWithTotalRecords
} from '@/domain/gateways/news.gateway';
export class SearchNewsUseCase {
  constructor(private newsGate: NewsGateway) {}

  async execute(params?: {
    [key: string]: string | number;
  }): Promise<NewsWithTotalRecords> {
    return this.newsGate.search(params);
  }
}
