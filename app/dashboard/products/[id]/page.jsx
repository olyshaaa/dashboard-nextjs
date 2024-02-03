import Image from "next/image"
import styles from "../../../ui/dashboard/products/singleProduct/singleUser.module.css"
import { fetchProduct } from "../../../lib/data"
import { updateProduct } from "../../../lib/actions"
import CategorySelect from "./categorySelect"

const SingleProductPage = async ({params}) => {
    const {id} = params
    const product = await fetchProduct(id)
    const {title, description, price, stock, color, size} = product
    return (
        <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.imgContainer}>
                        <Image src="/noproduct.jpg" alt="" fill/>
                    </div>
                        {title}
                </div>
                <div className={styles.formContainer}>
                    <form action={updateProduct} className={styles.form}>
                        <input type="hidden" name="id" value={product.id}/>
                        <label>Title</label>
                        <input type="text" name="title" placeholder={title}/>
                        <label>Price</label>
                        <input type="number" name="price" placeholder={price}/>
                        <label>Stock</label>
                        <input type="number" name="stock" placeholder={stock}/>
                        <label>Color</label>
                        <input type="text" name="color" placeholder={color}/>
                        <label>Size</label>
                        <textarea name="size" placeholder={size}/>
                        <label>Category</label>
                        <CategorySelect />
                        {/* <select name="cat" id="category">
                            <option value="kitchen">Kitchen</option>
                            <option value="computers">Computerss</option>
                        </select> */}
                        <label>Description</label>
                        <textarea name="desc" id="desc" rows="10" placeholder={description}></textarea>
                        <button>Update</button>
                    </form>
                </div>
            </div>
    )
}

export default SingleProductPage