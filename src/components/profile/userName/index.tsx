import {Wrap, Name, Surname,NameWrap} from "./styled";

const UserName = () => {
    return (
        <Wrap>
            <NameWrap>
                <Name>Anna</Name>
                {/*<Surname>Zhidova</Surname>*/}
            </NameWrap>
        </Wrap>
    )
}

export default UserName