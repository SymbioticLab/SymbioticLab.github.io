---
title: HUG Accepted to Appear at NSDI'2016
categories:
  - News
date: 2015-12-06
tags:
  - CoFlow
  - Datacenter Networking
  - NSDI
---

{% note default %}
Update: Camera-ready version is available [here](/publications) now!
{% endnote %}

With the advent of cloud computing and datacenter-scale applications, simultaneously dealing with multiple resources is the new norm. When multiple parties have multi-resource demands, _fairly_ dividing these resources (for some notion of fairness) is a core challenge in the resource allocation literature. Dominant Resource Fairness (DRF) in NSDI’2011 was the first work to point out the ensuing challenges and extended traditional, single-resource max-min fairness to the multi-resource environment.

While DRF guarantees many nice properties to ensure fairness, it gives up work conservation. We show that it can be arbitrarily low in the worst case. Over the past five years, many software and research proposals have built upon DRF under the assumption that DRF can trivially be made work-conserving without losing any of its properties.

After five years, **we prove that not to be the case**. We show that there is a fundamental tradeoff between guaranteed resources and work conservation, and trivially adding work conservation on DRF can actually decrease utilization instead of increasing it. We also show what is the maximum possible utilization while maintaining DRF’s optimal guarantees and propose a new algorithm, High Utilization with Guarantees (HUG) that generalizes single-and multi-resource max-min fairness as well as multi-tenant network sharing literature under a unifying framework.

> In this paper, we study how to optimally provide isolation guarantees in multi-resource environments, such as public clouds, where a tenant’s demands on different resources (links) are _correlated_ in order for her to make progress. Unlike prior work such as Dominant Resource Fairness (DRF) that assumes demands to be static and fixed, we consider _elastic_ demands. Our approach generalizes canonical max-min fairness to the multi-resource setting with correlated demands, and extends DRF to elastic demands. We consider two natural optimization objectives: isolation guarantee from a tenant’s viewpoint and system utilization (work conservation) from an operator’s perspective. We prove that in non-cooperative environments like public cloud networks, there is a strong tradeoff between optimal isolation guarantee and work conservation when demands are elastic. Even worse, work conservation can even decrease network utilization instead of improving it when demands are inelastic. We identify the root cause behind the tradeoff and present a provably optimal allocation algorithm, High Utilization with Guarantees (HUG), to achieve maximum attainable network utilization without sacrificing the optimal isolation guarantee, strategy-proofness, and other useful properties of DRF. In cooperative environments like private datacenter networks, HUG achieves both the optimal isolation guarantee and work conservation. Analyses, simulations, and experiments show that HUG provides better isolation guarantees, higher system utilization, and better tenant-level performance than its counterparts.

This work is the result of a close collaboration with [Zhenhua Liu](http://www.ams.sunysb.edu/~zhliu/) with help from Ion Stoica and Ali Ghodsi.

This year the NSDI PC accepted 45 out of 228 submissions with a 19.74% acceptance rate. This work forms the basis of the last chapter of my [dissertation](https://www.mosharaf.com/wp-content/uploads/mosharaf-phd-thesis-berkeley15.pdf), ensuring SIGCOMM or NSDI publications from all its primary chapters!
