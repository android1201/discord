(async () => {
	const {
		get
	} = require(`superagent`),
		pkgData = require(`../../package.json`),
		superagent = require(`superagent`);

	if (!superagent) {
		return;
	}
	await get(`https://registry.npmjs.com/${pkgData.name}`)
		.end((err, response) => {
			const packagedata = JSON.parse(response.text);
			if (!packagedata.error && packagedata[`dist-tags`] != undefined) {
				if (
					pkgData.version !== packagedata[`dist-tags`].latest
				) {
					console.log(`\n\n`);
					console.log(
						`\x1b[32m` + `---------------------------------------------------`
					);
					console.log(
						`\x1b[32m` +
						`| @ ${
								pkgData.name
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
						`|                  ${pkgData.version} --> ${
								packagedata[`dist-tags`].latest
							}                |`
					);
					console.log(
						`\x1b[36m` +
						`|        Run "npm i ${
								pkgData.name
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
						`https://www.npmjs.com/package/${pkgData.name}`
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
