// import 'reflect-metadata';
import { Container } from 'inversify';
import { ListNewsUseCase } from '@/src/app/@core/application/news/list-news.use-case';
import { NewsHttpGateway } from '@/src/app/@core/infra/gateways/news-http.gateway';
import { http } from '@/src/app/@core/infra/http';

export const Registry = {
  AxiosAdapter: Symbol.for('AxiosAdapter'),
  NewsGateway: Symbol.for('NewsGateway'),
  ListNewsUseCase: Symbol.for('ListNewsUseCase')
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
