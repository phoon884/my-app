import React from 'react';
import Lottie from 'react-lottie';
import * as loading from '../resources/loading.json'
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSetting:{
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export const Loading = () => {
    return(
        <div style={{marginTop: '10rem'}}>
            <Lottie options={defaultOptions} height={120} width={120} />
        </div>
    )
}
export default Loading;