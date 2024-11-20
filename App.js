import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/screens/Drawer';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import Coleta from './src/screens/Coleta';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Carnaval" component={AcoesPesquisa} options={{ headerTintColor:'#FFFFFF', headerTitleStyle:{fontFamily:'AveriaLibre-Regular', fontSize: 30},headerShown: true, headerStyle:{backgroundColor:'#2B1D62'} }} />
        <Stack.Screen name="Coleta" component={Coleta} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;