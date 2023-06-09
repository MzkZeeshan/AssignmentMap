import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MapView,{Marker, PROVIDER_GOOGLE} from "react-native-maps"
const SW = Dimensions.get("window").width
const SH = Dimensions.get("window").height




const ProductItem = ({ item }) => {

  return (

    <View style={styles.mainContainer}>
      <View style={styles.viewOne}>
      <MapView
           style={{ flex: 1 }}
           provider={PROVIDER_GOOGLE}
           showsUserLocation
           initialRegion={{
           latitude: item.lat,
           longitude: item.lon,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421}}
      >
        <Marker coordinate={{latitude: item.lat, longitude: item.lon}}
        image={{uri:"https://imgtr.ee/images/2023/06/09/DeYUB.png"}}
        />
        </MapView>
      </View>
      <View style={styles.viewTwo}>
      <Text style={{ color: 'black',fontSize:30, fontWeight:"bold"}}>{item.name}</Text>
      <Text style={{ color: 'black',fontSize:15, fontWeight:"bold"}}>{item.address}</Text>
      <Text style={{ color: 'black',fontSize:20, fontWeight:"bold"}}>{"<<Swipe here>>"}</Text>
      </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf:"center",
    borderRadius: 10,
    height: SH/1.3,
    width:SW,
    backgroundColor:"white",
    shadowColor: "#000",
    borderRadius:2,
    elevation: 4,
  },
  viewOne: {
    width: '100%',
    height: 400,
    backgroundColor: "rgba(242, 241, 239,0.1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  viewTwo: {
 flex: 1,
  borderBottomLeftRadius: 10,
   borderBottomRightRadius: 10,
   justifyContent:"space-around",
   alignItems:"center" 
  },
  buttonView: {
    width: 60,
    height: 25,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'orange'
  }

})