import abhilash from "@heydovetail/website/avatars/abhilash.jpg";
import aurelia from "@heydovetail/website/avatars/aurelia.jpg";
import basheera from "@heydovetail/website/avatars/basheera.jpg";
import ben from "@heydovetail/website/avatars/ben.jpg";
import erik from "@heydovetail/website/avatars/erik.jpg";
import michael from "@heydovetail/website/avatars/michael.jpg";
import pascal from "@heydovetail/website/avatars/pascal.jpg";
import sarah from "@heydovetail/website/avatars/sarah.jpg";
import sonja from "@heydovetail/website/avatars/sonja.jpg";
import sophie from "@heydovetail/website/avatars/sophie.jpg";
import tina from "@heydovetail/website/avatars/tina.jpg";
import { TestimonialProps } from "@heydovetail/website/components/site/Testimonial";

// Depth level 4 (huge shadows)
export const BOX_SHADOW_LARGE = "0 16px 32px -4px rgba(36, 18, 77, .2)";

export const PADDING = 24;
export const WIDTH = 880;
export const VERTICAL_GAP = 128;
export const HALF_GAP = VERTICAL_GAP / 2;
export const PADDING_BOTTOM = 64;
export const FONT_FAMILY = "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

export const LIGHT_TEXT_OPACITY = 0.6;

export const testimonials: { [name: string]: TestimonialProps } = {
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
  sophie: {
    company: "Kickstand Design",
    url: "http://www.kickstand.design",
    image: sophie,
    name: "Sophie",
    quote:
      "One of the biggest challenges I face is making the work I do transparent and keeping the wider business engaged in the research we are conducting. Dovetail has become an essential tool for me, in this regard, and has really transformed the way I work. Being able to record all raw notes as research is being conducted, and inviting people to get in there and be part of the process, makes the research we do accessible and keeps everyone involved.",
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
