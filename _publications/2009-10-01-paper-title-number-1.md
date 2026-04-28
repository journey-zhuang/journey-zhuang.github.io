---
title: "StyleMe3D: Stylization with Disentangled Priors by Multiple Encoders on 3D Gaussians."
collection: publications
permalink: /publication/2025-04-21-styleme3d
excerpt: 'StyleMe3D is a holistic framework for 3D Gaussian Splatting style transfer that achieves scalable, semantically coherent, and perceptually enhanced stylization by disentangling multi-level semantics.'
date: 2025-04-21
venue: 'arXiv'
paperurl: '[https://arxiv.org/abs/2504.15281](https://arxiv.org/abs/2504.15281)'
---

Current 3D Gaussian Splatting (3DGS) stylization approaches are limited in their ability to represent diverse artistic styles, frequently defaulting to low-level texture replacement or yielding semantically inconsistent outputs. 

In this paper, we introduce **StyleMe3D**, a novel hierarchical framework that achieves comprehensive, high-fidelity stylization by disentangling multi-level style representations while preserving geometric fidelity. The cornerstone of StyleMe3D is **Dynamic Style Score Distillation (DSSD)**, which harnesses latent priors from a style-aware diffusion model to provide high-level semantic guidance. We further propose a **Contrastive Style Descriptor (CSD)** for middle-level stylistic similarity and a **3D Gaussian Quality Assessment (3DG-QA)** to enhance perceptual quality. Finally, a **Simultaneously Optimized Scale (SOS)** module is integrated to refine fine-grained texture details at the low-level.

[Download paper here](https://arxiv.org/pdf/2504.15281.pdf)

![styleme3dpage](/images/styleme3dpage.jpg)
