// This script fetches our templates from Zapier’s partner API
// and generates markdown files for each under /help.
import dateFnsFormat from "date-fns/format";
import fs from "fs";
import fetch from "node-fetch";
import path from "path";
import { showHelp, usage } from "yargs";
import { sortComparatorAsc } from "../src/util/array";

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
  const template = await fetch(`https://zapier.com/partner/embed/zaps?key=${argv.zapierClientId}&limit=100`);
  const json = await template.json();
  const now = new Date();

  json.sort(sortComparatorAsc((t: ZapierTemplate) => t.steps[0].slug)).map((t: ZapierTemplate, i: number) => {
    const app = t.steps[0].slug;
    const appName = t.steps[0].title;
    let title = t.title;

    // This is a hack to remove ‘Dovetail’ if possible
    // Ideally we would change the Zapier template names to work without
    // the word ‘Dovetail’ in them all the time
    if (t.title.includes("notes")) {
      title = title.replace("Dovetail", "");
    }

    const markdown = `---
date: "${dateFnsFormat(now, "YYYY-MM-DD")}"
path: "/help/${app}"
title: "${title}"
weight: ${i}
---

${t.description_raw.replace(new RegExp("^##", "g"), "###")}

### What you’ll need

Dovetail uses [Zapier](https://zapier.com) for our integrations. You’ll need a free Zapier account, a ${appName} account, and a Dovetail account to set up this integration.

### Set it up

Follow the link below to set up this integration. If you’re running into problems, check out [this help article](/help/zapier) for step-by-step instructions on configuring Zapier.

**[Set up this integration on Zapier](${t.create_url})**
`;

    const filePath = path.join(__dirname, `../src/pages/help/integrations/${app}/index.md`);
    ensureDirectoryExistence(filePath);
    fs.writeFileSync(filePath, markdown);
  });

  console.log(`Created ${json.length} help articles based on templates from Zapier!`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});

function ensureDirectoryExistence(filePath: string): boolean {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
    return false;
  }
}
