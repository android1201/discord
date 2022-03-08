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
	AddFields(d) {
		this.setFields(d);
		return this;
	};
	AddAuthor(d) {
		this.setAuthor(d);
		return this;
	};
	AddColor(d) {
		if (!d) {
			d = this.opts.color;
		};
		if (d) {
			let finded = color_list.find((x) => x.name.toLowerCase() === d.toLowerCase());
			if (typeof finded === "undefined") {
				d = d || this.opts.color;
			} else {
				d = finded.hex;
			};
		};
		this.setColor(d);
		return this;
	};
	AddDescription(d) {
		this.setDescription(d);
		return this;
	};
	AddField(d) {
		this.addField(d);
		return this;
	};
	AddFooter(d) {
		this.setFooter(d);
		return this;
	};
	AddImage(d) {
		this.setImage(d);
		return this;
	};
	AddThumbnail(d) {
		this.setThumbnail(d);
		return this;
	};
	AddTimestamp(d) {
		this.setTimestamp(d);
		return this;
	};
	AddTitle(d) {
		this.setTitle(d);
		return this;
	};
	AddUrl(d) {
		this.setURL(d);
		return this;
	};
	get CreatedAt() {
		return this.timestamp ? new Date(this.timestamp) : null;
	};
	Equals(embed) {
		return (
			this.type === embed.type &&
			this.author?.name === embed.author?.name &&
			this.author?.url === embed.author?.url &&
			this.author?.iconURL === (embed.author?.iconURL ?? embed.author?.icon_url) &&
			this.color === embed.color &&
			this.title === embed.title &&
			this.description === embed.description &&
			this.url === embed.url &&
			this.timestamp === embed.timestamp &&
			this.fields.length === embed.fields.length &&
			this.fields.every((field, i) => this._fieldEquals(field, embed.fields[i])) &&
			this.footer?.text === embed.footer?.text &&
			this.footer?.iconURL === (embed.footer?.iconURL ?? embed.footer?.icon_url) &&
			this.image?.url === embed.image?.url &&
			this.thumbnail?.url === embed.thumbnail?.url &&
			this.video?.url === embed.video?.url &&
			this.provider?.name === embed.provider?.name &&
			this.provider?.url === embed.provider?.url
		);
	};
	JoinFields(d) {
		this.addFields(d);
		return this;
	};
	FieldEquals(d) {
		this._fieldEquals(d);
		return this;
	};
	GetColors() {
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
	get HexColor() {
		return this.color ? `#${this.color.toString(16).padStart(6, '0')}` : null;
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
	get Length() {
		return (
			(this.title?.length ?? 0) +
			(this.description?.length ?? 0) +
			(this.fields.length >= 1 ?
				this.fields.reduce((prev, curr) => prev + curr.name.length + curr.value.length, 0) :
				0) +
			(this.footer?.text.length ?? 0) +
			(this.author?.name.length ?? 0)
		);
	};
	RemoveFields(d) {
		this.spliceFields(d);
		return this;
	};
};
