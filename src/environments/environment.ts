// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrls: {
    host: 'http://localhost:3010/',
    prefix: "api/v1",
    auth: "/auth",
  },
};
