import React from 'react';
import {AppWrap, Wrap, WrapContent} from "./styled";
import Sidebar from "./components/sidebar";
import { useWindowSize } from '@react-hook/window-size';
import { media } from './const/media';
import Routers from "./routers";

function App() {
    const [width] = useWindowSize()
  return (
    <div>
        <AppWrap>
            <WrapContent>
                <Wrap>
                    {width > media.xs ? <Sidebar/> : null}
                    <Routers/>
                </Wrap>
            </WrapContent>
        </AppWrap>
    </div>
  );
}

export default App;
