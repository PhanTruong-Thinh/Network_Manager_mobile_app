import * as React from 'react';
import  { useEffect, useState } from 'react';
import {NetworkInfo, DeviceInfo} from "react-native-network-info";
import {
  Text,
  Button,
  View,
  StyleSheet,Image, requireNativeComponent,PermissionsAndroid
} from 'react-native';
import { getVersion } from 'jest';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {

  const [ipAddress, setIpAddress] = useState('Đang lấy địa chỉ IP...');
  const [ip, setIp] = useState("....");
  const [subnetMask, setSubnetMask] = useState("");
  const [defaultGateway, setDefaultGateway] = useState("");
  const [SSID, setSSID] = useState("....");

  useEffect(() => {
    NetworkInfo.getIPV4Address().then(ip => {setIpAddress(ip)})
    NetworkInfo.getIPV4Address().then(IPAddress => {setIp(IPAddress)});
    NetworkInfo.getGatewayIPAddress().then(getGatewayIPAddress => {setDefaultGateway(getGatewayIPAddress)});
    NetworkInfo.getSubnet().then(subnetMask => {setSubnetMask(subnetMask)});
    NetworkInfo.getSSID().then(ssid => {setSSID(ssid)});
  }, []);

  return (
    <View style={styles.body}>
      {/* ################################################### */}
        <View style={styles.header}>
          <View style={{height:'100%', width:'32%'}}>
            <Image  source={require('K:/Document/Lab/Network Project/Network_Manager_mobile_app/Image/phone.png')}
                    style={styles.phone}/>
            <Text style={{fontWeight:'bold', textAlign:'center'}}>{ip}</Text>
          </View>
          <View style={{height:'100%', width:'36%'}}>
            <Image  source={require('K:/Document/Lab/Network Project/Network_Manager_mobile_app/Image/modem.png')}
                    style={styles.modemWifi}/>
             <Text style={{fontWeight:'bold', textAlign:'center'}}>{defaultGateway}</Text>
          </View>
          <View style={{height:'100%', width:'32%'}}>
            <Image  source={require('K:/Document/Lab/Network Project/Network_Manager_mobile_app/Image/IconInternet.png')}
                    style={styles.internetIcon}/>
            <Text style={{ fontWeight:'bold', textAlign:'center'}}>{ipAddress}</Text>
          </View>
        </View>
        {/* ################################################## */}
        <View style={styles.info}>
          <View style={{height:'80%', width:'15%', borderRadius:5, borderColor:'#0000FF', borderWidth:1, marginHorizontal:5}}><Text style={{textAlign:'center', color:'#0000FF'}}>2.4G</Text></View>
          <View style={{height:'80%', width:'15%', borderRadius:5, borderColor:'#0000FF', borderWidth:1, marginHorizontal:5}}><Text style={{textAlign:'center', color:'#0000FF'}}>Wifi 4</Text></View>
          <View style={{height:'80%', width:'15%', borderRadius:5, borderColor:'#0000FF', borderWidth:1, marginHorizontal:5}}><Text style={{textAlign:'center', color:'#0000FF'}}>WPA2</Text></View>

        </View>
        {/* ################################################## */}
        <View style={styles.current}>
          <View style={{height:'20%'}}>
            <Text style={{fontWeight:'bold', textAlign:'center', marginTop:5, fontSize:16}}>Wifi Connection details</Text>
          </View>
          <View style={{height:'80%',flexDirection:'row', paddingLeft:8}}>
            <View style={{height:'100%', width:'35%'}}>
              <Text style={{fontWeight:'bold'}}>SSID:</Text>
              <Text style={{fontWeight:'bold'}}>ISP:</Text>
              <Text style={{fontWeight:'bold'}}>SubNet Mask:</Text>
              <Text style={{fontWeight:'bold'}}>Network Range:</Text>
              <Text style={{fontWeight:'bold'}}>DNS Server 1:</Text>
              <Text style={{fontWeight:'bold'}}>IPv6:</Text>
            </View>
            <View style={{height:'100%', width:'65%'}}>
              <Text>{SSID}</Text>
              <Text>FPT</Text>
              <Text>{subnetMask}</Text>
              <Text>192.168.1.1 - 192.168.1.254</Text>
              <Text>{defaultGateway}</Text>
              <Text>fffffffffff</Text>
             
            </View>
          </View>
        </View>
    </View>
   
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor:'#F5F5F5',
    padding:10,
    height:1000
  },
  header: {
    backgroundColor:'#FFFFFF',
    height:'10%', 
    borderRadius: 15,
    borderColor:'#D3D3D3',
    borderWidth: 2,
    flexDirection:'row'
  },
  info: {
    marginTop:5,
    marginHorizontal:20,
    flexDirection:'row',
    flex:0.03,
    resizeMode:'center'
  },
  current: {
    backgroundColor:'#FFFFFF',
    flex:0.2, 
    borderRadius: 15,
    borderColor:'#D3D3D3',
    borderWidth: 2
  },
  phone: {
    marginTop:5,
    marginLeft:30,
    height: 70,
    width:50
  },
  modemWifi: {
    marginLeft:20,
    height:75,
    width: 90,
    alignItems: 'center',
    resizeMode: 'center',
  },
  internetIcon: {
    marginTop: 10,
    marginLeft:30,
    height: 65,
    width: 65,
    alignItems: 'center',
    resizeMode: 'center'
  }
 
 
});
export default Home;
