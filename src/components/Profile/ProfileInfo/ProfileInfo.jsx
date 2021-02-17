import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://i.pinimg.com/originals/33/81/88/338188514739fd4b4547b7a514cf5278.png" alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
               <img src={props.profile.photos.large} className={s.photos}/>
                <ProfileStatus status={'hello my friends'}/>
            </div>
        </div>
    )
}

export default ProfileInfo