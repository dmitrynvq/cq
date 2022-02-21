import React from 'react';
import Main from "./components/main";
import {AppWrap, Wrap, WrapContent} from "./styled";
import Sidebar from "./components/sidebar";
import { useWindowSize } from '@react-hook/window-size';
import { media } from './const/media';

function App() {
    const [width] = useWindowSize()
  return (
    <div>
        <AppWrap>
            <WrapContent>
                        <Wrap>
                            {width > media.xs ? <Sidebar/> : null}
                            <Main/>
                        </Wrap>
            </WrapContent>
        </AppWrap>
    </div>
  );
}

export default App;
