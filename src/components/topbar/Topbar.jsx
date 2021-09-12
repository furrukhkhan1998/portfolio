import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons" 
export default function Topbar(){
    return(
        <div className = "topbar">
            <div className = "wrapper">
                <div className = "left">
                    <a href="#intro" className = "logo">Furrukh.</a>
                    <div className = "itemContainer">
                        <Person className = "icon"/>
                        <span>+1 716 907 5431</span>
                    </div>
                    <div className = "itemContainer">
                        <Mail className = "icon"/>
                        <span>furrukhkhan10@gmail.com</span>
                    </div>
                </div>
                <div className = "right">
                </div>
            </div>
        </div>
    )
}