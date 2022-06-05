import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import MidiController from "../../img/MIDIController.png";
import React, { useEffect, useState } from "react";
import { featuredPortfolio, graphicsPortfolio, webPortfolio, devPortfolio, miscPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title:"Featured",
    },
    {
      id: "graphics",
      title:"Graphic Design",
    },
    {
      id: "web",
      title:"Web",
    },
    {
      id: "dev",
      title:"Development",
    },
    {
      id: "misc",
      title:"Miscellaneous",
    },
  ];

  useEffect(()=>{
    switch(selected){
      case "featured":
        setData(featuredPortfolio) 
        break;
        case "graphics":
          setData(graphicsPortfolio) 
          break;      case "web":
          setData(webPortfolio) 
          break;      case "dev":
          setData(devPortfolio) 
          break;      case "misc":
          setData(miscPortfolio) 
          break;

    }
  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {
          React.Children.toArray(
            list.map((item) => (
              <PortfolioList 
              title={item.title} 
              active={selected === item.id} 
              setSelected={setSelected}
              id={item.id}
              />
            ))
          )
        }
      </ul>
      <div className="container">
        {data.map(d=>(
          <div className="item">
            <img src={d.img} 
            alt="" />
            <h3>{d.title}</h3>
          </div>
          ))}
        </div>
    </div>
  )
}
