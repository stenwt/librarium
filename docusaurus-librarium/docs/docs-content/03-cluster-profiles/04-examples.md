---
title: "Cluster Profile Examples"
metaTitle: "Cluster Profile Examples"
description: "The method for creating a Cluster Profile for AWS on Spectro Cloud"
icon: ""
hide_table_of_contents: true

---





# Examples

Cluster profiles can be built to launch clusters for specific use cases. Clusters launched for development purposes are typically minimal and do not require advanced integrations. Production clusters on the other hand tend to be more comprehensive with many more integrations. The following are examples of cluster profiles built for development and production purposes:

<Tabs>

<TabItem value="Development" label="dev_cp">

## Development Cluster Profile

![Development Profile](/assets/docs/images/development.png)

* All layers are built with smart tags to enable automatic upgrades of clusters to the newest releases.
* Kubernetes dashboard is the only integration enabled.

</TabItem>

<TabItem value="Production" label="prod_cp">

## Production Cluster Profile

![Production Profile](/assets/docs/images/production.png)

* All layers are pinned to specific versions
* Automatic upgrades are disabled
* Centralized logging enabled - Elastic Search, Fluentd, Kibana
* Centralized monitoring enabled - Prometheus, Grafana
* Runtime-security enabled - Sysdig Falco
* Service observability enabled -  Istio
* Role-based access control enabled - Permissions Manager
* Load balancer to expose services externally - MetalLB

</TabItem>

</Tabs>
