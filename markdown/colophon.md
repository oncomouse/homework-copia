## What Is This?

This project algorithmically generates an example of what [Desiderius Erasmus](https://en.wikipedia.org/wiki/Desiderius_Erasmus) called a *copia*. Specifically, it randomly iterates through copious versions of the famous excuse "My dog ate my homework." You can also follow this flowing stream of eloquence at [@HomeworkCopia](https://twitter.com/HomeworkCopia).

## What is a *Copia*?

In *De Copia*, Erasmus suggests practicing the "abundant style" by imagining copious variation on given phrases. Famously, Erasmus offers 195 variations on the sentence "Your Letter Pleased Me Greatly" as an example of stylistic abundance in *De Copia*. [James J Brown, Jr.](http://jamesjbrownjr.net/) argues in ["The Machine That I Therefore Am"](http://muse.jhu.edu/journals/philosophy_and_rhetoric/v047/47.4.brown.html) that Erasmus's *copia* are tiny rhetorical algorithms and, as an example, discusses [@YourLetterBot](https://twitter.com/YourLetterBot), which produces further versions of pleased letter recipients.

## How Was This Made?

The grammar is generated using [RiTa](http://www.rednoise.org/rita/), which is a very powerful toolkit for computational literature. I was pointed toward [RiTa](http://www.rednoise.org/rita/) by [Darius Kazemi's helpful breakdown](http://tinysubversions.com/notes/sorting-bot/) of his code for [@SortingBot](https://twitter/SortingBot). I also used Darius's [corpora](https://github.com/dariusk/corpora) archive for both the [animals](https://github.com/dariusk/corpora/blob/master/data/animals/common.json) and the [adjectives](https://github.com/dariusk/corpora/blob/master/data/words/adjs.json), though I converted both lists to YAML. I used a thesaurus to generate synonyms for "ate."

I also wrote this as part of my attempts to learn [React](https://facebook.github.io/react/), [Webpack](https://webpack.github.io/), and [ECMAScript6](http://babeljs.io/), so this project is written using those tools. Message exchange between components is handled using [postal](https://github.com/postaljs/postal.js).

Because it uses [RiTa](http://www.rednoise.org/rita/)'s modular grammar, it should be fairly easy to substitute other corpora and create your own copia, though because of some documented bugs in RiTa, the project isn't quite as out of the box as I'd like.

The [source code for the entire project](https://github.com/oncomouse/homework-copia) is available on GitHub, if you want to take a look.