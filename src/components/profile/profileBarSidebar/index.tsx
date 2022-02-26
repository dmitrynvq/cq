import {Wrap, WrapContainer, WrapName} from "./styled"
import Avatar from "../../avatar";
import UserName from "../userName";
import ProfileInfo from "../profileInfo";

const ProfileBarSidebar = () => {
    return (
        <WrapContainer>
            <Wrap>
                <Avatar/>
                <WrapName>
                    <UserName/>
                    {/*<ProfileInfo/>*/}
                </WrapName>
            </Wrap>
            <ProfileInfo/>
        </WrapContainer>
    )
}
export default ProfileBarSidebar