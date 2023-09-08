import Header from "../components/Header"
import { useState } from "react"


const Nooty = () => {

const [item, setItem] = useState("")

const [list, setList] = useState([])

const getData = (e) => {
    e.preventDefault()

    
    if(item){
        setList([...list, item])
        setItem(" ")
    }
}

    return <div>
    <Header/>

    <form style={{textAlign: "center"}}>
        <input value={item} onChange={(event) => {
            setItem(event.target.value)
        }} 
        
        style={inputStyle} type="text" placeholder="Enter Item"></input>
        <button onClick={getData} style={btnStyle}>Add Item</button>
    </form>

    <div style={{textAlign: "center" , margin: "20px 35%"}}>
        {
            list.map((item,index) => (
                <p style={{backgroundColor: "coral", padding:"10px", marginBottom: "10px"}}>

                    {item}

                    {
                        console.log(index)
                    }

                </p>
                
            ))
        }
    </div>

    </div>
}

export default Nooty

const inputStyle = {width: "220px", height: "35px", marginTop: "20px"}
const btnStyle = {padding:"12px",marginLeft: "10px", backgroundColor:"coral", border:"none", borderRadius:"4px"}