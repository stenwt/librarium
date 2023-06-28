---
title: 'kube-watch'
metaTitle: 'kube-watch'
metaDescription: 'kube-watch monitoring pack in Spectro Cloud'
hiddenFromNav: true
type: "integration"
category: ['monitoring']
logoUrl: 'https://registry.dev.spectrocloud.com/v1/kubewatch/blobs/sha256:a277fb90357df9cbffe98eea1ed100fba1b17970b8fc056d210c4f7bfe4f17a3?type=image/png'
---




import PointsOfInterest from '@site/src/shared/components/common/PointOfInterest';
import Tooltip from "@site/src/components/Tooltip";


# Kubewatch

Kubewatch is a Kubernetes watcher that currently publishes notification to available collaboration hubs/notification channels. It is run in the k8s cluster for monitoring resource changes and event notifications are obtained through webhooks. The supported webhooks are:
 - slack
 - hipchat
 - mattermost
 - flock
 - webhook
 - smtp

## Usage:

  kubewatch [flags]
  kubewatch [command]


## Versions Supported

<Tabs>

<TabItem value="1.0.x" label="1.0.x">

**1.0.7**

</TabItem>
</Tabs>

## References

https://github.com/bitnami-labs/kubewatch/blob/master/README.md
