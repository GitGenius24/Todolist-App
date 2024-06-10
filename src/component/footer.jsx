import styles from './footer.module.css'
export default function Footer({ completedItem ,totalItems}) {
    return (
        <div className={styles.footer}>
            <span >CompletedItems= <span className={styles.CompletedItems}>{ completedItem}</span></span>
            <span>TotalItems= <span className={styles.CompletedItems}>{ totalItems}</span></span>
            
        </div>
    )
} 