---
layout: page
title: EchoVision
description: A vision-language foundation model for echocardiography trained on 4M echo videos
importance: 1
category: research
---

EchoVision is my MSc thesis work at MBZUAI: a vision-language foundation model for echocardiography that uses view-aware contrastive pretraining to address view-text misalignment, the mismatch that arises when report text describes findings that are only visible in specific echo views.

The model was trained on 4M echocardiography videos (36 TB) using distributed multi-GPU SLURM pipelines. On our internal evaluation, it outperforms EchoCLIP on all nine regression tasks and PanEcho on six.

I am now extending this line of work at the BioMedIA Lab, moving view-aware pretraining toward temporal-causal objectives and automated clinical report generation.
