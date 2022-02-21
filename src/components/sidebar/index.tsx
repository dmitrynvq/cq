import Logo from "../logo";
import {Wrap, WrapContainer} from "./styled";

const Sidebar = () => {
    return (
        <Wrap>
            <WrapContainer>
                <Logo/>
                <div>A Feed</div>
                <div>B Profile</div>
                <div>C Categories</div>
                <div>D Favorite</div>
                <div>E Settings</div>
            </WrapContainer>
        </Wrap>
    )
}
export default Sidebar