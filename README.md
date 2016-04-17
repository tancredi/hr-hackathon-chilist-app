# Chilist App

![Screenshot](http://i.cubeupload.com/kEcIm5.png)

> Stripped-down matching product for tech

## Try it!

The app prototype is deployed at [chilist.herokuapp.com](http://chilist.herokuapp.com/). Give it a go!

## HR.reinvent(2);

This app was developed during the [2nd HR Hackthon](http://www.hrhackathon.net) in Berlin

## Setup

    git clone git@github.com:tancredi/hr-hackathon-chilist-app.git
    cd hr-hackathon-chilist-app.git
    npm install

## Configure

You can use environment variables to configue the app.
The app needs access to a running mongoDB instance to work - by default it will connect to the `chilist` db on localhost.

* `MONGODB_URL` - Full URL (Inclusive of auth if required) of MongoDB instance to connect to - By default set to `mongodb://localhost/chilist`
* `PORT` - Port to run the server on (Defaults to `4000`)

## Build

To build the client

    npm run build

## Run

To start the server

    npm start

## Development server

To start the live-reloading server

    npm run dev

## Watch

To watch the client

    npm run watch

## License

Copyright (c) 2016 WorkShape.io - Released under the [MIT](https://github.com/tancredi/hr-hackathon-chilist-app/blob/master/LICENSE) license