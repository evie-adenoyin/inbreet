import React from "react";
import styles from "./style.module.css";
import { Data } from "./Data";

const Blog = () => {
  return (
    <>
      <section className={styles.Blog}>
        <div className={styles.blogWrapper}>
          <div className={styles.BlogHeader}>
            <span className={styles.blogTitle}>Our Blog</span>
            <span className={styles.blogSubtitle}>
              Value proposition accelerator product management venture
            </span>
          </div>
          <article className={styles.blogGrid}>
            {Data.map((item) => (
              <div key={item.id} className={styles.blogCard}>
                <img src={item.image} alt="" className={styles.imageWrapper} />

                <div className={styles.category}>
                  {" "}
                  Category <span>{item.date}</span>
                </div>
                <div className={styles.desc}>
                  <span>{item.content}</span>
                </div>

                <div className={styles.explore}>
                  <img src={item.profile} alt="Author profile" />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </article>
          <button className={styles.button}>Load More</button>
        </div>
      </section>
    </>
  );
};

export default Blog;
