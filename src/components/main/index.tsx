import Footer from "../footer";
import {Wrap, WrapCards, CardMob, PlockWrap} from "./styled";
import Navbar from "../navbar/desktop";
import React, {useEffect, useState} from "react";
import Card from "../card";
// import Masonry from 'react-masonry-css'
// @ts-ignore
import { Plock } from "react-plock";
import {useWindowSize} from "@react-hook/window-size";
import NavBarMobile from "../navbar/mobile";

const arrCards = [
    {
    content: 'whefgwuie fiuwehfui hweuif hwuiehf uiwheuf hwuiefh iuwheiuf hwuie fhw we we ew fw efhwefu h uiwe iofwie fiowhi efhwi fhiwh fwi fhwiu hwui hwui hwuih wuih uiwhu ifhwui hui hwui hwu hwiu hwuifh wiefhoiwoif woie foiwhf iwhfo iwo'
    },
    {
        content: 'whefgwuie fiuwehfui hweuif hwuiehf uiwheuf hwuiefh iuwheiuf hwuie fhw fhweuifweuifhwuiefh uiwhefuih wuefhuiwhefui hwueh'
    },
    {
        content: 'whefgwuie fiuwehfui hweuif hwuiehf uiwheuf hwuiefh iuwheiuf hwuie fhw hwbef bwiuefb uiwbui wbu bwuefb wuebf uiwbe fuiwbefbwefi bwiuefbwue fbwubfw bef iwoi fji ii w'
    },
    {
        content: 'whefgwuie fiuwehfui hweuif hwuiehf uiwheuf hwuiefh wef we fwef wef wef wef wef wef wef we fw fewe f w efwef wfe we iuwheiuf hwuie fhw wknjf wnefno wefn wnf nwnf iwnfiwnf nwfnwionefi ownfiwnfeiwn efnwienfiwnfwnoiefnwioef noiwnfiwo nfiwnefoiwnofeiwniofenwo iefnwoiefnwi oefnwoief nwiofn'
    },
    {
        content: 'whefgwuie fiuwehfui hweuif hwuiehf uiwheuf hwuiefh iuwheiuf hwuie fhw fhweuifweuifh wuiefh uiwhefuih wuefhuiwhefui hwueh'
    },
]
const Main = () => {
    const [width] = useWindowSize()
    const [col, setCol] = useState(3)

    useEffect(() => {
        const numb: number = Math.trunc(width / 430)
        console.log(typeof numb)
        setCol(numb)
    }, [width])


    return (
        <Wrap>
            {/*{*/}
            {/*    width > 500 && <Navbar/>*/}
            {/*}*/}
            {
                width > 500 ?
                    <PlockWrap nColumns={col} style={{ background: 'red' }}>
                        {
                            arrCards.map((item, indx) => <Card indx={indx} img='https://picsum.photos/200/300' content={item.content}/>)
                        }
                    </PlockWrap>
                    :
                    <WrapCards>
                        {
                            arrCards.map((item, indx) => <CardMob>
                                <Card indx={indx} img='https://picsum.photos/200/300' content={item.content}/>
                            </CardMob>)
                        }
                    </WrapCards>
            }
            {/*{*/}
            {/*    width < 500 &&  <NavBarMobile/>*/}
            {/*}*/}
        </Wrap>
    )
}
export default Main