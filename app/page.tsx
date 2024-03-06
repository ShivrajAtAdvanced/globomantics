import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Default Page / GLobomantics App</h1>
      <Link href="/home">Home</Link>
    </main>
  );
}
