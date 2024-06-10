import Form from './form';
import Footer from './footer';
import TodoList from './todoList'
import { useState } from "react"
export default function Todo(){
  const [items, setItems] = useState([]);
  const completedItems = items.filter((item) => item.done).length;
  const totalItems = items.length;
    return(
        <div className="App">
        <Form items={items} setItems={setItems}/>
        <TodoList items={items} setItems={setItems} />
        <Footer completedItem={completedItems} totalItems={ totalItems} />
      </div>
    );
}