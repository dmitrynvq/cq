import {Wrap, Icon, WrapIcon, Text, MainIcon, MainText, WrapIconMain} from "./styled";
import ProfileBar from "../../profile/profileBar";
import Avatar from "../../avatar";

const NavBarMobile = () => {
    return(
        // <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <div>
            <Wrap>
                <WrapIcon>
                    <Icon>❏</Icon>
                    <Text>Feed</Text>
                </WrapIcon>
                <WrapIcon>
                    <Icon>⚲</Icon>
                    <Text>Categories</Text>
                </WrapIcon>
                <WrapIconMain>
                    <MainIcon>
                        ✚
                    </MainIcon>
                    <MainText>Add card</MainText>
                </WrapIconMain>
                <WrapIcon>
                    <Icon>★</Icon>
                    <Text>Top</Text>
                </WrapIcon>
                <WrapIcon>
                    {/*<ProfileBar/>*/}
                    <Avatar/>
                    <span style={{fontSize: '10px'}}>Profile</span>
                </WrapIcon>
                {/*<div>*/}
                {/*    <ProfileBar/>*/}
                {/*    <span style={{fontSize: '10px'}}>Избранное</span>*/}

                {/*</div>*/}
            </Wrap>
        </div>
    )
}
export default NavBarMobile