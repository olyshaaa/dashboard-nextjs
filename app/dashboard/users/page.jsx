import Link from "next/link"
import Search from "../../ui/dashboard/search/search"
import Pagination from "../../ui/dashboard/pagination/pagination"
import styles from "../../ui/dashboard/users/users.module.css"
import Image from "next/image"
import { fetchUsers } from "../../lib/data"
import { deleteUser } from "../../lib/actions"

const UsersPage = async ({searchParams}) => {

    const q = searchParams?.q || ""
    const page = searchParams?.page || 1
    const {count, users} = await fetchUsers(q, page)

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..."/>
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created at</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({id, username, email, img, isAdmin, isActive, createdAt}) => (
                    <tr key={id}>
                        <td>
                            <div className={styles.user}>
                                <Image src={img || "/noavatar.png" } alt="" width={40} height={40} className={styles.userImage}/>
                                {username}
                            </div>
                        </td>
                        <td>{email}</td>

                        <td>{createdAt?.toString().slice(4, 16)}</td>
                        <td>{isAdmin ? "Admin" : "Client"}</td>
                        <td>{isActive ? "Active" : "Passive"}</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/users/${id}`}>
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <form action={deleteUser}>
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

export default UsersPage