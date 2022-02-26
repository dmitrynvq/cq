import { Link } from "react-router-dom";
import Logo from "../logo";
import {Wrap, Nav} from "./styled";
import ProfileBarSidebar from "../profile/profileBarSidebar";
import AddCard from "../addCard";
import ProfileInfo from "../profile/profileInfo";

const Sidebar = () => {
    return (
        <Wrap>
            <div>
                <Logo/>
                <ProfileBarSidebar/>
                {/*<ProfileInfo/>*/}
                <AddCard/>
                <Nav>
                    <div>
                        <Link to='/'>A Feed</Link>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div>
                        <Link to='/profile'>B Categories:</Link>
                        <div>
                            <br/>
                            <div>Animals</div>
                            <div>Anime</div>
                            <div>Animals</div>
                            <div>Cars</div>
                            <div>Gaming</div>
                            <div>Art</div>
                            <div>History</div>
                            <div>Politics</div>
                            <div>Other</div>
                            <div>Sports</div>
                        </div>
                    </div>
                </Nav>
            </div>
            <div>
                <Nav>
                    <div>
                        <Link to='/exit'>Exit</Link>
                    </div>
                </Nav>
            </div>
        </Wrap>
    )
}
export default Sidebar