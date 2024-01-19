import Image from "next/image"
import styles from "../../../ui/dashboard/products/singleProduct/singleUser.module.css"

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.imgContainer}>
                        <Image src="/noavatar.png" alt="" fill/>
                    </div>
                        IPhone
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.form}>
                        <label>Title</label>
                        <input type="text" name="title" placeholder="John Doe"/>
                        <label>Price</label>
                        <input type="number" name="price" placeholder="JohnDoe@gmail.com"/>
                        <label>Stock</label>
                        <input type="number" name="stock" placeholder="23"/>
                        <label>Color</label>
                        <input type="text" name="color" placeholder="black"/>
                        <label>Size</label>
                        <textarea name="size" placeholder="Kyiv"/>
                        <label>Category</label>
                        <select name="cat" id="isAdmin">
                            <option value="kitchen">Kitchen</option>
                            <option value="computers">Computers</option>
                        </select>
                        <label>Description</label>
                        <textarea name="desc" id="desc" rows="10" placeholder="Description"></textarea>
                        <button>Update</button>
                    </div>
                </div>
            </div>
    )
}

export default SingleProductPage