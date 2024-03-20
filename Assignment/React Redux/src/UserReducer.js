import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"employee",
    initialState:[],
    reducers:{
        userData:(state,action)=>{
            state.push(action.payload)
        },

        addUser:(state,action)=>{
            state.push(action.payload)
            // fetch('http://localhost:5000/employees',{
            //     method:"post",
            //     headers:{"content-type":"Application/json"},
            //     body:JSON.stringify(action.payload)
            // })
            // .then((res)=>{
            //     if(res)
            //     {
            //         alert("Added...!")
            //     }
            // })
        },

        editUser:(state,action)=>{
            // const {id,name,salary} = action.payload;

            // state.push(action.payload)

            // const userId = state.find((user)=>{
            //     return user.id == id
            // })

            // if(userId)
            // {
            //     userId.name = name;
            //     userId.salary = salary
            // }

            fetch(`http://localhost:5000/employees/${action.payload.id}`,{
                method:"put",
                headers:{"content-type":"Application/json"},
                body:JSON.stringify(action.payload)
            })
            .then((res)=>{
                if(res)
                {
                    alert("Edited...!")
                }
            })
        },

        deleteUser:(state,action)=>{
            // return state.filter((v)=>(v.id !== action.payload))

            // console.log(action.payload.id)

            fetch(`http://localhost:5000/employees/${action.payload.id}`,{
                method:"DELETE",
                headers:{"content-type":"Application/json"},
                body:JSON.stringify(action.payload)
            })
            .then((res)=>{
                if(res)
                {
                    alert("Deleted...!")
                }
            })
        }
    }
})

export const {userData,addUser,editUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;