import {CardWrap, Body, CardWrapMob, Wrap} from "./styled";
import {useWindowSize} from "@react-hook/window-size";

const Card = ({content, img, indx}: any) => {
    const [width] = useWindowSize()
    const ItemCard =  width > 500 ? CardWrap : CardWrapMob
    return (
       <Wrap>
           <ItemCard>
               <img src={img} alt="" height='200'/>
               <Body>
                   {content}
               </Body>
               <b>{indx}</b>
               <div>footer</div>
           </ItemCard>
       </Wrap>
    )
}
export default Card