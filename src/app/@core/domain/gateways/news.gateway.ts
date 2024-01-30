import { News } from '@/src/app/@core/domain/entities/news';

export interface NewsGateway {
  listAll(params?: { [key: string]: string | number }): Promise<News[]>;
}
