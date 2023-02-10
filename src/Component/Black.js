import React,{useState} from "react";
import QrCodeStylingComponent from "./QrCodeStylingComponent";
import Apple from '../Component/Image/apple.jpg'




export default function Home() {


  const [data,setData]=useState("http://localhost:3000")
  const [bgColor,setbgColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [fgColor,setfgColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [eyeColor,seteyeColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [titleColor,setitleColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [title,setitle]=useState(["white","black","yellow","green","blue","pink","violet"])
 
 
            
  return (
    <div className="App">
      <h1>Black</h1>
      <div>
     
             <QrCodeStylingComponent
              data={data}
              bgColor={bgColor[0]}
              fgColor={fgColor[1]}
              eyeColor={eyeColor[1]}
              titleColor={titleColor[4]}
              title={title[1]}
              centerImageSrc={Apple}>
             </QrCodeStylingComponent>
             
          </div>
    </div>
  );
}


