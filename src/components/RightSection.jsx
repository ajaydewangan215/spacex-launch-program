import { useEffect } from "react"
import axios from 'axios'
import { getData } from './redux/action/DataAction'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from "./Skeleton"

const RightSection = () => {
    const dataList = useSelector(state => state.allData.dataList)
    const dispatch = useDispatch()

    const fetchData = async () => {
        try {            
            const endPoint = 'https://api.spacexdata.com/v3/launches?limit=100'
            const response = await axios.get(endPoint)             
            dispatch(getData(response.data))             
        } catch (error) {
            console.log(error)
        }
    }
   
    useEffect(() => {
        fetchData()        
    }, [])

    const skeletonArray = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className="right-section">            
            <div className="data-content">            
            {                
                dataList.length > 0 && dataList.map(dataValve => { 
                    const { flight_number, mission_name, mission_id, links, launch_year, launch_success, rocket } = dataValve;
                    const land_success = rocket.first_stage.cores[0].land_success
                    return (
                        <div className="card" key={flight_number}>
                            <div className="image-block">
                                <img src={links.mission_patch_small} alt={mission_name} />
                            </div>
                            <div className="content-block">
                                <div className="mission-name">
                                    {mission_name} #{flight_number}
                                </div>
                                <p><strong>Mission Ids</strong> : {mission_id.length > 0 && mission_id.map(elem => <li key={elem}>{elem}</li>)} </p>
                                <p><strong>Launch Year</strong> : {launch_year} </p>
                                <p><strong>Successful Launch</strong> :  {String(launch_success)}</p>
                                <p><strong>Successful landing</strong> : {String(land_success)} </p>
                            </div>
                        </div>
                    )
                })                               
            }   
            {
                dataList.length === 0 && skeletonArray.map( ele => <Skeleton key={ele} />)
            }
            </div>
        </div>
    )
}

export default RightSection
