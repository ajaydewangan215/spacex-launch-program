import axios from 'axios'
import { getData } from './redux/action/DataAction'
import { useDispatch } from 'react-redux'

const Button = ({text, name, id}) => {
    let uri = "";
    const dispatch = useDispatch()

    const filterData = async (uri) => {
        try {            
            const endPoint = `https://api.spacexdata.com/v3/launches?limit=100&${uri}`
            const response = await axios.get(endPoint) 
            dispatch(getData(response.data))             
        } catch (error) {
            console.log(error)
        }
    }

    const InputEvent = e => {
        const launch_year = document.getElementsByName('launch_year');        
        const launch_success = document.getElementsByName('launch_success');        
        const land_success = document.getElementsByName('land_success');
        for(let i = 0; i < launch_year.length; i++) {
            if(launch_year[i].checked) uri += "&launch_year="+launch_year[i].value
        } 
        for(let i = 0; i < launch_success.length; i++) {
            if(launch_success[i].checked) uri += "&launch_success=true"
        }
        for(let i = 0; i < land_success.length; i++) {
            if(land_success[i].checked) uri += "&land_success=true"
        }     
        filterData(uri)
    }
    
    return (
        <label htmlFor={`${text}-${id}`} className="btn">       
            <input 
                type="radio" 
                name={name} 
                id={`${text}-${id}`} 
                value={text}
                onClick={InputEvent}
            />
            <span>{text}</span>
        </label>
    )
}

export default Button