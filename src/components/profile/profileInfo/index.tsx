import {Wrap} from "./styled";
import {InfoWrap, Posts} from "../userName/styled";

const ProfileInfo = () => {
    return (
        <Wrap>
            <Posts>
                <span>43</span>
                <div>Cards</div>
            </Posts>
            <Posts>
                <span>23</span>
                <div>Followers</div>
            </Posts>
            <Posts>
                <span>56</span>
                <div>Following</div>
            </Posts>
        </Wrap>
    )
}
export default ProfileInfo