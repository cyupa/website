import * as React from "react";
import { GridWrap } from "../../components/layout/GridWrap";
import { Item } from "../../components/layout/Item";
import { Faq } from "../../components/site/Faq";

export class FrequentlyAskedQuestions extends React.PureComponent {
  public render() {
    return (
      <GridWrap gap={32} childMaxWidth={400} justifyContent="center">
        <Item>
          <Faq
            question="What does “unlimited users” mean?"
            answer="You might be used to hefty software licenses or paying a monthly fee for each user. With Dovetail, whether you have 5 or 500 users, the price is always $49 / month."
          />
        </Item>
        <Item>
          <Faq
            question="What does “all current &amp; future features” mean?"
            answer="We’re improving Dovetail every day. You don’t have to wait for the next ‘version’ to be released and pay to upgrade. You get all the features we have now, and in the future."
          />
        </Item>
        <Item>
          <Faq
            question="How safe is our data?"
            answer="We use trusted, industry-standard cloud infrastructure and process, along with extra safeguards to ensure your data remains private and secure."
          />
        </Item>
        <Item>
          <Faq
            question="Will we be charged when the trial’s up?"
            answer="At any time during the trial, or when the trial has finished, you can decide what you want to do. If you want to continue using Dovetail, we’ll ask for your credit card then."
          />
        </Item>
        <Item>
          <Faq
            question="What if we need more than 14 days to try Dovetail?"
            answer="We’re happy to extend your trial. Just let us know if you need more time. Likewise, if you previously tried Dovetail and have returned, we’ll give you a new 14 day trial."
          />
        </Item>
        <Item>
          <Faq
            question="Can we cancel at any time?"
            answer="Yes. You can cancel your subscription whenever you like, however we do not offer refunds if you cancel during a billing period you’ve already paid for."
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
            question="Do you offer demos?"
            answer="We sure do. We’re happy to give you a walkthrough over a video call, or if you’re in Sydney, we can pop into your office. Email us at hello@dovetailapp.com."
          />
        </Item>
        <Item>
          <Faq
            question="How do you compare to other research software?"
            answer="Depending on what software you’re thinking of, Dovetail might be more collaborative, more intuitive, or cheaper. Check out our answer on Quora to learn more."
          />
        </Item>
        <Item>
          <Faq
            question="What’s the catch?"
            answer="There isn’t one! We’re simply tired of expensive, unintuitive feedback management and research software with lock-in contracts, annoying salespeople, and opaque pricing."
          />
        </Item>
      </GridWrap>
    );
  }
}
