import React, { useEffect, useState } from 'react';

const GoogleCalendar: React.FC = () => {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('YOUR_GOOGLE_CALENDAR_API_ENDPOINT'); // Replace with your Google Calendar API endpoint
                const data = await response.json();
                setEvents(data.items); // Adjust according to the API response structure
            } catch (err) {
                setError('Failed to fetch events');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) return <div>Loading events...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Here is what you have going on today</h2>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>{event.summary} - {new Date(event.start.dateTime).toLocaleTimeString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default GoogleCalendar;