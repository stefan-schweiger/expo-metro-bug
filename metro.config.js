/* eslint-disable @typescript-eslint/no-var-requires */

// Produces following errors:
// TypeError: Cannot read property 'bind' of undefined, js engine: hermes
// Invariant Violation: "main" has not been registered. This can happen if:
// * Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
module.exports = config;

// Works as usual
// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const config = {};
// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
