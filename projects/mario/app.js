let marioForm = document.marioF

marioForm.addEventListener("submit",function (event){
    event.preventDefault()
    let goonName = marioForm.gName.value
    let boomName = marioForm.bName.value
    let cheepName = marioForm.cName.value
    
    // console.log(boomName)

    let totalSum = document.createElement("p")
    let result = (parseInt(goonName)*5) + (parseInt(boomName)*7) + (parseInt(cheepName)*11)

    totalSum.textContent = "Your total cost is $" + result 
    // btn.innerText = `Total = goonName) + boomName + cheepName`
    let divTotal = document.getElementById("result")
    divTotal.appendChild(totalSum)
    // pTag.style.color = "white"
    
    marioForm.gName.value = ""
    marioForm.bName.value = ""
    marioForm.cName.value = ""

})

 let sectionDiv = document.getElementById("sectionDiv1")

 sectionDiv.addEventListener("mouseover",function(){
     sectionDiv.style.backgroundColor ="firebrick"
     sectionDiv.style.borderColor = "white"
     sectionDiv.style.color = "white"

 })
 let sectionDiv2 = document.getElementById("sectionDiv2")
 sectionDiv2.addEventListener("mouseover",function(){
     sectionDiv2.style.backgroundColor ="firebrick"
     sectionDiv2.style.borderColor = "white"
     sectionDiv2.style.color = "white"

 })
 let sectionDiv3 = document.getElementById("sectionDiv3")
 sectionDiv3.addEventListener("mouseover",function(){
     sectionDiv3.style.backgroundColor ="firebrick"
     sectionDiv3.style.borderColor = "white"
     sectionDiv3.style.color = "white"
 })
 sectionDiv.addEventListener("mouseleave", function(){
    sectionDiv.style.backgroundColor ="white"
    sectionDiv.style.borderColor = "red"
    sectionDiv.style.color = "red"
 })

 sectionDiv2.addEventListener("mouseleave", function(){
    sectionDiv2.style.backgroundColor ="white"
    sectionDiv2.style.borderColor = "red"
    sectionDiv2.style.color = "red"
 })

 sectionDiv3.addEventListener("mouseleave", function(){
    sectionDiv3.style.backgroundColor ="white"
    sectionDiv3.style.borderColor = "red"
    sectionDiv3.style.color = "red"
 })



// total = parsint(marioForm.goom.value) + parsint(marioForm.boom.value) + parsint(marioForm.cheep.value)


