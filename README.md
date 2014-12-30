#Facebook URL Scrapper

Use this project to update url objects from your blog which make use of Facebook Open Graph. All you need is to make sure you have all links in a JSON file.

Contents of the project:

- index.html: just placeholder html tags
- scrap.js: where the magic happens
- enlaces.json: json file containing a desirable format
- jquery.js: needed to use jQuery library.

You can find more info on how to do this rescrapping stuff in [Facebook Developers blog](https://developers.facebook.com/blog/post/612/) Updating Objects section.

##Usage

In order to use this little script you need to place all your URLs in JSON format inside enlaces.json file or change this file with your own and then change the file call in scrap.js $getJSON function.

##Share the love

This script by [@cescquintero](https://twitter.com/cescquintero) when he was helping [@sarkozit](https://twitter.com/Sarkozit) scrapping a bunch of URLs for one of his blogs.

If you are a developer and you can make this script better, I encourage you to do so and share your work with me.

# License

The MIT License (MIT)

Copyright (c) 2014 Francisco Quintero

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
