import { AxiosInstance } from 'axios';
import { NewsGateway } from '@/src/app/@core/domain/gateways/news.gateway';
import { News } from '../../domain/entities/news';

export class NewsHttpGateway implements NewsGateway {
  constructor(private http: AxiosInstance) {}

  async listAll(params?: { [key: string]: string | number }): Promise<News[]> {
    return this.http
      .get<News[]>('/news', {
        params: params
      })
      .then((res: any) =>
        res.data.data.map((data: any) =>
          new News({
            title: data.title,
            description: data.description,
            url: data.url,
            source: data.source,
            image: data.image,
            category: data.category,
            language: data.language,
            country: data.country,
            publishedAt: data.published_at
          }).toJSON()
        )
      )
      .catch((err) => err);
  }
}
