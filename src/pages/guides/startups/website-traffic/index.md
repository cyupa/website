---
date: "2018-04-11"
path: "/guides/website-traffic"
title: "How to get traffic on your website"
weight: 1
---

![Photo of blurred red and white highway lights at night](./traffic.jpg)

As a user researcher, it’s valuable to understand how people discover things in the first place. Marketing also plays a key role in shaping user expectations before someone signs up for a product or service. This guide will introduce common marketing channels that help to drive traffic to your website, like social media, content marketing, SEO, paid advertising, referrals, and more.

## Marketing channels

### SEO

‘Search Engine Optimization’ is the dark art of improving your ranking on popular search engines like Google, Yahoo, and Bing. Improving your content, website performance, mobile support, and ‘backlinks’ all contribute to improved SEO.

Set up [Google Search Console](https://support.google.com/webmasters/answer/4559176?hl=en) straight away to measure your search ranking and improvements over time. There’s a lot of snake oil in the SEO industry, but a lot of the time it simply comes down to creating relevant, quality content. Google even have [a section in their help documentation](https://support.google.com/webmasters/answer/40349?hl=en&ref_topic=3309300) that says pretty much that:

> “Provide high-quality content on your pages, especially your homepage. This is the single most important thing to do. If your pages contain useful information, their content will attract many visitors and entice webmasters to link to your site.”

Other factors to consider are site performance and mobile experience.

I highly recommend making quick-win performance improvements like loading JS asynchronously, minifying assets, and using sprites or inline SVGs for images. [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) is great for seeing what Google’s verdict is on your performance. It’s a checklist of things to do, so just make sure you do all of them (some may be harder than others) and it’ll help your search ranking.

**See also: [Reaching 88mph! Optimizing website performance on Ruby on Rails](https://dovetail.blog/reaching-88mph-optimizing-website-performance-on-ruby-on-rails-45d6b8ba52d1)**

At [Dovetail](https://dovetailapp.com), both our website and product are responsive because quite frankly, there’s no excuse for websites not to have mobile support in 2017. At the very least your marketing website needs to be responsive, then you’ll either have a responsive product, a mobile site, or native apps for your app. A fast, mobile-friendly website will go a long way to improving your SEO and getting more traffic to your website.

### Online advertising

A form of marketing and advertising which uses the internet to deliver promotional marketing messages to consumers, usually via Google AdWords, sponsored search results, and Facebook Ads.

Earlier this year I set up ad campaigns on both Google AdWords and Facebook Ads with identical budgets. Our hypothesis was that Google would out-perform Facebook in driving traffic to our website because people search for solutions to problems on Google, and we were building a solution to a problem! We’re very lucky that researchers (like developers, designers, and other ‘tech’ people) actively look to improve the way they work.

There are lots of detailed tutorials on how to create AdWords and Facebook ads, but before you dive in, here are the key terms you should understand first:

---

**Impressions.** This is the number of people who have seen your ad.

**Click-through rate.** This is the percentage of people who, after seeing your ad, click on it and visit your website. It’s usually quite low; around 1 to 2%.

**Sign up rate.** This is the percentage of people who sign up on your website. It’s usually around 5%, and if it’s higher than this, you’re doing quite well.

**Conversion rate.** Assuming you have a free plan or trial period, this is the percentage of people who actually hand over some money, or ‘convert’ into a paying customer. This number varies wildly between companies and products.

**Acquisition cost.** This is how much you spent to acquire a single paying customer.

**Average lifetime value.** This is how much money you expect to get, in total, from each customer. Your lifetime value should be greater than your acquisition cost otherwise you’re losing money when trying to acquire customers. (This may be okay if you’re building a social network or a ride-hailing service where the race to a critical mass of users is important. We’re not.)

---

Let’s map out a typical scenario using these five key metrics:

With AdWords and Facebook, you can pay per impression, click, or conversion. Let’s say you choose to pay per impression. You get 10,000 impressions on your search ad, and a 2% click-through rate, so 200 people have visited your website. Google or Facebook have charged you $300.

Along with understanding why these companies are so wealthy, you now know that 200 people have visited your website from the ad. On your website, your sign up rate is 5%. So 10 of those people sign up for an account. Out of those 10 people, 2 of them decide to convert, making your conversion rate 20%. So you have spent $300 to acquire two paying customers. $150 per customer.

Now, let’s say you charge them $50 per month. Each customer has to stick around for 3 months for you to break even. Any more than that and you’ll turn a profit, however of course this is not factoring in any company expenses. You then realize how great content marketing is!

### Content marketing

Content marketing is free if you write the content yourself, lasts forever, and helps to boost your search ranking. Good content marketing can establish your brand as a reputable source of knowledge.

[Intercom](https://intercom.com), [InVision](https://invisionapp.com), and [HubSpot](https://hubspot.com) have demonstrated that [content marketing](https://en.wikipedia.org/wiki/Content_marketing) can be an effective way to drive traffic to your website. In general, you’ll need to spend time writing highly-relevant, highly-focused articles targeted towards specific search queries to get visitors to your website. For example, [our guide on the difference between qualitative and quantitative research](/guides/qual-quant) is targeted at answering the search query “what is the difference between qualitative and quantitative research.”

**See also: [The difference between qualitative & quantitative research](/guides/qual-quant)**

My first attempt involved writing a few blog posts about UX diary studies on Medium. Our [Medium blog](https://dovetail.blog) used to be on a subdomain (blog.getdovetail.io), and I read somewhere that it’s better for SEO to have posts on your main domain instead. I copied the research posts from Medium over to a new section on our website called [Guides](/guides), and wrote a couple more. In fact you’re reading one right now!

### Q&A sites like Quora, StackExchange, and Reddit

Posting your website on Q&A sites like Quora and StackExchange can be a good source of high-quality website leads because people tend to be in ‘problem-solving’ mode when browsing these sites.

A lot of Dovetail’s quality website traffic comes from [Quora](https://quora.com).

Search for a problem that your website solves (e.g. “what tools exist for analyzing survey results”), find the Quora question, and [post an answer](https://www.quora.com/Whats-an-automatic-efficient-way-to-analyze-answers-to-open-ended-survey-questions/answer/Benjamin-Humphrey). Link to your website and optionally include a disclaimer that you’re the owner.

Quora questions place highly on Google search ranking, so a common acquisition path has been a customer searches for a problem, clicks on the Quora link, sees my answer, visits our site, and signs up.

### Aggregator sites and directories

Aggregator sites like Product Hunt list lots of websites for a specific category or niche, e.g. startups, portfolio sites, design inspiration, etc.

From day one we noticed that people would sign up for Dovetail, take screenshots, and list us on aggregator sites like [nicelydone.club](http://nicelydone.club/), [sansfrancis.co](http://sansfrancis.co/), and [hypershoot.com](http://hypershoot.com/). We got a few sign ups from these sites, but mostly these sites are valuable to build backlinks for SEO.

**See also: [Link Building Tactics – The Complete List](http://pointblankseo.com/link-building-strategies)**

[Product Hunt](https://www.producthunt.com/posts/dovetail-2-3) in particular is supposed to be one of the permium aggregator sites for people to discover new statups. I had high expectations for Product Hunt came away somewhat disappointed. Their audience is mostly designers, developers, and startup founders who are looking for trendy software for inspiration. Most people on Product Hunt are unlikely to pay for B2B software.

If you’re not building a chatbot, Slack add-on, or a design prototyping tool, then don’t bother with Product Hunt. B2B products in a specific market don’t do well there. Instead, find out where your audience hangs out and go there. In our case, that’s Quora, Twitter, Medium, and email newsletters.

### Internal referrals through team invites

Referral is the best kind of marketing channel. People are much more likely to try something if it’s been recommended by a friend or colleague.

Lastly, another strategy we employ is in-product invitations. We needed to build ‘teams’ anyway in order to become a collaborative product. A nice side effect is user growth from researchers inviting the rest of their team. One person at a company might refer 5 or 6 of their colleagues.

Because our pricing model is not based on the number of collaborators you have (more on that in a later blog post), there is hardly any friction when inviting teammates.

## Measuring success

![A photo of a chart on a laptop](./quant.jpg)

You will spend a lot of time experimenting with different marketing channels until you find reliable ones that deliver high quality traffic at an acquisition cost less than their lifetime value. It’s important to note that marketing channels differ between industries and products. Beauty and clothing startups might have a lot of success on Instagram, but your highly technical data warehouse solution probably doesn’t lend itself to hipster, filtered photos.

When you experiment, you need to measure. Measuring different marketing strategies is the only way to find channels that work for you. We use [Mixpanel](https://mixpanel.com/) primarily for in-product behavioural analytics, and [Google Analytics](https://analytics.google.com) for page view and demographic data. It’s also a great idea to also install a [Facebook Pixel](https://en-gb.facebook.com/business/help/952192354843755) on your site even if you’re not planning on marketing via Facebook yet. It can start building a custom audience of website visitors which is great for remarketing later on.

With Mixpanel specifically, you will most likely need to do some work to connect the JavaScript library with your backend so you can link anonymous users browsing the website to the actual user ID in the database when they sign up. This means you can track someone’s journey from the website all the way into your product. Mixpanel then has some neat features that help you figure out the ‘aha!’ moments that cause people to convert.

Don’t leave analytics instrumentation too late. Add it as part of your regular development so you can start collecting data and learning from it straight away. With Google Analytics connected to AdWords, you can see what ads are generating paying customers. Likewise with Facebook. Optimize for conversion rather than clicks or impressions since that’s closer to revenue.
