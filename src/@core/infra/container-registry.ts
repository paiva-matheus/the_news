import { Container } from 'inversify';
import { ListNewsUseCase } from '@/application/news/list-news.use-case';
import { SearchNewsUseCase } from '@/application/news/search-news.use-case';
import { NewsHttpGateway } from '@/infra/gateways/news-http.gateway';
import { http } from '@/infra/http';

export const Registry = {
  AxiosAdapter: Symbol.for('AxiosAdapter'),
  NewsGateway: Symbol.for('NewsGateway'),
  ListNewsUseCase: Symbol.for('ListNewsUseCase'),
  SearchNewsUseCase: Symbol.for('SearchNewsUseCase')
};

export const container = new Container();

//########## HTTP
container.bind(Registry.AxiosAdapter).toConstantValue(http);

//########## GATEWAYS
container.bind(Registry.NewsGateway).toDynamicValue((context) => {
  return new NewsHttpGateway(context.container.get(Registry.AxiosAdapter));
});

//########## USE CASES
container.bind(Registry.ListNewsUseCase).toDynamicValue((context) => {
  return new ListNewsUseCase(context.container.get(Registry.NewsGateway));
});

container.bind(Registry.SearchNewsUseCase).toDynamicValue((context) => {
  return new SearchNewsUseCase(context.container.get(Registry.NewsGateway));
});
