Mobile Stock (React Native/Firebase)

[![Build Status](https://travis-ci.org/HTFML/chinese-poker.svg?branch=master)](https://travis-ci.org/HTFML/chinese-poker)

&nbsp;

## Getting Set Up
  ### Prerequisites
  This repository is built on the Expo CLI. Also, be sure to have XCode installed. In "Preferences > Components", you can download the specific iOS simulators you would like to run (I recommend the most recent one).
  - [Setting up Development Environment](https://reactnative.dev/docs/environment-setup)
  
  ### Instructions
  `npm` and `yarn` are both available as package managers, but `yarn` is prefered.
  - Clone the `master` branch
  - Run `cd Auth` in the terminal to get to the application's directory
  - Run `npm install` or `yarn` in the terminal to make sure all dependancies are installed
  - Run `yarn clean:ios` or `yarn clean:android` to start and launch the Expo CLI on your browser and subsequently on the iOS or Android simulator (if you don't have Expo CLI installed, this command should install Expo for you and then launch the application).
    - If you have Expo installed on your phone, run `yarn start` which should start the server. You should be able to run the simulator on your phone through the Expo app using the QR code.
  - Changes will be reflected after you save on your text-editor and hitting `CMD + R` when on the simulator, initiating a refresh.
  - To close/end the Expo server, simply run `CMD + C` on the terminal that is running the Expo package.
  
  ### Notes
  Most of the work done will be in the `src` directory. Some files will be outside of that directory, mainly `App.js`, `index.js`, and other files that I plan on using as a modular component (like putting all the navigation routes in one file: `Navigation.js`).
# mobile-stock
