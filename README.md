# ColorButton

## Description
The Color App is a simple Angular application that continuously fetches random colors from a backend server and updates the color of a button on the page every 2 seconds. Additionally, it displays the name of the color below the button.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Features](#features)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Running Unit Tests](#running-unit-tests)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- [Angular]: The frontend framework for building the user interface.
- [RxJS]: Used for handling asynchronous operations and observables.
- [TypeScript]: The primary language for writing Angular code.
- [HttpClient]: Angular's HTTP client module for making API requests.
- [Jasmine]: Testing Framework.


## Installation

Follow these steps to set up and run the Color App:

1. Clone the repository:

    ```bash
    git clone https://github.com/skazal15/color-app.git
    ```
    or if you have zip file of this project, you can unzip it.
    
2. Navigate to the project directory:
    ```bash
    cd color-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the Angular development server:
    ```bash
    ng serve
    ```
5. Open your web browser and visit http://localhost:4200 to view the application.
  

## Features
 - Automatic color updates: The app fetches random colors from the server every 2 seconds and updates the button's background color.
 - Color name display: The name of the fetched color is displayed below the button.
 - User-friendly interface: The app provides an easy-to-use interface with a single button.

## Project Structure

The project is organized into the following components:
    - [ColorComponent]: The main component responsible for rendering the button and color name.
    - [ColorService]: A service that handles the fetching of random colors from the backend server.
    - [HttpClientModule]: Angular's HttpClient module is used for making HTTP requests to the backend.

## How It Works

    1. The Color App uses Angular to create a simple user interface with a button and a color name display area.

    2. The ColorService fetches random colors from the backend server every 2 seconds using RxJS observables and the Angular HttpClient.

    3. The fetched color is applied as the background color of the button, providing a visual representation of the color.

    4. The name of the color is displayed below the button, helping users identify the color.

## Running unit tests

Unit tests are available to ensure the functionality of the Color App:

1. Run the unit tests using the following command:
    ```bash
    ng test
    ```
2. Jasmine testing framework will execute the tests and provide the results.

## Further Improvements

Here are some possible improvements for the Color App:
    - User interaction: Allow users to manually trigger color updates by clicking the button.
    - Color details: Provide additional information about the fetched color, such as its hexadecimal or RGB value.
    - Color history: Implement a history feature to store and display previously fetched colors.
    - Customizable interval: Allow users to change the interval for color updates.
    - Feel free to contribute or modify the app according to your requirements.

## Contributing

If you'd like to contribute to the Color App, please follow these steps:

    - Fork the repository on GitHub.
    - Create a new branch for your feature or bug fix.
    - Make changes and commit them to your branch.
    - Push your changes to your forked repository.
    - Submit a pull request to the original repository.
    - Your contributions are greatly appreciated!

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.