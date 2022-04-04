import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='qustion'>
            <h1>what is the purpose of context api in react</h1>
            <p>The React Context API is a way for a React app to effectively turn out global  variables that may be passed around. this is often the choice to "prop drilling" or moving props from forbear to kid to parent, and so on. Context is additionally touted as a neater, lighter approach to state management using Redux.

                Context API is a (kind of) new feature intercalary in version sixteen.3 of React that permits one to share state across the complete app (or a part of it) gently and with ease.

                React.createContext() is all you need. It returns a client and a supplier. supplier may be a part that as it's names suggests provides the state to its youngsters. it'll hold the "store" and be the parent of all the parts that may want that store. client because it thus happens may be a part that consumes and uses the state.</p>
            <h1>What is semantic tag?</h1>
            <p>Semantic markup language or linguistics markup is markup language that introduces aspiring to the online page instead of simply presentation. as an example, a tag indicates that the capsulate text could be a paragraph. this is often each linguistics and display as a result of folks understand what paragraphs area unit, and browsers know how to display them.
                Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.

                Elements like , and area unit all thought of linguistics as a result of they accurately describe the aim of the part and also the sort of content that's within them.</p>

        </div>
    );
};

export default Blogs;