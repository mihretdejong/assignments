

let myForm = document.formContainer

myForm.addEventListener("submit", function(event){
    event.preventDefault()
    console.log("hello")
    let firstName = myForm.firstName.value
    alert("Thank you! " + firstName) 
    // alert( "We will be in touch with you shortly!")

    
})

