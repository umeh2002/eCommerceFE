import { Outlet } from "react-router-dom"
import Sider from "../Common/Sider"


const DashBoardLayout = () => {
  return (
    <div className="flex">
      <Sider/>
      <div className="w-[100vw] flex justify-end  ">
      <div className=" w-[calc(100vw-201px)]">
      <Outlet/>
      </div>
      </div>
     
    
    </div>
  )
}

export default DashBoardLayout


{/* <div className="flex">
<MainSider />
<div className="w-[100vw] flex justify-end ">
  <div
    className={`
  pl-0 transition-all duration-300
  `}
    style={{
      width: `${toggle ? "calc(100vw - 70px)" : "calc(100vw - 160px"}`,
      transition: "all 350m",
    }}
  >
    <Outlet />
  </div>
</div>
</div */}