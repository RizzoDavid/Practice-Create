import React from 'react';
import Weather from './components/Weather';
import RSSReader from './components/RSSReader';
import GoogleCalendar from './components/GoogleCalendar';
import Greeting from './components/Greeting';
import './styles/App.css';

const App: React.FC = () => {
    const userName = "Riz";
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="dashboard">
            <Greeting userName={userName} currentDate={currentDate} />
            <Weather location="Your Location" />
            <h2>Here are your top stories this morning:</h2>
            <RSSReader />
            <h2>Here is what you have going on today:</h2>
            <GoogleCalendar />
        </div>
    );
};

export default App;