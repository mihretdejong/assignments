// import React, {Component, createContext} from 'react'


// const {Consumer, Provider } = createContext()


// //
// class TriviaProvider extends Component{
//     constructor(){
//         super()
//         this.state = {
//             trivia: [],
//             i: 0,
//             afterTenQuestions: false,
//             score: 0,
//             displayAnswer: false,
//             difficulty: 'Easy',
            
//         }
//     }

//     getTrivia =() => {
//         axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
//             .then(res => {
//                  console.log(res.data.results)
//                 this.setState({
//                     trivia: res.data.results,
//                     afterTenQuestions: false,   
//                 })
//             })
//             .catch(err => console.log(err))   
//     }
//     handleSubmit = ( userAnswer, correctAnswer ) => {
//         // let number = this.state.score 
//         // if(userAnswer === correctAnswer){
//         //     number += 10
//         //     console.log(number)
//         // }
//         this.setState(prevState =>{
//             if(userAnswer === correctAnswer){
//                 return {
//                     displayAnswer: !prevState.displayAnswer,
//                     score: prevState.score += 10 , 
//                 }
//             }else {
//                 return {
//                     displayAnswer: !prevState.displayAnswer, 
//                 }

//             }
//         })
  

//     }
//     nextQuestion = () => {
//         console.log(this.state.i)
//         if (this.state.i < 9){
//             this.setState(prevState => {
//                 return {
//                     i: prevState.i + 1,
//                     displayAnswer: false,
//                 }
//             })

//         } else {
//             this.setState({afterTenQuestions: true})
            
//         }

//     }

//     render(){
//         return(
//            <Provider
//                 value={{

//                     ...this.state, handleSubmit: this.handleSubmit

//                 }}>
//                 {this.props.children}

//            </Provider>
//         )
//     }

// }