import styles from './todoitem.module.css'
export default  function Item({item,items,setItems}){
    function handledeleting(item){
    setItems(items.filter((todo) => todo!== item))
    }
    function handleClick(name) {
        const newArray = items.map((item) => item.name === name ? { ...item, done: !item.done } : item);
        setItems(newArray);
    }
    const className = item.done ? styles.completed : "";
    return(
        <div className={styles.item}>
            <div className={styles.itemname}><span className={className} onClick={()=>handleClick(item.name)}>{item.name}</span> <span><button onClick={()=>(handledeleting(item))} className={styles.delete}>x</button></span></div>
            <hr className={styles.line}/>
        </div>
        
    );
}