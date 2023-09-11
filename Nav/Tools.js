import * as React from 'react';
import {View, Text, Button,StyleSheet, TouchableOpacity, Image} from 'react-native';
const Tools = ({navigation}) =>{
  return (
    <View style={{flex: 1}}>
        <View style={{width:'100%', height:'20%',flexDirection:'row', resizeMode:'center'}}>
            <TouchableOpacity style={styles.button}>
            <Image  source={require('K:/Document/Lab/Network Project/Network_Manager_mobile_app/Image/ping.png')}
                    style={styles.ping}/>
                <Text style={styles.text}>Ping</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text  style={styles.text}>Telnet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text  style={styles.text}>SSH</Text>
            </TouchableOpacity>
        </View> 
        <View style={{width:'100%', height:'20%', flexDirection:'row'}}>
            <TouchableOpacity style={styles.button}>
                <Text  style={styles.text}>Speed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text  style={styles.text}>FTP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text  style={styles.text}>IP Calculator</Text>
            </TouchableOpacity>

        </View>
        <View style={{width:'100%', height:'20%', flexDirection:'row'}}>
            <TouchableOpacity style={styles.button}>
                <Text  style={styles.text}>Tracert</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text  style={styles.text}>Nmap</Text>
            </TouchableOpacity>
           
        </View>
       
       
    </View>
  );
}

const styles = StyleSheet.create({
   button: {
    height:100,
    width:100,
    marginStart: 20,
    marginTop:10,
    borderRadius:10,
    backgroundColor:'white'
   },
   text: {
    fontSize:16,
    textAlign:'center'
   },
   ping: {
    height: 50,
    width:50,
    alignItems:'center',
    marginTop:10,
    marginLeft:20
  }
})
export default Tools;
