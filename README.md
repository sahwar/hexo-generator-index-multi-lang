# hexo-generator-index-multi-lang


> **Attention! This plugin is deprecated and merged into [hexo-generator-basic-set].**

Multi-language Index generator for [Hexo].
A variant of [hexo-generator-index].

## Features

+ Individual homepages in expected url.
+ Pagination by languages.

## Installation

``` bash
$ npm install hexo-generator-index-multi-lang --save
```

## Instruction

1. Change your settings in `_config.yml`
  + Set `languages`.
  + Start your `new_post_name` with `:lang/`
  + Start your `permalink` with `:lang/`
2. Create your new post with `hexo new <layout> <title> --lang <your language>`
3. run `hexo g`

**Note: No folder will be created if you leave `languages` unfilled or just assign one language, an index.html will be generated under `public/`, just like the original one does.**

## Options

``` yaml
index_generator:
  per_page: 10
  order_by: -date
```

- **per_page**: Posts displayed per page. (0 = disable pagination)
- **order_by**: Posts order. (Order by date descending by default)

## Known Issues

+ Not compatible with the original plug-in.
+ No index will be generated if there is no post of corresponding language, even if you have declared that language in `_config.yml`

## License

MIT

[Hexo]: http://hexo.io/
[hexo-generator-index]: https://github.com/hexojs/hexo-generator-index
[hexo-generator-basic-set]: https://github.com/zyzyz/hexo-generator-basic-set
