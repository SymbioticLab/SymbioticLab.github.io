---
title: Research
date: 2022-09-10 14:17:52
---

SymbioticLab focuses on *large-scale data systems* that can yield order-of-magnitude performance and efficiency improvements.
We tailor existing Big Data and AI/ML applications and design new ones to best leverage their underlying infrastructure.
This boils down to three operating regimes: single-microsecond latency *within a rack*, single-millisecond latency *within a datacenter*, and hundreds-of-milliseconds latency *across the world*.

Are you seeking collaboration and already in UMich? Learn about exciting ongoing projects [here](https://docs.google.com/document/d/1mVPqfnqLz_CXVz8XyDLcB1BIlUyezY2A-t5mV33JZHw/edit?usp=sharing).


![Overview](/assets/latency-domains.png)

Across these operating regimes, our research falls into one of the following overarching themes or combinations thereof.

## [Systems + AI](/publications/#/topic:Systems%20+%20AI)
We focus on resource management for AI systems running on heterogeneous environments to improve their efficiency and performance.
GPUs have emerged as a popular choice for AI-related data systems, with new hardware accelerators appearing every month.
Few of them, if any, support software-defined resource sharing.
One of our key focus areas is multi-scale resource sharing for AI accelerators for training, inference, and hyperparameter tuning workloads.
We also work on planning and optimizing executions of distributed AI systems.
Major projects include [Salus](https://github.com/SymbioticLab/Salus) and [Tiresias](https://github.com/SymbioticLab/Tiresias).

## [Disaggregation](/publications/#/topic:Disaggregation)
Modern datacenters often overprovision application memory to avoid performance cliffs, leading to 50% underutilization on average.
Our research addresses this fundamental problem via practical memory disaggregation, whereby an application can leverage both local and remote memory by leveraging high-speed networks, and more recently with emerging CXL technology.
We are building systems that can ensure a disaggregated system with 100s of nanoseconds latency.
We are generally interested in disaggregating all resources for fully utilized datacenters.
Major projects include [Infiniswap](https://infiniswap.github.io/), the first practical memory disaggregation software, and [TPP](https://arxiv.org/abs/2206.02878).


## [Wide-Area Computing](/publications/#/topic:Wide-Area%20Computing)
Most data is generated outside cloud datacenters.
Collecting voluminous remote data to a central location not only presents a bandwidth and storage problem but increasingly is likely to violate privacy regulations such as General Data Protection Regulation (GDPR).
In these settings, data systems must minimize communication instead.
We are developing systems, algorithms, and benchmarks to analyze data distributed across multiple cloud datacenters and end-user devices to enable geo-distributed/federated learning and analytics.
Major projects include [FedScale](https://fedscale.ai/), the largest benchmark and a scalable and extensible platform for federated learning.


## [Carbon-Aware Systems](/publications/#/topic:Carbon-Aware%20Systems)
Carbon footprint and energy consumption are both increasing with the rising popularity of Big Data and AI systems.
While the hardware community has invested considerable effort in energy optimizations, we observe that similar efforts on the software side are significantly lacking.
[Our initiative](https://ml.energy) to understand and optimize the energy consumption of modern AI workloads is exposing new ways to understand carbon and energy consumption from software.
Major projects include [Zeus](https://ml.energy/zeus), the first GPU energy-vs-training performance tradeoff optimizer for DNN training.


## [Datacenter Networking](/publications/#/topic:Datacenter%20Networking)
We also work on network resource management schemes to isolate Big Data and AI systems at the edge and inside the datacenter network.
Our recent focus has primarily been on emerging networking technologies such as low-latency RDMA-enabled networks, programmable switches, and SmartNICs.
We are also interested in improving the existing networking infrastructure such as improving QoS for low-latency RPCs in datacenters.
Major projects include [Aequitas](https://github.com/SymbioticLab/Aequitas) and [Justitia](https://github.com/SymbioticLab/Justitia).


## [Big Data Systems](/publications/#/topic:Big%20Data%20Systems)
In the recent past, we worked on designing and improving big data systems via new algorithms for resource scheduling, caching data in memory, and dynamic query planning to improve resource efficiency, application performance, and fairness.
