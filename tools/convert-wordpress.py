#! /usr/bin/env python3
import xmltodict
import pendulum
import yaml

from pathlib import Path
from collections import OrderedDict


def format_tags(post):
    categories = post['category']
    if not isinstance(categories, list):
        categories = [categories]
    tags = [
        cat['#text']
        for cat in categories
        if cat['@domain'] == 'post_tag'
    ]
    return tags


def format_date(post):
    pubDate = post['pubDate']
    # Wed, 17 Feb 2016 03:25:32 +0000
    return pendulum.from_format(pubDate, 'ddd, DD MMM YYYY HH:mm:ss ZZ').in_tz('America/Detroit')


def format_slug(post):
    return post['wp:post_name']


def main():
    import sys
    input_file = Path(sys.argv[1])
    out = Path('posts')

    print(f'Writing to {out}')

    out.mkdir(exist_ok=True)

    # make yaml dump OrderedDict as a mapping not a python object
    represent_dict_order = lambda self, data: self.represent_mapping('tag:yaml.org,2002:map', data.items())
    yaml.add_representer(OrderedDict, represent_dict_order)

    with input_file.open('rb') as f:
        news = xmltodict.parse(f)

    news = news['rss']['channel']['item']

    for post in news:
        title = post['title']
        slug = format_slug(post)
        tags = format_tags(post)
        date = format_date(post)

        print(f'Working on {date}: {title}')
        if date < pendulum.datetime(2015, 12, 1, tz='America/Detroit'):
            print('    Skip')
            continue

        front_matter = OrderedDict([
            ('title', title),
            ('date', date.to_datetime_string()),
            ('categories', ['News']),
            ('tags', tags),
        ])

        path = out / f'{slug}.md'
        with path.open('w') as f:
            print(f'    Writing {path}')
            f.write('---\n')
            yaml.dump(front_matter, f, indent=2)
            f.write('---\n')
            f.write('\n')


if __name__ == '__main__':
    main()
