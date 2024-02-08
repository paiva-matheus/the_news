import { ListNewsUseCase } from '@/application/news/list-news.use-case';
import { Registry, container } from '@/infra/container-registry';

export async function Hero() {
  const listNewsUseCase = container.get<ListNewsUseCase>(
    Registry.ListNewsUseCase
  );
  const { news } = await listNewsUseCase.execute({
    country: 'us',
    pageSize: 5
  });
  const headline = news[0];

  return (
    <section
      style={{
        backgroundImage: `url(${headline.image})`
      }}
      className={`bg-center bg-no-repeat bg-gray-700 bg-blend-multiply pt-10`}
    >
      <div className="px-4 mx-auto max-w-screen-lg text-center py-16 lg:py-8">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-3xl">
          {headline.title}
        </h2>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          {headline.description}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href={headline.url}
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            rel="noreferrer"
          >
            Access
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
