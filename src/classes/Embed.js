const {
  MessageEmbed
} = require('discord.js');

module.exports = class Embed extends MessageEmbed {
  constructor(opts = {}, data = {}) {
    super(data);
    var {
      title = null,
      description = null,
      url = null,
      color = null,
      timestamp = false,
      fields = null,
      thumbnail = null,
      image = null,
      video = null,
      author = null,
      footer = null
    } = opts;
    
  }
}