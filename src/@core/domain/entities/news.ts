export type NewsDTO = {
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
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

  get category() {
    return this.props.category;
  }

  get image() {
    return this.props.image;
  }

  get language() {
    return this.props.language;
  }

  get country() {
    return this.props.country;
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
      category: this.category,
      image: this.image,
      language: this.language,
      country: this.country,
      publishedAt: this.publishedAt
    };
  }
}
