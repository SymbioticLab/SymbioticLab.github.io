# SymbioticLab.github.io

Website for SymbioticLab.

Built using Hexo.

## Adding News posts
The news entry on the front page are simply posts with the special `News` category. New posts can be created
by running
```
node_modules/.bin/hexo new news "News Title"
```

## Development
Source code is in the `develop` branch. Commits to this branch will be automatically built and pushed to the `master` branch, which will then be served at https://SymbioticLab.github.io.

The site is based on `hexo-theme-next`, with the following tweaks:

* Small tweaks in css styling are in `custom/*.styl`. They are read by the theme and merged with theme's own styling.
* Publist tag plugin provided by `hexo-next-publist`. This powers the publication list in `publication/index.md`.
* Custom page layout injected using `hexo-extend-theme`. The templates `custom/*.njk` can be used by setting the layout name in the front matter.

### Tweaking Styles
Page styles can be modified in `custom/styles.styl` and `custom/variables.styl`. More is possible and the `theme-next` [documentation](https://theme-next.js.org/docs/advanced-settings/custom-files.html) has more details.

### Publist
This is a standalone plugin [`hexo-next-publist`](https://github.com/Aetf/hexo-next-publist). The plugin provides a `publist` tag which can be used as normal
in the markdown.

Tweaks can be made in its own repo. @Aetf will maintain the plugin.

### Adding new page with custom layout
To create a new page similar to the front page with custom layout and everything, follow the steps below:

* Create a new layout template under `custom/layout-name.njk`
* Edit the config to inject the template by adding a new entry in `_config.yml`
```yaml
theme_plus:
  views:
    - file: 'custom/layout-name.njk'
      path: 'layout-name.njk'
```
* Create a new markdown file at desired location under `source` and set the layout to `layout-name` in front matter
