{/* the btn onClick also triggers the form's onSubmit and the onSubmit resets
                            the value of displayAnswer in state so that the correct answer is not displayed 
                            automatically when we continue to the next question */}
                            {/* nested ternery in a ternary doesn't work
                            we had to create a new div on one side of the ternary to add the new ternery
                            that asks whether we have reached at ten questions and if so 
                            to go to the score page. if not, to keep displaying the continue button  */}

                            {/* fragmentize because you can only return one thing in a ternery */}



                                //.persist - requests permission to use persistent storage() and returns a promise with a .then and a .catch
    //asks the browser to use persistent storage(local storage), if the browser grants permission
    //react creats a synthetic event and if we want the event's information to stay, we use e.persist
    //
    //e.persist()
    //the e isn't available to asynchronous(as is in the case of setState), we we have to save it by using e.persist
    //but if we don't pass our method e, we don't have to use e.persist 
    //console.log(e.target.textContent)
    // handleQuestionAnswer = () => {

    //     this.setState(prevState => {
    //        if( e.target.textContent === this.state.correct_answer ){
    //            return {score: prevState.score + 1, displayAnswer: true}
    //        } else {
    //            return {messageToUser: "Wrong Anser- continue to next question", displayAnswer: true}
    //        }
            
    //     })
    // }
    //toaster ~ kind of alert
    //select option bubbles up

     {/* in the "hey" div, we are writing a ternery that askes if displayanswer is
            still false, if so, we are telling it  */} (in question component)

  //check if it's the last question
    //check if i === i.length, then reroute them to score page
    // on submit, check if choice is equal to the correct answer
    //if it is add 1 to score
    //pass the 
    // compare the user's choice with the correct answer
    // save the user's running score