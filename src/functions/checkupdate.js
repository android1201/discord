module.exports =
	checkupdate = async () => {
		const {
			get
		} = require(`superagent`);

		const superagent = require(`superagent`);

		if (!superagent) {
			return;
		}
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
	};
