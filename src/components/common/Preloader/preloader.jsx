import React from 'react';
import preloader from '../../../assets/images/loading.gif';


let Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader} alt={'#'}/>
    </div>
}

export default Preloader