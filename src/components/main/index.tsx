import Footer from "../footer";
import {Wrap, WrapCards, CardMob, PlockWrap} from "./styled";
import Navbar from "../navbar/desktop";
import React, {useEffect, useRef, useState} from "react";
import Card from "../card";
// import Masonry from 'react-masonry-css'
// @ts-ignore
import { Plock } from "react-plock";
import {useWindowSize} from "@react-hook/window-size";
import NavBarMobile from "../navbar/mobile";
import { arrCards } from "../../const/data";

const Main = () => {
    const [width] = useWindowSize()
    const [col, setCol] = useState(1)

    useEffect(() => {
        const maxWidth = width > 1200 ? 1200 : width
        const numb: number = Math.trunc(maxWidth / 330)
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