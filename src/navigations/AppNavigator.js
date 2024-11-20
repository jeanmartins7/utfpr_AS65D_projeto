import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import NovaPesquisa from '../screens/NovaPesquisa';
import ModificarPesquisa from '../screens/ModificarPesquisa';
import CustomBackButton from '../components/CustomBackButton';

const Stack = createStackNavigator();

const AppNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#2B1D62' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontFamily: 'AveriaLibre-Regular',
          fontSize: 30,
          fontWeight: '400',
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="NovaPesquisa"
        component={NovaPesquisa}
        options={({ navigation }) => ({
          title: 'Nova pesquisa',
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ModificarPesquisa"
        component={ModificarPesquisa}
        options={({ navigation }) => ({
          title: 'Modificar pesquisa',
          headerLeft: () => <CustomBackButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
