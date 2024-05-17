import React from 'react'
import { Link } from 'react-router-dom'


export const CardCustom = ({ header, text, image , id}) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className='myCard'>
                <div className='img'>
                    <img src={image} />
                </div>
                <h4>{header}</h4>
                <p>{text}</p>
                <Link to={'/edit/' + id}> <button > Edit </button> </Link>
            </div>
        </div>
    )
}
