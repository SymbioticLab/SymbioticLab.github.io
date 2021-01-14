---
title: NetLock Accepted to Appear at SIGCOMM'2020
categories:
  - News
date: 2020-06-25
tags:
  - Datacenter Networking
  - Disaggregation
  - Locking
  - Programmable Networks
  - SIGCOMM
---

High-throughput, low-latency lock managers are useful for building a variety of distributed applications. Traditionally, a key tradeoff in this context had been expressed in terms of the amount of knowledge available to the lock manager. On the one hand, a decentralized lock manager can increase throughput by parallelization, but it can starve certain categories of applications. On the other hand, a centralized lock manager can avoid starvation and impose resource sharing policies, but it can be limited in throughput. In SIGMOD’18, we presented [DSLR](https://www.mosharaf.com/blog/2018/03/20/dslr-accepted-to-appear-at-sigmod2018/) that attempted to mitigate this tradeoff in clusters with fast RDMA networks by adapting Lamport’s bakery algorithm in the context of RDMA’s fetch-and-add (FA) operations to design a decentralized solution. The downside is that we couldn’t implement complex policies that need centralized information.

What if we could have a high-speed centralized point that all remote traffic must go through anyway? NetLock is our attempt at doing just that by implementing a centralized lock manager in a programmable switch by working at tandem with the servers. The co-design is important to go around the resource limitations of the switch. By carefully caching hot locks and moving warm and cold ones to the servers, we can meet both the performance and policy goals of a lock manager without significant compromise in either.

> Lock managers are widely used by distributed systems. Traditional centralized lock managers can easily support policies between multiple users using global knowledge, but they suffer from low performance. In contrast, emerging decentralized approaches are faster but cannot provide flexible policy support. Furthermore, performance in both cases is limited by the server capability.
> 
> We present NetLock, a new centralized lock manager that co-designs servers and network switches to achieve high performance without sacrificing flexibility in policy support. The key idea of NetLock is to exploit the capability of emerging programmable switches to directly process lock requests in the switch data plane. Due to the limited switch memory, we design a memory management mechanism to seamlessly integrate the switch and server memory. To realize the locking functionality in the switch, we design a custom data plane module that efficiently pools multiple register arrays together to maximize memory utilization We have implemented a NetLock prototype with a Barefoot Tofino switch and a cluster of commodity servers. Evaluation results show that NetLock improves the throughput by 14.0–18.4×, and reduces the average and 99% latency by 4.7–20.3× and 10.4–18.7× over DSLR, a state-of-the-art RDMA-based solution, while providing flexible policy support.

Xin and I came up with the idea of this project over a couple meals in San Diego at OSDI’18, and later Zhuolong and Yiwen expanded and successfully executed our ideas that lead to NetLock. Similar to DSLR, NetLock explores a different design point in our larger memory disaggregation vision.

This year’s SIGCOMM probably has the highest acceptance rate in 25 years, if not more. After a long successful run at SIGCOMM and a small break doing many other exciting things, it’s great to be back to some networking research! But going forward, I’m hoping for much more along these lines both inside the network and at the edge.
