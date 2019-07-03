const myTodoDiv = document.getElementById("myTodoDiv")
function getTodo(){
    axios.get("https://api.vschool.io/mihretdejong/todo")
    .then(response => {
        const myTodos = response.data
        // console.log(response.data) 
        appendTodos(myTodos)   
    })
    .catch(error => console.log(error))
}
getTodo()
function appendTodos(myTodos){
    myTodoDiv.innerHTML = ""
    myTodos.forEach(function(todo){
        //  console.log ("working?")
        const todoDiv = document.createElement("div")
        const subDiv = document.createElement("div")
        const title = document.createElement("h3")
        const description = document.createElement("p")
        const price = document.createElement("p")
        const delBtn = document.createElement("button")
        const editBtn = document.createElement("button")
        const checkBox = document.createElement("input")
        const imgUrl = document.createElement("img")
        todoDiv.classList.add("todoDiv")
        subDiv.classList.add("subDiv")
        checkBox.classList.add("checkBoxStyle")
        title.textContent = todo.title
        description.textContent = todo.description
        price.textContent = todo.price
        editBtn.textContent = "Edit"
        editBtn.classList.add("editBtn")
        editBtn.addEventListener("click",function(e){
            const editForm = document.createElement("form")
            const editTitle = document.createElement("input")
            const editDescription = document.createElement("input")
            const editPrice = document.createElement("input")
            const editimgUrl = document.createElement("input")
            const saveBtn = document.createElement("button")
            saveBtn.textContent = "Save"
            editTitle.name = "editTitle" 
            editForm.name ="editForm"
            editDescription.name = "editDescription"
            editPrice.name = "editPrice"
            editPrice.type = "number"
            // editimgUrl.name = "editimgUrl"

            editBtn.style.display = "none"
            editForm.appendChild(editTitle)
            editForm.appendChild(editDescription)
            editForm.appendChild(editPrice)
            // editForm.appendChild(editImgUrl)
            editForm.appendChild(saveBtn)
            todoDiv.appendChild(editForm)

            editForm.addEventListener("submit", function(e){
                event.preventDefault()
                let editObj = {}
                editObj.title = editForm.editTitle.value
                editObj.description = editForm.editDescription.value
                editObj.price = editForm. editPrice.value
                // editObj.imgUrl = editForm.editimgUrl.value
                editReq(editObj, todo._id)
                editForm.style.display = "none"
                editBtn.style.display = "inline"
                getTodo()
            })
        })
        delBtn.textContent = "Delete"
        delBtn.classList.add("delBtn")
        delBtn.addEventListener("click", function(e){
            deleteReq(todo)
        })
        checkBox.type ="checkbox"
        checkBox.checked = todo.completed
        checkBox.addEventListener("click", (e) => {
            const updates = {
                completed: !todo.completed
            }
            axios.put(`https://api.vschool.io/mihretdejong/todo/${todo._id}`, updates)
                .then(response => getTodo())
                .catch(error => console.log(error))
            // putReq(myTodos) 
        })
        if(todo.completed){
            title.style.textDecoration = "line-through"
        }
        subDiv.appendChild(title)
        subDiv.appendChild(checkBox)
        todoDiv.appendChild(subDiv)
        todoDiv.appendChild(description)
        todoDiv.appendChild(price)
        todoDiv.appendChild(imgUrl)
        todoDiv.appendChild(delBtn)
        todoDiv.appendChild(editBtn)
        myTodoDiv.appendChild(todoDiv)
    })
}
const todoForm = document.todoForm
let newTodo = {}
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    newTodo.title = todoForm.title.value
    newTodo.description = todoForm.description.value
    newTodo.price = todoForm.price.value
    newTodo.imgUrl = todoForm.imgUrl.value
    
    // title.setAttribute('paceholder', 'title') 
    postReq()
})
function postReq(){
    axios.post("https://api.vschool.io/mihretdejong/todo", newTodo)
    .then(response =>{
        console.log(response.data)
        getTodo()
    })
    .catch(error => console.log(error)) 
}
// function putReq(todoObj){
//     axios.put(`https://api.vschool.io/mihretdejong/todo/${todoObj._id}`, {completed: todoObj.completed })
//     .then(response => getTodo())
//     .catch(error => console.log(error))
// }
function deleteReq(todoObj){
    axios.delete(`https://api.vschool.io/mihretdejong/todo/${todoObj._id}`)
    .then(response => getTodo())
    .catch(error => console.log(error))
}
function editReq(obj, id){
    axios.put("https://api.vschool.io/mihretdejong/todo/" + id, obj)
    .then (response => {
        console.log(response.data)
    })

}
