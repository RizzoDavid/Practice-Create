import React, { useState, useEffect } from 'react';

const RSSReader = () => {
    const [url, setUrl] = useState('');
    const [entries, setEntries] = useState([]);
    const [numEntries, setNumEntries] = useState(5);
    const [error, setError] = useState('');

    const fetchRSS = async () => {
        if (!url) return;

        try {
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&api_key=YOUR_API_KEY`);
            const data = await response.json();
            if (data.status === 'ok') {
                setEntries(data.items.slice(0, numEntries));
                setError('');
            } else {
                setError('Failed to fetch RSS feed.');
            }
        } catch (err) {
            setError('An error occurred while fetching the RSS feed.');
        }
    };

    useEffect(() => {
        fetchRSS();
    }, [url, numEntries]);

    return (
        <div>
            <h2>RSS Reader</h2>
            <input
                type="text"
                placeholder="Enter RSS feed URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <input
                type="number"
                min="1"
                value={numEntries}
                onChange={(e) => setNumEntries(e.target.value)}
            />
            <button onClick={fetchRSS}>Fetch RSS</button>
            {error && <p>{error}</p>}
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>
                        <a href={entry.link} target="_blank" rel="noopener noreferrer">{entry.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RSSReader;