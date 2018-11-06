// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    root: 'https://apidev1.theindoorlab.com/eventanalyzer',
    version: 'v2'
  },
  APPLICATIONID: '254d5447-9f71-11e8-af90-42010a8a0007',
  AUTHENTICATIONTOKEN: 'de51bb22-9f70-11e8-af90-42010a8a0007'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
