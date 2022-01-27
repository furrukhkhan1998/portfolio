import {useEffect, useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"

export default function Portfolio(){

    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web"
        },
        {
            id: "mobile_app",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        }

    ];

    return(
        <div className = "portfolio" id = "portfolio">
            <h1></h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://icdn.digitaltrends.com/image/digitaltrends/best-mobile-banking-tips-citi-7852-1053x702.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://icdn.digitaltrends.com/image/digitaltrends/best-mobile-banking-tips-citi-7852-1053x702.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://icdn.digitaltrends.com/image/digitaltrends/best-mobile-banking-tips-citi-7852-1053x702.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://icdn.digitaltrends.com/image/digitaltrends/best-mobile-banking-tips-citi-7852-1053x702.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://icdn.digitaltrends.com/image/digitaltrends/best-mobile-banking-tips-citi-7852-1053x702.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}