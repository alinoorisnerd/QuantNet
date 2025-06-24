// App.js
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// Import all screens
import Welcome from './screens/Welcome';
import Story from './screens/Story';
import NameInput from './screens/NameInput';
import ModelSelect from './screens/ModelSelect';
import UseModel from './screens/UseModel';
import CreateModel from './screens/CreateModel';

// Stack navigator setup
const Stack = createStackNavigator(
  {
    Welcome: { screen: Welcome },
    Story: { screen: Story },
    NameInput: { screen: NameInput },
    ModelSelect: { screen: ModelSelect },
    UseModel: { screen: UseModel },
    CreateModel: { screen: CreateModel },
  },
  {
    headerMode: 'none', // hides headers
    initialRouteName: 'Welcome',
  }
);

const AppContainer = createAppContainer(Stack);

// App entry point
export default function App() {
  return <AppContainer />;
}
