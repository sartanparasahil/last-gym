import "./Sidebar.css";
import { motion } from "framer-motion";
import { AiOutlineAppstoreAdd, AiOutlineBars } from "react-icons/ai";

import {
  MdDashboard
} from "react-icons/md"


import { AiFillEdit } from "react-icons/ai"

import { GiReceiveMoney } from "react-icons/gi"
import { FaUsers } from "react-icons/fa"

import { useState } from "react";
import Item from "../../components/item";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function SideBarLeft() {


  const [open, setOpen] = useState(true);

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "20rem"
    },
    false: {
      transition: {
        delay: 0.6
      }
    }
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4
      }
    }
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "10rem"
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem"
    }
  };
  return (
    <Box zIndex={500} className="Apps">
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
        // style={{overflow:'scroll'}}
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4
              }
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <AiOutlineBars />
          </motion.div>
          {/* profile */}
          <motion.div
            layout
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            className="profile"
            transition={{ duration: 0.4 }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(5.5px)",
              WebkitBackdropFilter: "blur(5.5px)",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              cursor: "pointer"
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjsjmJd241ONF1n75orvMBxHffqxuoyVeDtCDfgysAoB44Mnp5XInwuxg0GUojKQqPB0&usqp=CAU"
              alt="profile_img"
      
            />
          </motion.div>
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              >
                ANALYTICS
              </motion.h3>
              <Link to="/admins/dashboard"> <Item icon={<MdDashboard />} name="Dashboard" /> </Link>

            </div>
          </div>
          {/* group 2 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              Content
            </motion.h3>
            <Link to="/admins/all-users" style={{ marginBottom: "7px" }}>  <Item icon={<FaUsers />} name="Customers" /></Link>
            <Link to="/admins/plans" style={{ marginBottom: "7px" }}> <Item icon={<AiOutlineAppstoreAdd />} name="Plan" /></Link>
            <Link to="/admins/products" style={{ marginBottom: "7px" }}> <Item icon={<AiOutlineAppstoreAdd />} name="Products" /></Link>
            <Link to="/admins/trainer" style={{ marginBottom: "7px" }}> <Item icon={<AiOutlineAppstoreAdd />} name="Trainer" /></Link>
            <Link to="/admins/contact"  style={{ marginBottom: "7px" }}> <Item icon={<AiOutlineAppstoreAdd />} name="Contact" /></Link>
            <Link to="/admins/order"  style={{ marginBottom: "7px" }}> <Item icon={<AiOutlineAppstoreAdd />} name="Order" /></Link>
          </div>
          {/* group 3 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              CUSTOMIZATION
            </motion.h3>
            <Link to="/admins/add-product" >   <Item icon={<AiFillEdit />} name="Add Products" /> </Link>
            <Link to="/admins/add-plan" style={{ marginTop: "7px" }}>   <Item icon={<AiFillEdit />} name="Add Plan" /> </Link>

          </div>
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default SideBarLeft;
