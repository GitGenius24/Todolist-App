import { useState } from "react"
import styles from './form.module.css'
export default function Form({items,setItems}){
const [item,setItem] = useState({name:"",done:false});
function handleSubmit(e){
    e.preventDefault();
    setItems([...items,item]);
    setItem({name:"",done:false});
}
return(
    <div className="App">
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputcontainer}>
      <input placeholder="Enter Todo Item...." className={styles.moderninput} onChange={(e)=>setItem({name:e.target.value,done:false})} value={item.name} type="text"/>
      <button className={styles.modernbutton} type="submit">Add</button>
      </div>
    </form>
  </div>
);
}
