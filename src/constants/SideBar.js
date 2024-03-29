import { TbActivity, TbMessage, TbPaperBag } from "react-icons/tb";
import { AiFillDashboard } from "react-icons/ai";
import { MdBarChart, MdOutlinePermMedia } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { CgProfile } from "react-icons/cg"

const sideBarItems = [
    { 
        name: 'Dashboard',
        link: '/admin-home', 
        icon: AiFillDashboard
    }, 

    {
        name: "User", 
        link: '/home/user', 
        icon: CgProfile
    },

    { 
        name: "Tasks", 
        link: '/home/tasks', 
        icon: FaTasks
    },

    { 
        name: "Room", 
        link: '/home/room',
        icon: MdOutlinePermMedia
    },
    {
        name: "Messages", 
        link: '/home/report', 
        icon: TbMessage
    },
    {
        name: "Report", 
        link: '/home/report', 
        icon: MdBarChart
    },
    {
        name: "Work Order", 
        link: '/home/report', 
        icon: TbPaperBag
    },
    {
        name: "Tracker", 
        link: '/home/report', 
        icon: TbActivity
    },

]

export default sideBarItems