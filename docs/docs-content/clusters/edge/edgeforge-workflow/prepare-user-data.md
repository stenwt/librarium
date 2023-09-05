---
sidebar_label: "Prepare User Data"
title: "Prepare User Data"
description: "Learn about building your staging user data"
hide_table_of_contents: false
sidebar_position: 0
tags: ["edge"]
---



The Edge Installer supports using a custom configuration file in the format of a YAML that you can use to customize the installation process. You can provide the customized configuration to the Edge Installer as a user data file. 

:::info

Review the Edge [Install Configuration](/clusters/edge/edge-configuration/installer-reference) resource to learn more about all the supported configuration parameters you can use in the configuration user data.

:::

You can also use the Operating System (OS) pack to apply additional customization using cloud-init stages. Both the Edge Installer configuration file and the OS pack support the usage of cloud-init stages. Refer to the [Cloud-Init Stages](/clusters/edge/edge-configuration/cloud-init) to learn more.

## User Data Samples

You may encounter the following scenarios when creating an Edge Installer configuration user data file. Use these examples as a starting point to help you create user data configurations that fit your needs. 

```yaml
#cloud-config
stylus:
  site:
    # The Palette API endpoint to use. The default value is api.spectrocloud.com.
    paletteEndpoint: api.spectrocloud.com

    # The edgeHostToken is an auto-registration token to register the Edge host with Palette upon bootup.
    # This token can be generated by navigating to the Tenant Settings -> Registration Token.
    # Specify a name and select the project id with which the Edge host should register itself.
    edgeHostToken: aUAxxxxxxxxx0ChYCrO

    # The Palette project ID the Edge host should pair with. This is an optional field if an edgeHostToken is used and the token was assigned to a project.
    projectUid: 12345677788
    # Tags which that will be assigned to the device as labels.
    tags:
      key1: value1
      key2: value2
      key3: value3

    # The device's name, may also be referred to as the Edge ID or Edge host ID.  If no Edge hostname is specified,
    # a hostname will be generated from the device serial number.  If the Edge Installer cannot identify the device serial number, then a random ID will
    # be generated and used instead. In the case of hardware that does not have a serial number, we recommended specifying a
    # random name, with minimal chances of being re-used by a different Edge host.
    name: edge-appliance-1

    # Optional
    # If the Edge host requires a proxy to connect to Palette or to pull images, then specify the proxy information in this section
    network:
      # configures http_proxy
      httpProxy: http://proxy.example.com
      # configures https_proxy
      httpsProxy: https://proxy.example.com
      # configures no_proxy
      noProxy: 10.10.128.10,10.0.0.0/8

      # Optional: configures the global  nameserver for the system.
      nameserver: 1.1.1.1
      # configure interface specific info. If omitted all interfaces will default to dhcp
      interfaces:
           enp0s3:
               # type of network dhcp or static
               type: static
               # Ip address including the mask bits
               ipAddress: 10.0.10.25/24
               # Gateway for the static ip.
               gateway: 10.0.10.1
               # interface specific nameserver
               nameserver: 10.10.128.8
           enp0s4:
               type: dhcp
    caCerts:
      - |
        ------BEGIN CERTIFICATE------
        *****************************
        *****************************
        ------END CERTIFICATE------
      - |
        ------BEGIN CERTIFICATE------
        *****************************
        *****************************
        ------END CERTIFICATE------

# There is no password specified to the default kairos user. You must specify authorized keys or passwords to access the Edge host console. 
stages:
  initramfs:
    - users:
        kairos:
          groups:
            - sudo
          passwd: kairos
```

### Connected Sites - Multiple User Data Configuration

In this example, two configuration user user data files are used. The first one is used in the staging phase and is included with the Edge Installer image. Note how the first user data contains the registration information and creates a user group. A bootable USB stick applies the second user data at the physical site. The secondary user data includes network configurations specific to the edge location.

**Staging** - included with the Edge Installer.

```yaml
#cloud-config
stylus:
  site:
      paletteEndpoint: api.spectrocloud.com
      edgeHostToken: <yourRegistrationToken>
      tags:
        city: chicago
        building: building-1

install:
  poweroff: true

stages:
  initramfs:
      - users:
          kairos:
          groups:
              - sudo
          passwd: kairos
```

**Site** - supplied at the edge location through a bootable USB drive. If specified, the `projectName` value overrides project information specified in the `edgeHostToken` parameter. You can add optional tags to identify the city, building, and zip-code. If the edge site requires a proxy for an outbound connection, provide it in the network section of the site user data.

```yaml
#cloud-config
stylus:
  site:
    projectName: edge-sites
    tags:
      zip-code: 95135
```

### Connected Sites - Single User Data

This example configuration is for a *connected site*.
In this scenario, only a single Edge Installer configuration user data is used for the entire deployment process.

<br />

```yaml
#cloud-config
stylus:
  site:
      paletteEndpoint: api.spectrocloud.com
      edgeHostToken: <yourRegistrationToken>
      projectName: edge-sites
      tags:
        city: chicago
        building: building-1
        zip-code: 95135

install:
  poweroff: true

stages:
  initramfs:
    - users:
        kairos:
        groups:
            - sudo
        passwd: kairos
```

### Apply Proxy & Certificate Settings 

This example showcases how you can include network settings in a user data configuration.

```yaml
#cloud-config
stylus:
  site:
      paletteEndpoint: api.spectrocloud.com
      edgeHostToken: <yourRegistrationToken>
      projectName: edge-sites
      tags:
        city: chicago
        building: building-1
        zip-code: 95135
  network:
      httpProxy: http://proxy.example.com
      httpsProxy: https://proxy.example.com
      noProxy: 10.10.128.10,10.0.0.0/8    
      nameserver: 1.1.1.1
      # configure interface specific info. If omitted all interfaces will default to dhcp
      interfaces:
          enp0s3:
              # type of network dhcp or static
              type: static
              # Ip address including the mask bits
              ipAddress: 10.0.10.25/24
              # Gateway for the static ip.
              gateway: 10.0.10.1
              # interface specific nameserver
              nameserver: 10.10.128.8
          enp0s4:
              type: dhcp 
    caCerts:
      - |
        ------BEGIN CERTIFICATE------
        *****************************
        *****************************
        ------END CERTIFICATE------
      - |
        ------BEGIN CERTIFICATE------
        *****************************
        *****************************
        ------END CERTIFICATE------

install:
  poweroff: true

stages:
  initramfs:
      - users:
          kairos:
          groups:
              - sudo
          passwd: kairos
```

### Load Content From External Registry

In this example, content is downloaded from an external registry.

```yaml
#cloud-config
stylus:
  registryCredentials:
    domain: 10.10.254.254:8000/spectro-images
    username: ubuntu
    password: <yourPassword>
    insecure: true
  site:
    debug: true
    insecureSkipVerify: false
    paletteEndpoint: api.console.spectrocloud.com
    name: edge-appliance-1
    caCerts:
      - |
        -----BEGIN CERTIFICATE-----
        
        -----END CERTIFICATE-----

install:
  poweroff: false

stages:
  initramfs:
    - users:
        kairos:
          groups:
            - sudo
          passwd: kairos
```


## Multiple User Data Use Case

If you don't need to apply any unique configurations on the device once it arrives at the physical site, then your site deployment flow would look like the following.

![The flow of an install process not requiring additional customization](/clusters_site-deployment_prepare-edge-configuration_install-flow.png)

Should you need to apply different configurations once the device arrives at the physical site, you can use a secondary user data to support this use case.

Use the additional user data to override configurations from the previous user data that was flashed into the device or to inject new configuration settings. Using secondary user data at the physical site is a common pattern for organizations that need to change settings after powering on the Edge host at the physical location.

To use additional user data, create a bootable device, such as a USB stick, that contains the user data in the form of an ISO image. The Edge Installer will consume the additional user data during the installation process.

![The flow of an install process with an additional customization occurring at the physical site. The additional customization is using a USB stick to upload the new user data.](/clusters_site-deployment_prepare-edge-configuration_install-flow-with-more-user-data.png)

When creating your Edge Installer, you can embed the user data into the installer image to eliminate providing it via a USB drive.

In the staging phase, you may identify user data parameter values that apply uniformly to all your edge sites. But you may also have some edge locations that require different configurations such as site network proxy, site certs, users and groups, etc. 
Site-specific configurations are typically not included in the Edge installer image. For the latter scenario, you can use a secondary user data configuration. Refer to the  [Apply Site User Data](/clusters/edge/site-deployment/site-installation/site-user-data) guide to learn more about applying secondary site-specific user data.



:::info

For your initial testing, your user data may include global settings and site-specific properties in a single user data. As you gain more experience, you should evaluate whether secondary site-specific user data is a better design for your use case.

:::



## Next Steps

The last step of the EdgeForce workflow is to build the Edge artifacts. Check out the [Build Edge Artifacts](/clusters/edge/edgeforge-workflow/palette-canvos) guide to learn how to create the Edge artifacts.