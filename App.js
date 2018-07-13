import {
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#B50F16',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'BarlowCondensed-Bold',
      fontWeight:'200',//bug on android - only set font with this
      fontSize: 20
    }
  }
}
);

export default App;
