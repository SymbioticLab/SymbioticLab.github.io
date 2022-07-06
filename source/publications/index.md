---
title: Publications
date: 2020-07-22 23:10:02
publist: true
mathjax: true
---
{% publist SymbioticLab %}
version: 2
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
show_unpublished: true
# mapping from general conference name to details
venues:
  arXiv:
    category: Technical Reports
    occurrences:
    - key: arXiv-all
      matches: ^arXiv:(.+)$
      name: arXiv
      url: https://arxiv.org/abs/$1
  Dissertation:
    category: Technical Reports
    occurrences:
    - key: dissertation
      name: PhD Dissertation
  NSDI:
    category: Conferences
    occurrences:
    - key: NSDI'22
      name: The 19th USENIX Symposium on Networked Systems Design and Implementation
      date: 2022-04-04
      url: https://www.usenix.org/conference/nsdi22
      acceptance: 19.4%
    - key: NSDI'21
      name: The 18th USENIX Symposium on Networked Systems Design and Implementation
      date: 2021-04-12
      url: https://www.usenix.org/conference/nsdi21
      acceptance: 15.99%
    - key: NSDI'20
      name: The 17th USENIX Symposium on Networked Systems Design and Implementation
      date: 2020-02-25
      url: https://www.usenix.org/conference/nsdi20
      acceptance: 18.36%
    - key: NSDI'19
      name: The 16th USENIX Symposium on Networked Systems Design and Implementation
      date: 2019-02-26
      url: https://www.usenix.org/conference/nsdi19
      acceptance: 14.76%
    - key: NSDI'17
      name: The 14th USENIX Symposium on Networked Systems Design and Implementation
      date: 2017-03-27
      url: https://www.usenix.org/conference/nsdi17
      acceptance: 18.04%
    - key: NSDI'16
      name: The 13th USENIX Symposium on Networked Systems Design and Implementation
      date: 2016-03-13
      url: https://www.usenix.org/conference/nsdi16
      acceptance: 19.74%
  ATC:
    category: Conferences
    occurrences:
    - key: ATC'20
      name: The 2020 USENIX Annual Technical Conference
      date: 2020-07-15
      url: https://www.usenix.org/conference/atc20
      acceptance: 18.68%
  FAST:
    category: Conferences
    occurrences:
    - key: FAST'22
      name: The 20th USENIX Conference on File and Storage Technologies
      date: 2022-02-23
      url: https://www.usenix.org/conference/fast22
      acceptance: 21.54%
  EuroSys:
    category: Conferences
    occurrences:
    - key: EuroSys'20
      name: The Fifteenth European Conference on Computer Systems
      date: 2020-04-27
      url: https://www.eurosys2020.org/
      acceptance: 18.38%
  MLSys:
    category: Conferences
    occurrences:
    - key: MLSys'20
      name: The 3rd Conference on Machine Learning and Systems
      date: 2020-03-02
      url: https://mlsys.org/Conferences/2020
      acceptance: 19.2%
    - key: MLSys'21
      name: The 4th Conference on Machine Learning and Systems
      date: 2021-04-05
      url: https://mlsys.org/Conferences/2021
      acceptance: 23.5%
  SIGCOMM:
    category: Conferences
    occurrences:
    - key: SIGCOMM'21
      name: The 2021 ACM SIGCOMM Conference
      date: 2021-08-23
      url: https://conferences.sigcomm.org/sigcomm/2021/
      acceptance: 22.82%
    - key: SIGCOMM'20
      name: The 2020 ACM SIGCOMM Conference
      date: 2020-08-11
      url: https://conferences.sigcomm.org/sigcomm/2020/
      acceptance: 21.6%
    - key: SIGCOMM'17
      name: The 2017 ACM SIGCOMM Conference
      date: 2017-08-22
      url: http://conferences.sigcomm.org/sigcomm/2017/
      acceptance: 14.4%
    - key: SIGCOMM'16
      name: The 2016 ACM SIGCOMM Conference
      date: 2016-08-23
      url: http://conferences.sigcomm.org/sigcomm/2016/
      acceptance: 17.33%
  SPAA:
    category: Conferences
    occurrences:
    - key: SPAA'19
      name: The 31st ACM Symposium on Parallelism in Algorithms and Architectures
      date: 2019-06-22
      url: https://spaa.acm.org/2019/
      acceptance: 33%
  MobiCom:
    category: Conferences
    occurrences:
    - key: MobiCom'18
      name: The 24th Annual International Conference on Mobile Computing and Networking
      date: 2018-10-29
      url: https://sigmobile.org/mobicom/2018/
      acceptance: 22.46%
  OSDI:
    category: Conferences
    occurrences:
    - key: OSDI'21
      name: The 15th USENIX Symposium on Operating Systems Design and Implementation
      date: 2021-07-14
      url: https://www.usenix.org/conference/osdi21
      acceptance: 18.79%
    - key: OSDI'18
      name: The 13th USENIX Symposium on Operating Systems Design and Implementation
      date: 2018-10-08
      url: https://www.usenix.org/conference/osdi18
      acceptance: 18.29%
    - key: OSDI'16
      name: The 12th USENIX Symposium on Operating Systems Design and Implementation
      date: 2016-11-02
      url: https://www.usenix.org/conference/osdi16
      acceptance: 18.08%
  SIGMOD:
    category: Conferences
    occurrences:
    - key: SIGMOD'18
      name: The 2018 ACM SIGMOD/PODS Conference
      date: 2018-06-10
      url: http://sigmod2018.org/
      acceptance: 19.52%
  APNet:
    category: Workshops
    occurrences:
    - key: APNet'18
      name: The 2nd Asia-Pacific Workshop on Networking
      date: 2018-08-02
      url: https://conferences.sigcomm.org/events/apnet2018/index.html
  HotCloud:
    category: Workshops
    occurrences:
    - key: HotCloud'18
      name: The 10th USENIX Workshop on Hot Topics in Cloud Computing
      date: 2018-07-09
      url: https://www.usenix.org/conference/hotcloud18
  MAMA:
    category: Workshops
    occurrences:
    - key: MAMA'18
      name: The 20th Workshop on MAthematical performance Modeling and Analysis (MAMA)
      date: 2018-06-18
      url: http://www.sigmetrics.org/mama/2018/
  GRADES-NDA:
    category: Workshops
    occurrences:
    - key: GRADES-NDA'18
      name: The 1st Joint International Workshop on Graph Data Management Experiences
        & Systems (GRADES) and Network Data Analytics (NDA)
      date: 2018-06-10
      url: https://sites.google.com/site/gradesnda2018/
  HotOS:
    category: Workshops
    occurrences:
    - key: HotOS'17
      name: The 16th Workshop on Hot Topics in Operating Systems
      date: 2017-05-07
      url: https://www.sigops.org/s/conferences/hotos/2017
  KBNets:
    category: Workshops
    occurrences:
    - key: KBNets'17
      name: ACM SIGCOMM 2017 Workshop on Kernel-Bypass Networks
      date: 2017-08-21
      url: https://conferences.sigcomm.org/sigcomm/2017/workshop-kbnets.html
  ResilientFL:
    category: Workshops
    occurrences:
    - key: ResilientFL'21
      name: ACM SOSP 21 Workshop on Systems Challenges in Reliable and Secure Federated Learning
      date: 2021-10-25
      url: https://resilientfl.org/
  HotCarbon:
    category: Workshops
    occurrences:
    - key: HotCarbon'22
      name: 1st Workshop on Sustainable Computer Systems Design and Implementation
      date: 2022-07-10
      url: https://hotcarbon.org/
  'USENIX ;login:':
    category: Journals
    occurrences:
    - key: 'USENIX ;login: Winter 2017'
      name: 'USENIX ;login: Winter 2017, VOL. 42, NO. 4'
      date: 2017-12-30
      url: https://www.usenix.org/publications/login/winter2017
  Sensors:
    category: Journals
    occurrences:
    - key: 'Sensors:20(21)'
      name: Sensors 2020, 20(21), 6100
      date: 2020-10-27
      url: https://www.mdpi.com/1424-8220/20/21
  IEEEAccess:
    category: Journals
    occurrences:
    - key: 'IEEEAccess:9'
      name: IEEE Access 2021, 9, 156071-156113
      date: 2021-12-1
      url: https://doi.org/10.1109/ACCESS.2021.3127448
  JMIRMH:
    category: Journals
    occurrences:
    - key: 'JMIR-MH:9(2)'
      name: JMIR Mental Health 2022, 9(2):e34645
      date: 2022-02-10
      url: https://doi.org/10.2196/34645
  ICML:
    category: Conferences
    occurrences:
    - key: ICML'22
      name: Thirty-ninth International Conference on Machine Learning
      date: 2022-07-17
      url: https://icml.cc/Conferences/2022
      acceptance: 21.94%
{% endpublist %}

---

{% note default %}
#### Copyright notice
The documents listed above have been provided by the contributing authors as a means to ensure timely dissemination of scholarly and technical work on a noncommercial basis. Copyright and all rights therein are maintained by the authors or by other copyright holders, notwithstanding that they have offered their works here electronically. It is understood that all persons copying this information will adhere to the terms and constraints invoked by each author’s copyright. These works may not be reposted without the explicit permission of the copyright holder.
{% endnote %}
