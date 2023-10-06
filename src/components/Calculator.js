import React,{useState} from "react";
import * as math from "mathjs";
import "./Style.css";
export function Calculator() {
    const [screencontent, setscreencontent]=useState("");

    const maxchar=14;
    const handleClick=(value)=>{
        if(screencontent.length < maxchar)
        {
            setscreencontent((prevContent)=>prevContent+value);
        }
    }

    const handleBackSpace=()=>
    {
        setscreencontent((prevContent)=>prevContent.slice(0,-1));
    }

    const handleCalculation=()=>
    {
        try
        {
            const result=math.evaluate(screencontent);
            setscreencontent((prevContent)=>prevContent+" = "+result.toString());
        }
        catch(error)
        {
            setscreencontent("Error !");
        }
    }

    const ClearIt=()=>
    {
        setscreencontent((prevContent)=>prevContent.slice(0,0));
    }

    return (
        <div style={{ width: "270px", height: "500px", margin: "150px 100px 100px 100px", borderRadius: "20px" }}>
            <div id="screen" class="text-light" style={{width: "268px", height: "250px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", backgroundColor: "#00308F",fontSize:"30px" , overflowWrap:"break-word"}}>
                <div style={{textAlign:"left"}}><i onClick={ClearIt} class="clearbutton ms-2 fa-solid fa-c"></i></div>
                <div class="text-center">{screencontent}</div>
            </div>
            <div class="text-start" style={{ width: "268px", height: "250px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", backgroundColor: "#002244" }}>
                <div class="buttonRow">
                    <div onClick={()=>handleClick("7")} class="button">7</div>
                    <div onClick={()=>handleClick("8")} class="button">8</div>
                    <div onClick={()=>handleClick("9")} class="button">9</div>
                    <i onClick={handleBackSpace} class="icon fa-solid fa-delete-left"></i>
                </div>
                <div class="buttonRow">
                    <div onClick={()=>handleClick("4")} class="button">4</div>
                    <div onClick={()=>handleClick("5")} class="button">5</div>
                    <div onClick={()=>handleClick("6")} class="button">6</div>
                    <i onClick={()=>handleClick("/")} class="icon fa-solid fa-divide"></i>
                </div>
                <div class="buttonRow">
                    <div onClick={()=>handleClick("1")} class="button">1</div>
                    <div onClick={()=>handleClick("2")} class="button">2</div>
                    <div onClick={()=>handleClick("3")} class="button">3</div>
                    <i  onClick={()=>handleClick("*")} class="icon fa-solid fa-xmark"></i>
                </div>
                <div class="buttonRow">
                    <div onClick={()=>handleClick("0")} class="button">0</div>
                    <div onClick={()=>handleClick(".")} class="button">.</div>
                    <div onClick={handleCalculation} class="button">=</div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <i onClick={()=>handleClick("-")} class="ms-3 icon2 fa-solid fa-minus"></i>
                        <i onClick={()=>handleClick("+")} class="ms-3 icon2 fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    )
} 