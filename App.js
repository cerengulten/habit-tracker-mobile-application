import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Paltform, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const tabBarHeight = Platform.OS === 'ios' ? 80 : 55;
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel: false,headerShown: false, tabBarStyle:{position: 'absolute', backgroundColor:'#0B1623E5', borderBlockColor: '#161618',  height: tabBarHeight,  } }} initialRouteName="Home">
        <Tab.Screen name = 'home' component={HomeScreen} options={{
          tabBarIcon: ({ focused, color }) => (
            <Entypo name="home" size={24} color={focused ? '#FF3F80' : 'white'} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
