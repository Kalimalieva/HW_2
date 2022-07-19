import React from 'react';


function AboutPage(props) {
    return (
        <div>
            <h1>{props.info.title}</h1>
            <p>{props.info.body}</p>
        </div>
    );
}

export default AboutPage;