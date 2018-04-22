import * as abhilash from "@heydovetail/website/avatars/abhilash.jpg";
import * as aurelia from "@heydovetail/website/avatars/aurelia.jpg";
import * as basheera from "@heydovetail/website/avatars/basheera.jpg";
import * as ben from "@heydovetail/website/avatars/ben.jpg";
import * as erik from "@heydovetail/website/avatars/erik.jpg";
import * as michael from "@heydovetail/website/avatars/michael.jpg";
import * as pascal from "@heydovetail/website/avatars/pascal.jpg";
import * as sarah from "@heydovetail/website/avatars/sarah.jpg";
import * as sonja from "@heydovetail/website/avatars/sonja.jpg";
import * as tina from "@heydovetail/website/avatars/tina.jpg";

export const enum COLORS {
  indigo = "#24124d",
  i80 = "#4f4270",
  i60 = "#7b7194",
  i40 = "#a7a0b8",
  i20 = "#d3d0db",
  i08 = "#eeecf1",
  i04 = "#f6f6f8",
  i02 = "#fbfafc",
  darkpurple = "#140b2f",
  dp80 = "#433c59",
  dp60 = "#726d82",
  dp40 = "#a19dac",
  dp20 = "#d0ced5",
  dp08 = "#edecef",
  dp04 = "#f6f5f7",
  dp02 = "#fafafb",
  magenta = "#f84f77",
  m80 = "#f97292",
  m60 = "#fb95ad",
  m40 = "#fcb9c9",
  m20 = "#fedce4",
  m08 = "#fff1f5",
  m04 = "#fff8fa",
  m02 = "#fffcfc",
  purple = "#512da8",
  p80 = "#7457b9",
  p60 = "#9781cb",
  p40 = "#b9abdc",
  p20 = "#dcd5ee",
  p08 = "#f1eff8",
  p04 = "#f8f7fc",
  p02 = "#fcfbfd",
  blue = "#5182f8",
  b80 = "#749bf9",
  b60 = "#97b4fb",
  b40 = "#b9cdfc",
  b20 = "#dce6fe",
  b08 = "#f1f5ff",
  b04 = "#f8faff",
  b02 = "#fcfdff",
  teal = "#1eb8c1",
  t80 = "#4bc6cd",
  t60 = "#78d4da",
  t40 = "#a5e3e6",
  t20 = "#d2f1f3",
  t08 = "#edfafa",
  t04 = "#f6fcfd",
  t02 = "#fbfefe",
  green = "#009688",
  g80 = "#33aba0",
  g60 = "#66c0b8",
  g40 = "#99d5cf",
  g20 = "#cceae7",
  g08 = "#ebf7f6",
  g04 = "#f5fbfa",
  g02 = "#fafdfd",
  lime = "#91bb54",
  l80 = "#a7c876",
  l60 = "#bdd698",
  l40 = "#d3e4ba",
  l20 = "#e9f1dd",
  l08 = "#f7faf2",
  l04 = "#fbfcf8",
  l02 = "#fdfefc",
  yellow = "#ffb300",
  y80 = "#ffc233",
  y60 = "#ffd166",
  y40 = "#ffe199",
  y20 = "#fff0cc",
  y08 = "#fff9eb",
  y04 = "#fffcf5",
  y02 = "#fffefa",
  chocolate = "#bf6e33",
  c80 = "#cb8b5c",
  c60 = "#d8a885",
  c40 = "#e5c5ad",
  c20 = "#f2e2d6",
  c08 = "#faf4ef",
  c04 = "#fdf9f7",
  c02 = "#fefcfb",
  orange = "#e45735",
  o80 = "#e9795d",
  o60 = "#ef9a86",
  o40 = "#f4bcae",
  o20 = "#faddd7",
  o08 = "#fdf2ef",
  o04 = "#fef8f7",
  o02 = "#fffcfb",
  white = "#fff",
  focus = "rgba(91, 147, 255, .25)"
}

export const BORDER_RADIUS = "3px";

// Depth level 1 (sitting on background)
export const BOX_SHADOW_BORDER_LIGHTER = "0 0 0 1px rgba(20, 11, 47, .05)";
export const BOX_SHADOW_BORDER = "0 0 0 1px rgba(20, 11, 47, .1)";
export const BOX_SHADOW_BORDER_DARKER = "0 0 0 1px rgba(20, 11, 47, .15)";
export const BOX_SHADOW_SITTING = "0 2px 4px -2px rgba(0, 0, 0, .2)";

// Depth level 2 (sticky scrolling headers)
export const BOX_SHADOW_STICKY = "0 1px 0 0 rgba(20, 11, 47, .05), 0 2px 16px -2px rgba(0, 0, 0, .1)";

// Depth level 3 (dropdowns, dialogs, draggables when lifted)
export const BOX_SHADOW_LIFTED = "0 12px 24px -8px rgba(0, 0, 0, .3)";

// Focus style
export const BOX_SHADOW_FOCUS = `0 0 0 4px ${COLORS.focus}`;

// Z index

export const Z_INDEX_HIGHEST = 1000;
export const Z_INDEX_HIGH = 750;
export const Z_INDEX_MID = 500;
export const Z_INDEX_LOW = 250;
export const Z_INDEX_LOWEST = 0;

export const BREAKPOINT_PHONE = 440;
export const BREAKPOINT_PHABLET = 512;
export const BREAKPOINT_TABLET = 768;

export const PADDING = 24;
export const WIDTH = 880;
export const VERTICAL_GAP = 128;
export const HALF_GAP = VERTICAL_GAP / 2;
export const PADDING_BOTTOM = 64;
export const FONT_FAMILY = "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

export const LIGHT_TEXT_OPACITY = 0.6;

export const TESTIMONIALS = {
  abhilash: {
    company: "Freshworks",
    url: "https://www.freshworks.com",
    image: abhilash,
    name: "Abhilash",
    quote:
      "My team has started using Dovetail even more and the amount of productivity increase we are witnessing is amazing. The turnaround time for customer interviews to be converted to reports has reduced immensely and the quality of our reports have also improved a lot. Your app is simply too good!",
    role: "Senior Researcher"
  },
  aurelia: {
    company: "Pinterest",
    url: "https://www.pinterest.com",
    image: aurelia,
    name: "Aurelia",
    quote: "Highlighting text to tag is great! I love that I can add multiple tags to highlighted text. It’s super easy.",
    role: "UX Researcher"
  },
  basheera: {
    company: "DemandLogic",
    url: "https://www.demandlogic.co.uk",
    image: basheera,
    name: "Basheera",
    quote:
      "I've got to say, playing around with Dovetail I felt a deep unwinding of tension - it seems like the answer to the need I had for a lightweight but powerful and affordable insights repository that makes the value of qualitative research plain as day.",
    role: "Design Lead"
  },
  benjamin: {
    company: "For The Win",
    url: "https://ftw.nyc",
    image: ben,
    name: "Benjamin",
    quote:
      "I love how easy Dovetail makes tagging and analyzing lots of interview transcripts. The interface is fast and responsive, and I’m able to get more data and insights because of how well the tool fits into my workflow.",
    role: "Founder"
  },
  erik: {
    company: "PageCloud",
    url: "https://www.pagecloud.com",
    image: erik,
    name: "Erik",
    quote:
      "Loving the product. Tagging has been a breeze and re-organizing my thoughts using Dovetail has been easier than any other platform I’ve used!",
    role: "User Researcher"
  },
  michael: {
    company: "Onist",
    url: "https://onist.com",
    image: michael,
    name: "Michael",
    quote:
      "I’m just loving Dovetail for qualitative user feedback documentation and analysis. It’s just a lovely experience. I don’t know what impresses me more… the app or the team and how they are building it 👏👏👏",
    role: "VP of Product"
  },
  pascal: {
    company: "Enigma",
    url: "https://enigma.swiss/en/",
    image: pascal,
    name: "Pascal",
    quote:
      "I just spent the entire day in Dovetail, love it. Looking forward to seeing the evolution of Dovetail and I hope it’s growing.",
    role: "Design Researcher"
  },
  sarah: {
    company: "HotelsCombined",
    url: "https://www.hotelscombined.com/",
    image: sarah,
    name: "Sarah",
    quote:
      "We’ve been using Dovetail to collate and store all of our user research data. We love how easy it is to synthesise and gain insights, share the data with stakeholders, and access notes and insights whenever we need to. It saves us so much time.",
    role: "UX Researcher"
  },
  sonja: {
    company: "Uniqa",
    url: "http://www.uniqagroup.com",
    image: sonja,
    name: "Sonja",
    quote:
      "I love that it’s made especially for researchers, and it has been researched — ha! — to suit their different styles of work. I love that it is continuously being improved thanks to the founders’ hard work. I love that you, Benjamin and Bradley, are so responsive, and you listen to and seek your customers’ feedback. In fact, what makes it the most special to me is that you've managed to turn your product into a community right from the start!",
    role: "Researcher"
  },
  tina: {
    company: "MacMillan Learning",
    url: "https://macmillanlearning.com",
    image: tina,
    name: "Tina",
    quote:
      "I have to say I am really loving Dovetail and the potential it has in gathering and sharing qualitative data and insights!",
    role: "UX Designer"
  }
};
