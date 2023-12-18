import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Validators",
    Svg: require("@site/static/img/involve.svg").default,
    description: (
      <>
        Discover the vital role of node validators in securing Firechain.
        Dedicated individuals ensure the integrity of transactions and
        consensus, upholding the foundation of trust in our ecosystem.
        {/* Validators play a crucial role in maintaining the security and integrity
        of the network, and are rewarded with FIRE for their services. */}
      </>
    ),
  },
  {
    title: "Founders",
    Svg: require("@site/static/img/founders.svg").default,
    description: (
      <>
        Explore the visionary minds behind our blockchain revolution. Meet our
        founders, trailblazers in the decentralized ecosystem, who ignited this
        transformative journey.
        {/* Kryptonacci & Kryptstein are the visionary individuals who initiated and
        establish <code>Firechain</code>? */}
        {/* , organization, or project.
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
      </>
    ),
  },
  {
    title: "Developers",
    Svg: require("@site/static/img/pay_doc.svg").default,
    description: (
      <>
        Welcome to our blockchain platform, where developers are the backbone of
        innovation. Join our community of skilled coders, passionate about
        revolutionizing the digital landscape.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
