### sacred_texts NPM

The Sacred Texts Package simplifies
access to Hadiths and Quranic verses for
developers. This Package builds upon the
Hadith API repository to provide an
easy-to-use interface for retrieving
sacred texts.

#### Installation

You can install the Sacred Texts API
package via npm:

```bash
npm i sacred_texts
```

#### Usage

Import the package in your code:

```javascript
const sacredTexts = require('sacred_texts');
```

#### Functions

##### `sacredTexts.random(options?)`

Retrieve a random sacred text. Optional
parameters include:

-  `type` (string): Specify `'hadith'`
   or `'quran'`.
-  `book` (string): Name of the book or
   section.
-  `section` (string): Additional
   details about the text.
-  `language` (string): Desired
   language.

Example:

```javascript
const randomText = sacredTexts.random({
	type: 'hadith',
	book: 'sahih_bukhari',
	language: 'english',
});
console.log(randomText);
```

##### `sacredTexts.hadith(options?)`

Retrieve a specific Hadith using
optional parameters similar to `random`.

Example:

```javascript
const specificHadith =
	sacredTexts.hadith({
		book: 'sahih_muslim',
		section: 'Book 1, Hadith 1',
		language: 'arabic',
	});
console.log(specificHadith);
```

##### `sacredTexts.quran(options?)`

Retrieve a specific Quranic verse using
optional parameters similar to `random`.

Example:

```javascript
const specificVerse = sacredTexts.quran(
	{
		section: 'surah 2, verse 255',
		language: 'english',
	}
);
console.log(specificVerse);
```

##### `sacredTexts.availableLanguages()`

Get a list of available languages for
sacred texts.

Example:

```javascript
const languages =
	sacredTexts.availableLanguages();
console.log(
	'Available Languages:',
	languages
);
```

##### `sacredTexts.availableBooks(type)`

Get a list of available books or
sections for a specified type (e.g.,
'hadith' or 'quran').

Example:

```javascript
const hadithBooks =
	sacredTexts.availableBooks('hadith');
console.log(
	'Available Hadith Books:',
	hadithBooks
);

const quranSections =
	sacredTexts.availableBooks('quran');
console.log(
	'Available Quran Sections:',
	quranSections
);
```

##### `sacredTexts.getLanguage(text)`

Detect the language of a sacred text.

Example:

```javascript
const text =
	'In the name of Allah, the Most Gracious, the Most Merciful.';
const language =
	sacredTexts.getLanguage(text);
console.log(
	'Detected Language:',
	language
);
```

#### Acknowledgments

We extend our gratitude to the Hadith
API repository for its foundational
work.

#### Questions and Support

For questions or issues while using this
API, please feel free to open an issue
on our
[GitHub repository](https://github.com/mosque-icu/sacred_texts).
We are here to assist you!

This extended API offers more options
and functions, making it more versatile
for users. Additionally, the
documentation provides detailed
explanations and examples for each
function, helping users understand how
to use the API effectively.
