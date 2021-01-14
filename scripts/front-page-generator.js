/* global hexo */

'use strict';

const pagination = require('hexo-pagination');

async function generate(locals) {
  console.log("Goes here");

  const config = this.config;
  const posts = locals.categories.findOne({name: 'News'}).posts.sort('-date');

  const paginationDir = config.pagination_dir || 'page';
  // smaller per page count on front page
  const perPage = 5;

  const content = await this.render.render({path: 'source/_front.md'});

  return pagination('', posts, {
    perPage: perPage,
    layout: ['front', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      content,
    }
  });
};

hexo.extend.generator.register('front', generate);
