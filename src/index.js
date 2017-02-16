/* @flow */

import EmbedBuilder from './EmbedBuilder';
import Embed from './Embed';


export {
  EmbedBuilder,
  Embed,
};

/**
 * Instanciates a new embed builder.
 */
export default function newEmbedBuilder(): EmbedBuilder {
  return new EmbedBuilder();
}
