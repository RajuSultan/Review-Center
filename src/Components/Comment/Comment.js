import React from 'react';
import './Comment.css';

const Comment = (props) => {
    const { name, picture, comment, ratings } = props.comment;

    return (
        <div className='comment-box'>
            <div className="pic">
                <img src={picture} alt="" />
            </div>
            <div className="comment-details">
                <h3>{name}</h3>
                <p>{comment}</p>
                <p className='country'><small>Ratings: {ratings}</small></p>
            </div>

        </div>
    );
};

export default Comment;