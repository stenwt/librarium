---
title: "VMware: Your First Cluster"
metaTitle: "VMware: Your First Cluster"
metaDescription: "Spectro Cloud page listing the steps for deploying VMware clusters"
---

import WarningBox from '@librarium/shared/src/components/WarningBox';

# Your First Cluster

This document provides a quick setup guide for Spectro Cloud. If you haven’t already, we recommend reviewing the [Spectro Cloud Overview](/introduction/concept-overviews) first.

Spectro Cloud supports provisioning and managing Kubernetes clusters on public clouds, private clouds, and bare-metal environments.

<WarningBox>
The guided documentation guide below is prescriptive with the names and selections. We highly recommend you follow the guide verbatim for your first cluster.
</WarningBox>

The following steps will be taken to provision your first VMware cluster:

* Create Cluster Profile.
* Add VMware Cloud Account.
* Provision Cluster.

# Cluster Profile

1. Navigate to the Default Project (select back to Default project if you’re in the Admin view).
1. Switch to the *Cluster Profiles* page from the left navigation bar.
1. Click on the *Create Cluster Profile* button.
1. Specify the name **ProductionVMware** and click *Next*.
1. Select **VMware (VMware)** for the cloud selection.
1. Click on Edit Layers.
1. Please designate the following selections for each layer, leaving the default configuration:
    * OS: Ubuntu, 18.4.X (LTS)
    * Kubernetes: select version 1.16.8
    * Network: Calico 3.10.X
    * Storage: VMware EBS 1.0.X
    * Additional layers:
        * Monitoring: Prometheus - Grafana 9.7.X
        * Monitoring: Kubernetes Dashboard 2.0.X
        * Logging: Elastic-Fluentd-Kibana (EFK) 6.7.0
    * Click on *Finish* to close the Layer dialogue.
1. Click on *Next* and review the *Cluster Profile*.
1. Click on *Finish* to create the Cluster Profile.

# Cloud Account

*Cloud Accounts* are where access credentials are stored for public and private clouds. It is used by the system to provide new cluster infrastructure and cluster resources.

<WarningBox>
Prerequisites: You need your own cloud account with appropriate permissions to create EC2 VMs and AMIs. Please ensure that your cloud account has at least the following configurations: [Cloud Account Permissions](/clusters/aws-clusters#prerequisites). Please import an SSH keypair into your account in the region `us-east-1`.
</WarningBox>

<WarningBox>
Also, this exercise creates a new VPC/Nat gateway/Elastic IP, so please confirm that your account has sufficient quota for the creation.
</WarningBox>

**Steps:**

1. Navigate to the Default Project (select back to Default project if you’re in the Admin view).
1. From the left-hand main-menu, select Settings.
1. Click on *Add VMware Cloud Account*.
    * name: ca1
    * Access Key: your &lt;VMware access key&gt;
    * Secret Key: your &lt;VMware secret key&gt;
1. Click on *Validate*.
1. Click on *Confirm* to finish creating your cloud account.

# Cluster

For the quick-start guide, we’ll provision a new cluster consisting of a single master and a single worker node:

**Steps:**

1. Navigate to the Default Project (select back to Default project if you’re in the Admin view).
1. Navigate to the *Clusters* page from the left-hand menu.
1. Click on *Create cluster* (and follow the wizard):
    * Name: c1
    * Select the cluster profile: ProductionVMware, click *Next*.
    * Leave the pack parameter overrides as-is, click *Next*.
    * Cloud Properties:
        * Cloud Account: ca1
        * Region: us-east-1
        * SSH keyname: &lt;select imported key&gt;
        * Do not select (deselect): Static Placement
        * Click on *Next*.
    * In the node pool configuration:
        * For the *Master* node pool, pick the following properties:
            * Instance type: t3.large (General Compute)
            * Availability Zone: us-east-1a
        * For the *Worker* node pool, pick the following properties:
            * nstance type: t3.large (General Compute)
            * Availability Zone: us-east-1a
    * In the final Review step, click on *Deploy*.
1. Wait for the cluster to become Active (check the *Overview* tab). Feel free to click on the Events tab to see the orchestration steps.

Once the cluster is provisioned - feel free to try the following:

* View deployed applications [as described here](). (!! EMPTY LINK !!)
* Scale up-down worker nodes [as described here](/clusters/aws-clusters#clusterscaling).
* Upgrade Kubernetes to a new version [as described here](/cluster-profiles/task-update-profile).