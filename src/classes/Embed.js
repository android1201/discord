const color_list = require('../data/color_list.js').database,
	{
		MessageEmbed
	} = require("discord.js");
module.exports = class Embed extends MessageEmbed {
	constructor(opts = {}, data = {}) {
		super(data);
		var colorList = color_list;
		this.opts = {
			color: '#000001',
			list: []
		};
		this.setColor(this.opts.color);
	};
	Color(d) {
		if (!d) {
			d = this.opts.color;
		}
		if (d) {
			let finded = color_list.find((x) => x.name.toLowerCase() === d.toLowerCase());
			if (typeof finded === "undefined") {
				d = d || this.opts.color;
			} else {
				d = finded.hex;
			}
		}
		this.setColor(d);
		return this;
	};
	getColors() {
		let data = color_list.reduce((map, obj, i, a) => {
			map[obj.name] = obj.hex;
			return map;
		}, {});
		let newMap = new Map(Object.entries(data));
		newMap.forEach((value, key) => {
			this.opts.list.push(key);
		});
		this.opts.list.join(',');
		return this.opts.list;
	};
	Json() {
		return {
			title: this.title,
			type: 'rich',
			description: this.description,
			url: this.url,
			timestamp: this.timestamp && new Date(this.timestamp),
			color: this.color,
			fields: this.fields,
			thumbnail: this.thumbnail,
			image: this.image,
			author: this.author && {
				name: this.author.name,
				url: this.author.url,
				icon_url: this.author.iconURL,
			},
			footer: this.footer && {
				text: this.footer.text,
				icon_url: this.footer.iconURL,
			},
		};
	};
};
