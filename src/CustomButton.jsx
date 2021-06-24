import { Icon } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import './Button.css'

const VARIANTS = [
    "default",
    "text",
    "outline",
]

const SIZES = [
    "sm",
    "md",
    "large"
]

const COLORS = [
    "primary",
    "secondary",
    "danger",
    "default",
]



export default function CustomButton({children,variant = "default", disableShadows, disabled, startIcon, endIcon, size, color="default", onClick}) {

    const [activeColor,setColor] = useState("default")
    const [btnSize, setSize] = useState({width:"81px", height:"36px"})
    const [hover,setHover] = useState(false)

    useEffect(() => {
        (COLORS.includes(color) ? setColor(color) : setColor("default"))
        SIZES.includes(size) ? setSize(getSizeProps(size)) : setSize(getSizeProps("md"))
        return () => {
            
        }
    }, [color, size])


    const commonStyle = {
        width: btnSize.width,
        height: btnSize.height,
        borderRadius: "8px",
        cursor: "pointer",
        margin:"0 .2rem",
        padding: "3px 8px",
    }

    const buttonStyle = {
        ...commonStyle,
        ...variantStyles(variant)

    }

    function variantStyles(variant) {
        switch(variant){
            case "default": return {
                backgroundColor: !hover ? btnColor(activeColor).bg_clr : HoverColor(activeColor),
                color: btnColor(activeColor).text_clr,
                border: "none",

            };
            case "text" : return {
                backgroundColor: !hover ? "transparent" : `${btnColor(activeColor).bg_clr}20`,
                color: btnColor(activeColor).bg_clr, 
                border: "none",
            };
            case "outline" : return {
                backgroundColor: !hover ? "transparent" : `${btnColor(activeColor).bg_clr}20`,
                color: btnColor(activeColor).bg_clr,
                border: `1px solid ${btnColor(activeColor).bg_clr}`
            };
            default : return {}
        }
    }    

    function HoverColor(){
        switch(activeColor){
            case "primary": return "#0039CB";
            case "secondary": return "#1C313A";
            case "danger": return "#9A0007";
            case "default" : return "#AEAEAE";
            default: return "#AEAEAE";
        }
    }

    //btn Color
    function btnColor() {
        switch(activeColor){
            case "primary": return {bg_clr: "#2962FF", text_clr:"#ffffff"};
            case "secondary": return {bg_clr: "#455A64", text_clr:"#ffffff"};
            case "danger": return {bg_clr: "#D32F2F" , text_clr:"#ffffff"};
            case "default" : return {bg_clr:"#E0E0E0", text_clr:"#0d0d0d"};
            default: return {bg_clr:"#E0E0E0", text_clr:"#0d0d0d"};
        }
    }


    function getSizeProps(size){
        switch(size){
            case "sm": return {minWidth:"73px", minHeight:"32px"};
            case "md": return {minWidth:"81px", minHeight:"36px"};
            case "lg": return {minWidth:"93px", minHeight:"42px"}
            default: return {minWidth:"81px", minHeight:"36px"};
        }
    }
    
    function toggleHover(){
        if(!disabled){
            setHover(!hover);
        }
    }

    return (
        <button className="CustomButton d-flex text-center align-items-center justify-content-center" style={buttonStyle}
            disabled={disabled} 
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onclick={onClick}
        >
            {startIcon && !endIcon ? <Icon fontSize={'small'} style={{marginRight:"8px"}}>{startIcon}</Icon> : ""}
            {children}
            {endIcon && !startIcon ? <Icon fontSize={"small"} style={{marginLeft:"8px"}}>{endIcon}</Icon> : ""}
            </button>
    )
}
