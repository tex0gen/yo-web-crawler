> Redirect Crawler

## Installation

First, install [Yeoman](http://yeoman.io) and generator-crawl using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
git clone https://github.com/tex0gen/yo-web-crawler.git
cd yo-web-crawler
npm install
npm link
```

Then generate your new project:

```bash
yo crawl
```

Your site links will be added to a CSV named after your project name in the directory the command 'yo crawl' is run in. Along with the URL, the status code that's returned for that link will also be added to the CSV.


## License

Apache-2.0 © [Steve]()


[npm-image]: https://badge.fury.io/js/generator-crawl.svg
[npm-url]: https://npmjs.org/package/generator-crawl
[travis-image]: https://travis-ci.com/tex0gen/generator-crawl.svg?branch=master
[travis-url]: https://travis-ci.com/tex0gen/generator-crawl
[daviddm-image]: https://david-dm.org/tex0gen/generator-crawl.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/tex0gen/generator-crawl
