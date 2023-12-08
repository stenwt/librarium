---
sidebar_label: "Architecture"
title: "Architecture"
description: "Learn about the architecture used to support Nutanix in Palette."
hide_table_of_contents: false
sidebar_position: 0
tags: ["data center", "nutanix", "architecture"]
---


Nutanix is a private data center-based cloud that can be registered to Palette using Palette's generic framework built upon the open-source Cluster API (CAPI) initiative. For more information about the CAPI, review  [Cluster API (CAPI) framework](#generic-framework-for-capi-clouds). Nutanix offers a hyper-converged infrastructure (HCI) that combines storage, compute, and networking into a single integrated system. 

Below are key architectural highlights of Nutanix clusters provisioned through Palette.

- Palette integrates with Nutanix through the Cloud Native Computing Foundation (CNCF) [Nutanix Cluster API infrastructure provider](https://github.com/nutanix-cloud-native/cluster-api-provider-nutanix).

- Nutanix Prism is a resource management platform that centralizes the monitoring and management of objects across Nutanix environments, whether hosted locally or in the cloud. Nutanix Prism has two main components: Prism Central (PC) and Prism Element (PE).

  - Prism Central is required. CAPI Provider Nutanix Cloud Infrastructure (CAPX) interacts with Prism Central APIs using a Prism Central user account. For more information, refer to the Nutanix [Credential Management](https://opendocs.nutanix.com/capx/latest/credential_management/) reference guide.

  - Prism Element is a localized cluster manager available for every deployed Nutanix cluster. Within Prism Element, you can configure a cluster, specifying its components such as the number of control plane and worker nodes, networking settings, and more.

- The Kubernetes API Server endpoint is accessible through kube-vip, which is a load balancing solution for the cluster’s control plane. Kube-vip distributes API requests across control plane nodes and also has fail over capabilities.

- A self-hosted Private Cloud Gateway (PCG) is required to enable Palette to securely communicate with the Nutanix cloud. The direct communication channel allows Palette to create clusters within the Nutanix cloud.

The following diagram illustrates the Nutanix architecture.


  
![Network flow from an architectural perspective of how Nutanix works with Palette.](/clusters_data-center_nutanix_architecture.png)
