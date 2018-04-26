---
path: "/help/convert-spreadsheet"
date: "2018-04-24"
title: "Convert a spreadsheet of data to notes"
weight: 2
---

When [creating notes from a spreadsheet](/help/spreadsheet), it’s important to understand the difference between **structured data** and **unstructured data**.

## Structured and unstructured data

Spreadsheets consist of rows and columns with each cell containing a single entry. The first row is usually a header row which describes the column. Because each entry is in a separate cell in a unique column, this is **structured data**.

Dovetail is designed to work with unstructured data, so Dovetail notes are more like a Word document. Notes consist of a title, followed by a single, continuous block of rich text called the ‘Body’. This is **unstructured data**.

## Converting structured data

When creating notes from a spreadsheet of data, you will need to decide how you will manage the conversion from structured data to unstructured data.

One way to do this is to combine the columns in your spreadsheet together. This way you can map multiple spreadsheet columns to the body of the note. Another way to think about this is moving from ‘horizontal’ to ‘vertical’.

For example, imagine you have a spreadsheet of responses to survey questions. Each question is a separate column, and the answers are cells in each column:

---

| Name | Question 1           | Question 2           | Question 3           |
| ---- | -------------------- | -------------------- | -------------------- |
| Jane | Answer to Question 1 | Answer to Question 2 | Answer to Question 3 |
| Mary | Answer to Question 1 | Answer to Question 2 | Answer to Question 3 |
| Zach | Answer to Question 1 | Answer to Question 2 | Answer to Question 3 |

---

When you import this spreadsheet into Dovetail, you will not be able to map more than one column to the body of the note.

A workaround is to combine columns together in a single cell, using [newlines](https://en.wikipedia.org/wiki/Newline) to separate your questions and answers. In spreadsheet software, newlines can usually be entered using the keyboard shortcut **Shift + Enter**.

Change your spreadsheet to look like this:

---

| Name | Body                                                                                                                               |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Jane | Question 1<br><br>Answer to Question 1<br><br>Question 2<br><br>Answer to Question 2<br><br>Question 3<br><br>Answer to Question 3 |
| Mary | Question 1<br><br>Answer to Question 1<br><br>Question 2<br><br>Answer to Question 2<br><br>Question 3<br><br>Answer to Question 3 |
| Zach | Question 1<br><br>Answer to Question 1<br><br>Question 2<br><br>Answer to Question 2<br><br>Question 3<br><br>Answer to Question 3 |

---

Now, when you upload this spreadsheet, you can map the ‘Body’ column to the note body and retain your original columns.

Dovetail will interpret newlines as paragraphs, so when you create notes from this spreadsheet, your notes will look like this (assuming you map ‘Name’ to the note title):

> **Jane**
>
> Question 1
>
> Answer to question 1
>
> Question 2
>
> Anwer to question 2
>
> Question 3
>
> Answer to question 3
