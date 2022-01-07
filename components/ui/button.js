import Link from "next/link";
import styles from "./button.module.css";
function Button(props) {
  if (props.href) {
    return (
      <Link href={props.href}>
        <a
          className={`${styles.btn} ${
            props.class === "start" && styles.btnStart
          }`}
        >
          {props.children}
        </a>
      </Link>
    );
  }
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Button;
