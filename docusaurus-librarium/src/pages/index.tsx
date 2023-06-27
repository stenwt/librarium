import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import QuickSetup from "@site/src/components/QuickSetup";
import CloudsSection from "@site/src/components/CloudSection";
import MainHeader from "@site/src/components/MainHeader/MainHeader";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <MainHeader
          introductionHref="/introduction"
          demoHref="https://www.spectrocloud.com/product/#learnmoresection"
        >
          <h1>Step-by-step guides, definitions and help</h1>
          <h3>
            A deeper dive into the Palette platform with all the technical
            details you need
          </h3>
        </MainHeader>
        <QuickSetup
          title="Quick Setup"
          options={[
            {
              title: "About Cluster Profiles",
              description: "Pre-configured settings for cluster deployments.",
              icon: "clusters",
              href: "/cluster-profiles/#task-define-profile"
            },
            {
              title: "Your First Cluster",
              description:
                "A step-by-step guide to creating your first cluster.",
              icon: "folder",
              href: "/getting-started/#deployingyourfirstcluster"
            },
            {
              title: "Integrations (Add-ons)",
              description:
                "Installation instructions for the available add-ons.",
              icon: "bundles",
              href: "/integrations/"
            }
          ]}
        />
        <QuickSetup
          title="Important Concepts"
          options={[
            {
              title: "Projects and Teams",
              description:
                "Grouping a set of resources for specific use-cases.",
              icon: "project",
              href: "/projects/"
            },
            {
              title: "Packs and Registries",
              description: "Pack management options for Kubernetes.",
              icon: "cog",
              href: "/registries-and-packs/"
            },
            {
              title: "User Management",
              description: "Setting up RBAC and enabling SAML-SSO.",
              icon: "user-astronaut",
              href: "/user-management/"
            }
          ]}
        />
        <QuickSetup
          title="Getting familiar with the dashboard"
          options={[
            {
              title: "Default View",
              description: "Details of the options available on logging in.",
              icon: "columns",
              href: "/getting-started/#defaultdashboard"
            },
            {
              title: "Administrator View",
              description:
                "Details of the options under the Administrator section.",
              icon: "user-cog",
              href: "/getting-started/#admindashboard"
            },
            {
              title: "API docs",
              description:
                "Details of the APIs currently available and the payloads.",
              icon: "cog",
              href: "/api/introduction"
            }
          ]}
        />
        <CloudsSection
          title="Detailed Setup"
          noBorder
          description="An insight into the procedures for creating clusters on public clouds as well as private clouds. Google Cloud Platform and Bare-metal coming soon!"
          options={[
            {
              title: "AWS",
              cloud: "aws",
              href: "/clusters/public-cloud/aws"
            },
            {
              title: "Azure",
              cloud: "azure",
              href: "/clusters/public-cloud/azure/"
            },
            {
              title: "Google Cloud",
              cloud: "google_cloud",
              href: "/clusters/public-cloud/gcp/"
            },
            {
              title: "AWS EKS",
              cloud: "aws",
              href: "/clusters/public-cloud/aws"
            },
            {
              title: "Azure AKS",
              cloud: "azure",
              href: "/clusters/public-cloud/azure/"
            }
          ]}
        />
        <CloudsSection
          options={[
            {
              title: "VMware",
              cloud: "vmware",
              href: "/clusters/data-center/vmware"
            },
            {
              title: "MaaS",
              cloud: "maas",
              href: "/clusters/data-center/maas/"
            },
            {
              title: "Openstack",
              cloud: "openstack",
              href: "/clusters/data-center/openstack/"
            }
          ]}
        />
        <QuickSetup
          title="On-Prem Installation"
          options={[
            {
              title: "Quick Start",
              description:
                "Quickly deploy a single-node version for PoC purposes.",
              icon: "rocket",
              href: "/enterprise-version/deploying-the-platform-installer/"
            },
            {
              title: "Enterprise Cluster",
              description:
                "Highly available multi-node setup for production purposes.",
              icon: "warehouse",
              href: "/enterprise-version/deploying-an-enterprise-cluster/"
            },
            {
              title: "On-Prem System Console",
              description: "Platform administration and upgrade management.",
              icon: "tachometer-alt",
              href: "/enterprise-version/system-console-dashboard/"
            }
          ]}
        />
      </main>
    </Layout>
  );
}
