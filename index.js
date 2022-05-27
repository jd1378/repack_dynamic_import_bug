/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

async function importLocale(locale) {
  const localeData = await import(`./lang/${locale}.json`);
  return localeData;
}

// works in dev, fails in production
importLocale('en-US')
  .then(j => console.log(j))
  .catch(e => console.error(JSON.stringify(e)));
importLocale('en-GB')
  .then(j => console.log(j))
  .catch(e => console.error(JSON.stringify(e)));

AppRegistry.registerComponent(appName, () => App);
