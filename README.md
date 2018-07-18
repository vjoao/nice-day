## NiceDay

Demo:
https://vjoao.github.io/nice-day/

A Vue.js powered application to check if the weather is nice on your location
It uses a free version of the DarkSky API (forecast.io) that is behind a proxy because DarkSky disabled CORS.

The application supports persisted settings through `vuex-persistedstate`.
Try not to abuse the API calls for Google geocoding / maps. There are no API Keys on this repository, feel free to add yours if needed. You can also change the proxy URL on `/services/constants.js`.

## Running

This project was created with `@vue/cli 3`.
To run:
```
yarn
yarn serve
```

To build and deploy to your serve:
```
yarn build
```

## TODO

  * [ ] Automated testing
  * [ ] Use backup forecast data sources
  * [ ] Code cleanup