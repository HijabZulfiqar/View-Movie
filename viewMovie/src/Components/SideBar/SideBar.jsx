import React, { useState } from "react";
import logo from "../../assets/brand_logo.png";
import icon from "../../assets/Close.png";
import { SidebarData } from "../Constants/Navigation";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <div>
       <div 
       className="bars"
      style={expanded ? { left: '10rem', top: '6rem' } : { left: '1rem', top: '5%' }}
      onClick={() => setExpanded(!expanded)}
        
      >
      <img    src={icon} alt="" />
    </div>

      <motion.div
        className="bg-[#232533] sidebar "
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* <div className="bar"
      
        onClick={() => setExpanded(!expanded)}
        
        >
        <img className="bars"   src={icon} alt="" />
      </div>
      */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              key={index}
              className={`${
                selected === index ? " menu-item active" : " menu-item"
              }`}
              onClick={() => setSelected(index)}
            >
              {item.icon}
              <span className="span">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
