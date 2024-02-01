import { AxiosInstance } from 'axios';
import {
  NewsGateway,
  NewsWithTotalRecords
} from '@/domain/gateways/news.gateway';
import { News } from '../../domain/entities/news';

export class NewsHttpGateway implements NewsGateway {
  constructor(private http: AxiosInstance) {}

  async listAll(params?: {
    [key: string]: string | number;
  }): Promise<NewsWithTotalRecords> {
    return this.http
      .get<News[]>('/top-headlines', {
        params: params
      })
      .then((res: any) => {
        const news = res.data.articles
          .map((data: any) =>
            new News({
              title: data.title,
              description: data.description,
              url: data.url,
              source: data.source.name,
              author: data.author,
              image: data.urlToImage,
              content: data.content,
              publishedAt: data.publishedAt
            }).toJSON()
          )
          .filter((news: News) => !news.title.includes('Removed'));

        return {
          totalResults: res.data.totalResults,
          news: news
        };
      })
      .catch((err) => err);
  }

  async search(params?: {
    [key: string]: string | number;
  }): Promise<NewsWithTotalRecords> {
    return this.http
      .get<News[]>('/everything', {
        params: params
      })
      .then((res: any) => {
        const news = res.data.articles
          .map((data: any) =>
            new News({
              title: data.title,
              description: data.description,
              url: data.url,
              source: data.source.name,
              author: data.author,
              image: data.urlToImage,
              content: data.content,
              publishedAt: data.publishedAt
            }).toJSON()
          )
          .filter((news: News) => !news.title.includes('Removed'));

        return {
          totalResults: res.data.totalResults,
          news: news
        };
      })
      .catch((err) => err);
  }
}
