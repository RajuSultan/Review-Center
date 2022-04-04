import React from 'react';
import useComments from '../../Hooks/useComments';
import Comment from '../Comment/Comment';
import './Reviews.css'

const Reviews = () => {
    const [comments, setComments] = useComments();
    return (
        <div className='reviews-box'>
            <h1>What Our  Customar say!!</h1>
            <div className="reviews">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>

        </div>
    );
};

export default Reviews;