'use strict';

const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

hexo.extend.filter.register('before_post_render', function (data) {
  if (data.layout !== 'awards') return data;

  const awardsFile = path.join(path.dirname(data.full_source), 'awards.yml');
  if (!fs.existsSync(awardsFile)) return data;

  const raw = yaml.load(fs.readFileSync(awardsFile, 'utf8'));

  // Group flat list by year (descending)
  const byYear = {};
  raw.forEach(function (item) {
    if (!byYear[item.year]) byYear[item.year] = [];
    byYear[item.year].push(item);
  });
  data.awards = Object.keys(byYear)
    .sort(function (a, b) { return b - a; })
    .map(function (y) { return { year: y, items: byYear[y] }; });

  return data;
});
