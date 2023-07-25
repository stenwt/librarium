import React from "react";
import styles from "./CloudSection.module.css";
import Link from "../Link/index";
//@ts-ignore
import Image from "@theme/IdealImage";
//@ts-ignore
import aws from "@site/static/assets/clouds/aws.png";
//@ts-ignore
import azure from "@site/static/assets/clouds/azure.png";
//@ts-ignore
import google_cloud from "@site/static/assets/clouds/google_cloud.png";
//@ts-ignore
import vmware from "@site/static/assets/clouds/vmware.png";
//@ts-ignore
import openshift from "@site/static/assets/clouds/openshift.png";
//@ts-ignore
import openstack from "@site/static/assets/clouds/openstack.png";
//@ts-ignore
import maas from "@site/static/assets/clouds/maas.png";

const clouds = {
  aws,
  azure,
  google_cloud,
  vmware,
  openshift,
  openstack,
  maas,
};

function CloudsSection({ noBorder = false, title = "", description = "", options = [] }) {
  return (
    <div className={`${styles.wrapper} ${!noBorder ? styles.noBorder : ""}`}>
      {title ? <h3>{title}</h3> : null}
      {description ? <div className={styles.description}>{description}</div> : null}
      <div className={styles.cardDescription}>
        {options.map((option, index) => (
          <Link to={option.href} key={index}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Image img={clouds[option.cloud]} alt={`${option.cloud} icon`} />
              </div>
              <div className={styles.cloudName}>{option.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CloudsSection;
