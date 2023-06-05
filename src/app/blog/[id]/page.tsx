import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae,
            eaque cupiditate nam aperiam perspiciatis ipsum mollitia consectetur
            beatae dolorum hic cumque harum eos. Alias architecto odio
            dignissimos ullam. Neque.
          </p>
          <div className={styles.author}>
            <Image
              src="/apps.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Joen Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/apps.jpg" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores
          dolorem eius consectetur optio molestiae laboriosam inventore nulla
          et, dicta error necessitatibus, quos est beatae sequi deserunt
          cupiditate distinctio minima! Atque unde iste, tenetur explicabo rem,
          enim corporis magni commodi sint blanditiis possimus et id. Autem
          impedit corrupti aliquam distinctio?
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
