# Getting Started with Weatherapp

## Technologies used

1. React - For building reusable components and handling data
2. Typescript - Typescript for type checks in the components.
3. Jest - to test a simple test case.
4. CSS - for styling components
5. React router dom - for routing through webpages.
6. MaterialUI Icons - For the Back icon.

## Setup the project

1. Navigate to the link [Weatherapp github repo](https://github.com/sowmya1408/weatherapp_codingchallenge).

2. Clone the project as local repository based on preference using HTTPS, SSH,Github Cli.

3. Open the project in local using any preferred code editor like visual studio code, sublime.

## Run the project

In the project directory, using the terminal you can run:

### `npm start`

## Run the test

In the project directory, there a small test solution included for PageHeading, to run it:

### `npm run test`

## Approach to the project

1. Split the webpages to small component which can be re-used in both webpages.

2. Created a component folder in src and added two components.

3.Utilisation of OpenWeatherAPI- created a services folder and added a file, which contains functions to get data using cityname and currentlocation.

4. There is a function in the same file to handle error in case of any issues.

5. Worked with currentlocation API to get users current location, if location is not turned on it would ask to turn the location to allow.

6. Fetch the data in App.js and pass the values to context so that it can be accessible to both pages.

7. Utilise the data in dashboard pages to display on the UI similar to wireframe.

8. Pass the data to weatherdetails page with the route weatherDetails and params.

9. Display data based on the selected location on dashboard.

10. Errors are handled for the API's for the user to display if there is an error in fetching data.

11. Included a simple test solution.

## Improvements to the project

### `Improvements in the problem and also a better solution`

1. As we have used default locations on the dashboard, Instead of which if we have an input where user can enter required location and search for it.

2. Instead of displaying the data in two pages, everything can be handled in one page.

3. If there is a burger menu which has a tab of 'other Locations' which takes the user to search bar and the cityname could be passed to the API.

4. Based on users if they would like to store the location they can choose to.

5. As there are 3 locations we are choosing on a single page, there are performance issues.

### `Improvments in my solution`

1. Search for a better package to load the latitute and logitude of current location, which updates them faster.

2. Improve more in handling types with typescript.

3. Implement more better UI.

4. Improve in cross-platform.

5. I have attempted a test solution for components for the first time but would like to learn more and write good test cases.
