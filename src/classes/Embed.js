const {
  MessageEmbed
} = require('discord.js');

module.exports = class Embed extends MessageEmbed {
  constructor(opts = {}, data = {}) {
    super(data);
    var {
      type,
      title,
      description,
      url,
      color,
      timestamp,
      fields,
      thumbnail,
      image,
      video,
      author,
      provider,
      footer
    } = opts;
  }
}