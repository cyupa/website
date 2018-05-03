---
path: "/help/convert-spreadsheet"
date: "2018-05-03"
title: "Convert a spreadsheet of data to notes"
weight: 2
---

When [creating notes from a spreadsheet](/help/spreadsheet), it’s important to understand the difference between **structured data** and **unstructured data**.

## Structured and unstructured data

Spreadsheets consist of rows and columns with each cell containing a single entry. The first row is a header row which describes the column. Because each entry is in a separate cell in a unique column, this is structured data.

Dovetail is designed to work with unstructured data, so Dovetail notes are more like a Word document. Notes consist of a title, followed by a single, continuous block of rich text called the ‘Content’. This is unstructured data.

## Converting structured data

When you import a spreadsheet into Dovetail, you’re converting structured data in the spreadsheet to unstructured data in notes, tags, or insights.

Imagine you have a spreadsheet of responses to survey questions. Each question is a separate column, and the answers are cells in each column:

---

| Name | Question 1           | Question 2           | Question 3           |
| ---- | -------------------- | -------------------- | -------------------- |
| Jane | Answer to Question 1 | Answer to Question 2 | Answer to Question 3 |
| Mary | Answer to Question 1 | Answer to Question 2 | Answer to Question 3 |
| Zach | Answer to Question 1 | Answer to Question 2 | Answer to Question 3 |

---

When you import this spreadsheet into Dovetail, choose the **Name** column as the **Title** of the note, and map each question column as **Taggable content**.

Dovetail will append each ‘taggable content’ column to the note, from left-to-right, as it appeared in the spreadsheet. Your imported notes will end up looking like this:

> ### Jane
>
> **Question 1**
>
> Answer to question 1
>
> **Question 2**
>
> Anwer to question 2
>
> **Question 3**
>
> Answer to question 3
