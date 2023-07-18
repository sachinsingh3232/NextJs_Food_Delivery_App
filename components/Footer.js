import Image from "next/image"
import styles from "../styles/footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YEAH , WELL BAKED PIZZA OR WHAT ?..
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            132, Janki Street, Lucknow .
            <br />INDIA 12401.
            <br />(891) 488-8282
          </p>
          <p className={styles.text}>
            132, Janki Street, Lucknow .
            <br />INDIA 12401.
            <br />(891) 488-8282
          </p>
          <p className={styles.text}>
            132, Janki Street, Lucknow .
            <br />INDIA 12401.
            <br />(891) 488-8282
          </p>
          <p className={styles.text}>
            132, Janki Street, Lucknow .
            <br />INDIA 12401.
            <br />(891) 488-8282
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY TO FRIDAY
            <br /> 9:00 - 24:00
          </p>
          <p className={styles.text}>
            SATURDAY-SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer