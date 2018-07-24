---
date: "2018-04-11"
path: "/guides/survey-analysis"
title: "How to analyze open-ended survey questions"
weight: 3
---

![Photo of a laptop sitting on a sofa showing statistics and charts](./laptop.jpg)

Designing surveys is like making pasta. Anyone can make okay pasta, but it takes effort, patience, and skill to make amazing pasta. [Likewise for surveys](https://medium.com/research-things/on-surveys-5a73dda5e9a0).

The quality of your results depends on the questions you ask, the order you ask them in, and the type of people who complete your survey. Not to mention how many people respond and its statistical significance. However, this article is about analysis, not survey design, so from here on we’ll assume you’re making great surveys and focus on analyzing the data you collect.

Analysis is what you do with survey results once you’ve collected them. It can be as rigorous or relaxed as you like. If you’re just looking for directional indicators, there’s no need to spend weeks analyzing your data. If your survey is mostly comprised of quantitative questions (e.g. boolean yes / no, multiple choice, Likert scale) then your analysis should be a fairly straightforward game of crunching numbers, and there are plenty of articles on the web that talk about analyzing quantitative data with formulas in spreadsheets.

**See also: [The difference between qualitative & quantitative research](/guides/qual-quant)**

Analysis gets a bit more complicated if you’re creating surveys with open-ended questions. Analyzing this sort of data is called qualitative data analysis or QDA for short. It’s usually a cumbersome process involving some combination of clunky analysis software, sticky notes, spreadsheets, Microsoft Word, and lots of coffee. For lots of researchers, it’s kind of the least favorite part of research.

In this article we’ll give a basic overview of how to analyze qualitative data in layman’s terms, and offer a few suggestions on how to get better insights from open-ended survey questions, while making your life easier.

## Step one – understand your goals

![A photo of a single sticky note with a light bulb sketch](./why.jpg)

If most people told you they’d rather fight one horse-sized duck instead of 100 duck-sized horses, how would that information change your product? Your research (and therefore analysis) should have a practical purpose. Start by asking yourself what you’re trying to understand, and what you would change about your product / service based on some hypothetical findings.

In the case of user research, generally researchers are looking for user pain points and trying to understand what would solve them. More practically, they might be tasked with understanding why customers churn or don’t purchase in the first place. Market research is a bit different in that researchers want to understand broader trends and discover opportunities.

Other uses for qualitative data analysis include analysis of competitors, industry trends, customer interview transcripts, user testing notes, and of course analyzing survey results.

Each nugget of wisdom you learn is usually called an “insight”. The general idea is to start with a bunch of raw data and end with these actionable insights that you can share with your team, stakeholders, or clients.

## The art of coding (no, not that kind)

The actual method of turning qualitative data into insights is a technique called [coding](<https://en.wikipedia.org/wiki/Coding_(social_sciences)>). Personally I prefer the simpler term ‘tagging’ instead. Basically, tagging qualitative data involves these five steps:

1.  Look through chunks of qualitative data (text, images, or video)
1.  Identify repeating themes (e.g. pain points, problems, or opportunities)
1.  Tag them with a ‘code’ to make them searchable and countable
1.  Evolve your codes, merging them and breaking them down
1.  End up with a bunch of themes and an idea of their frequency.

Here’s an example. Let’s say you’re a researcher working for a large supermarket chain that offers home deliveries. After someone’s order is delivered, they’re emailed a survey which asks them a few open-ended questions like “How was your delivery experience?” and “What can we improve for next time?”

Imagine this is one of the answers to the first question:

> The delivery driver was two hours late. We had to leave the house to drop our son off at water polo practice. The driver arrived while we weren’t home, so he called us, but had an unknown number. We only answered after he called a few times. He refused to leave the groceries without us signing for him, so we had to rush home to meet him. Totally inconvenient!

You might notice there are a few distinct problems happening here.

1.  The driver was not on time.
1.  People have lives so can’t always wait if the driver is late.
1.  Company cellphones block caller ID.
1.  Policy mandates the groceries can’t be left without a signature.

The survey responses are probably stored in the survey software like SurveyMonkey, Wufoo, Typeform, Qualtrics, and so on. Most survey software is built to help you collect a lot of data, but they usually have few features to help you make sense of the data you’ve collected. So you download the data to analyze in a spreadsheet, on paper, or in another analysis tool.

You might start off by tagging the entry with “Late driver” and “Company policy”. Perhaps you’d break down “Company policy” into more specific tags like “Driver caller ID” and “Signature required”. You’ve just started creating a system of tags, which you can then re-use when you hear these problems again from another customer.

Eventually you might discover that the caller ID problem isn’t a common complaint (only 5 people out of 2000 mentioned that in the past month), but late drivers certainly is (340 / 2000 in the past month). So you report the findings to the head of logistics, who starts to research the core reasons why her drivers are late, and the whole cycle repeats itself. Everyone’s doing research all the time to different degrees to understand problems and weigh them up against each other in terms of pain, frequency, and cost.

## You’re already good at this

![Photo of a pattern on a building](./pattern.jpg)

Qualitative research is fundamentally about understanding people and recognizing patterns. Thankfully, pattern-recognition is something humans are innately extremely good at [thanks to the expansion of our cerebral cortex](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4141622/).

Pattern-recognition allows animals to do cool stuff like create cognitive maps of the environment, distinguish individuals and their emotional state based on facial features, and use gestures to communicate with others. The cognitive repertoire of humans far exceeds that of animals, and gives humans creativity and invention, spoken and written languages, reasoning and rapid decision-making, imagination and mental time travel, and magical thinking & fantasy.

So while you’re slogging through tagging your survey responses, just remember that it’s much easier than it could be thanks to your innate human ability to recognize patterns in things! Thank you, cerebral cortex 👍

## Can’t machines do this for us?

![Photo of a laptop with a ‘Matrix’ style wallpaper](./matrix.jpg)

Kind of. There are two broad techniques to automate qualitative data analysis. Both of them work in certain scenarios but are not without constraints.

#### Automated rules

There’s a lot of research software that lets you set up automated ‘rules’ based on keywords. These rules essentially parse incoming data and tag it with something automatically. For example you might set up a rule to tag anything containing the word “late” with “Late driver”.

This works okay, however it’s prone to mistakes because the context is missing—the word “late” alone could be used in a variety of contexts—and there are many ways to describe a late driver without using that particular keyword, for example “not on time” or “delayed delivery”.

#### Machine learning

There’s a lot of emerging technology around machine learning where you’d train an Artificial Intelligence (AI) to recognize patterns and tag them for you.

These systems tend to be more accurate than automated rules, but only with a lot of data to train the system in the first place. Like tens of thousands of data points. Not many small–medium companies have that much training data. As well as the training data requirement, machine learning systems are difficult to set up, so most user researchers outside of huge companies or academia ultimately resort to analyzing qualitative data manually.

---

#### Liked this article?

[Check out our other research guides](/guides) or [learn more](/) about how Dovetail can help you with customer feedback and user research analysis.
