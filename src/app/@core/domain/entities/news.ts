export type NewsDTO = {
  title: string;
  description: string;
  content: string;
  source: string;
  url: string;
  image: string;
  author: string;
  publishedAt: Date;
};

export class News {
  constructor(public props: NewsDTO) {}

  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get url() {
    return this.props.url;
  }

  get source() {
    return this.props.source;
  }

  get content() {
    return this.props.content;
  }

  get image() {
    return this.props.image;
  }

  get author() {
    return this.props.author;
  }

  get publishedAt() {
    return new Date(this.props.publishedAt);
  }

  toJSON() {
    return {
      title: this.title,
      description: this.description,
      url: this.url,
      source: this.source,
      author: this.author,
      image: this.image,
      content: this.content,
      publishedAt: this.publishedAt
    };
  }
}
