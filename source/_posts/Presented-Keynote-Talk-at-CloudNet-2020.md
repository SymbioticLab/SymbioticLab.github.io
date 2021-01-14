---
title: Presented Keynote Talk at CloudNet'2020
categories:
  - News
date: 2021-12-14
tags:
  - Disaggregation
  - Programmable Networks
  - RDMA
---

Earlier this week, I presented a keynote talk on the state of network-informed data systems design at the [CloudNet’2020](https://cloudnet2020.ieee-cloudnet.org/) conference, with a specific focus on our recent works on memory disaggregation ([Infiniswap]({% post_link Infiniswap-Accepted-to-Appear-at-NSDI-2017 %}), [Leap]({% post_path Leap-Accepted-to-Appear-at-ATC-2020 %}), and [NetLock]({% post_path NetLock-Accepted-to-Appear-at-SIGCOMM-2020 %})), and discussed the many open challenges toward making memory disaggregation practical.

In this talk, I discussed the motivation behind disaggregating memory, or any other expensive resource for that matter. High-performance data systems strive to keep data in the main memory. They often over-provision to avoid running out of memory, leading to a 50% average underutilization in Google, Facebook, and Alibaba datacenters. The root cause is simple: applications today cannot access otherwise unused memory beyond their machine boundaries even when their performance grinds to a halt. But could they? Over the course of last five years, our research in the SymbioticLab have addressed and continue to address this fundamental question regarding memory disaggregation, whereby an application can leverage both local and remote memory by leveraging emerging high-speed networks.

I also highlighted at least eight major challenges any memory disaggregation solution must address to even have a shot of becoming practical and widely used. These include, _applicability_ to a large variety of applications by not requiring any application-level changes; _scalability_ to large datacenters; _efficiency_ is using up all available memory; high _performance_ when using disaggregated memory; performance _isolation_ from other datacenter traffic; _resilience_ in the presence of failures and unavailability; _security_ from others; and _generality_ to a variety of memory technologies beyond DRAM. While this may come across as a laundry list of problems, we do believe that a complete solution must address each one of them.

In this context, I discussed three projects: **Infiniswap**, which achieves applicability using remote memory paging, and scalability and efficiency using decentralized algorithms; **Leap**, which improves performance by prefetching; and **NetLock**, which shows how to disaggregate programmable switch memory. I also pointed out a variety of ongoing projects toward our ultimate goal of unified, practical memory disaggregation.

My slides from this talk are [publicly available]({% asset_path nidsd-pmd-cloudnet-11092020.pdf %}) and have more details elaborating these points.
