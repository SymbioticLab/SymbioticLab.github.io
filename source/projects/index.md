---
title: Projects
date: 2020-10-16 23:09:52
---

SymbioticLab focuses on *network-informed data systems design* that can yield order-of-magnitude performance and efficiency improvements. 
We tailor Big Data and AI applications to coexist with their underlying networks and apply networking principles in designing new data systems.
This boils down to **three** operating regimes: *single-microsecond* latency within a rack, *single-millisecond* latency within a datacenter, and *hundreds-of-milliseconds* latency across the world.

![Overview](images/latency-domains.png)

Across these latency domains, our research falls into one of the five overarching projects.

## Disaggregation
High-performance data systems strive to keep data in the main memory. 
They often over-provision to avoid running out of memory, leading to a 50% average underutilization in Google, Facebook, and Alibaba datacenters. 
The root cause is simple: applications today cannot access otherwise unused memory beyond their machine boundaries even when their performance grinds to a halt. 
But could they? 
Our research addresses this fundamental question regarding memory disaggregation, whereby an application can leverage both local and remote memory by leveraging emerging high-speed networks. 
Naturally, we are interesting in disaggregating compute and storage as well.

## Wide-Area Computation
Most data are not generated inside cloud datacenters. 
They may be created, among others, by smartphone users, collected by a network of telescopes, or generated in medical research campuses from genome sequencing. 
Collecting voluminous remote data to a central location not only presents a bandwidth and storage problem but increasingly is likely to violate privacy regulations such as General Data Protection Regulation (GDPR). 
In these settings, data systems must minimize communication instead. 
We are developing systems and algorithms to analyze real-time data distributed across the globe to enable geo-distributed analytics and federated learning.

## Systems + AI
A large number of AI applications still run in traditional cloud datacenters. 
We have focused on heterogeneous resource management for AI systems.
GPUs have emerged as a popular choice for AI-related data systems, with new hardware accelerators appearing every month. 
Few of them, if any, support software-defined resource sharing. 
We focus on multi-scale resource sharing for AI accelerators for training, inference, and hyperparameter tuning workloads.

## Big Data Systems
Our work has brought network-inspired redesign of data systems into the mainstream. 
For Big Data applications, we have designed new algorithms for resource scheduling, caching data in memory, and dynamic query planning that apply well-established networking principles such as statistical multiplexing, traffic management, and rerouting into data systems design. 

## Datacenter Networking
Finally, we also work on network scheduling and resource management schemes to isolate Big Data and AI systems at the edge and inside the datacenter network.
Our recent focus has been on emerging networking technologies such as low-latency RDMA-enabling networks, programmable switches, and Smart NICs.
