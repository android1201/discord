const {
	Embed
} = require('../module.js');
const embed = new Embed();
embed.AddColor('green')
	.AddAuthor('author', 'https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/2x/external-url-essentials-icongeek26-outline-gradient-icongeek26.png')
	.AddDescription('AddDescription')
	.AddFooter('AddFooter', 'https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/2x/external-url-essentials-icongeek26-outline-gradient-icongeek26.png')
	.AddImage('https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/2x/external-url-essentials-icongeek26-outline-gradient-icongeek26.png')
	.AddThumbnail('https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/2x/external-url-essentials-icongeek26-outline-gradient-icongeek26.png')
	.AddTimestamp()
	.AddTitle('Title')
	.AddUrl('https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/2x/external-url-essentials-icongeek26-outline-gradient-icongeek26.png');
console.log(embed.Json());