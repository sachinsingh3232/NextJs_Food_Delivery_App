import styles from "../styles/featured.module.css"
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];

    const handleArrow = (direction) => {
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            Hello gfhjsd ufewihjsk ugefhjdksn uiewfh uewf o ufwehj owehfin oehfiw nkl  eiwfohfk hoiewf  oihewf oehfw 
        </div>
    );
};

export default Featured;
