
# Weather API

![Project Status](https://img.shields.io/badge/Status-Completed-brightgreen)

A simple weather API built using **Node.js** and **Express**, designed as an academic project. This API returns real-time weather data based on a user-provided address using external geocoding and weather services.

---

### Prerequisites

What you need to run this project:

* **Node.js** (v18 or higher recommended)
* **npm** (Node package manager)
* **API keys** from **Weatherstack** and **OpenWeatherMap**
* **Internet connection** (for external API calls)

### Installation

Step-by-step to get your development environment running:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Kaiky404/weather-api.git
    ```

2. **Navigate into the project directory:**
    ```bash
    cd weather-api
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set environment variables:**
    - Create a `.env` file in the root directory.
    
     Add your API keys:
      ```
      OPENWEATHERMAP_API_KEY=YourApiKeyFromOpenweathermap
    WEATHERSTACK_API_KEY=YourApiKeyFromWeatherstack
      ```

5. **Start the server:**
    ```bash
    npm run start
    npm run dev
    ```

6. **Make a request:**
   
   Open the browser and access: `http://localhost:3000`.
   - To test the API, do `type a local and submit it`.
   - You'll get a response with weather information.

---

## 🛠️ Built With

* **Node.js**
* **Express.js**
* **dotenv**

---

## ✨ Features

* **Weather Forecast Endpoint**: `/weather?address=CityName`
* **Error Handling**: Handles missing address, invalid input, and external API issues
* **Modular Structure**: Organized into controllers, routes, and utility files
* **Environment Configuration**: Uses `.env` for sensitive data

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🧑‍💻 Author

| **Kaiky F. Silva** - [Kaiky404](https://github.com/Kaiky404)