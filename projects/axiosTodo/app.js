//console.log(axios)

 const todoList = document.getElementById("myDivList")

 // make a function 
// 
//   cost newTodo = {
//    title: 
//    imgUrl:

// pass the newTodo to the post function
//   
//  }

 function getTodos(){
  axios.get("https://api.vschool.io/mihretdejong/todo")
    .then(response => {
        console.log(response)
        const todos = response.data
        todos.innerHTML=""
        for (let i = 0; i < todos.length; i++){
          const divContainer = document.createElement ("div")
          const btn = document.createElement ("button")
          const h1 = document.createElement("h1")
          const p = document.createElement("p")
          const img = document.createElement("img")
          const checkBoxInput = document.createElement("input")
          const btnEdit = document.createElement("button")
          checkBoxInput.type = "checkbox"
          checkBoxInput.checked = todos[i].completed
          
          // addEventListeners 
          checkBoxInput.addEventListener("change", function(){
            putReq(todos[i], checkBoxInput )

          })
          btn.addEventListener("click", function(event){
            deleteReq(todos[i]._id)
          })

          

          btnEdit.addEventListener("click", function(){
            // editReq(todos[i])
            const editForm = document.createElement("form")
            editForm.name = "editForm"
            editForm.classList.add("editForm")
            const editTitle = document.createElement("input")
            editTitle.name = "editTitle"
            const editDescrp = document.createElement("input")
            editDescrp.name = "editDescription"
            // editDescrp.type = "text"
            const editPrice = document.createElement("input")
            editPrice.name = "editPrice"
            editPrice.type = "number"
            const editImg = document.createElement("input")
            editImg.name = "editImg"
            const saveBtn = document.createElement("button")
            saveBtn.textContent = "Save"
            editForm.addEventListener("submit", function(event){
              event.preventDefault()
              console.log(editForm.editTitle.value)
                let editObj = {}
                editObj.title = editForm.editTitle.value
                editObj.description = editForm.editDescription.value
                editObj.price = editForm.editPrice.value
                editObj.imgUrl = editForm.editImg.value
                console.log(JSON.stringify(editObj))
                editReq(editObj, todos[i]._id)
                editForm.style.display = "none"
                btnEdit.style.display = "inline"
                todos.innerHTML=""

                


              })
              btnEdit.style.display = "none"
              
              editForm.appendChild(editTitle)
              editForm.appendChild(editDescrp)
              editForm.appendChild(editPrice)
              editForm.appendChild(editImg)
              editForm.appendChild(saveBtn)
              
              divContainer.appendChild(editForm)
              // editObj.editPrice = editForm.editPrice.value
              // editObj.editTitle = editForm.editTitle.value
              // editObj.editImg = editForm.value
              
            

          })

         

          // text Content/////////////////////
          
          h1.textContent = todos[i].title
          p.textContent = todos[i].price
          // console.log(todos[i])
          img.src = todos[i].imgUrl

          divContainer.id = "divContainer"
          divContainer.classList.add("todo")
          divContainer.setAttribute('class', 'divStyle')
          img.classList.add("imgStyle")
          // img.setAttribute('class', 'img')
          btn.textContent = "Delete"
          btn.classList.add("btnDelete")
          btnEdit.textContent = "Edit"
          btnEdit.classList.add("btnEdit")
          
          // btn.setAttribute('class', 'delete')  

          // append elements ////////////////////////
          divContainer.appendChild(checkBoxInput)   
          divContainer.appendChild(h1)
          divContainer.appendChild(p)
          divContainer.appendChild(img)
          divContainer.appendChild(btn)
          divContainer.appendChild(btnEdit)

          todoList.appendChild(divContainer)

          
          if(todos[i].completed === true){
            h1.style.textDecoration = "line-through"
          } 
          if(checkBoxInput.checked === true){
            h1.style.textDecoration = "line-through"
          }
         
        }
     }) 
    // .catch(error => console.log(error))
 }

 getTodos()


 const formTodo = document.formTodo
 let newTodo = {}

 formTodo.addEventListener("submit", function(event){
   event.preventDefault()

   newTodo.title = formTodo.title.value
   newTodo.description = formTodo.description.value
   newTodo.price = formTodo.price.value
   newTodo.imgUrl = formTodo.img.value
   console.log(newTodo)
  //  const newTodo ={
  //    title: title,
  //    description: description,
  //    price: price,
  //    imgUrl: imgUrl

  //  }

   
   axios.post("https://api.vschool.io/mihretdejong/todo", newTodo)
      .then(response =>{
        console.log(response.data)
        getTodos()
      })
      postRsp()

      .catch(error => console.log(error))


 })

//  function postRsp(){
//   axios.post("https://api.vschool.io/mihretdejong/todo", newTodo)
//   .then(response =>{
//     console.log(response.data)
//     getTodos()
//   })

//  }



  function putReq(obj, checkBox){
   axios.put("https://api.vschool.io/mihretdejong/todo/" + obj._id, {completed:checkBox.checked} )
    .then(response =>{
      console.log(response.data)
    })
  }
    

//     .catch(error => console.log(error))




//delBtn.addEventListener(click, function(event))
// axios.delete(url, $todo.id)


function deleteReq(id){
  axios.delete("https://api.vschool.io/mihretdejong/todo/" + id)
    .then(response =>{
      console.log(response)
      
      todoList.innerHTML = ""
       getTodos()

    })}

//     .catch(error => console.log(error))


/// Extra Credit function .......

// function editForm(){

// }

function editReq(obj, id){
  axios.put("https://api.vschool.io/mihretdejong/todo/" + id, obj)
  .then(response => {
    // getTodos()
    console.log(response.data)
   
  })
  
  //for loop: each todo create a form that is activated when the edit button is clicked
      // this loop should have a save button instead of an edit button
  // display the form and get rid of the todo
      //
  // when the save button is clicked, it triggers a put request that displays the new information
  // when the 
}

















// Get: axios.get()
// Post: axios.post()
// Put: axios.put()
// Delete: axios.delete()