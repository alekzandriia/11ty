# A blog template made with 11ty

This is a a very simple unstyled blog starter that uses the 11ty framework for site generation.

## Built With

- [11ty](https://www.11ty.dev/) (Static site generator)
- [Nunjucks](https://mozilla.github.io/nunjucks/) (Templating language)
- [YAML](https://yaml.org/) (Front matter language for metadata)
- [Luxon](https://moment.github.io/luxon/#/) (Date formatter)

# Installation

**00. Make sure that you have [Node](https://nodejs.org/en) installed**

```
node -v

# This should print the node version number if you have node installed
```

**01. Clone or download the repo**

**02. Install project dependencies**

```
npm install
```

**03. Use npm to serve static files locally**

```
npm start
```

**04. Add your own flavour!** This template includes an empty `styles.css` so you can make your site pretty. ✨ You can build upon this humble starter by creating additional pages, components, and publishing your own articles. Use `npm start` to rebuild the site after you make changes.

# Usage

## File Structure

Articles are stored in the `archive` directory as markdown files. The pages are automatically tagged as `post`s & generated using the `article.njk` template as specified in `archive.json`.

The template files are stored in the `_includes` folder. Feel free to add more! Note: The `base.njk` file is required to generate your html pages as it houses essential html (i.e. doctype, html and head tags.)

All of your content is generated into the `/public/` folder, which is the website's final output folder.

## How to add a new page

1. Create a new file in the `/src` directory, using the `.njk` file extension (example: `new-page.njk` ).

2. Add your page's metadata (i.e. title & layout) at the top of the page. Your title can be whatever you want. The layout should use the `base.njk` template.

```
---
title: New Page
layout: 'base.njk'
---
```

3. Write your page's code!

## How to add a new component

Page layouts are generated using the templates stored in the `_includes` directory. Templates can be nested inside one another to create more complex layouts. I have included some basics to get you started (base, header, footer, article, article-snippet), but there's no real limit to have many you can have.

1. Create a new file in the `/src/_includes` directory, using the `.njk` file extension (example: `new-component.njk` ).
2. Write your component's code!
3. To display your component on a particular page you will need to include the component template on that page. If you want it to be visible on every page then you can add it to the `base.njk` template or one of the component's inlcuded within it (i.e. `header.njk`, `footer.njk`).

```
{% include 'new-component.njk' %}
```

## How to add a new article

Articles are written in markdown.

1. Create a new file in the `/src/archive` directory, using the `.md` file extension (example: `new-post.md` ).
2. Add your article's metadata at the top of the page.

```
---
title: My New Article
author: Your Name
date: 2038-01-19
image: "https://picsum.photos/200"
alt: "This is a placeholder image"
description: "This is a description of what is to come."
---
```

3. Write your content underneath the metadata section.

### Article Collections

In order to display your posts in the archive or on the Recent & Featured list they need to be tagged appropriately.

By default, all posts are tagged with the `post` tag. This allows them to appear in the Recent collection.

To display a post in the Featured collection you will need to set it to featured using the `featured` tag.

IMPORTANT NOTE: You must specify BOTH the `featured` tag and the `post` tag (because setting any custom tags will override the default tagging behaviour).

```
tags: ["post", "featured"]
```

# Author

Alex O'Reilly
[🔗](https://www.alekzandriia.com)
[💌](mailto:hello@alekzandriia.com)

# License

[MIT](https://choosealicense.com/licenses/mit/)

# Helpful Resources

[11ty.rocks](https://11ty.rocks/) - Awesome resource for all things 11ty!
