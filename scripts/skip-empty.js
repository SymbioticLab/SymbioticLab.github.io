'use strict'

function isEmptyOrSpaces(str){
    return str == null || str.match(/^\s*$/) !== null;
}

// Posts with empty body are marked with an extra field `__empty = true`
async function mark_empty() {
  const { locals } = this;
  // make sure to flush locals cache
  // otherwise the posts list isn't complete
  locals.invalidate();
  const posts = locals.get('posts').toArray();

  for (const post of posts) {
    const { content, categories } = post;
    if (!categories.some(cat => cat.name == 'News')) {
      continue;
    }

    post.__empty = isEmptyOrSpaces(content);
    if (post.__empty) {
      this.log.debug(`Mark ${post.path} as empty: ${post.__empty}`);
    }
    await post.save();
  }
}

// Routes for empty posts are removed
async function remove_empty_route() {
  const { route, locals } = this;
  const posts = locals.get('posts').toArray();

  for (const post of posts) {
    if (post.__empty) {
      this.log.info('Removing empty route', post.path);
      route.remove(post.path);
    }
  }
}

hexo.extend.filter.register('before_generate', mark_empty);
hexo.extend.filter.register('after_generate', remove_empty_route);
