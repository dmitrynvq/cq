import Footer from "../../components/footer";
import {Wrap, WrapCards, CardMob, PlockWrap} from "./styled";
import Navbar from "../../components/navbar/desktop";
import React, {useEffect, useRef, useState} from "react";
import Card from "../../components/card";
// import Masonry from 'react-masonry-css'
// @ts-ignore
import { Plock } from "react-plock";
import {useWindowSize} from "@react-hook/window-size";
import NavBarMobile from "../../components/navbar/mobile";
import { arrCards } from "../../const/data";
import Logo from "../../components/logo";
import TopNav from '../../components/navbar/mobile/top'
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
            <div>
                {
                    width > 500 && <Navbar/>
                }
            </div>
            {/*{*/}
            {/*    width < 500 && <div>*/}
            {/*        <TopNav/>*/}
            {/*    </div>*/}
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
            {
                width < 500 && <div>
                    <NavBarMobile/>
                </div>
            }
        </Wrap>
    )
}
export default Main