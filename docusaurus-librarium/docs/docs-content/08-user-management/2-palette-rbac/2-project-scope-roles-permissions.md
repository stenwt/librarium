---
title: "Project Scope Roles and Permissions"
metaTitle: "Project Roles"
metaDescription: "The list of Global Project Roles under Project Scope"
icon: ""
hideToC: false
fullWidth: false
---




import PointsOfInterest from '@site/src/components/PointOfInterest';
import Tooltip from "@site/src/components/Tooltip";



# Global Project Scope

The Global Project Scope holds a group of resources, in a logical grouping, to a specific project. Users and Teams with specific Roles can be associated with the Project, Cluster, or Cluster Profile you create.

Palette has adopted the security principle of least privilege. Each user is assigned Roles and Permissions to the Scopes, Resources, and Components. The Permissions format is `resourceKey.operation`, where **resourceKey** refers to a resource or the API functionality, and *operation* refers to the action or activity allowed. 

To view a list of the predefined roles and permissions, go to **Tenant Settings** > **Roles**, and you will find the list of **Global Roles**. If you need to extend your permissions, use the **Create Role** option. 

Below is the predefined list of Roles and Permissions for the Global Project Scope:

<br />


# App Deployment
--------------------------------

|Role Name   | Description  |
|---|---|
|App Deployment Admin |Provides administrative privilege to perform all the App operations on App resources. |
|App Deployment Editor|Allows the user to perform edit operations on an App but not to create or delete an App.|
|App Deployment Viewer|Allows the user to view all the App resources but not to make modifications.|

<br />
<br />

<Tabs>
<TabItem value="App Deployment Admin" label="App Deployment Admin">
<br />

## App Deployment Admin

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **appDeployment**  | √          | √          | √       | √        | √          |            |             |            |             |
| **appProfile**     |            |            | √       | √        |            |            |             |            |             |
| **cloudaccount**   |            |            | √       | √        |            |            |             |            |             |
| **clusterGroup**   |            |            | √       | √        |            |            |             |            |             |
| **location**       | √          | √          | √       | √        | √          |            |             |            |             |
| **machine**        |            |            | √       | √        |            |            |             |            |             |
| **macro**          | √          | √          | √       | √        | √          |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |
| **project**        |            |            | √       | √        |            |            |             |            |             |
| **sshKey**         | √          | √          | √       | √        | √          |            |             |            |             |
| **tag**            |            |            |         |          | √          |            |             |            |             |
| **virtualCloudconfig**| √       | √          | √       | √        | √          |            |             |            |             |
| **virtualCluster** | √          | √          | √       | √        | √          |            |             |            |             |



</TabItem>
<TabItem value="App Deployment Editor" label="App Deployment Editor">

<br />

## App Deployment Editor

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **appDeployment**  |            |            | √       | √        | √          |            |             |            |             |
| **appProfile**     |            |            | √       | √        |            |            |             |            |             |
| **cloudaccount**   |            |            | √       | √        |            |            |             |            |             |
| **clusterGroup**   |            |            | √       | √        |            |            |             |            |             |
| **location**       |            |            | √       | √        | √          |            |             |            |             |
| **machine**        |            |            | √       | √        |            |            |             |            |             |
| **macro**          |            |            | √       | √        |            |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |
| **project**        |            |            | √       | √        |            |            |             |            |             |
| **sshKey**         |            |            | √       | √        | √          |            |             |            |             |
| **tag**            |            |            |         |          | √          |            |             |            |             |
| **virtualCloudconfig**|         |            | √       | √        | √          |            |             |            |             |
| **virtualCluster** |            |            | √       | √        | √          |            |             |            |             |

<br />


</TabItem>
<TabItem value="App Deployment Viewer" label="App Deployment Viewer">

<br />

## App Deployment Viewer 

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **appDeployment**  |            |            | √       | √        |            |            |             |            |             |
| **appProfile**     |            |            | √       | √        |            |            |             |            |             |
| **cloudaccount**   |            |            | √       | √        |            |            |             |            |             |
| **clusterGroup**   |            |            | √       | √        |            |            |             |            |             |
| **location**       |            |            | √       | √        |            |            |             |            |             |
| **machine**        |            |            | √       | √        |            |            |             |            |             |
| **macro**          |            |            | √       | √        |            |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |
| **project**        |            |            | √       | √        |            |            |             |            |             |
| **sshKey**         |            |            | √       | √        |            |            |             |            |             |
| **virtualCloudconfig**|         |            | √       | √        |            |            |             |            |             |
| **virtualCluster** |            |            | √       | √        |            |            |             |            |             |


</TabItem>
</Tabs>

<br />


# App Profile
--------------------------------

|Role Names   | Description  |
|---|---|
|App Profile Admin |Provides administrative privilege to perform all the App operations on App profile resources. |
|App Profile Editor|Allows the user to perform edit operations on App profiles but not to create or delete an App profile.|
|App Profile Viewer|Allows the user to view all the App profile resources but not to modify them.|

<br />
<br />

<Tabs>
<TabItem value="App Profile Admin" label="App Profile Admin">
<br />

## App Profile Admin

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **appProfile**     | √          | √          | √       | √        | √          |            |             |            |             |
| **macro**          | √          | √          | √       | √        | √          |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |
| **project**        |            |            | √       | √        |            |            |             |            |             |

</TabItem>
<TabItem value="App Profile Editor" label="App Profile Editor">

<br />

## App Profile Editor

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **appProfile**     |            |            | √       | √        | √          |            |             |            |             |
| **macro**          |            |            | √       | √        | √          |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |
| **project**        |            |            | √       | √        |            |            |             |            |             |

<br />


</TabItem>
<TabItem value="App Profile Viewer" label="App Profile Viewer">

<br />

## App Profile Viewer 

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **appProfile**     |            |            | √       | √        |            |            |             |            |             |
| **macro**          |            |            | √       | √        |            |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |
| **project**        |            |            | √       | √        |            |            |             |            |             |


</TabItem>
</Tabs>

<br />


# Project
--------------------------------

|Role Names   | Description  |
|---|---|
|Project Admin |The Project Admin role is a closure of all the project operations. It is a administrative privilege for the project resources |
|Project Editor|The Project Editor role can perform edit operations within a project, but the user  is not able to create or delete a project|
|Project Viewer|The Project Viewer will be able to view all the resources within a project, but not privileged to make modifications|

<br />
<br />

<Tabs>
<TabItem value="Project Admin" label="Project Admin">
<br />

## Project Admin

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **audit**          |            |            | √       | √        |            |            |             |            |             |
| **cloudaccount**   | √          | √          | √       | √        | √          |            |             |            |             |
| **cloudconfig**    | √          | √          | √       | √        | √          |            |             |            |             |
| **cluster**        | √          | √          | √       | √        | √          | √          |             |            |             |
| **clusterProfile** | √          | √          | √       | √        | √          |            | √           |            |             |
| **clusterRbac**    | √          | √          | √       | √        | √          |            |             |            |             |
| **dnsMapping**     | √          | √          | √       | √        | √          |            |             |            |             |
| **edgehost**       | √          | √          | √       | √        | √          |            |             |            |             |
| **location**       | √          | √          | √       | √        | √          |            |             |            |             |
| **machine**        | √          | √          | √       | √        | √          |            |             |            |             |
| **macro**          | √          | √          | √       | √        | √          |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |
| **privateGateway** | √          | √          | √       | √        | √          |            |             |            |             |
| **project**        |            |            | √       | √        | √          |            |             |            |             |
| **sshKey**         | √          | √          | √       | √        | √          |            |             |            |             |
| **tag**            |            |            |         |          | √          |            |             |            |             |
| **workspace**      | √          | √          | √       | √        | √          |            |             | √          | √           |

</TabItem>
<TabItem value="Project Editor" label="Project Editor">

<br />

## Project Editor

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **audit**          |            |            | √       | √        |            |            |             |            |             |
| **cloudaccount**   |            |            | √       | √        | √          |            |             |            |             |
| **cloudconfig**    | √          |            | √       | √        | √          |            |             |            |             |
| **cluster**        |            |            | √       | √        | √          |            |             |            |             |
| **clusterProfile** |            |            | √       | √        | √          |            | √           |            |             |
| **clusterRbac**    |            |            | √       | √        | √          |            |             |            |             |
| **dnsMapping**     |            |            | √       | √        | √          |            |             |            |             |
| **edgehost**       |            |            | √       | √        | √          |            |             |            |             |
| **location**       |            |            | √       | √        | √          |            |             |            |             |
| **machine**        |            | √          | √       | √        | √          |            |             |            |             |
| **macro**          |            |            | √       | √        | √          |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |
| **privateGateway** |            |            | √       | √        | √          |            |             |            |             |
| **project**        |            |            | √       | √        | √          |            |             |            |             |
| **sshKey**         |            |            | √       | √        | √          |            |             |            |             |
| **tag**            |            |            |         |          | √          |            |             |            |             |
| **workspace**      |            |            | √       | √        | √          |            |             | √          | √           |

<br />


</TabItem>
<TabItem value="Project Viewer" label="Project Viewer">

<br />

## Project Viewer 

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **audit**          | √          |            |         |          | √          |            |             |            |             |
| **cloudaccount**   | √          |            |         |          | √          |            |             |            |             |
| **cloudconfig**    | √          |            |         |          | √          |            |             |            |             |
| **cluster**        | √          |            |         |          | √          |            |             |            |             |
| **clusterProfile** | √          |            |         |          | √          |            |             |            |             |
| **dnsMapping**     | √          |            |         |          | √          |            |             |            |             |
| **edgehost**       | √          |            |         |          | √          |            |             |            |             |
| **location**       | √          |            |         |          | √          |            |             |            |             |
| **machine**        | √          |            |         |          | √          |            |             |            |             |
| **macro**          | √          |            |         |          | √          |            |             |            |             |
| **packRegistry**   | √          |            |         |          | √          |            |             |            |             |
| **privateGateway** | √          |            |         |          | √          |            |             |            |             |
| **project**        | √          |            |         |          | √          |            |             |            |             |
| **sshKey**         | √          |            |         |          | √          |            |             |            |             |
| **workspace**      | √          |            |         |          | √          |            |             |            |             |


</TabItem>
</Tabs>

<br />


# Cluster Profile
-----------------------------

The user with these permissions can manage the Cluster Profiles within a project.

<br />

|Role Names| Description  |
|---|---|
|Cluster Profile Admin |Cluster Profile Admin role has admin privileges to all the cluster profile operations|
|Cluster Profile Editor|Cluster Profile Editor role has privileges to edit and list operations on the cluster profile|
|Cluster Profile Viewer|Cluster Profile Viewer role has read-only privileges to cluster profiles|

<br />

<Tabs>
<TabItem value="Cluster Profile Admin" label="Cluster Profile Admin">
<br />

## Cluster Profile Admin

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **clusterProfile** | √          | √          | √       | √        | √          |            | √           |            |             |
| **macro**          | √          | √          | √       | √        | √          |            |             |            |             |
| **packRegistry**   | √          | √          |         |          |            |            |             |            |             |
| **tag**            |            |            |         |          | √          |            |             |            |             |

<br />

</TabItem>
<TabItem value="Cluster Profile Editor" label="Cluster Profile Editor">

<br />

## Cluster Profile Editor

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **clusterProfile** |            |            | √       | √        | √          |            | √           |            |             |
| **macro**          |            |            | √       | √        | √          |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |
| **tag**            |            |            |         |          | √          |            |             |            |             |

<br />

</TabItem>
<TabItem value="Cluster Profile Viewer" label="Cluster Profile Viewer">

<br />

## Cluster Profile Viewer

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **clusterProfile** |            |            | √       | √        |            |            |             |            |             |
| **macro**          |            |            | √       | √        |            |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |

<br />

</TabItem>
</Tabs>

<br />

# Cluster
--------------------------------------
<br />

<br />

|Role Names| Description  |
|---|---|
|Cluster Admin  | A cluster admin in Project scope has all the privileges related to cluster operation|
|Cluster Editor | A cluster editor in Project scope has the privileges to update, delete,get and list cluster resources. This role is not privileged for cluster creation |
|Cluster Viewer | A cluster viewer in Project scope is a read-only privilege to cluster operations |

<br />

<Tabs>

<TabItem value="Cluster Admin" label="Cluster Admin">

<br />

## Cluster Admin

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **cloudaccount**   |            |            | √       | √        |            |            |             |            |             |
| **cloudconfig**    | √          | √          | √       | √        | √          |            |             |            |             |
| **cluster**        | √          | √          | √       | √        | √          | √          |             |            |             |
| **clusterProfile** | √          | √          |         |          |            |            |             |            |             |
| **clusterRbac**    | √          | √          | √       | √        | √          |            |             |            |             |
| **dnsMapping**     | √          | √          | √       | √        | √          |            |             |            |             |
| **edgehost**       | √          | √          | √       | √        | √          |            |             |            |             |
| **location**       | √          | √          | √       | √        | √          |            |             |            |             |
| **machine**        | √          | √          | √       | √        | √          |            |             |            |             |
| **macro**          | √          | √          | √       | √        | √          |            |             |            |             |
| **packRegistry**   | √          | √          |         |          |            |            |             |            |             |
| **privateGateway** | √          | √          |         |          |            |            |             |            |             |
| **tag**            |            |            |         |          | √          |            |             |            |             |
| **sshKey**         | √          | √          | √       | √        | √          |            |             |            |             |

<br />

</TabItem>
<TabItem value="Cluster Editor" label="Cluster Editor">

<br />

## Cluster Editor
<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />


|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **cloudaccount**   |            |            | √       | √        |            |            |             |            |             |
| **cloudconfig**    |            |            | √       | √        | √          |            |             |            |             |
| **cluster**        |            |            | √       | √        | √          |            |             |            |             |
| **clusterProfile** |            |            | √       | √        |            |            |             |            |             |
| **clusterRbac**    |            |            | √       | √        | √          |            |             |            |             |
| **dnsMapping**     |            |            | √       | √        | √          |            |             |            |             |
| **edgehost**       |            |            | √       | √        | √          |            |             |            |             |
| **location**       |            |            | √       | √        | √          |            |             |            |             |
| **machine**        |            | √          | √       | √        | √          |            |             |            |             |
| **macro**          |            |            | √       | √        | √          |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |
| **privateGateway** |            |            | √       | √        |            |            |             |            |             |
| **tag**            |            |            |         |          | √          |            |             |            |             |
| **sshKey**         |            |            | √       | √        | √          |            |             |            |             |

<br />

</TabItem>
<TabItem value="Cluster Viewer" label="Cluster Viewer">

<br />

## Cluster Viewer
    
<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **cloudaccount**   |            |            | √       | √        |            |            |             |            |             |
| **cloudconfig**    |            |            | √       | √        |            |            |             |            |             |
| **cluster**        |            |            | √       | √        |            |            |             |            |             |
| **clusterProfile** |            |            | √       | √        |            |            |             |            |             |
| **clusterRbac**    |            |            | √       | √        |            |            |             |            |             |
| **dnsMapping**     |            |            | √       | √        |            |            |             |            |             |
| **edgehost**       |            |            | √       | √        |            |            |             |            |             |
| **location**       |            |            | √       | √        |            |            |             |            |             |
| **machine**        |            |            | √       | √        |            |            |             |            |             |
| **macro**          |            |            | √       | √        |            |            |             |            |             |
| **packRegistry**   |            |            | √       | √        |            |            |             |            |             |
| **privateGateway** |            |            | √       | √        |            |            |             |            |             |
| **sshKey**         |            |            | √       | √        |            |            |             |            |             |

<br />

</TabItem>
</Tabs>

<br />

# Cloud Account
-----------------------------

<br />

|Role Names| Description |
|---|---|
|Cluster Account Admin  | An administrative access to cloud account operations|
|Cluster Account Editor | An editor access to cloud cloud account operations  |
|Cluster Account Viewer |  A read-only role for cloud account operations |

<br />


<Tabs>
<TabItem value="Cluster Account Admin" label="Cloud Account Admin">

<br />

## Cluster Account Admin

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                  | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ---------------- | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **cloudaccount** | √          | √          | √       | √        | √          |            |             |            |             |

<br />

</TabItem>
<TabItem value="Cluster Account Editor" label="Cluster Account Editor">

<br />

## Cluster Account Editor
<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                  | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ---------------- | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **cloudaccount** |            |            | √       | √        | √          |            |             |            |             |
 
<br />

</TabItem>
<TabItem value="Cluster Account Viewer" label="Cluster Account Viewer">

<br />

## Cluster Account Viewer 

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                  | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ---------------- | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **cloudaccount** |            |            | √       | √        |            |            |             |            |             |

<br />

</TabItem>
</Tabs>

# Workspace
------------------------------------

<br />

|Role Names| Description  |
|---|---|
|Workspace Admin  | Administrator role to workspace operations|
|Workspace Editor | Editor role to workspace operations |

<br />

<Tabs>
<TabItem value="Workspace Admin" label="Workspace Admin">

<br />

## Workspace Admin 
<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|               | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------- | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **workspace** | √          | √          | √       | √        | √          |            |             | √          | √           |


<br />

</TabItem>
<TabItem value="Workspace Operator" label="Workspace Operator">

<br />

## Workspace Operator

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|               | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------- | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **workspace** |            |            | √       | √        |            |            |             | √          | √           |

<br />
<br />
<br />

</TabItem>
</Tabs>


# Virtual Cluster
--------------------------------

|Role Names   | Description  |
|---|---|
|Virtual Cluster Admin |Provides administrative privilege to perform all virtual cluster operations on App resources.|
|Virtual Cluster Editor|Allows the user to perform edit operations on a virtual cluster but not to create or delete a virtual cluster.|
|Virtual Cluster Viewer|Allows the user to view all the virtual cluster resources but not to modify them.|

<br />
<br />

<Tabs>
<TabItem value="Virtual Cluster Admin" label="Virtual Cluster Admin">
<br />

## Virtual Cluster Admin

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **clusterGroup**   |            |            | √       | √        |            |            |             |            |             |
| **location**       |            |            | √       | √        |            |            |             |            |             |
| **macro**          | √          | √          | √       | √        | √          |            |             |            |             |
| **project**        |            |            | √       | √        |            |            |             |            |             |
| **tag**            |            |            |         |          | √          |            |             |            |             |
| **virtualCloudconfig**| √       | √          | √       | √        | √          |            |             |            |             |
| **virtualCluster** | √          | √          | √       | √        | √          |            |             |            |             |



</TabItem>
<TabItem value="Virtual Cluster Editor" label="Virtual Cluster Editor">

<br />

## Virtual Cluster Editor

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **clusterGroup**   |            |            | √       | √        |            |            |             |            |             |
| **location**       |            |            | √       | √        |            |            |             |            |             |
| **macro**          |            |            | √       | √        | √          |            |             |            |             |
| **project**        |            |            | √       | √        |            |            |             |            |             |
| **tag**            |            |            |         |          | √          |            |             |            |             |
| **virtualCloudconfig**|         |            | √       | √        | √          |            |             |            |             |
| **virtualCluster** |            |            | √       | √        | √          |            |             |            |             |

<br />


</TabItem>
<TabItem value="App Deployment Viewer" label="App Deployment Viewer">

<br />

## Virtual Cluster Viewer 

<br / >
<table>
    <tr>
        <td width="400"><b>resourceKeys</b></td>
        <td><b>Operations</b></td>
    </tr>
</table>
<hr />

|                    | **Create** | **Delete** | **Get** | **List** | **Update** | **Import** | **Publish** | **Backup** | **Restore** |
| ------------------ | ---------- | ---------- | ------- | -------- | ---------- | ---------- | ----------- | ---------- | ----------- |
| **clusterGroup**   |            |            | √       | √        |            |            |             |            |             |
| **location**       |            |            | √       | √        |            |            |             |            |             |
| **macro**          |            |            | √       | √        |            |            |             |            |             |
| **project**        |            |            | √       | √        |            |            |             |            |             |
| **virtualCloudconfig**|         |            | √       | √        |            |            |             |            |             |
| **virtualCluster** |            |            | √       | √        |            |            |             |            |             |

<br />


</TabItem>
</Tabs>

<br />

<br />
<br />
<br />
