// var random = require ('lodash/random');
Card.js
  
    // console.log(props.userIsCorrect)
    // console.log(props.displayAnswer)
    //why are we doing one less than the length of the array?
    // we are using array length as num and if ti is more than the length of the array so we have to make it less
    //loadash package(has lots of funcitons including one for randomizing)
// console.log(props.userIsCorrect)
    // we used two handlechanges for each select options
    //the handlechanges save the value of the user's input in state with the setState method
    //onChange and name go on the select and value on the options
    //Controlled component- a component where state keeps current with any user input.
    //two way data binding states that, the form has to be bound to the state, and the state has to be bound to the form
    //the moment the user types a letter, the state is immediatly updating
    //1.Fomr-buld a form with a form, input and button tag
    //a form refreshes by default 
    //2.every input needs three attributes, name, onChange and value
    // name represents what the input is about, the name(literal name in state) has to match with the state
    //the value(literal value in state) must be referencing the name in state(this is what is creating the two way data binding)
    //onChange is the event(camelCased)-it fires the moment the user puts a letter 
    //onChange listens to the event and we build a changeHandler 
    //eventhandlers(handleChange)-recieve an event when the onChange fires
    //the event is an object that tells us exactly where the event occured
    //if we console log the event, it will show up as an object
    //because it's an object we grab the value as : event.target
    //handleChange = (event) => { this.setState({ category: event.target.value})}: the literal value of the input that is saved in state the moment the user starts typing
    //the two data binding happens because, the moment the user puts in info, setState fires and the whole page rerenders and state updates with the new value 
    //the last thing on a form is a handleSubmit method that fires on form submition 
    // a callback func that exists inside of another func that only runs once something in the outer function triggers it 
    //function returnTotal(total){
    //  return total  
    //}
    // 
    //function sum(num1, num2, callback){
        // const result = num1 + num2 
        // callback(result)
    //}
    // sum (2, 4, returnTotal)
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


     // const answers = props.incorrect_answers.push(props.correct_answer)
    // console.log(answers)
    // const randomizedAnswer = answers.sort((a, b) => {
    //     return a - b

    //             })

    App.js Notes

    //    //one of the reason we need to use a class is for a lifecycle method
    //we use the axios library so that we don't have to do an xhr file everytime?
    //setState is asynchronous-meaning, it waits, pending, before it mutates the state. 
    //the waiting is still fast but it makes a difference if we expect react to display the mutatted data right away
    //as opposed to, synchrouns-maening, it immediately executs change of state.
    //the change of state is first rendered before it is saved in state, 
    //render is called twice, once following the get request,the second time after the first condition
    //KEY: when you console log to see your data, do it in render
    // otherwise, you can tell it to r

    // componentDidMount = () => {
    //     axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
    //         .then(response => {
    //             console.log(response.data.results)
    //             this.setState({
    //                 setofquestions: response.data.results  
    //             })
    //         })
    //         .catch(err => console.log(err))

    // }


     //backdropClickHandler with always close the drawer, so we don't need to set prevState

     //the logic here only controls the backdrop 
            //the sidedrawer will be controlled with CSS property
            // inside return, we can pass our component a prop called 'show'
            // //we need exact path or it won't go to the other pages */}

Side Drawer.js
//we make this a class (instead of a parenthesis we use curly bracket)
//the return in parenthesis allows us to write a multi-line JSX above the return
// with the if statement we are making the className binary, either side-drawer or side-drawer-open
//in css we give side-drawer be the default and side-drawer-open be the open state of the side drawer
//the if statement goes back and forth between one class(side-drawer) and two classes (side-drawer and open)
//in CSS we denote the two classes as: .side-drawer.open 

Questions.js
  // lifecycle methods
    //comppnent did mount triggred on page load
    //component did update triggred whenever there is a change in props or change in state 
  
    // componentDidMount(){
    //     axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
    //         .then(res => {
    //              console.log(res.data.results)
    //             this.setState({
    //                 trivia: res.data.results,
    //                 afterTenQuestions: false,   
    //             })
    //         })
    //         .catch(err => console.log(err))   
    // }

      //onClick event, the i is the entire object (q's and answers)
    //in nextQuestion(we're mapping through the question in our data (sort of))/without using map
      //  const value = e.target.value
        //  [e.target.name] = e.target.value 
        // [difficulty.target.name] = difficulty.target.value
        // console.log(difficulty.target.value) 
    
    //render method
        // console.log(this.state.userIsCorrect) 
        //render is immediately called everytime setState fires which is every time the user puts something in input
        // in return, we render two statements which says display thefirst bracket followed by the next bracket
        //first display form, then perform the methods on the form
        //then display the first question from trivia , then display the card component
        // we need to write a statment that says loading while the question is coming through 
