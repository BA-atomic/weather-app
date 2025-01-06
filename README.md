# WeatherNow- A Simple Weather App

## About project

This is a lightweight and user-friendly weather application built using HTML, CSS, and JavaScript. It allows users to check current weather conditions for any city by entering the city name. The app fetches real-time weather data using the Weatherstack API.

## Page URL
view live on [WeatherNow](https://ba-atomic.github.io/weather-app/).

## Features

1. Search for weather by city name.

2. Displays:

- Temperature
- Wind speed
- Humidity
- Weather conditions

3. Responsive and user-friendly design.

4. Fetches real-time weather data.

## Getting Started

Follow these steps on how get the project from the GitHub repository and successfully run it locally on your computer.

### Prerequisites

- A code editor like [Visual Studio Code](https://code.visualstudio.com/).
- Git installed on your system.

### Steps to Clone and Run Locally:

1. **Clone the Repository**
   open your terminal and run:

```
git clone https://github.com/BA-atomic/weather-app.git
```

Now you can see the folder has been created in your directory.

2. **Navigate to the project Folder**
   After cloning,navigate to the project directory:

```
cd weather-app
```

3. **Open the project in your Editor(Visual Studio Code)**

```
code .
```

4. **The app uses an API key**
- Obtain an API key from [Weatherstack](https://weatherstack.com/)

- Sign up or log in to your weatherstack account.

- Navigate to the API Keys section in your account dashboard.

- Click on Generate Key, and copy the key.

- Add your API key in the JavaScript file:
```
const apikey = 'YOUR_API_KEY';
```

5. **Open the Project in Your Browser**
   Since the project is built with only HTML and CSS, no additional setup is required

- if you're using Visual Studio Code, install the **Live Server** extension.

- Right-click on `index.html` in the VS Code and select **Open with Live Server**.

- Alternatively,in the VS Code, click on the **Go Live** below and your project will open in your default browser, and the changes you make will reflect instantly.
