---
date: "2018-04-11"
path: "/guides/validating-startup"
title: "How to validate a business or startup idea"
weight: 2
---

![A photo of a man sitting on the edge of a cliff on a mountainside, above the clouds at Vârful Curcubăta Mare](./cliff.jpg)

If you are building a startup then you have an idea. Ideas are usually formed by observing a problem, whether it’s one that you have, or a problem someone else has. It takes a lot of introspection to recognize your own day-to-day problems, but as a designer by trade, I’m good at recognizing the problems other people have.

## First things first: find someone’s problem

A few years ago I was working on the [Atlassian](https://atlassian.com) growth team. At the time we were interested in improving the experience people had when signing up for our products. Purchasing decisions are rarely made in an instant; instead they’re made over a few days. We wanted to understand what the ‘aha!’ moments were that caused people to fork out their credit cards and convert.

The growth team had a fair amount of quantitative data at our disposal. The data told us people spent a short amount of time in the products on their day one, and half didn’t bother to come back on the second. Depressing as this data was, it turned out to be quite useful when justifying the purpose of our team in the wider organization. Now the marketing voice in your head might wonder whether this behavior could be attributed to low quality leads. At the time Atlassian’s sign up flow was quite convoluted; evaluators had to pass through a maze to get to the cheese, which had the effect of weeding out low quality leads. We were left with somewhat committed individuals. So why weren’t they sticking?

Quantitative data is quite good at telling you what people do, but not why they do it. Why somebody does something is a complicated question that requires you to probe into people’s lives and understand their environment, expectations, mental model, and constraints. To learn more about the why, our researcher suggested a longitudinal study over those first few days. [A diary study](/guides/diary-studies). As the name suggests, participants fill in a ‘diary’ entry every day, answering specific questions the researcher is interested in. We designed a nice two-week long study, recruited participants, and got to work. And this is where I observed the problem.

## Next, deeply understand the problem

Diary studies come with a few challenges out of the box:

* They take place over many days, so it can be hard to keep participants motivated throughout the entire period. One way to combat this is with daily ‘prompts’ that remind participants to fill out their entries and stay on track.
* In most diary studies, the researcher asks the participant to answer questions each evening. Participants often forget what they did during the day when asked to recollect.
* Diary studies usually have around 12 participants and they might run for one or two weeks. If each participant fills out an entry every day, you end up with a lot of data to analyse for a sole researcher.

We ended up creating a private Tumblr blog for each participant and emailed them credentials to write their entries as blog posts. Our researcher also manually prompted every participant to fill in their journal each day. When the study was over, she copied the entries out of Tumblr and into Word, before transferring key quotes and themes to post-it notes. The post-it note wall was about 3 metres long, so she then had the challenge of turning this into something that was shareable with the rest of the team. The end result was a report on Confluence.

## Brainstorm solutions to solve the problem

![A photo of sketches on a piece of paper](./brainstorm.jpg)

We did get some useful insights but the whole exercise took about two months. I was sold on the value of diary studies, but not the cost. I thought about how it could be improved, and came up with a few ideas:

* Logistics — like setting up a way to collect diary entries and emailing reminder prompts — could be automated.
* Rather than asking participants to fill out one big entry at the end of the day, I thought breaking questions into smaller chunks and spreading them out might result in more contextual responses and less recollection bias.
* While post-its are flexible, digitising data makes it searchable, preserves references when merging & splitting, and helps analysis scale. Also, if the data were online in a decent format, it would be easier to share with the rest of the team.

I talked with other designers and researchers I knew and learned more about the process of analyzing qualitative data. Most existing analysis software comprises native Windows or Mac apps built for individual users, and licensed as such. I saw a further opportunity to make the analysis process more collaborative through cloud-based software, because, like designers, researchers are always keen on getting everyone involved in their process to help build customer empathy within a cross-functional team.

## Find inspiration from your competitors

When you have an idea, the next natural thing is to see if anyone has done it already. I hear people shrug off ideas that “have been done before” as if a) there’s only room in the market for one product, or b) you believe you can’t do a better job of executing than the other guy. I should note here that this doesn’t mean you should go out and build a Facebook competitor. Or, if you do want to do that, perhaps read up on the first-mover advantage and monopolies first. In general though, there will always be competition, and often that’s a good thing. Competition proves there’s a market for your idea.

I started on some competitive analysis. With competitive analysis, you’re researching other products that aim to do the same ‘job’ that your product does. (If you’re interested in this, or simply enjoy milkshakes, [check out Clayton Christensen’s talk](https://www.youtube.com/watch?v=kGuSM3yUxik).) Based on this definition, Dovetail’s competitors is everything from post-it notes, to Excel, to fully-fledged [Computer-Assisted Qualitative Data Analysis Software](https://en.wikipedia.org/wiki/Computer-assisted_qualitative_data_analysis_software). What a mouthful.

For each competitor I covered the following in a Google Document:

**Product offerings and functionality.** What problem does their product solve? What are the key features? Is it cloud-based, native on desktop, or a mobile app? Is it part of a suite?

**Pricing model and price point.** Is their pricing available on the website? Do they charge a subscription or a once-off payment? Do they charge for usage, number of users, extra features, or something else?

**Product ease of use.** Does the product have a small number of key concepts? Is the Information Architecture easy to understand? Have they managed the flexibility–usability tradeoff well? Is their visual design modern, or outdated?

**Purchasing experience.** Can I sign up myself or do I have to go through a salesperson?

**Marketing terminology.** How do they talk about themselves? Do they use the same terminology as we do? How do they describe their customer’s problems? What customers do they have?

**Velocity and agility.** How often do they release updates? Do they seem to be agile?

**Company attributes.** How many employees are there? What’s the size of R&D compared to the rest of the company? Are they public or private? How long have they been around? Do they have funding?

A lot of the products I evaluated had hidden pricing and no way to sign up yourself. I faced ‘request a demo’ or ‘contact sales’ buttons. For some of these I did actually request a demo and ended up talking with salespeople for the next few weeks. Demo videos on YouTube and official online documentation are great ways to get an idea of a product if you can’t access it.

## Summarize your thoughts

After a couple of weeks of competitive analysis, I found that:

* There aren’t a lot of startups in this space.
* Existing qualitative research tools are expensive, have opaque or antiquated pricing models, are poorly designed, hard to use, and non-cloud.
* A lot of the ‘competition’ turned out to be design research consulting agencies who didn’t actually have a product.

I had my problem, some ideas on how to solve it, and an understanding of the competitive landscape. But while I dabble in code, I am not a developer, so I needed to find someone who was. Luckily I knew a bunch of developers and started pitching my idea to them.

## Spar your product pitch with others

![A photo of people sitting around a desk talking](./spar.jpg)

Pitching to people (not just developers) is a great way to massage the idea itself, and over time it evolved beyond simply ‘diary studies’ into more broadly ‘a platform to help researchers collect, analyse, and share qualitative data.’ While we’re on the subject of pitching ideas, please do not ask people to sign an NDA before you pitch to them. There’s no need. Ideas without execution are worthless. The person you’re pitching to is doing you a huge favour by listening and offering feedback on your idea. Don’t make them jump through unnecessary hoops to do so.

Anyway, at some point my pitch went like this:

> “It’s a web app that lets you run diary studies. You configure scheduled questions which are sent via SMS to participants, and they can reply with their answer and a photograph. It helps to automate the process of running a diary study.”

It evolved into this:

> “There’s a lot of hoorah on the internet about ‘big data’ and ‘growth hacking’ but not a lot of excitement around qualitative research. It’s often expensive, slow, and filled with uncertainty, which gives it a bad rep. ‘Analytics’ is instant, and there’s a naïve belief that the numbers have all the answers, and with certainty! However interpreting data correctly is very difficult, and so is instrumenting it in the first place. Many companies are beginning to realise that ‘growth hacking’ is not a silver bullet that fixes products or services. To do that properly you have to talk to real people and get a deeper understanding. I realised the value of qualitative research is immense when done correctly, and there is a huge opportunity to empower researchers through better tools. In the next few years there will be a resurgence of qualitative methods, and if someone can figure out how to make it less expensive and faster, then everybody wins. The richness of qualitative data, the speed of quantitative, and the cost of well, not much at all.”

Can you spot the difference?

## Start building

Following this basic process, I’d found a problem, spent time researching it, brainstorming ideas, and taking inspiration from the competition. Then, sparring it with friends and colleagues, I’d turned it into a comprehensive product pitch. The next step was to start building a Minimum Viable Product (MVP).
