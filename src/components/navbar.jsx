import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CloseTwoTone, MenuTwoTone } from "@mui/icons-material";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  // console.log("isDrop=>",isDrop ,"isMobile=>",isMobile );
  

  return (
    <nav className="flex items-center justify-around bg-gray-500 p-2 text-center sticky top-0 ">
      <div className="text-white text-2xl font-bold">
        <Link to={"/"}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJt4a0Qaum_g36S3a-cNQ17Vw3wNoyr_WQcw&s"
            alt="Wkdeveloper"
            className="w-12 h-12 rounded-full"
          />{" "}
        </Link>
      </div>

      <div className="md:hidden">
        <button
          className="text-white text-3xl focus:outline-none"
          onClick={() => setIsMobile(!isMobile) 
            
          }
        >
          {/* {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )} */}
          {isMobile ? (
          <CloseTwoTone className="bg-red-600 "/>
          ):(
          <MenuTwoTone className=" bg-slate-200 text-black "/>
          )
          }
        </button>
      </div>

      <ul
        className={`${
          isMobile ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-800 md:bg-transparent md:flex md:items-center md:static md:w-auto md:space-x-6`}
      >
        
        <li className="text-white p-4 text-xl font-serif md:p-0">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li className="text-white p-4 text-xl font-serif md:p-0">
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
        </li>
        <li className="text-white p-4 text-xl font-serif md:p-0">
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </li>
        <div className="text-wh p-4 text-xl font-serif md:p-0 flex justify-center ">
          <div className="" onClick={() => setIsDrop(!isDrop)}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAD5+fn8/Pz19fXGxsbh4eHa2trs7Oze3t7w8PBubm6BgYHm5ubDw8O2trbNzc1ISEgzMzORkZF7e3uioqIODg5aWlpgYGCIiIgfHx+YmJgqKipOTk5oaGiwsLCfn58aGhp0dHS7u7tAQEANDQ05OTlDQ0MnJycWFhbJ/vkHAAAMlklEQVR4nNVd6UIyOwxFQEFAQBYREFkUP3j/F7wiiNCTzrQn6Qz3/HTpTKZtlpM0rVRSo9pqdJfz6ai9+Hqb7bd3dy/72eD5ddOZ97qNVjX585Oi0RtO3u6ysZsMl42yX5TBw3I0yJHtEoPN8rHsV47Aw3gSIdwfJqv/w2TWP9pbSrwTNt1a2SJkobXkJu8ar7162YJ48GEh3hGLj7KFQfQ3ZuIdMbqpPVkd59kEBm/jW9mSD6ME4h3ReSpbuG/07XafhNeyF2v/X1L5DliUKWP/Obl8pcrYKEa+AyZl7MdWuzD5DugUHoTMC5XvgHGh8t3Hvt7uc9KeDuer8bK3HI/n8+n78+AlcoxZcdux+h7+Wtv3aa/flB3NevN+OY0xNp2CBFwGvs/L67gRsnta/fkiVMb75NJ9T2DYR39dPsSMWmuMX4PG3aSS64xuwFu8TfvU2Pejff7g68S7Md8Fnc2jJs9BY5ofP8/NpEE0d3lPn+q/cH4c9i9ZhJy3QhdGeqC2/Mp5ErcLcjHNfurIkixr5BikFOa/mu2FTq1XTjN7y78bP+77gbOs5w1TeI2tTtYjv4wf2ciULxXb0MpSOlvTeOMj40ntluWTHDxkeTuG+mbsf8q/1GT8fYaFMuMcMwRcWj0jAxmBmtHj/U/YFBOWNv2usInVGHqHL8LRP6LnfQcDF84rYLtIXqHlncahdmjvEu1ZvHgEvMpglWbct+LJrwefz6FSN75wPn0cKsHnqyqWk49wKsJGSPCtKNr0P1oPqEbf80Zk0F2XR1s3bd86Ck0Pz8HpdTkn+FluBUz1U3yrL2Ys2QK9Wr+y0XsR8aJs6csX0KdSo/03WY22U7xxNOSoMVL/tcRBFGaw1XiyiyNlEeN4FLFii5/B1mm8yfDDRBOLmb3PmBFEWk2xBy8drgHJiF9BTAFEOOGiYZ3w7wPO30gtpKhRg+nomvTflMU5QSAi13PltpRI433oP0vq+EXBhzalL/a9rVUZgLqU4AhUhSKxpomWVrKEd3cLzWJ9kkYMox34/4wY8ITPLj+sqC1C/lFi01f8e1QqmdT13YCfR2ltBCTCJXZbkySo51alLOgdICmM/M0tELA79g2+V1JQ7rrDpgXWONYg73+kMJr+xr3QYvYtuR2lGD2HgKjG/4sX3dyM8QXeubBTmpDskQStQPoy9Yiimx9wGkfwbTKVjWRjOFPvZ6m9mDLPkYKgLOde0AtUfqdGldUumJUqfMqMGEiwFFRA8ZSZMPZjz+g04WP6qTfhj5k1mpkwzgaxGYV16lUdwpsx2SuFgJR7KLg2PrOPU5hrPgX4eORAELOItKdnbwmvRjzOwyOHI34vCi64PAg6kIwpjDmTJ2Ib78Lh4hMDRWHHEukAg9Ml8X7+Aw4iMQhIARPkoS91EoV4E4z0osRKhX2HHJCG0EH0OhXWH/4RJkNH8QJm1KXEIN5/w82BaVPkruK5W5GkYxC9epDsAn4YzTSxC42mkJlE3IlusRaGTYSPGHuCwo/onYiT6AZR8AeLeAGjz5n4EV98gGHR9e+xwJlwZwxPQsV/X7RT1y4ufIG3eAGzeNFoxDs2oCqvPAekZ4igQhVTuIinptDcXQbUSOQTcaGZJj0gXpuiy3/pGwFrxHDApgcSCUUHO+2CzUBLzRBf6qjiEuv456O2/PsdqnlCQFNFQznFMMafNgVzTx30s5WQyPdniAE0ALNI1cH9NYj0KZjEs8kDj+eFENBToEKDyVjCIL8LAQsJGAnFnCwPZhmBNv91/sBWUJkggUooWkIw67/2AioaqXSesYRMGQOogtN2g21IWNuKmid1QZ3FgS4dx40Ic8udYTCWkErLAv19dNygxIurczFepVT9G9iLo3sLFUtcVt1Yl1IlUxAj/fv5sfvTZ0rAm5CwAjXS4puR52w8tV3FSgiO24G2B7ebrIsw9mmMkusHYeBkE1lcYuyXchKCujvYBXB1OAHt6OAjyEMP7jAHr8ZlcEhFYx09kWVSbhh+yPG6PhvldptLGFwM68BdkS/C9qEPntox3t+YkS8BOcI6Ggu64tOUp2GrBUGZPqCxoJuvBDcKCgFTI3EA+G33KDRdYR5byJZEQrDKPXTHSSVWH5ruQ/ZoAHimK4gsyI9nSukfMCF3i1vyOQVPjjOHxm73D7i6Vte8j8CAcGd/8poCUaAqTl199w4/ochgw9zoBSiL4aa7n+HrU7GTqRr9A0M2oF5x7TRF0qQRkDpo7zo1b6B7VsSoxqHhGYwD6Uo4q6wNRjUmoc5g5tANd/fgLzMSGhMYZzDK1PVgtrCFGCtkHPyewcT5kGs3mUPkmk1AeW4o4dpCQn8fIg0ow+Wu0hcTXWrN6J9ApS5cTTOD/C+XtDCNfk/gYgC0hyY+TWbLOhac5+1Wmn5B1oLsRhxzTi0QXKDqVtX8g9iCPC9q73uvuBdxZ+wdZpVLjxqzNHdUydAPXI0wAl+cpQ+s/Rr2ADTG+K79YKlY/6l7CmwTDuBp5si10c0TTG9iYRk/CHOWqCLo9iqWZBTdDhH40i5GPnwHALvrguitgkvyEfMWfLs5uxCD7yUh5C1qbo8QxQUExPFmEazFqgjrqIYGRNFpR2pEw0DRSMV1Qg/OLfBkCglt6Azq2PoJ7liH+YI8vqb5T07f9iBQtZ8nQBh3CCSgPFrVw0l1NeARipY1WEh6KPuClbXSSKj3wBVqRqin+Ymi3R9qVI0B/a1q6Ab5k5+fujTSViWhtqxG1dwZvNJjHAHaQXPJSPhFOzIU3X4qgs92LCwBBkLZBlxFLeruOAGP5siaQ3ZT2cJTky3VmMKKsA1PyxE0vO4xihvLeI/7B5ghOv0C1J+2q6HcCTcAygfDfvs1C6AblGuFXqfaW8fA7f7VKPBCzAHSK3D6lK30OgPqXc5WYe39DYuwK8YcaO+KApLhz7JDRwL1nQpVwj/V7g102f5aCoAzqbO7B8TnalT+6A9gyD8fHukH/e0xsZmMvboTOp4hvcgLgL1Qr5jYg897fado2PuXngt+cPXz4gz/QN/LHl3+XuZvLS4aikhlGDTrxzVzxW1DpyW6nv0C4byU2gBXhPzedZyLy1R/kWFMuJ/iac4yhN/rW+gHXLl5hqaX9hG4YJw/wP402uv+4ugMrfJG++ueqsC0ivKZsSGU8nYlbFkBCx+rKVSTGO97qyInzM+i8kJlq7kNiwkuND3DcQqRihESR7yR4vLB/EIVAlLh5VHX0DuR7eNCrxrUatLpLeE7cOTsE5/uXnB7X8g+ixEuRq2UTdRV8VH5WXQPZd5e+BLxrsaH9uTMZ/wzBefJMwi6BbGuRt8iRfoay6FgO0qfVy1MYtSi6VrVm0yibKOwLbz/L4Q7wRajOV8byXfAZy+4bk8oxvIHRsIkhhXytZZGGfwLjAI9AKFFd8YSECYxPyPbWlId2EOEDFitAh+UxWlJDFn2On1cpali/8V7L9soS+nKTBpNKGvyr9PqfWedVLwjvuYZylVYddmNV6VPIuvTerK1KWDnu+dLIvRyWDvJZ8YCnnRbz4+NoHmkXZXL1wvcg1s037OuBw7FyHVVhNbT+dU4UkfuS//0Kftyo8SYjS8Vn1QMGaB+pdDnvBUfqaSSKTrn+EPahCHBglhDeVweT8XvPgnTqne1hR1hEGsov61SrdT1eYUDRSGWzgdS9dJK3Nm0zLfCZ1NscB9aRSJd+nSX4mSTBqIrFRwnpDl8nh4RbN3t7LgYRJVymJ6dKAhxCaxUZ5dTIpIZxKT4rSO6tDjN0d50INjkstxrDkytSi3BsdBk2FEHTlN1u0gBslbFvDNSMtBlAP8X30ZxQkNXlV4UVHXppndWJMJKI6CmZrsoaJLxP7h1y29QY3jbIhoIeNsLVb1Ej7hddaM83fOHWzUa/KFswE2xUGdoSowAaZoI6aCv2LxC/dZ4jZ2+MNxF+Xz+JZ4N6qYBt2Q1TMwg4nZCDYs6exEt+tidKXaqw9A5uAUXTnuGLwflW0bt8c9cVE0vAYzGO9mMOwplKpxkKsaBXTOhONDXNsSjUUY2cWbspuWg+HDDLFIKRbXYHONIe4SHQbM4rco22VfjoZjqk+diN+A1HhN1Y7+UL7mJz8FT2rX6Wub8/aKZzlntKPqa2aKXolB4MC7CQwvGo0Ufs0tApeUN4N5O60yU5y2Todq1UDuTXhnWPRi1/lRzI8uu/XHT4p3Q6m2kwsE8vLSXKekJa7S6w5hylc9O72YMQwya/dXmK+e43uB93i3L67RC/an/MR52Nouvt9l+e7fdz94Gz+3RdNW7f6inN3n/Aaxbu58utddiAAAAAElFTkSuQmCC"
              alt="Logo"
              className=" w-10 h-10 rounded-3xl"
            />
          </div>
          <div
            className={`${
              isDrop ? "block" : "hidden"
            } w-auto h-auto flex flex-col  items-start bg-gray-200  rounded-md  text-pretty  absolute  text-gray-700 px-6  py-3 top-14  md:items-center  `}
          >
            <Link to={"/login"}  className="text-xl border-black">Login</Link>
            <Link to={"/signup"} className="text-xl">SignUp</Link>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
