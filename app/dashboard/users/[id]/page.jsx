import Image from "next/image"
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css"
import "../../products/[id]/custom-select.css"
import IsSelect from "./isSelect"
import { fetchUser } from '../../../lib/data'
import { updateUser } from "../../../lib/actions"


const SingleUserPage = async ({params}) => {
    const {id} = params
    const user = await fetchUser(id)
    let { username, img, email, phone, address, isAdmin, isActive} = user
    return (
        <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.imgContainer}>
                        <Image src={img || "/noavatar.png"} alt="" fill/>
                    </div>
                        {username}
                </div>
                <div className={styles.formContainer}>
                    <form action={updateUser} className={styles.form}>
                        <input type="hidden" name="id" value={user.id}/>
                        <label>Username</label>
                        <input type="text" name="username" placeholder={username}/>
                        <label>Email</label>
                        <input type="email" name="email" placeholder={email}/>
                        <label>Password</label>
                        <input type="password" name="password"/>
                        <label>Phone</label>
                        <input type="text" name="phone" placeholder={phone}/>
                        <label>Address</label>
                        <textarea name="address" placeholder={address}/>
                        <label> Is Admin?</label>
                        <IsSelect name="isAdmin" id="isAdmin" />
                        <label> Is Active?</label>
                        <IsSelect name="isActive" id="isActive"/>
                        <button>Update</button>
                    </form>
                </div>
            </div>
    )
}

export default SingleUserPage