---
title: Kayak Accepted to Appear at NSDI'2021
categories:
  - News
date: 2020-12-15
tags:
  - Big Data Systems
  - Disaggregation
  - NSDI
---

As memory disaggregation and resource disaggregation, in general, become popular, one must make a call about whether to continue moving data from remote memory or to sometimes ship compute to remote data too. This is not a new problem in the context of disaggregated datacenters either. The notion of data locality and associated challenges are rooted in the same observation. As the ratio between compute and communication needs of an application changes and as the speed of the network changes over time, the answer has changed many times. Oftentimes, the solutions boil down to understanding workload and network characteristics and making a call: ship compute or ship data for that workload on that network. But what if the workload is dynamic? In Kayak, we dynamically decide between the two options and making the right call at the right time.

> How cloud applications should interact with their data remains an active area of research. Over the last decade, many have suggested relying on a key-value (KV) interface to interact with data stored in remote storage servers, while others have vouched for the benefits of using remote procedure call (RPC). Instead of choosing one over the other, in this paper, we observe that an ideal solution must adaptively combine both of them in order to maximize throughput while meeting application latency requirements. To this end, we propose a new system called Kayak that proactively adjusts the rate of requests and the fraction of requests to be executed using RPC or KV, all in a fully decentralized and self-regulated manner. We theoretically prove that Kayak can quickly converge to the optimal parameters. We implement a system prototype of Kayak. Our evaluations show that Kayak achieves sub-second convergence and improves overall throughput by 32.5%-63.4% for compute-intensive workloads and up to 12.2% for non-compute-intensive and transactional workloads over the state-of-the-art.

The core idea behind Kayak is all due to Jie (Jimmy), who started the project in early 2019. The project picked up significant tailwind when Xin and his student Jingfeng joined us in the summer of 2020 to help us better understand the problem from an analytical perspective too, in addition to better positioning the work. I’m super excited about the possibilities and Kayak’s potential impact on resource disaggregation systems.

The NSDI PC this year accepted 40 out of 255 submissions in the Fall deadline to result in a lower acceptance rate from last year.
