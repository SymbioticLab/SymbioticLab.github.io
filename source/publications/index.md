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
extra_filters:
  - name: Topic
    path: meta.topic
  - name: Tag
    path: meta.tag
  - name: Badge
    path: badges
# Map of venue types to venues
venues:
  # key is also used in display
  Conferences:
    # conference short name
    ATC'20:
      # conference id
      venue: ATC
      # conference full name
      name: The 2020 USENIX Annual Technical Conference
      # date for sorting
      date: 2020-07-15
      # conference website (optional)
      url: https://www.usenix.org/conference/atc20
      # conference acceptance rate (optional)
      acceptance: "18.68%"
    EuroSys'20:
      # conference id
      venue: EuroSys
      # conference full name
      name: The Fifteenth European Conference on Computer Systems
      # date for sorting
      date: 2020-04-27
      # conference website (optional)
      url: https://www.eurosys2020.org/
      # conference acceptance rate (optional)
      acceptance: "18.38%"
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
    NSDI'20:
      # conference id
      venue: NSDI
      # conference full name
      name: The 17th USENIX Symposium on Networked Systems Design and Implementation
      # date for sorting
      date: 2020-02-25
      # conference website (optional)
      url: https://www.usenix.org/conference/nsdi20
      # conference acceptance rate (optional)
      acceptance: "18.36%"
    SIGCOMM'20:
      # conference id
      venue: SIGCOMM
      # conference full name
      name: The 2020 ACM SIGCOMM Conference
      # date for sorting
      date: 2020-08-11
      # conference website (optional)
      url: https://conferences.sigcomm.org/sigcomm/2020/
      # conference acceptance rate (optional)
      acceptance: "21.6%"
    SPAA'19:
      # conference id
      venue: SPAA
      # conference full name
      name: The 31st ACM Symposium on Parallelism in Algorithms and Architectures
      # date for sorting
      date: 2019-06-22
      # conference website (optional)
      url: https://spaa.acm.org/2019/
      # conference acceptance rate (optional)
      acceptance: "33%"
    NSDI'19:
      # conference id
      venue: NSDI
      # conference full name
      name: The 16th USENIX Symposium on Networked Systems Design and Implementation
      # date for sorting
      date: 2019-02-26
      # conference website (optional)
      url: https://www.usenix.org/conference/nsdi19
      # conference acceptance rate (optional)
      acceptance: "14.76%"
    MobiCom'18:
      # conference id
      venue: MobiCom
      # conference full name
      name: The 24th Annual International Conference on Mobile Computing and Networking
      # date for sorting
      date: 2018-10-29
      # conference website (optional)
      url: https://sigmobile.org/mobicom/2018/
      # conference acceptance rate (optional)
      acceptance: "22.46%"
    OSDI'18:
      # conference id
      venue: OSDI
      # conference full name
      name: The 13th USENIX Symposium on Operating Systems Design and Implementation
      # date for sorting
      date: 2018-10-08
      # conference website (optional)
      url: https://www.usenix.org/conference/osdi18
      # conference acceptance rate (optional)
      acceptance: "18.29%"
    SIGMOD'18:
      # conference id
      venue: SIGMOD
      # conference full name
      name: The 2018 ACM SIGMOD/PODS Conference
      # date for sorting
      date: 2018-06-10
      # conference website (optional)
      url: http://sigmod2018.org/
      # conference acceptance rate (optional)
      acceptance: "19.52%"
    SIGCOMM'17:
      # conference id
      venue: SIGCOMM
      # conference full name
      name: The 2017 ACM SIGCOMM Conference
      # date for sorting
      date: 2017-08-22
      # conference website (optional)
      url: http://conferences.sigcomm.org/sigcomm/2017/
      # conference acceptance rate (optional)
      acceptance: "14.4%"
    NSDI'17:
      # conference id
      venue: NSDI
      # conference full name
      name: The 14th USENIX Symposium on Networked Systems Design and Implementation
      # date for sorting
      date: 2017-03-27
      # conference website (optional)
      url: https://www.usenix.org/conference/nsdi17
      # conference acceptance rate (optional)
      acceptance: "18.04%"
    OSDI'16:
      # conference id
      venue: OSDI
      # conference full name
      name: The 12th USENIX Symposium on Operating Systems Design and Implementation
      # date for sorting
      date: 2016-11-02
      # conference website (optional)
      url: https://www.usenix.org/conference/osdi16
      # conference acceptance rate (optional)
      acceptance: "18.08%"
    SIGCOMM'16:
      # conference id
      venue: SIGCOMM
      # conference full name
      name: The 2016 ACM SIGCOMM Conference
      # date for sorting
      date: 2016-08-23
      # conference website (optional)
      url: http://conferences.sigcomm.org/sigcomm/2016/
      # conference acceptance rate (optional)
      acceptance: "17.33%"
    NSDI'16:
      # conference id
      venue: NSDI
      # conference full name
      name: The 13th USENIX Symposium on Networked Systems Design and Implementation
      # date for sorting
      date: 2016-03-13
      # conference website (optional)
      url: https://www.usenix.org/conference/nsdi16
      # conference acceptance rate (optional)
      acceptance: "19.74%"
  Workshops:
    APNet'18:
      # workshop id
      venue: APNet
      # workshop full name
      name: The 2nd Asia-Pacific Workshop on Networking
      # date for sorting
      date: 2018-08-02
      # workshop website (optional)
      url: https://conferences.sigcomm.org/events/apnet2018/index.html
    HotCloud'18:
      # workshop id
      venue: HotCloud
      # workshop full name
      name: The 10th USENIX Workshop on Hot Topics in Cloud Computing
      # date for sorting
      date: 2018-07-09
      # workshop website (optional)
      url: https://www.usenix.org/conference/hotcloud18
    MAMA'18:
      # workshop id
      venue: MAMA
      # workshop full name
      name: The 20th Workshop on MAthematical performance Modeling and Analysis (MAMA)
      # date for sorting
      date: 2018-06-18
      # workshop website (optional)
      url: http://www.sigmetrics.org/mama/2018/
    GRADES-NDA'18:
      # workshop id
      venue: GRADES-NDA
      # workshop full name
      name: The 1st Joint International Workshop on Graph Data Management Experiences & Systems (GRADES) and Network Data Analytics (NDA)
      # date for sorting
      date: 2018-06-10
      # workshop website (optional)
      url: https://sites.google.com/site/gradesnda2018/
    HotOS'17:
      # workshop id
      venue: HotOS
      # workshop full name
      name: The 16th Workshop on Hot Topics in Operating Systems
      # date for sorting
      date: 2017-05-07
      # workshop website (optional)
      url: https://www.sigops.org/s/conferences/hotos/2017
    KBNets'17:
      # workshop id
      venue: KBNets
      # workshop full name
      name: ACM SIGCOMM 2017 Workshop on Kernel-Bypass Networks
      # date for sorting
      date: 2017-08-21
      # workshop website (optional)
      url: https://conferences.sigcomm.org/sigcomm/2017/workshop-kbnets.html
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
