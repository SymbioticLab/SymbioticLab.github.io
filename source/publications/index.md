---
title: Publications
date: 2020-07-22 23:10:02
publist: true
mathjax: true
---
{% note warning %}
Work in progress
{% endnote %}

{% publist MCPubs %}
# directory used for relative links in publication items
pub_dir: publications/files
# which author name to highlight
highlight_authors: []
# Map of venue types to venues
venues:
  # key is also used in display
  Conferences:
    # conference short name
    MLSys'20:
      # conference id
      venue: MLSys
      # conference full name
      name: The 3rd Conference on Machine Learning and Systems
      # date for sorting
      date: 2020-03-02
      # conference website (optional)
      url: https://mlsys.org/Conferences/2020
      # conference acceptance rate (optional)
      acceptance: "19.2%"
    NSDI'19:
      # conference id
      venue: NSDI
      # conference full name
      name: The 16th USENIX Symposium on Networked Systems Design and Implementation
      # date for sorting
      date: 2019-02-26
      # conference website (optional)
      url: https://www.usenix.org/conference/nsdi19
    SIGCOMM'17:
      # conference id
      venue: SIGCOMM
      # conference full name
      name: The 2017 ACM SIGCOMM Conference
      # date for sorting
      date: 2017-08-22
      # conference website (optional)
      url: http://conferences.sigcomm.org/sigcomm/2017/
    NSDI'17:
      # conference id
      venue: NSDI
      # conference full name
      name: The 14th USENIX Symposium on Networked Systems Design and Implementation
      # date for sorting
      date: 2017-03-27
      # conference website (optional)
      url: https://www.usenix.org/conference/nsdi17
    OSDI'16:
      # conference id
      venue: OSDI
      # conference full name
      name: The 12th USENIX Symposium on Operating Systems Design and Implementation
      # date for sorting
      date: 2016-11-02
      # conference website (optional)
      url: https://www.usenix.org/conference/osdi16
    SIGCOMM'16:
      # conference id
      venue: SIGCOMM
      # conference full name
      name: The 2016 ACM SIGCOMM Conference
      # date for sorting
      date: 2016-08-23
      # conference website (optional)
      url: http://conferences.sigcomm.org/sigcomm/2016/
    NSDI'16:
      # conference id
      venue: NSDI
      # conference full name
      name: The 13th USENIX Symposium on Networked Systems Design and Implementation
      # date for sorting
      date: 2016-03-13
      # conference website (optional)
      url: https://www.usenix.org/conference/nsdi16
  Workshops: {}
  Posters: {}
  Demos: {}
  Journals:     
    'USENIX ;login:':
      # journal id
      venue: 'USENIX ;login:'
      # journal full name
      name: 'USENIX ;login: Winter 2017, VOL. 42, NO. 4'
      # date for sorting
      date: 2017-12-30
      # journal website (optional)
      url: https://www.usenix.org/publications/login
{% endpublist %}
