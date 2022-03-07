const {
  MessageEmbed
} = require('discord.js');

module.exports = class Embed extends MessageEmbed {
  constructor(opt = {}, data = {}) {
    super(data);
  }
}