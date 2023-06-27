const redirects = [
  {
    from: `/api/`,
    to: `/api/introduction`
  },
  {
    from: `/api`,
    to: `/api/introduction`
  },
  {
    from: `/clusters/nested-clusters`,
    to: `/clusters/palette-virtual-clusters`
  },
  {
    from: `/clusters/sandbox-clusters`,
    to: `/clusters/palette-virtual-clusters`
  },
  {
    from: `/clusters/sandbox-clusters/cluster-quickstart`,
    to: `/clusters/palette-virtual-clusters/virtual-cluster-quickstart`
  },
  {
    from: `/devx/sandbox-clusters`,
    to: `/devx/palette-virtual-clusters`
  },
  {
    from: `/clusters/edge/virtualized`,
    to: `/clusters/edge`
  },
  {
    from: `/troubleshooting/palette-namespaces-podes`,
    to: `/architecture/palette-namespaces-podes`
  },
  {
    from: `/troubleshooting/Network-Communications-and-Ports`,
    to: `/architecture/networking-ports`
  },
  {
    from: `/troubleshooting/SAAS-Network-Communications-and-Ports`,
    to: `/architecture/networking-ports`
  },
  {
    from: `/troubleshooting/orchestration-spectrocloud`,
    to: `/architecture/orchestration-spectrocloud`
  },
  {
    from: `/devx/registries/helm-registry`,
    to: `/registries-and-packs/helm-charts`
  },
  {
    from: `/devx/registries/oci-registry`,
    to: `/registries-and-packs/oci-registry`
  },
  {
    from: `/clusters/palette-virtual-clusters/virtual-cluster-quickstart`,
    to: `/clusters/palette-virtual-clusters/add-virtual-cluster-to-host-cluster/`
  },
  {
    from: `/introduction/architecture-overview`,
    to: `/architecture/architecture-overview`
  },
  {
    from: `/introduction/what-is`,
    to: `/introduction`
  },
  {
    from: `/getting-started/free-cloud-credit`,
    to: `/getting-started/palette-freemium`
  },
  {
    from: `/clusters/public-cloud/eks`,
    to: `/clusters/public-cloud/aws/eks`
  },
  {
    from: `/clusters/public-cloud/aks`,
    to: `/clusters/public-cloud/azure/eks`
  },
  {
    from: `/integrations/minio-operator`,
    to: `/integrations/minio`
  },
  {
    from: `/knowledgebase/how-to/reverse-proxy-dashboard`,
    to: `/clusters/cluster-management/kubernetes-dashboard`
  },
  {
    from: `/devx/cluster-groups`,
    to: `/clusters/cluster-groups`
  },
  {
    from: `/devx/cluster-groups/ingress-cluster-group`,
    to: `/clusters/cluster-groups/ingress-cluster-group`
  },
  {
    from: `/devx/dev-land-explore`,
    to: `/devx`
  },
  {
    from: `/clusters/cluster-management/.ssh`,
    to: `/clusters/cluster-management/ssh-keys`
  },
  {
    from: `/clusters/edge/installer-image`,
    to: `/clusters/edge/install/installer-image`
  },
  {
    from: `/clusters/edge/native`,
    to: `/clusters/edge/site-deployment`
  },
  {
    from: `/clusters/edge/installer-image`,
    to: `/clusters/edge/site-deployment/installer`
  },
  {
    from: `/clusters/edge/native`,
    to: `/clusters/edge/site-deployment/installer`
  },
  {
    from: `/knowledgebase/tutorials/terraform-tutorial`,
    to: `/terraform`
  },
  {
    from: `/knowledgebase/tutorials/cks-tutorial`,
    to: `/introduction`
  },
  {
    from: `/knowledgebase/tutorials/dev-engine`,
    to: `/knowledgebase/tutorials`
  },
  {
    from: `/knowledgebase/tutorials/dev-engine/deploy-app`,
    to: `/knowledgebase/tutorials`
  },
  {
    from: `/kubernetes-knowlege-hub/how-to/deploy-stateless-frontend-app`,
    to: `/kubernetes-knowlege-hub/tutorials/deploy-stateless-frontend-app`
  },
  {
    from: `/devx/resource-quota`,
    to: `/devx/manage-dev-engine/resource-quota`
  },
  {
    from: `/devx/registries`,
    to: `/devx/manage-dev-engine/registries`
  },
  {
    from: `/devx/virtual-clusters`,
    to: `/devx/palette-virtual-clusters`
  },
  {
    from: `/clusters/edge/edgeforge-workflow/build-kairos-os`,
    to: `/clusters/edge/edgeforge-workflow/palette-canvos`
  },
  {
    from: `/clusters/edge/edgeforge-workflow/build-images`,
    to: `/clusters/edge/edgeforge-workflow/palette-canvos`
  },
  {
    from: `/integrations/ubuntu-k3s`,
    to: `/integrations/ubuntu`
  }
];

module.exports = redirects;
