/* @flow */

/**
 * An embed thumbnail.
 */
export type EmbedThumbnail = {

  /**
   * Source URL of thumbnail (only supports http(s) and attachments).
   */
  url: string,

  /**
   * A proxied url of the thumbnail.
   */
  proxy_url?: string,

  /**
   * Height of thumbnail.
   */
  width?: number,

  /**
   * Width of thumbnail.
   */
  height?: number,
};

/**
 * An embed video.
 */
export type EmbedVideo = {

  /**
   * Source URL of video.
   */
  url: string,

  /**
   * Height of video.
   */
  width?: number,

  /**
   * Width of video.
   */
  height?: number,
};

/**
 * An embed image.
 */
export type EmbedImage = {

  /**
   * Source URL of image (only supports http(s) and attachments).
   */
  url: string,

  /**
   * A proxied url of the image.
   */
  proxy_url?: string,

  /**
   * Height of image.
   */
  width?: number,

  /**
   * Width of image.
   */
  height?: number,
};

/**
 * An embed provider.
 */
export type EmbedProvider = {

  /**
   * Name of provider.
   */
  name?: string,

  /**
   * URL of provider.
   */
  url?: string,
};

/**
 * An embed author.
 */
export type EmbedAuthor = {

  /**
   * Name of author.
   */
  name?: string,

  /**
   * URL of author.
   */
  url?: string,

  /**
   * URL of author icon (only supports http(s) and attachments).
   */
  icon_url?: string,

  /**
   * A proxied url of author icon.
   */
  proxy_icon_url?: string,
};

/**
 * An embed footer.
 */
export type EmbedFooter = {

  /**
   * Footer text.
   */
  text?: string,

  /**
   * URL of footer icon (only supports http(s) and attachments).
   */
  icon_url?: string,

  /**
   * A proxied url of footer icon.
   */
  proxy_icon_url?: string,
};

/**
 * An embed field.
 */
export type EmbedField = {

  /**
   * Name of the field.
   */
  name?: string,

  /**
   * Value of the field.
   */
  value?: string,

  /**
   * Whether or not this field should display inline.
   */
  inline?: boolean,
};

/**
 * An embed object.
 */
export default class Embed {

  /**
   * Title of the embed.
   */
  title: ?string;

  /**
   * Type of the embed.
   */
  type: ?string;

  /**
   * Description of the embed.
   */
  description: ?string;

  /**
   * URL of the embed.
   */
  url: ?string;

  /**
   * Timestamp of the embed content.
   */
  timestamp: ?Date;

  /**
   * Color of the embed.
   */
  color: ?number;

  /**
   * Footer information.
   */
  footer: ?EmbedFooter;

  /**
   * Image information.
   */
  image: ?EmbedImage;

  /**
   * Thumbnail information.
   */
  thumbnail: ?EmbedThumbnail;

  /**
   * Video information.
   */
  video: ?EmbedVideo;

  /**
   * Provider information.
   */
  provider: ?EmbedProvider;

  /**
   * Author information.
   */
  author: ?EmbedAuthor;

  /**
   * Fields information.
   */
  fields: Array<EmbedField>;

  /**
   * @constructor
   */
  constructor() {
    this.fields = [];
  }
}
