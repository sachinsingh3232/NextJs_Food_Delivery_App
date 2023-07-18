import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

const Navbar = () => {
    const router =useRouter()
    const quantity = useSelector(state => state.cart.quantity);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width={32} height={32} />
                </div>
                <div className={styles.text}>
                    <div className={styles.text}>ORDER NOW !</div>
                    <div className={styles.text}>012 345 678</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href={"/"}>
                        <li className={styles.listItem}>HomePage</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/pizza-logo.png" alt="" width={90} height={50} />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem} onClick={()=>router.push('/admin')}>Admin</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href={'/cart'}>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="" width={38} height={30} />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar