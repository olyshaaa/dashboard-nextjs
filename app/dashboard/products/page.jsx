import Image from "next/image"
import Link from "next/link"
import styles from "../../ui/dashboard/products/products.module.css"
import Search from "../../ui/dashboard/search/search"
import Pagination from "../../ui/dashboard/pagination/pagination"
import { fetchProducts } from "../../../app/lib/data"
import { deleteProduct } from "../../lib/actions"

const Products = async ({searchParams}) => {

    const q = searchParams?.q || ""
    const page = searchParams?.page || 1
    const {count, products} = await fetchProducts(q, page)
    return (
            <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..."/>
                <Link href="/dashboard/products/add">
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
                    {products.map(({id, title, img, description, createdAt, price, stock}) => (
                    <tr key={id}>
                        <td>
                            <div className={styles.product}>
                                <Image src={img || "/noproduct.jpg"} alt="" width={40} height={40} className={styles.productImage}/>
                                {title}
                            </div>
                        </td>
                        <td>{description}</td>
                        <td>${price}</td>
                        <td>{createdAt?.toString().slice(4, 16)}</td>
                        <td>{stock}</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/products/${id}`}>
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <form action={deleteProduct}>
                                    <input type="hidden" name="id" value={id}/>
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count}/>
        </div>
    )
}

export default Products