import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Button/Button";

export const metadata = {
  title: "Lama Dev Contact Information",
  description: "This is Contact page",
};


function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill={true} className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
