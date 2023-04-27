import React, { useState } from 'react'


export const initialToDos = [
    'do this thing',
    'and this thing',
    'and also do this one, too',
    "funny that this is a to-do list program because it's incomplete"
    
]
export default function TodoList () {
const [toDoItems, setToDoItems] = useState(initialToDos);
const [markedItems, setMarkedItems] = useState([initialToDos[0]]);

console.log(markedItems);

// const markFinished = item => {
//     markedItems.find(marked => {
//         item === marked
//     console.log(marked)
// })
// }


return (
    <div className='container toDoListContainer'>
        <h2>To Do List</h2>
        <div className='todos'>
            {
                toDoItems.map(item => 
                    <div 
                    className='toDoItem'
                    key={item}
                    // onClick={() => }
                    >
                        {item}
                    </div>
                    )
            }
            
            
        </div>
    </div>
);
}