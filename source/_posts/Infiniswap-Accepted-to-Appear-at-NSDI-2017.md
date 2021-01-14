---
title: Infiniswap Accepted to Appear at NSDI'2017
categories:
  - News
date: 2016-12-08
tags:
  - Disaggregation
  - NSDI
  - Rack-Scale
  - RDMA
---

{% note default %}
Update: Camera-ready version is available [here](/publications).
Infiniswap code is now on [GitHub](https://github.com/Infiniswap/infiniswap)!
{% endnote %}

As networks become faster, the difference between remote and local resources is blurring everyday. _How can we take advantage of these blurred lines?_ This is the key observation behind resource disaggregation and, to some extent, rack-scale computing. In this paper, we take our first stab at making memory disaggregation practical by exposing remote memory to unmodified applications. While there have been several proposals and feasibility studies in recent years, to the best of our knowledge, this is the first concrete step in making it real.

> Memory-intensive applications suffer large performance loss when their working sets do not fully fit in memory. Yet, they cannot leverage otherwise unused remote memory when paging out to disks even in the presence of large imbalance in memory utilizations across a cluster. Existing proposals for memory disaggregation call for new architectures, new hardware designs, and/or new programming models, making them infeasible.
> 
> This paper describes the design and implementation of Infiniswap, a remote memory paging system designed specifically for an RDMA network. Infiniswap opportunistically harvests and transparently exposes unused memory to unmodified applications by dividing the swap space of each machine into many slabs and distributing them across many machines’ remote memory. Because RDMA operations bypass remote CPUs, Infiniswap leverages the power of many choices to perform decentralized slab placements and evictions.
> 
> We have implemented and deployed Infiniswap on an RDMA cluster without any OS modifications and evaluated its effectiveness using multiple workloads running on unmodified VoltDB, Memcached, PowerGraph, GraphX, and Apache Spark. Using Infiniswap, throughputs of these applications improve between 7.1X (0.98X) to 16.3X (9.3X) over disk (Mellanox nbdX), and median and tail latencies between 5.5X (2X) and 58X (2.2X). Infiniswap does so with negligible remote CPU usage, whereas nbdX becomes CPU-bound. Infiniswap increases the overall memory utilization of a cluster and works well at scale.

This work started as a class project for EECS 582 in the Winter when I gave the idea to Juncheng Gu and Youngmoon Lee, who made the pieces into a whole. Over the summer, Yiwen Zhang, an enterprising and excellent undergraduate, joined the project and helped us in getting it done within time.

This year the NSDI PC accepted 46 out of 255 papers. This happens to be my first paper with an all-blue cast! I want to thank Kang for giving me complete access to Juncheng and Youngmoon; it’s been great collaborating with them. I’m also glad that Yiwen has decided to start a Master’s and stay with us for longer, and more importantly, our team will remain intact for many more exciting followups in this emerging research area.

If this excites you, come [join our group](http://www.mosharaf.com/blog/2015/10/26/im-looking-for-graduate-students/)!
