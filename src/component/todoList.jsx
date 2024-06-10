import  Item from './todoItem'
import styles from './todolist.module.css'
export default function TodoList({items,setItems}){
    return(
        <div className={styles.todoitem}>
             {items.map(item=>(
            <Item key={item.name} item={item} items={items} setItems={setItems}/>
        ))}
        </div>
    )
}