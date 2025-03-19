# SymbioticLab.github.io

Website for SymbioticLab.

Built using Hexo.

## Adding News posts
The news entry on the front page are simply posts with the special `News` category. New posts can be created
by running
```
node_modules/.bin/hexo new news "News Title"
```

## Testing Locally
[nvm](https://github.com/nvm-sh/nvm) is recommended.

You can start a server locally.
```
npm start
```
It will automatically pick up most modifications to posts. So a simple refresh will show the latest content.

When it's not picking up your modifications, do a clean build:
```
npm run clean && npm start
```

## Development
Source code is in the `develop` branch. Commits to this branch will be automatically built and pushed to the `master` branch, which will then be served at https://SymbioticLab.github.io.

The site is based on `hexo-theme-next`, with the following tweaks:

* Small tweaks in css styling are in `custom/*.styl`. They are read by the theme and merged with theme's own styling.
* Publist tag plugin provided by `hexo-next-publist`. This powers the publication list in `publication/index.md`.
* Custom page layout injected using `hexo-extend-theme`. The templates `custom/layouts/*.njk` can be used by setting the layout name in the front matter.
* Paginated front page with news. This uses a simple generator in `scripts/front-page-generator.js` to generate multiple routes which are then
rendered using a custom page layout `custom/front.njk`. The generator also reads in `source/_front.md` for contents before the news section.
* Posts with empty body are skipped. They will only show up in the list, but no link is generated. This is done by `scripts/skip-empty.js`.
* A fix to the pjax scroll position restoration, by replacing the theme layout file `_scripts/index.njk` with our own version.
Ideally, we only want to replace `_scripts/pjax.njk`, but due to limitations in `hexo-extend-theme`, that's not possible.
Because `pjax.njk` is pulled in by the `include` tag, rather than the `partial` helper.

### Tweaking Styles
Page styles can be modified in `custom/styles.styl` and `custom/variables.styl`. More is possible and the `theme-next` [documentation](https://theme-next.js.org/docs/advanced-settings/custom-files.html) has more details.

### Publist
This is a standalone plugin [`hexo-next-publist`](https://github.com/Aetf/hexo-next-publist). The plugin provides a `publist` tag which can be used as normal
in the markdown.

Tweaks can be made in its own repo. @Aetf will maintain the plugin.

### Adding new page with custom layout
[`hexo-extend-theme`](https://github.com/jiangtj/hexo-extend-theme) makes it possible to develop or override theme's layout templates.

Layout templates in `custom/layouts/*.njk` will have higher priority than theme's builtin ones in `node_modules/hexo-theme-next/layouts/*`.
By default, a post (`source/_posts/*.md`) uses `post.njk` and other markdowns uses `page.njk`.

To create a new page with custom layout, follow the steps below:

* Create a new layout template under `custom/layouts/my-custom.njk`
* Create a new markdown file at desired location under `source` and set `layout: my-custom` in front matter
```
---
title: A new page
layout: my-custom
date: 2020-01-01
---

This is my new page!
```
