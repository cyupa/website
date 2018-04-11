import * as React from "react";
import { GridWrap } from "../../components/layout/GridWrap";
import { Item } from "../../components/layout/Item";
import { Faq } from "../../components/site/Faq";
import { locations } from "../../routing/locations";

export class FrequentlyAskedQuestions extends React.PureComponent {
  public render() {
    return (
      <GridWrap gap={64} childMaxWidth={240} justifyContent="center">
        <Item>
          <Faq
            question="What does “unlimited users” mean?"
            answer="You might be used to paying fees or licenses for each of your users. With Dovetail, whether you have 5 or 500 users, the price is always $49 / month."
          />
        </Item>
        <Item>
          <Faq
            question="What does “all current &amp; future features” mean?"
            answer="Cloud-based software means you don’t have to pay to download the latest version. All new features we release are included in your subscription."
          />
        </Item>
        <Item>
          <Faq
            question="How safe is our data?"
            answer="We use industry-standard cloud infrastructure along with extra safeguards to ensure your data remains private and secure."
            location={locations.security()}
          />
        </Item>
        <Item>
          <Faq
            question="Will we be charged when the trial’s up?"
            answer="No, we don’t require a card upfront. If you want to continue using Dovetail at the end of your trial, we’ll ask for your credit card then."
          />
        </Item>
        <Item>
          <Faq
            question="What if we need a longer trial?"
            answer="We’re happy to extend your trial for as long as you need. Just let us know if you need more time and we’ll sort it out straight away."
          />
        </Item>
        <Item>
          <Faq
            question="Can we cancel at any time?"
            answer="Yes. You can cancel your subscription whenever you like, however we do not offer refunds if for a billing period you’ve already paid for."
          />
        </Item>
        <Item>
          <Faq
            question="Can we pay yearly?"
            answer="Yes. When upgrading your team, you can choose to pay monthly or yearly. If you’re not sure, you can switch from monthly to yearly billing later on."
          />
        </Item>
        <Item>
          <Faq
            question="Do you offer product demos?"
            answer="We sure do. We’re happy to give you a walkthrough over a video call, or if you’re in Sydney, we can pop into your office."
            location={locations.email()}
            linkText="Contact us"
          />
        </Item>
        <Item>
          <Faq
            question="How do you compare to similar tools?"
            answer="Depending on what you’re thinking of, Dovetail might be more collaborative, more intuitive, or cheaper."
            location={{
              internal: false,
              url:
                "https://www.quora.com/How-does-Dovetail-compare-to-other-research-software-on-the-market/answer/Benjamin-Humphrey",
              openInNewTab: true
            }}
            linkText="Check out our answer on Quora."
          />
        </Item>
        <Item>
          <Faq
            question="What’s the catch?"
            answer="There isn’t one! We’re simply tired of expensive, unintuitive software with lock-in contracts, annoying salespeople, and opaque pricing."
          />
        </Item>
      </GridWrap>
    );
  }
}
