/* @flow */

import Embed from './Embed';

import type {
  EmbedAuthor,
  EmbedField,
  EmbedFooter,
  EmbedImage,
  EmbedProvider,
  EmbedThumbnail,
  EmbedVideo,
} from './Embed';


/**
 * An embed builder.
 */
export default class EmbedBuilder {

  /**
   * The embed instance.
   */
  embed: Embed;

  /**
   * Constructs a new embed builder.
   */
  constructor() {
    this.embed = new Embed();
  }

  /**
   * Sets the embed title.
   */
  title(title: ?string): EmbedBuilder {
    this.embed.title = title;
    return this;
  }

  /**
   * Sets the embed type.
   */
  type(type: ?string): EmbedBuilder {
    this.embed.type = type;
    return this;
  }

  /**
   * Sets the embed description.
   */
  description(description: ?string): EmbedBuilder {
    this.embed.description = description;
    return this;
  }

  /**
   * Sets the embed URL.
   */
  url(url: ?string): EmbedBuilder {
    this.embed.url = url;
    return this;
  }

  /**
   * Sets the embed timestamp.
   */
  timestamp(timestamp: ?Date): EmbedBuilder {
    this.embed.timestamp = timestamp;
    return this;
  }

  /**
   * Sets the embed color.
   */
  color(color: ?number): EmbedBuilder {
    this.embed.color = color;
    return this;
  }

  /**
   * Sets the embed footer.
   */
  footer(footer: ?EmbedFooter): EmbedBuilder {
    this.embed.footer = footer;
    return this;
  }

  /**
   * Sets the embed image.
   */
  image(image: ?EmbedImage): EmbedBuilder {
    this.embed.image = image;
    return this;
  }

  /**
   * Sets the embed thumbnail.
   */
  thumbnail(thumbnail: ?EmbedThumbnail): EmbedBuilder {
    this.embed.thumbnail = thumbnail;
    return this;
  }

  /**
   * Sets the embed video.
   */
  video(video: ?EmbedVideo): EmbedBuilder {
    this.embed.video = video;
    return this;
  }

  /**
   * Sets the embed provider.
   */
  provider(provider: ?EmbedProvider): EmbedBuilder {
    this.embed.provider = provider;
    return this;
  }

  /**
   * Sets the embed author.
   */
  author(author: ?EmbedAuthor): EmbedBuilder {
    this.embed.author = author;
    return this;
  }

  /**
   * Adds a field in the embed.
   */
  field(field: EmbedField): EmbedBuilder {
    const defaultField: EmbedField = {
      name: '_ _', value: '_ _',
    };

    this.embed.fields.push(Object.assign(defaultField, field));
    return this;
  }
}
