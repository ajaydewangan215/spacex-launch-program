import Button from './Button'
import { FilterMenu } from './FilterMenu'

const LeftSection = () => {
    return (
        <div className="left-section">
            <div className="content">
            <h3>Filters</h3>
            {
                FilterMenu.length > 0 && FilterMenu.map((menus) => {
                    const { id, title, name, menu} = menus                    
                    return (
                       <div key={id}>
                            <div className="filter-heading">
                                <span>{title}</span>
                            </div>
                            <div className="filter-btn">
                                { 
                                    menu.map((menu, idx) => <Button key={idx} text={menu} name={name} id={id} />) 
                                }
                            </div>
                       </div> 
                    )
                })
            }
            </div>
        </div>
    )
}

export default LeftSection
