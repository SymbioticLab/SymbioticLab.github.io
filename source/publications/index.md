---
title: Publications
date: 2020-07-22 23:10:02
publist: true
mathjax: true
excerpt: "A list of publications from SymbioticLab"
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
  SOSP:
    category: Conferences
    occurrences:
    - key: SOSP'24
      name: The 30th ACM Symposium on Operating Systems and Principles
      date: 2024-11-04
      url: https://sigops.org/s/conferences/sosp/2024/
      acceptance: 17.34%
    - key: SOSP'23
      name: The 29th ACM Symposium on Operating Systems and Principles
      date: 2023-10-26
      url: https://sosp2023.mpi-sws.org/
      acceptance: 18.78%
  NSDI:
    category: Conferences
    occurrences:
    - key: NSDI'24
      name: The 21st USENIX Symposium on Networked Systems Design and Implementation
      date: 2024-04-16
      url: https://www.usenix.org/conference/nsdi24
      acceptance: 18.63%
    - key: NSDI'23
      name: The 20th USENIX Symposium on Networked Systems Design and Implementation
      date: 2023-04-17
      url: https://www.usenix.org/conference/nsdi23
      acceptance: 18.38%
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
  SoCC:
    category: Conferences
    occurrences:
    - key: SoCC'23
      name: The 14th ACM Symposium on Cloud Computing
      date: 2023-10-30
      url: https://acmsocc.org/2023/
      acceptance: 31%
  FAST:
    category: Conferences
    occurrences:
    - key: FAST'22
      name: The 20th USENIX Conference on File and Storage Technologies
      date: 2022-02-23
      url: https://www.usenix.org/conference/fast22
      acceptance: 21.54%
  ASPLOS:
    category: Conferences
    occurrences:
    - key: ASPLOS'23
      name: The 28th ACM International Conference on Architectural Support for Programming Languages and Operating Systems
      date: 2023-03-25
      url: https://asplos-conference.org/2023/
      acceptance: 26.67%
  SIGMETRICS:
    category: Conferences
    occurrences:
    - key: SIGMETRICS'23
      name: ACM SIGMETRICS 2023
      date: 2023-06-19
      url: https://www.sigmetrics.org/sigmetrics2023/
      acceptance: 10%
  EuroSys:
    category: Conferences
    occurrences:
    - key: EuroSys'25
      name: The 20th European Conference on Computer Systems
      date: 2025-03-30
      url: https://2025.eurosys.org/
      acceptance: 12.4%
    - key: EuroSys'23
      name: The Eighteenth European Conference on Computer Systems
      date: 2023-05-08
      url: https://2023.eurosys.org/
      acceptance: 16.12%
    - key: EuroSys'20
      name: The Fifteenth European Conference on Computer Systems
      date: 2020-04-27
      url: https://2020.eurosys.org/
      acceptance: 18.38%
  MLSys:
    category: Conferences
    occurrences:
    - key: MLSys'25
      name: The 8th Conference on Machine Learning and Systems
      date: 2025-05-12
      url: https://mlsys.org/Conferences/2025
      acceptance: 22.5%
    - key: MLSys'24
      name: The 7th Conference on Machine Learning and Systems
      date: 2024-05-13
      url: https://mlsys.org/Conferences/2024 
      acceptance: 22.02%
    - key: MLSys'23
      name: The 6th Conference on Machine Learning and Systems
      date: 2023-06-04
      url: https://mlsys.org/Conferences/2023
      acceptance: 22%
    - key: MLSys'21
      name: The 4th Conference on Machine Learning and Systems
      date: 2021-04-05
      url: https://mlsys.org/Conferences/2021
      acceptance: 23.5%
    - key: MLSys'20
      name: The 3rd Conference on Machine Learning and Systems
      date: 2020-03-02
      url: https://mlsys.org/Conferences/2020
      acceptance: 19.2%
  SIGCOMM:
    category: Conferences
    occurrences:
    - key: SIGCOMM'22
      name: The 2022 ACM SIGCOMM Conference
      date: 2022-08-22
      url: https://conferences.sigcomm.org/sigcomm/2022/
      acceptance: 19.57%
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
    - key: OSDI'24
      name: The 18th USENIX Symposium on Operating Systems Design and Implementation
      date: 2024-07-10
      url: https://www.usenix.org/conference/osdi24
      acceptance: 15.6%
    - key: OSDI'23
      name: The 17th USENIX Symposium on Operating Systems Design and Implementation
      date: 2023-07-10
      url: https://www.usenix.org/conference/osdi23
      acceptance: 19.61%
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
  VLDB:
    category: Conferences
    occurrences:
    - key: VLDB'22
      name: 48th International Conference on Very Large Databases
      date: 2022-09-05
      url: https://vldb.org/2022/
      acceptance: 36.67%
  BigData:
    category: Conferences
    occurrences:
    - key: BigData'24
      name: 2024 IEEE International Conference on Big Data
      date: 2024-12-15
      url: http://bigdataieee.org/BigData2024/
      acceptance: 35.19%
  APNet:
    category: Workshops
    occurrences:
    - key: APNet'18
      name: The 2nd Asia-Pacific Workshop on Networking
      date: 2018-08-02
      url: https://conferences.sigcomm.org/events/apnet2018/index.html
  HotInfra:
    category: Workshops
    occurrences:
    - key: HotInfra'24
      name: Workshop on Hot Topics in System Infrastructure
      date: 2024-11-03
      url: https://hotinfra24.github.io/
    - key: HotInfra'23
      name: Workshop on Hot Topics in System Infrastructure
      date: 2023-06-18
      url: https://hotinfra23.github.io/
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
  DistributedML:
    category: Workshops
    occurrences:
    - key: DistributedML'23
      name: The 4th International Workshop on Distributed Machine Learning
      date: 2023-12-08
      url: https://distributedml.org/archive/2023/
  HotNets:
    category: Workshops
    occurrences:
    - key: HotNets'25
      name: The 24th ACM Workshop on Hot Topics in Networks (HotNets'25)
      date: 2025-11-17
      url: https://conferences.sigcomm.org/hotnets/2025/
    - key: HotNets'23
      name: The 22nd ACM Workshop on Hot Topics in Networks (HotNets'23)
      date: 2023-11-28
      url: https://conferences.sigcomm.org/hotnets/2023/
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
  EECS:
    category: Workshops
    occurrences:
    - key: EECS'24
      name: Energy-Efficient Computing for Science Workshop
      date: 2024-09-09
      url: https://web.cvent.com/event/a3dd901a-699e-408c-8a84-81445e6ea64f
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
  'IEEE Access':
    category: Journals
    occurrences:
    - key: 'IEEE Access:9'
      name: IEEE Access 2021, 9, 156071-156113
      date: 2021-12-01
      url: https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6287639
  'IEEE TASE':
    category: Journals
    occurrences:
    - key: 'IEEE TASE:21(3)'
      name: IEEE TASE 2023, 21(3), 2792-2803
      date: 2024-07-01
      url: https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8856
  TMLR:
    category: Journals
    occurrences:
    - key: TMLR
      name: TMLR 2024
      date: 2024-05-01
      url: https://jmlr.org/tmlr/
  'IEEE TPDS':
    category: Journals
    occurrences:
    - key: 'IEEE TPDS:35(9)'
      name: IEEE TPDS 2024, 35(9), 1536-1550
      date: 2024-09-01
      url: https://ieeexplore.ieee.org/xpl/tocresult.jsp?isnumber=10601540&punumber=71
  JMIRMH:
    category: Journals
    occurrences:
    - key: 'JMIR-MH:9(2)'
      name: JMIR Mental Health 2022, 9(2):e34645
      date: 2022-02-10
      url: https://mental.jmir.org/2022/2
  OSR:
    category: Journals
    occurrences:
    - key: 'OSR:57(1)'
      name: ACM SIGOPS Operating Systems Review
      date: 2023-06-28
      url: https://dl.acm.org/toc/sigops/2023/57/1
  EIR:
    category: Journals
    occurrences:
    - key: 'EIR:3(3)'
      name: ACM SIGEnergy Energy Informatics Review
      date: 2023-10-25
      url: https://dl.acm.org/toc/sigenergy-eir/2023/3/3
  CACM:
    category: Journals
    occurrences:
    - key: 'CACM:69(1)'
      name: Communications of the ACM
      date: 2025-12-04
      url: https://dl.acm.org/doi/full/10.1145/3736713
  ICML:
    category: Conferences
    occurrences:
    - key: ICML'22
      name: Thirty-ninth International Conference on Machine Learning
      date: 2022-07-17
      url: https://icml.cc/Conferences/2022
      acceptance: 21.94%
  ClimateChangeAI:
    category: Workshops
    occurrences:
    - key: CCAI-ICLR'23
      name: ICLR 23 Workshop on Tackling Climate Change with Machine Learning
      date: 2023-05-04
      url: https://www.climatechange.ai/events/iclr2023
  'NeurIPS D&B':
    category: Conferences
    occurrences:
      - key: NeurIPS'24 D&B
        name: The 38th Conference on Neural Information Processing Systems Datasets & Benchmarks Track
        date: 2024-12-10
        url: https://neurips.cc/Conferences/2024
        acceptance: 25.3%
      - key: NeurIPS'25 D&B
        name: The 39th Conference on Neural Information Processing Systems Datasets & Benchmarks Track
        date: 2025-12-02
        url: https://neurips.cc/Conferences/2025
        acceptance: 24.91%
{% endpublist %}

---

{% note default %}
#### Copyright notice
The documents listed above have been provided by the contributing authors as a means to ensure timely dissemination of scholarly and technical work on a noncommercial basis. Copyright and all rights therein are maintained by the authors or by other copyright holders, notwithstanding that they have offered their works here electronically. It is understood that all persons copying this information will adhere to the terms and constraints invoked by each author’s copyright. These works may not be reposted without the explicit permission of the copyright holder.
{% endnote %}
