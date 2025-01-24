# Morning Coffee Dashboard

## Overview
Morning Coffee is a dashboard application designed to help you start your day with essential information at a glance. It displays the current weather, top RSS feed stories, your Google Calendar events, and a personalized greeting.

## Features
- **Weather Display**: Fetches and shows the current weather using the AccuWeather API.
- **Customizable RSS Reader**: Allows users to input an RSS feed URL and choose how many of the latest entries to display.
- **Google Calendar Integration**: Displays events for the current day of the week from your Google Calendar.
- **Personalized Greeting**: Shows a greeting message with the user's name and the current date.

## Project Structure
```
morning-coffee
├── src
│   ├── components
│   │   ├── Weather.tsx
│   │   ├── RSSReader.tsx
│   │   ├── GoogleCalendar.tsx
│   │   └── Greeting.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles
│       └── App.css
├── public
│   ├── index.html
│   └── favicon.ico
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/morning-coffee.git
   ```
2. Navigate to the project directory:
   ```
   cd morning-coffee
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## API Keys
Make sure to obtain the necessary API keys for AccuWeather and Google Calendar, and configure them in your application as needed.

## Contributing
Feel free to submit issues or pull requests to enhance the functionality of the Morning Coffee dashboard.

## License
This project is licensed under the MIT License.