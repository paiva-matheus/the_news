import { News } from '@/src/app/@core/domain/entities/news';
import { NewsGateway } from '@/src/app/@core/domain/gateways/news.gateway';

const access_key = process.env.ACCESS_KEY ?? '';

export class ListNewsUseCase {
  constructor(private newsGate: NewsGateway) {}

  async execute(params?: { [key: string]: string | number }): Promise<News[]> {
    const paramsWithAccessKey = {
      ...params,
      access_key: access_key
    };
    return this.newsGate.listAll(paramsWithAccessKey);
  }
}
