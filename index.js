/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

AppRegistry.registerComponent(appName, () => App);
