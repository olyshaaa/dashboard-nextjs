import styles from "../ui/login/login.module.css"

const Modal = ({active, closeModal}) => {
	if (!active) {
		return null
	}
  return (
	<div className={styles.modal}>
		<div className={styles.modalContent}>
			<div className={styles.modalHeader}>
				<p onClick={closeModal}>X</p>
			</div>
			<div className={styles.modalBody}>
				<p>login: olyshaa</p>
				<p>password: 12345</p>
			</div>
		</div>
	</div>
  )
}

export default Modal