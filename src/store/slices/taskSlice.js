import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:"tasks",
    initialState:{
        activeTasks:[],
        completedTasks:[],
        selectedTask: null,
    },
    reducers:{
        addTask:(state,action)=>{
            state.activeTasks.push({id: Date.now(),text:action.payload,completed:false})
        },
        toggleCompletion:(state,action)=>{
            const taskId = action.payload;
            const taskIndex = state.activeTasks.findIndex(task=>task.id === taskId);
            if(taskIndex!==-1){
                const [task] = state.activeTasks.splice(taskIndex,1);
                task.completed = true;
                state.completedTasks.push(task);
            }else{
                const completedIndex = state.completedTasks.findIndex(task => task.id === taskId);
                if (completedIndex !== -1) {
                  const [task] = state.completedTasks.splice(completedIndex, 1);
                  task.completed = false;
                  state.activeTasks.push(task);
                } 
            }
        },
        deleteTask: (state, action) => {
            const taskId = action.payload;
            
            // Remove from activeTasks if it exists there
            state.activeTasks = state.activeTasks.filter(task => task.id !== taskId);
            state.completedTasks = state.completedTasks.filter(task => task.id !== taskId);
            if (state.selectedTask?.id === taskId) {
                state.selectedTask = null;
            }
        },
        
        selectedTask:(state,action)=>{
            state.selectedTask = action.payload;
        },
        closeTaskDetails:(state)=>{
            state.selectedTask = null;
        }
    },

});
export const {addTask,toggleCompletion, selectedTask, closeTaskDetails, deleteTask} = taskSlice.actions;
export default taskSlice.reducer;