import {Wrap, Nav} from "./styled";
import Logo from "../../logo";
import React from "react";
import ProfileBar from "../../profile/profileBar";

const Navbar = () => {
    return (
        <Wrap>
            {/*<Logo/>*/}
            <Nav>
                {/*<div>*/}
                {/*    <span>Welcome</span>*/}
                {/*    <b style={{color: '#46059d'}}>Anna!</b>*/}
                {/*</div>*/}
                <div></div>
               <div>
                   <span>Feed</span>
                   {/*{' / '}*/}
                   {/*<span style={{color: '#46059d'}}>Categories</span>*/}
               </div>
                <div></div>
                {/*<ProfileBar/>*/}
            </Nav>
        </Wrap>
    )
}
export default Navbar