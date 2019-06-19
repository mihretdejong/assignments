//console.log(axios)

 const todoList = document.getElementById("myDivList")


//   function getTodos(){
  axios.get("https://api.vschool.io/mihretdejong/todo")
    .then(response => {
        console.log(response)
        const todos = response.data
        for (let i = 0; i < todos.length; i++){
            
            // const divPtag = document.createElement("div")
            const divContainer = document.createElement ("div")
            const h1 = document.createElement("h1")
            const p = document.createElement("p")
            h1.textContent = todos[i].title
            p.textContent = todos[i].price
            divContainer.appendChild(h1)
            divContainer.appendChild(p)
            todoList.appendChild(divContainer)
         
        }
     }) 
    .catch(error => console.log(error))
//  }


// Get: axios.get()
// Post: axios.post()
// Put: axios.put()
// Delete: axios.delete()