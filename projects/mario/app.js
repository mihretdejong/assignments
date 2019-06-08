


let marioForm = document.marioF



marioForm.addEventListener("submit",function (event){
    event.preventDefault()
    let goonName = marioForm.gName.value
    let boomName = marioForm.bName.value
    let cheepName = marioForm.cName.value
    
    // console.log(boomName)

    let totalSum = document.createElement("p")
    let result = (parseInt(goonName)*5) + (parseInt(boomName)*7) + (parseInt(cheepName)*11)

    totalSum.textContent = "your total cost would be " + result

    // btn.innerText = `Total = goonName) + boomName + cheepName`
    
    
    let divTotal = document.getElementById("result")

    divTotal.appendChild(totalSum)
    // pTag.style.color = "white"


    
    
    
    marioForm.gName.value = ""
    marioForm.bName.value = ""
    marioForm.cName.value = ""

})




// total = parsint(marioForm.goom.value) + parsint(marioForm.boom.value) + parsint(marioForm.cheep.value)


