import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/preloader"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) { //в начале нет профиля, так как profile=null в стейте, потом приходят данные только, поэтому создаем заглушку
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
               <img src={profile.photos.large} className={s.photos} alt={'#'}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo