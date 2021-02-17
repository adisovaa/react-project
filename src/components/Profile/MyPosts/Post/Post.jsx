import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
                alt=""/>
            {props.message}
            <div>
                like {props.likesCount}
            </div>
        </div>

    )
}

export default Post