const color_list = require('../data/color_list.js').database,
	{
		MessageEmbed
	} = require("discord.js");
module.exports = class Embed extends MessageEmbed {
	constructor(opts = {}, data = {}) {
		super(data);
		var colorList = color_list;
		this.list = [];
		let {
			color = null
		} = opts;
	}
	getColors() {
		let data = color_list.reduce((map, obj, i, a) => {
			map[obj.name] = obj.hex;
			return map;
		}, {});
		let newMap = new Map(Object.entries(data));
		newMap.forEach((value, key) => {
			this.list.push(key);
		});
		this.list.join(',');
		return this.list;
	}
};