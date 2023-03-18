import { StatusBar } from 'expo-status-bar';
import {AllPlaces } from './screens/AllPlaces';
import {AddPlace} from './screens/AddPlace';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from './components/UI/IconButton';

  const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#62BD7A'},
          headerTintColor: '#375355',
          contentStyle: '#CDCDCD'

        }}>
          <Stack.Screen name='AllPlaces' component={AllPlaces}
           options={({navigation}) => ({
            title: 'Favorite Places',
            headerRight: ({tintColor}) => <IconButton icon='add' size={24}
             color={tintColor} onPress={() => navigation.navigate('AddPlace')} />
          })} />
          <Stack.Screen name='AddPlace' component={AddPlace} options={{
            title: 'Add Places'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


