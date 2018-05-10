// This script fetches our templates from Zapier’s partner API
// and converts the response into something a little more usable for us.
//
// Takes two options:
//
// --zapier-client-id
// This is the secret client ID from the partner program.
//
// --output
// This is a relative filename path (e.g. ../src/data/zapier/integrations.json)
//

import fs from "fs";
import fetch from "node-fetch";
import path from "path";
import { showHelp, usage } from "yargs";

interface ZapierTemplate {
  create_url: string;
  description: string;
  description_plain: string;
  description_raw: string;
  id: number;
  slug: string;
  status: string;
  steps: ZapierStep[];
  title: string;
  type: string;
  url: string;
}

interface ZapierStep {
  api: string;
  description: string;
  hex_color: string;
  id: number;
  image: string;
  images: ZapierImage;
  slug: string;
  title: string;
  url: string;
}

interface ZapierImage {
  url_128x128: string;
  url_64x64: string;
  url_32x32: string;
  url_16x16: string;
}

interface OutputTemplate {
  createUrl: string;
  descriptionHtml: string;
  descriptionPlain: string;
  id: string;
  path: string;
  status: string;
  steps: OutputStep[];
  title: string;
}

interface OutputStep {
  color: string;
  description: string;
  icon: string;
  iconOriginal: string;
  id: string;
  title: string;
}

const { argv } = usage("Usage: bin/fetch-zapier-templates")
  .option("zapier-client-id", {
    type: "string",
    demand: true
  })
  .option("path", {
    type: "string",
    demand: false
  })
  .option("output", {
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
  const template = await fetch(`https://zapier.com/partner/embed/zaps?key=${argv.zapierClientId}&limit=100`);
  const json = await template.json();

  const result = json.map((t: ZapierTemplate): OutputTemplate => ({
    createUrl: t.create_url,
    descriptionHtml: t.description,
    descriptionPlain: t.description_plain,
    id: t.id.toString(),
    path: `${argv.path ? argv.path : "/integrations"}/${t.steps[0].slug}`,
    status: t.status,
    steps: t.steps.map(s => ({
      color: `#${s.hex_color}`,
      description: s.description,
      icon: s.images.url_64x64,
      iconOriginal: s.image,
      id: s.id.toString(),
      title: s.title
    })),
    title: t.title.replace(/Dovetail notes/g, "notes")
  }));

  fs.writeFileSync(path.join(__dirname, argv.output), JSON.stringify(result, null, 2));

  console.log(`Fetched ${json.length} templates from Zapier!`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
