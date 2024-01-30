import { AxiosError, AxiosHeaders, AxiosResponse } from 'axios';
import { http } from '../http';
import { NewsHttpGateway } from './news-http.gateway';
import { News } from '../../domain/entities/news';

const mockGet = jest.spyOn(http, 'get');

describe('listAll', () => {
  it('returns 200 with news', async () => {
    const mockNews = {
      title:
        'Trump ballot question comes too soon for Massachusetts high court',
      description:
        'A move to see the state’s highest court weigh in on the election commission&#8217;s authority to determine whether former President Donald Trump should be tossed from the Massachusetts Republican Primary ballot has been denied. The high court declined on Monday to hear the case against the State Ballot Law Commission brought by concerned voters, since it’s not entirely clear Trump will be the Republican nominee and see his name on a general election ballot. “The petitioners&#8217; objections have, in essence, come too soon. If there is any question whether the commission has the authority...',
      url: 'https://www.lowellsun.com/2024/01/29/trump-ballot-question-comes-too-soon-for-massachusetts-high-court/',
      source: 'Lowell Sun',
      category: 'general',
      image:
        'https://www.lowellsun.com/wp-content/uploads/2024/01/120216SJCnc16_0-e1551955998700.jpg?w=1400px&strip=all',
      language: 'en',
      country: 'us',
      published_at: '2024-01-29T21:51:20+00:00'
    };

    const mockedResponse: AxiosResponse = {
      status: 200,
      data: { data: [mockNews] },
      statusText: 'OK',
      headers: {},
      config: { headers: new AxiosHeaders() }
    };

    mockGet.mockResolvedValueOnce(mockedResponse);

    const newsHttpGateway = new NewsHttpGateway(http);
    const access_key = process.env.ACCESS_KEY ?? '';
    const response = await newsHttpGateway.listAll({
      access_key: access_key
    });

    const expected_response = [
      new News({
        title: mockNews.title,
        description: mockNews.description,
        url: mockNews.url,
        source: mockNews.source,
        image: mockNews.image,
        category: mockNews.category,
        language: mockNews.language,
        country: mockNews.country,
        publishedAt: new Date(mockNews.published_at)
      }).toJSON()
    ];

    expect(response).toEqual(expected_response);
    expect(mockGet).toHaveBeenCalledWith('/news', {
      params: { access_key: access_key }
    });
  });

  it('returns unauthorized error', async () => {
    const headers = new AxiosHeaders();
    const mockedErrorResponse: AxiosError = {
      config: { headers: headers },
      response: {
        data: {
          error: {
            code: 'invalid_access_key',
            message: 'You have not supplied a valid API Access Key.'
          }
        },
        status: 401,
        statusText: 'Unauthorized',
        headers: {},
        config: { headers: headers }
      },
      isAxiosError: true,
      name: '',
      message: '',
      toJSON: JSON.parse('{}')
    };

    mockGet.mockRejectedValueOnce(mockedErrorResponse);

    const newsHttpGateway = new NewsHttpGateway(http);
    const response = await newsHttpGateway.listAll({
      access_key: 'invalid_key'
    });

    expect(response).toEqual(mockedErrorResponse);
    expect(mockGet).toHaveBeenCalledWith('/news', {
      params: { access_key: 'invalid_key' }
    });
  });
});
