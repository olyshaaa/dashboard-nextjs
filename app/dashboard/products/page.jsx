import Image from "next/image"
import Link from "next/link"
import styles from "../../ui/dashboard/products/products.module.css"
import Search from "../../ui/dashboard/search/search"
import Pagination from "../../ui/dashboard/pagination/pagination"

const Products = () => {
    return (
            <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..."/>
                <Link href="/dasboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created at</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/>
                                IPhone
                            </div>
                        </td>
                        <td>Desc</td>
                        <td>15.05.2023</td>
                        <td>$1500</td>
                        <td>42</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dasboard/products/test">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default Products