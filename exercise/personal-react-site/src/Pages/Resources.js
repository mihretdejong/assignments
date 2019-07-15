import React, {compo} from 'react'
import { withTrivia } from '../context/TriviaProvider'
import '../style/resources.css'
import Form from '../Shared/Form.js'
import ContactForm from '../Shared/ContactForm';



const Resources = (props) => {
    return(
        <div>
                <div className="resource-page-div">
                  <div className="resources-overlay">
                    <h2>“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only once.” 
                        ― George R.R. Martin</h2>
                    
                    {/* <Form
                        inputs={{
                            fName: "",
                            lName: "",
                        }}
                        submit={(inputs) => alert(`Hi my name is ${inputs.fName} ${inputs.lName}`)}
                        //we get inputs props from state
                        //render gives us everything, all of the props are give to the ContactForm
                        render={formProps => <ContactForm  {...formProps}/>}/>
                        <div className="resource-search-div">
                            <form onSubmit={props.handleSubmit}>
                                <input onChange={props.handleChange} type="text" name="isbn" className="search-input" placeholder="ISBN search here..."/>
                            </form>
                        </div> */}
                        </div>
                </div>
                        <div className="seprate-div"> 
                            <a href="https://www.google.com/googlebooks/about/"><div className="google-books"> Google Books </div></a>
                            <a href="https://www.goodreads.com/"><div className="good-reads"> goodreads</div></a>
                            <a href="https://www.barnesandnoble.com/b/top-books-of-the-month/_/N-2luc"><div className="barnes-nobles">Barnes & Nobles</div></a>
                            

                        </div>
                        <div className="resources-books-div">
                            <a href="https://books.google.com/books?id=loC0vNA1a4IC&dq=the+curious+incident+of+the+dog+in+the+nighttime" ><div className="book1"> </div></a>
                            <a href="https://books.google.com/books?id=OF-YSMKCVwMC&dq=mere+christianity+cs+lewis"><div className="book2"></div></a>
                            <a href="https://www.goodreads.com/book/show/136251.Harry_Potter_and_the_Deathly_Hallows"><div className="book3"/> </a>
                            <a href="https://www.goodreads.com/book/show/4671.The_Great_Gatsby"> <div className="book4"/></a>
                           
                            <div className="book5"/>
                            <div className="book6"/>
                            <div className="book7"/>

                        </div>
        </div>
    )
}

export default withTrivia(Resources)












