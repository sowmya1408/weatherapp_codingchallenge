# Getting Started with Weatherapp

## Setup the project

1. Navigate to the link [Weatherapp github repo](https://github.com/sowmya1408/weatherapp_codingchallenge).

2. Clone the project as local repository based on preference using HTTPS, SSH,Github Cli.

3. Open the project in local using any preferred code editor like visual studio code, sublime.

## Run the project

In the project directory, using the terminal you can run:

### `npm start`

## Approach to the project

1. Split the webpages to small component which can be re-used in both webpages.

2. Created a component folder in src and added two components.

3.Utilisation of OpenWeatherAPI- created a services folder and added a file, which contains functions to get data using cityname and currentlocation.

4. There is a function in the same file to handle error in case of any issues.

5. Worked with currentlocation API to get users current location, if location is not turned on it would ask to turn the location to allow.

6. Fetch the data in App.js and pass the values to context so that it can be accessible to both pages.

7. Utilise the data in dashboard pages to display on the UI similar to wireframe.
