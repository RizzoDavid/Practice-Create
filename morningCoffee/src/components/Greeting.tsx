import React from 'react';

const Greeting: React.FC<{ name: string }> = ({ name }) => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div>
            <h1>Good Morning {name}, today is {currentDate}.</h1>
            <p>Here are your top stories this morning.</p>
        </div>
    );
};

export default Greeting;