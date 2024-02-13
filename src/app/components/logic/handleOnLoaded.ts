import styles from "../../page.module.css";

export const handleOnLoaded = (img: any) => {
    img.target.classList.add(styles.loaded);
}
