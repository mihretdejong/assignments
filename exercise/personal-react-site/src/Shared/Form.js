// import  {Component} from 'react'
// //we don't import react because it is a function and doesn't have to return JSX
// // we want to make this completely reusable so that it can be used anywhere as a from
// //we won't be hardcoding the state or the setState. both will be dynamic
// //because it is dynamic it needs more than one props
// // in this case, we need three diffrent props
// // props for handleSubmit, handleChange and inputs
// import ContactForm from './ContactForm.js'
// import Questions from '../Pages/Questions.js'



// class Form extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//            inputs: props.inputs,
//            category: "",
//         }
//     }

//     handleChange = e => {
//         const { name, value} = e.target
//         this.setState(prevState => ({
//             inputs: {
//                 ...prevState.inputs,
//                 [name]: value
//             }

//         }))
//     }
//     handleSubmit = e => {
//         e.preventDefault()
//         this.props.submit(this.state.inputs)
//         this.setState({ inputs: this.props.inputs})
//         //line above simply resets our form once the user hit submit

//         //
//         // alert(`Hello, I am ${this.state.fName} ${this.state.lName}`)
//         // this.setState({fName: "", lName: ""})
//     }

//     render(){
//         // we provide what our render needs here like a prop
//         return this.props.render({
//             inputs: this.state.inputs,
//             handleChange: this.handleChange,
//             handleSubmit: this.handleSubmit


//         })
       
//     }

// }


// export default Form 