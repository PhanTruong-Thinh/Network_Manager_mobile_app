import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {
  // const [hidden, setHidden] = useState('flex');
  // const sideBar = () => setHidden('flex');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => alert('Đây là Home')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Home
      </Text>
    </View>
    // <View>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       width: '100%',
    //       justifyContent: 'center',
    //       backgroundColor: 'blue',
    //     }}>
    //     <TouchableOpacity style={styles.button} onPress={[sideBar, 'Home']}>
    //       <FontAwesome5 name={'bars'} size={25} />
    //     </TouchableOpacity>
    //     <Text style={{margin: 'auto'}}>Home</Text>
    //   </View>
    //   <View style={[styles.section, {display: hidden}]}></View>
    //   <View style={styles.footer}>
    //     <TouchableOpacity>
    //       <FontAwesome5 name={'home'} size={25} />
    //     </TouchableOpacity>
    //     <TouchableOpacity>
    //       <FontAwesome5 name={'satellite-dish'} size={25} />
    //     </TouchableOpacity>
    //     <TouchableOpacity>
    //       <FontAwesome5 name={'signal'} size={25} />
    //     </TouchableOpacity>
    //     <TouchableOpacity>
    //       <FontAwesome5 name={'user-circle'} size={25} />
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  button: {},
  header: {},
  section: {},
  footer: {
    position: 'relative',
    bottom: 0,
    top: '100%',
    flexDirection: 'row',
  },
});
export default Home;
