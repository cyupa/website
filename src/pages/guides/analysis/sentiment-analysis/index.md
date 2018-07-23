---
date: "2018-07-23"
path: "/guides/sentiment-analysis"
title: "Beginner’s guide to sentiment analysis"
weight: 1
---

![A close up photo of a yellow ‘grimicing’ emoji balloon](./balloon.jpg)

Sentiment analysis (sometimes called “opinion mining” or “emotion AI”) is a [Natural Language Processing (NLP)](https://en.wikipedia.org/wiki/Natural_language_processing) technique to categorize text based on whether it expresses an opinion and whether the opinion is positive, negative, or neutral. Advanced sentiment analysis can also categorize text into emotional states like angry, happy, or sad.

Sentiment analysis is often used in customer experience, user research, and qualitative data analysis on everything from user feedback and reviews to social media posts.

Sentiment analysis can be combined with [Machine Learning (ML)](https://en.wikipedia.org/wiki/Machine_learning) to further categorize text by topic. Together, sentiment analysis and machine learning provide researchers with a method to automate the analysis of large amounts (thousands or millions) of qualitative textual data in order to identify patterns and track trends over time.

## Sentiment analysis by example

The easiest way to quickly understand what sentiment analysis can do for you is by looking at examples. Take the following three sentences:

1.  I love flying Air New Zealand because they have the best food.
1.  That orange Fiat Multipla is the ugliest car I’ve ever seen.
1.  I love this phone but wouldn’t recommend it to my friends.

As a human, you can read the first sentence and determine the person is offering a positive opinion about Air New Zealand. The second sentence is offering a negative opinion, and the last is also a negative opinion, although it’s a little harder to parse.

You had to read each sentence manually and determine the sentiment. **Automatic sentiment analysis**, on the other hand, can scan and categorize these sentences for you as Positive, Negative, or Neutral.

Like humans, sentiment analysis looks at sentence structure, adjectives, adverbs, magnitude, keywords, and more to determine the opinion expressed in the text. The advantage of sentiment analysis is that it’s much, much quicker.

## Pros and cons of sentiment analysis

Sentiment analysis works best with **large data sets written in the first person, where the nature of the data invites the author to offer a clear opinion**.

### Pros

* Great for quickly analyzing thousands, or even millions, of pieces of data where topic categorization is less important than an overall indication of sentiment.
* Can give you a starting point in qualitative data analyis by extracting strongly positive or negative sentences out of documents.
* Works particularly well with data where the author clearly expresses an opinion (e.g. app reviews, social media on political views, user feedback data).
* Somewhat context-agnostic – doesn’t matter if the data is about politics, mobile phone reviews, cooking recipes, or anything.
* Some providers (e.g. Google and Amazon) have support for multiple languages.

### Cons

* Sentiment analysis is not a replacement for ML-based auto-categorization, as it will only categorize based on the sentiment, not the topic discussed.
* Does not work well on text written in the third person (for example user testing observations) or where the data is not someone’s opinion on a product or service.
* It can struggle with complex sentences involving double negatives, sarcasm, adverbials, unknown proper nouns and brand names, and greetings (e.g. “Best wishes!” or “Looking forward to your response” in email signatures).

![A Macbook Pro touch bar showing a selection of emoji](./keyboard.jpg)

## How sentiment analysis works

Interested in how it actually works? There are three main approaches to sentiment analysis. These are **knowledge-based**, **statistical methods**, and **hybrid approaches**.

### Knowledge-based

Knowledge-based techinques categorize text based on unambiguous ‘affect words’ like love, like, hate, happy, sad, angry, and so on. This is the simplest and oldest technique, and also probably the least accurate.

### Statistical

Statistical methods use elements from Machine Learning (ML) where affect words are derived from a model trained on millions of other examples, and Natural Language Processing (NLP), where the computer breaks down sentences and detects the holder of a sentiment (the person with the opinion) and the target (the product or service).

### Hybrid

A hybrid approach leverages both machine learning and elements from knowledge representation in order to detect semantics that are expressed in a subtle manner. This could be through the analysis of concepts that do not explicitly convey relevant information, but which are implicitly linked to other concepts that do so.

## Use cases for sentiment analysis

Automatic sentiment analysis has many practical use cases in customer experience, user research, qualitative data analysis, social sciences, and political research.

### Analyzing user feedback

Sentiment analysis can be used to quickly analyze user feedback for products and services. For example, users of [Dovetail](https://dovetailapp.com) can connect Dovetail to user feedback apps like Intercom, UserVoice, and survey tools like Typeform, SurveyMonkey, and Wufoo. When user feedback arrives from these sources, Dovetail’s sentiment analysis automatically tags it with ‘Positive’ and ‘Negative’, allowing product managers and user researchers to measure trends and changes in user feedback over time.

### Categorizing reviews

Like user feedback, reviews are a perfect candidate for automatic sentiment analysis. Reviews could be for hotels, airlines, rental cars, Amazon purchases, mobile apps, or anything else. With [Dovetail](https://dovetailapp.com), users can upload a spreadsheet of reviews and have Dovetail automatically tag sentences with ‘Positive’ and ‘Negative’.

### Analyzing social media posts

Sentiment analysis is often used by researchers in combination with Twitter, Facebook, and YouTube’s API. A popular use case is trying to predict US elections based on the sentiment of tweets leading up to election day.

## Other NLP techniques

Sentiment analysis is one of many Natural Language Processing techniques. Other useful techniques that are useful in user research and qualitative data analysis include:

* [Automatic summarization](https://en.wikipedia.org/wiki/Automatic_summarization)
* [Machine translation](https://en.wikipedia.org/wiki/Machine_translation)
* [Named entity recognition (NER)](https://en.wikipedia.org/wiki/Named_entity_recognition)
* [Optical character recognition (OCR)](https://en.wikipedia.org/wiki/Optical_character_recognition)
* [Part-of-speech tagging](https://en.wikipedia.org/wiki/Part-of-speech_tagging)
* [Question answering](https://en.wikipedia.org/wiki/Question_answering)
* [Sentence breaking](https://en.wikipedia.org/wiki/Sentence_boundary_disambiguation)
* [Topic segmentation](https://en.wikipedia.org/wiki/Topic_segmentation)

## Start using sentiment analysis today

You can start using sentiment analysis in a variety of ways, however each has its own pros and cons.

* **Open source tools.** While free and flexible, these often require significant setup and may only run on certain operating systems.
* **Online APIs**. [Amazon Comprehend](https://aws.amazon.com/comprehend/), [Google Cloud](https://cloud.google.com/natural-language/), and [Microsoft Azure](https://azure.microsoft.com/en-au/services/cognitive-services/text-analytics/) offer paid Natural Language APIs which are designed for large scale operation but require programming experience to configure.
* **SaaS products**. Startups like [Dovetail](https://dovetailapp.com) include sentiment analysis in easy-to-use features that require no data science or programming experience.

![A colorful photo of a person standing in front of a wall holding some emoji balloons](./emoji.jpg)

#### Liked this article?

[Check out our other research guides](/guides) or [learn more](/) about how Dovetail can help you with customer feedback and qualitative data analysis.
