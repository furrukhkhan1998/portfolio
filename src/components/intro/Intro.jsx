import { useEffect , useRef } from "react"
import "./intro.scss"
import { init } from 'ityped'

export default function Intro(){

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            strings: ["Mulesoft", "Java Spring", "React", "AWS"],
        });
    },[]);

    return(
    <div className = "intro" id = "intro">
        <div className="left">
            <div className="imgContainer">
                <img src="assets/dp.png" alt="" />
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi There, i'm</h2>
                <h1>Furrukh Khan</h1>
                <h3>Software Engineer <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt="" />
            </a>
        </div>
    </div>
    )
}