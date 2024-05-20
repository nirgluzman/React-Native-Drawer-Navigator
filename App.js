import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initalRouteName='Welcome' // sets the default screen of the stack
        screenOptions={{
          // default options for ALL screens in the navigator
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: '#fff', // text color of the header
          headerTitleStyle: { fontWeight: 'bold' },
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          drawerStyle: { backgroundColor: '#ccc' } // custom background color for a drawer sidebar
        }}>
        <Drawer.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            //  options to configure ONLY this screen, https://reactnavigation.org/docs/drawer-navigator#options
            title: 'Welcome to my App!',
            // headerStyle: { backgroundColor: '#3c0a6b' },
            // headerTintColor: '#fff', // text color of the header
            // headerTitleStyle: { fontWeight: 'bold' },
            drawerLabel: 'Welcome Screen', // drawer sidebar
            // drawerActiveBackgroundColor: '#f0e1ff',
            // drawerActiveTintColor: '#3c0a6b',
            // drawerStyle: { backgroundColor: '#ccc' } // custom background color for a drawer sidebar
            drawerIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} /> // the color depends whether this item is selected in the drawer or not
          }}
        />
        <Drawer.Screen
          name='User'
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => <Ionicons name='person' size={size} color={color} />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
