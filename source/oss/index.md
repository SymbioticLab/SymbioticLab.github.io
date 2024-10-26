---
title: OSS
date: 2024-10-05
layout: oss
sections:
# Section name
  - title: "Energy-Efficient Systems"
# Section description
    description: "Projects focused on optimizing energy use in software systems."
    items:
# name: required
# url and github_url: one of them must exists;
#   url is the hyperlink for project card;
#   github_url fetches repo detail if exists and serves the hyperlink if url is not present
# logo: optional, expecting an image url
# description: required, currently only support plain text
      - name: "Zeus"
        url: ""
        github_url: "https://github.com/ml-energy/zeus"
        logo: "https://ml.energy/zeus/assets/img/logo_light.svg"
        description: "Zeus is a library for (1) measuring the energy consumption of Deep Learning workloads and (2) optimizing their energy consumption. Zeus is part of The ML.ENERGY Initiative."

  - title: "Systems + AI"
    description: "Combining AI with traditional systems research."
    items:
      - name: "Oobleck"
        url: "https://ml.energy/oobleck"
        github_url: "https://github.com/SymbioticLab/Oobleck"
        logo: ""
        description: "Oobleck is a large-model training framework with fast fault recovery support utilizing the concept of pipeline templates. It is the first training framework that realizes Dynamic reconfiguration and Pipeline template instantiation."
      - name: "FedScale"
        url: ""
        github_url: "https://github.com/SymbioticLab/FedScale"
        logo: ""
        description: "Placeholder for project details."

  - title: "Memory systems"
    description: "Research on tiered (including disaggregated) memory systems."
    items:
      - name: "Transparent Page Placement for Tiered-Memory"
        url: "https://lwn.net/Articles/876993/"
        github_url: ""
        logo: ""
        description: "A Linux patch that enhances memory management in NUMA systems by promoting pages from slow-tier memory (e.g., CXL) to faster toptier memory (e.g., DDR) using an updated AutoNUMA mechanism. It separates reclamation and allocation processes, allowing the toptier to maintain free space for high-demand pages, reducing frequent page migrations. Testing on Meta workloads showed significant performance improvements, lowering remote NUMA read bandwidth and decreasing throughput regression."

---
Disclaimer: placeholder
