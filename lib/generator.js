'use strict';

var pagination = require('hexo-pagination');

module.exports = function(locals) {
  var config = this.config;
  var posts = locals.posts.sort(config.index_generator.order_by);
  var paginationDir = config.pagination_dir || 'page';

  function IsValidLang(lang)
  {
    return (lang && lang.length > 0 && lang !== 'default');
  }

  var languages = config.language;
  if (!Array.isArray(languages)) {
    languages = [languages];
  }

  if (languages.length > 1) {
    languages = languages.filter(function(lang) {
      return IsValidLang(lang);
    });
  }

  var isMulti = languages.length > 1;
  return languages.reduce(function(result, lang, index, array) {
    var base = isMulti ? '/' + lang.toString() : '/';
    var filteredPosts = isMulti ? posts.filter(function(post) {
      return lang === post.lang || post.language;
    }) : posts;

    var data = pagination(base, filteredPosts, {
      perPage: config.index_generator.per_page,
      layout: ['index', 'archive'],
      format: paginationDir + '/%d/',
      data: {
        __index: true
      }
    });

    return result.concat(data);
  }, []);
};
