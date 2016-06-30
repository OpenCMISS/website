#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
from os import walk
from os import sep
from functools import partial

def fullpath(root,dirpath,fname):
	if dirpath[len(dirpath)-1] != sep:
		dirpath += sep
	if root[len(root)-1] != sep:
		root += sep
	sub_dirpath = dirpath[dirpath.find(root)+len(root):]
	return (sub_dirpath + fname,dirpath + fname)

def template_pages_map(root):
	result = {}
	for (dirpath, dirnames, filenames) in walk(root):
		dirpathise = partial(fullpath,root,dirpath)
		fullnames = map(dirpathise,filenames)
		for (name,fullname) in fullnames:
			result[fullname] = name
	return result

AUTHOR = u'OpenCMISS Project'
SITENAME = u'OpenCMISS Website'
SITEURL = ''
PATH = '../content'

TIMEZONE = 'Pacific/Auckland'

DEFAULT_LANG = u'en'

# Use the custom theme
THEME = "./themes/ocmiss"

# Feed generation is usually not desired when developing
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
EXTRA_TEMPLATES_PATHS = ['../app/']

# Use filesystem date if not otherwise specified.
DEFAULT_DATE = "fs"

DEFAULT_PAGINATION = 10

DIRECT_TEMPLATES = ["index","categories"]

PAGINATED_DIRECT_TEMPLATES = ['News','Minutes']

TEMPLATE_PAGES = template_pages_map(PATH+sep+'custompages') # Create a list of template pages to generate in content/custompages

READERS = {'html':None }

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = False

ARTICLE_SAVE_AS = '{category}/{slug}.html'
ARTICLE_URL = '{category}/{slug}.html'

AUTHOR_SAVE_AS = ''

ARCHIVE_SAVE_AS = ''

INDEX_SAVE_AS = ''

CATEGORY_SAVE_AS = '{slug}/index.html'
CATEGORY_URL = '{slug}/index.html'

PAGE_SAVE_AS = '{slug}.html'
PAGE_URL = 'slug.html'

# Metadata for template
NAV_HEADINGS_FOR_CATEGORY = {
	"News": "community",
	"Minutes":"community"
}

SITEENV = "staging"
