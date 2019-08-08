import { useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'

const  ScrollToTop = (props) => {
    const [count, setCount ] = useState(0)
    const { location } = props
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [location])


    const handleIncrement =  () => {
        setCount((prevCount) => {
            return prevCount +1
        })
    }
    
       return (
           <div>
            props.children
            { count }
            <button onClick={handleIncrement}> + </button>

           </div>

    )
}
  
export default withRouter(ScrollToTop);