import {
  NewsGateway,
  NewsWithTotalRecords
} from '@/domain/gateways/news.gateway';
export class ListNewsUseCase {
  constructor(private newsGate: NewsGateway) {}

  async execute(params?: {
    [key: string]: string | number;
  }): Promise<NewsWithTotalRecords> {
    return this.newsGate.listAll(params);
  }
}
