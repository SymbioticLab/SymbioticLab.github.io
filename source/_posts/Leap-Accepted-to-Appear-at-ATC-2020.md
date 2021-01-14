---
title: Leap Accepted to Appear at ATC'2020
categories:
  - News
date: 2020-04-25
tags:
  - ATC
  - Disaggregation
  - RDMA
---

Since our pioneering work on [Infiniswap]({% post_path Infiniswap-Accepted-to-Appear-at-NSDI-2017 %}) that attempted to make memory disaggregation practical, there has been quite a few proposals to use different application-level interfaces to remote memory over RDMA. A common issue faced by all these approaches is the high overhead of existing kernel data paths whether they use the swapping subsystem or the file system. Moreover, we observed that even if such latencies could be resolved by short-circuiting the kernel, the latency of RDMA itself is still significantly higher than that of local memory access. By early 2018, we came to the conclusion that instead of holding our breadth for them to come closer, we should invest on designing an algorithm to prefetch data even before an applications needs a remote page. It had be extremely fast and must deal with a variety of cloud applications; so we found complex learning-based approaches to be unsuitable. Leap is our simple-yet-effective answer to all these challenges.

> Memory disaggregation over RDMA can improve the performance of memory-constrained applications by replacing disk swapping with remote memory accesses. However, state-of-the-art memory disaggregation solutions still use data path components designed for slow disks. As a result, applications experience remote memory access latency significantly higher than that of the underlying low-latency network, which itself is too high for many applications.
>
> In this paper, we propose Leap, a prefetching solution for remote memory accesses due to memory disaggregation. At its core, Leap employs an online, majority-based prefetching algorithm, which increases the page cache hit rate. We complement it with a lightweight and efficient data path in the kernel that isolates each application’s data path to the disaggregated memory and mitigates latency bottlenecks arising from legacy throughput-optimizing operations. Integration of Leap in the Linux kernel improves the median and tail remote page access latencies of memory-bound applications by up to 104.04× and 22.62×, respectively, over the default data path. This leads to up to 10.16× performance improvements for applications using disaggregated memory in comparison to the state-of-the-art solutions.

The majority-based prefetching algorithm at the core of Leap is the brainchild of [Hasan](https://web.eecs.umich.edu/~hasanal/). Leap is not limited to remote or disaggregated memory either; it can be used in any slow storage-fast storage combination. This is Hasan’s first project, and I’m glad to see that it has eventually been a success. It’s my first paper in ATC too.

This year USENIX ATC accepted 65 out of 348 papers, which is pretty competitive.
