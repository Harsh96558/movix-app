import React from 'react'
import "./SwitchTabs.scss"
import { useState } from 'react'

function SwitchTabs({data,onTabChange}) {

const [selectedTab,setSelectedTab]=useState(0)
const [left,setLeft]=useState(0)

const activeTabs=(tab,index)=>{
    setLeft(index*100)
    setTimeout(()=>{
        setSelectedTab(index)
         onTabChange(tab,index)
    },300)
}
  return (
    <div className='switchingTabs'>
        <div className="tabItems">
            {data.map((tab,index)=>(
                <span key={index} 
                className={`tabItem ${selectedTab === index ? "active":""}`}
                 onClick={()=>activeTabs(tab,index)}>
                    {tab}
                </span>
            ))}

            <span className="movingBg" style={{left}}/>
        </div>
    </div>
  )
}

export default SwitchTabs