
import { useState } from 'react';
import './App.css';

function App() {
// doList Array
const[doList,setDoList]=useState([

    // {
    //     'id': Date.now(),
    //     'title': 'task2',
    //    'status':false
    // } ,  
    // {
    //     'id': Date.now(),
    //     'title': 'task1',
    //    'status':false 
    // }   
]);

const [newTask,setNewTask]=useState('');

const [updateTask,setUpdateTask]=useState('');

// // Add a Task
function addTask(){
    if(newTask){
        let num = doList.length + 1
        let newEntery={id:num, title:newTask , status:false}
        setDoList([...doList,newEntery])
        setNewTask('')
    }
}

// // Delete Task 
function deleteTask(id){
let newTaskes = doList.filter((task)=> task.id !== id)
setDoList(newTaskes)
}

// // Mark Task 
function markTask(id){
let newTask = doList.map((task)=>{
if(task.id === id ){
    return ({...task , status: !task.status})
}
    return task

})
setDoList(newTask)
}

// // cencle Update 
function cencleUpdate(){

setUpdateTask('');

}
// //Change for update 
function changeTask(e){
 let updated = {
    id:updateTask.id,
    title:e.target.value,
    status:updateTask.status ? true: false
 }  
 
 setUpdateTask(updated)

}

//update Task 
function updateData(){
let Records = [...doList].filter( task => task.id !== updateTask.id)
let updateObj = [...Records, updateTask];
setDoList(updateObj);
setUpdateTask('')
}
return(<>
<div className=' bg-list text-white 100vh'>

<div className='doApp container m-auto w-70 h-100' >
    <h1 className='text-white text-center my-5 '> 
        LIST OF TASKES
    </h1>
    {/* update Task  */}
    {updateTask && updateTask ?(<>
        <div className='row'>
        <div className='col'>
            <input
            className='form-control form-control-lg'
            value={updateTask && updateTask.title}
            onChange={(e)=> changeTask(e)}
            required
            maxLength={30}
            />
        </div>
        <div className='col-auto'>
            <button className='btn btn-lg px-4 mr-20 update-btn'
            onClick={updateData}
            > 
            <i className="fa-solid fa-pen-to-square"></i> 
            </button>
            <button className='btn btn-lg px-4  update-btn'
            onClick={cencleUpdate}
            > 
            <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    </div>
    <br/>
    </>):(<>
       

    


{/* Add Task */}
<div className='row'>
    <div className='col'>
        <input
        className='form-control form-control-lg'
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value )}
        required
        maxLength={30}
        />
    </div>
    <div className='col-auto'>
        <button 
        className='btn btn-lg px-4 add-btn'
        onClick={addTask}> 
        <i className="fa-solid fa-plus"></i>
        </button>
    </div>
</div>
<br/>
    </>)}
   
    
    {doList && doList.length ?'':'NO TASKES NOW ...'}
    {doList && doList
    .sort((a,b)=> a.id > b.id ? 1 : -1)
    .map((task,index)=>{
        return(
            <div key={index} className='col list-bg'>
                <div className={task.status? 'done': ''}>
                    <div
                    onClick={()=>markTask(task.id)}>
                    {task.status?<span title='Completed / Not Completed'><i className="fa-solid fa-square-check"></i></span>: <span className='check-empty' title='Completed / Not Completed'></span>}
                    </div>
                    
                   
                    
                    <span className='taskText ps-3'>{task.title}</span>
                    
                    
                    {/* <span className='taskNumber'>{task.id}</span> */}
                    
                </div>

                <div className='tools'>
                        <span title='Delet'
                        onClick={()=> deleteTask(task.id)}>
                        <i className="fa-solid fa-trash"></i>
                        </span>

                        {task.status? null:(
                             <span title='Edit'
                             onClick={()=> setUpdateTask({
                                id:task.id,
                                title:task.title,
                                status:task.status ? true : false
                             })}>

                             <i className="fa-solid fa-pen-to-square"></i>  
                             </span>
                        )}
                       

                    </div>
                
            </div>
        )
    })}

    {/* <form className='w-60' >
        <input
        className='form-control'
        placeholder='Enter your task'
        // value={e.target.value}
        maxLength={30}
        autoFocus
        required
        // onChange={(e)=>{e.target.value}}
        />
        <button className='btn btn-primary'>
        <i class="fa-solid fa-plus"></i>
        </button>
    </form> */}

</div>



</div>
</>)


  
}

export default App;

