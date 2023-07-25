---
title: "Data Center Clusters"
metaTitle: "Creating new clusters on Spectro Cloud"
description: "The methods of creating clusters for a speedy deployment on any CSP"
hide_table_of_contents: false

sidebar_custom_props:
    icon: "database"
---



import Tooltip from '@site/src/components/Tooltip';


# Data Center Clusters 

Spectro Cloud supports provisioning and end-to-end lifecycle management of Kubernetes clusters (workload clusters) on various private clouds and bare metal servers (installed in data centers). Provisioning of clusters on private environments like VMware, OpenStack etc requires a Private Cloud Gateway (PCG) to be installed for Spectro Cloud to be able to install Kubernetes clusters.

<br />

:::info
Workload clusters are instantiated from cloud specific <Tooltip trigger={<u>cluster profiles</u>}><a href="/cluster-profiles">Cluster profiles</a> are instantiated templates that are created with pre-configured layers/components needed for cluster deployments.</Tooltip>. You can use one of the cluster profiles provided out-of-the-box or create a new one.
:::

# Environments

The following pages provide detailed instructions for setting up new workload clusters in various environments :

* [Bare Metal using Canonical's Metal-as-a-Service (MAAS)](/clusters/data-center/maas)
* [OpenStack](/clusters/data-center/openstack)
* [VMWare](/clusters/data-center/vmware)

<br />

<br />
