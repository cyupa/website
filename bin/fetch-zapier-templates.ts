import fs from "fs";
import fetch from "node-fetch";
import path from "path";
import { showHelp, usage } from "yargs";

const { argv } = usage("Usage: bin/fetch-zapier-templates")
  .option("zapier-client-id", {
    type: "string",
    demand: true
  })
  .strict()
  .help();

if (argv.help) {
  showHelp();
  process.exit(1);
}

async function main() {
  const template = await fetch(`https://zapier.com/partner/embed/zaps?key=${argv.zapierClientId}&limit=20`);
  const json = await template.json();

  const result = json.map(template => ({
    slug: template.slug
  }));

  fs.writeFileSync(path.join(__dirname, "../src/data/zapier/integrations.json"), JSON.stringify(result, null, 2));
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
