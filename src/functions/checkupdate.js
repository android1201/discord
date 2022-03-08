if (process.version.slice(1, 3) - 0 < 16) {
	throw new Error(
		`NodeJS Version 16 or newer is required, but you are using ${process.version}. See https://nodejs.org/`
	);
};
try {
	require('discord.js')
} catch (e) {
	throw new Error('Discord.JS is required for this package to run')
};

const {
	version: discordJSVersion
} = require(require('path').join(
	require.resolve('discord.js'),
	'..',
	'..',
	'package.json'
));

if (discordJSVersion.slice(0, 2) !== '13') {
	throw new Error(
		`Discord.JS version 13 is required, but you are using ${discordJSVersion}. See https://www.npmjs.com/package/discord.js`
	);
};
const {
	get
} = require(`superagent`);

const superagent = require(`superagent`);

if (!superagent) {
	return;
}
(async () => {
	await get(`https://registry.npmjs.com/${require(`./../package.json`).name}`)
		.end((err, response) => {
			const packagedata = JSON.parse(response.text);
			if (!packagedata.error && packagedata[`dist-tags`] != undefined) {
				if (
					require(`./../package.json`).version !== packagedata[`dist-tags`].latest
				) {
					console.log(`\n\n`);
					console.log(
						`\x1b[32m` + `---------------------------------------------------`
					);
					console.log(
						`\x1b[32m` +
						`| @ ${
								require(`./../package.json`).name
							}                        - [] X |`
					);
					console.log(
						`\x1b[32m` + `---------------------------------------------------`
					);
					console.log(
						`\x1b[33m` +
						`|            The module is\x1b[31m out of date!\x1b[33m           |`
					);
					console.log(
						`\x1b[35m` + `|             New version is available!           |`
					);
					console.log(
						`\x1b[34m` +
						`|                  ${require(`./../package.json`).version} --> ${
								packagedata[`dist-tags`].latest
							}                |`
					);
					console.log(
						`\x1b[36m` +
						`|        Run "npm i ${
								require(`./../package.json`).name
							}@latest"       |`
					);
					console.log(
						`\x1b[36m` + `|                    to update!                   |`
					);
					console.log(
						`\x1b[37m` + `|          View the full changelog here:          |`
					);
					console.log(
						`\x1b[31m` +
						`https://www.npmjs.com/package/${require(`./../package.json`).name}`
					);
					console.log(
						`\x1b[32m` +
						`---------------------------------------------------\x1b[37m`
					);
					console.log(`\n\n`);
				}
			}
		});
})();
