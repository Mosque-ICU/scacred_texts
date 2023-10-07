Sacred Texts Package The Sacred Texts
package @mosque-icu/sacred_texts) is
designed to make it easy for developers
to access Hadiths and potentially
Quranic verses for their applications.
This package builds upon the work of the
Hadith API repository to provide a
simple interface for retrieving sacred
texts.

Installation You can install the package
using npm:

npm install @mosque-icu/sacred_texts

Usage

Importing the Package

import { random, hadith, quran } from
'@mosque-icu/sacred_texts';

Usage random(options?) The random
function allows you to retrieve a random
sacred text. It accepts the following
optional parameters:

type (string, optional): This parameter
allows you to specify the type of
religious text you want to retrieve. You
have two options: 'hadith': If you
provide 'hadith' as the value for this
parameter, the function will retrieve a
Hadith (a sayings or actions of the
Prophet Muhammad (sallallahu alaihi
wasallam peace and blessings be upon our
prophet) in Islamic tradition).

'quran': If you provide 'quran' as the
value, the function will retrieve a
Quranic verse (a verse from the Quran,
the holy book of Islam).

Default: If you don't specify this
parameter, it will return either a
Hadith or a Quranic verse, depending on
availability.

book (string, optional): This parameter
allows you to specify the name of the
book or section you want to retrieve.
For example: 'juz': If you provide
'juz1' as the value, it might retrieve a
specific section of the Quran, such as
the first section. Specific Hadith book

'name': If you provide the name of a
specific Hadith book, it will retrieve
Hadith from that book.

section (string, optional): This
parameter is used to provide additional
details about the text you want to
retrieve: For Quranic verses, you can
specify the section, such as 'surah 1',
to retrieve a specific chapter and verse
from the Quran. For Hadith, you can
provide a specific Hadith number to
retrieve a particular saying or action
of the Prophet Muhammad (sallallahu
alaihi wasallam peace and blessings be
upon our prophet).

language (string, optional): You can
specify the language of the text you
want. If you don't provide this
parameter, the function will return the
text in any available language.
available languages are

(as a extra mission you could navigate
to
node_modules/sacred_texts/constants/langauges
to see our source code) 😎

'arabic', 'bengali', 'english',
'french', 'indonesian', 'russian',
'tamil', 'turkish', 'urdu'

const randomText = random({ type:
'hadith', book: 'sahih_bukhari' });

console.log(randomText);

hadith(options?) The hadith function
allows you to specifically retrieve a
Hadith. It accepts the same optional
parameters as random.

javascript Copy code const
specificHadith = hadith({ book:
'sahih_muslim', section: 'Book 1, Hadith
1' });

console.log(specificHadith);

quran(options?) The quran function
allows you to specifically retrieve a
Quranic verse. It also accepts the same
optional parameters as random.

const specificVerse = quran({ section:
'surah 2, verse 255' });

console.log(specificVerse);

Special Thanks We would like to express
our gratitude to the Hadith API
repository for providing the foundation
for this package.

If you have any questions or encounter
issues while using this package, please
feel free to open an issue on our**
GitHub repository** . _ We are here to
help!_
