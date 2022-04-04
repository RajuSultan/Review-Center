import React from 'react';
import { useNavigate } from 'react-router-dom';
import useComments from '../../Hooks/useComments';
import Comment from '../Comment/Comment';
import "./Home.css"

const Home = () => {
    const [comments, setComments] = useComments();
    // console.log(comments);
    const newComments = comments.slice(0, 3);
    // console.log(newComments);
    const navigate = useNavigate();

    return (
        <div className="main">
            <div className='header-part'>
                <div className="header-details">
                    <div className="details">
                        <h1>Review Center</h1>
                        <p>The MacBook family was initially housed in designs similar to the iBook and PowerBook lines which preceded them, now making use of a unibody aluminum construction first introduced with the MacBook Air. This new construction also has a black plastic keyboard that was first used on the MacBook Air, which itself was inspired by the sunken keyboard of the original polycarbonate MacBooks. The now standardized keyboard brings congruity to the MacBook line, with black keys on a metallic aluminum body.</p>
                        <button>Learn More</button>
                    </div>

                </div>
                <div className="header-image">
                    <img src="https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..v1588859331.jpg" alt="" />
                </div>

            </div>
            <div className="exparts-reviews">
                <h1>Customar Reviews</h1>
                <div className="comments">
                    {
                        newComments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                    }
                </div>
                <div className='btn'>
                    <button onClick={() => navigate('/reviews')}>See all Reviews</button>
                </div>
            </div>


        </div>
    );
};

export default Home;