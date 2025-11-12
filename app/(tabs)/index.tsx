import { CustomMarkerComponent, OrderItemComponent } from "@/components";
import { IOrder } from "@/dto";
import { userGetAllOrders } from "@/hooks";
import { userOrderStore } from "@/stores";
import { Entypo } from '@expo/vector-icons';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import * as Location from 'expo-location';
import { useNavigation, useRouter } from "expo-router";
import { useEffect, useMemo, useRef, useState, } from "react";
import { ActivityIndicator, Dimensions, ListRenderItemInfo, Pressable, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";



export default function HomeScreen() {
    //   const { dbCourier } = useAuthContext()
    const { availableOrders } = userOrderStore()
    const { refetch } = userGetAllOrders()
  const bottomSheetRef = useRef(null);
  const router = useRouter()
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ['15%', '90%'], []);
  const [foreground, requestForeground] = Location.useForegroundPermissions();

  const [driverLocation, setDriverLocation] = useState<{latitude:number, longitude:number} | null>({latitude:	34.020882, longitude:	-6.841650});  
  // const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    refetch()
  },[])

//   useEffect(() => {
//     // if(!dbCourier){
//     //   navigation.navigate('Profile')
//     // }
//     requestedPosition();
//     fetchOrders();

//     const subscription = API.graphql(
//       graphqlOperation(onUpdateOrder, {
//         filter: {status: {eq: 'READY_FOR_PICKUP'}},
//       }),
//     ).subscribe({
//       next: ({value}) => {
//         console.log('value when updated:', value);
//         fetchOrders();
//       },
//       erro: err => console.warn(err),
//     });
//     return () => subscription.unsubscribe();
//   }, []);

  const requestedPosition = async () => {
      let {status, canAskAgain} = await Location.requestForegroundPermissionsAsync();
      // if(canAskAgain ===false)
        // requestForeground().then(p => {
        //   !p.granted && Linking.openSettings()
        // })
      // if (!status === 'granted') {
      //   console.warn('Nonono');
      //   return;
      // }
      let location = await Location.getCurrentPositionAsync();
      setDriverLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
  }

  // const fetchOrders = () => {
  //   API.graphql(graphqlOperation(listOrders)).then(result => {
  //     const readyOrders = result.data.listOrders.items.filter(
  //       // _ =>  !_._deleted,
  //       _ => _.status === 'READY_FOR_PICKUP' && !_._deleted,
  //     );
  //     setOrders(readyOrders);
  //   });
  // };

  // if (!orders || !driverLocation || ! dbCourier) {
  if (!availableOrders || !driverLocation) {
    console.log(driverLocation)
    return <ActivityIndicator size={'large'} color="#000" />;
  }

    return (
        <SafeAreaView 
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
    <View style={{backgroundColor: 'lightgrey', height: '100%'}}>
      <MapView
        style={styles.map}
        showsUserLocation
        followsUserLocation
        initialRegion={{
          latitude: driverLocation.latitude,
          longitude: driverLocation.longitude,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07,
        }}>
        {availableOrders.map(order => (
          <CustomMarkerComponent
            key={order.id}
            data={order}
            type={order.structure.structureType}
          />
        ))}
      </MapView>
      <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
        <View style={styles.bottomSheetHeaderContainer}>
          <Pressable 
          // onPress={() => navigation.navigate("user-account-screen")} 
          // onPress={() => router.push('user-account-screen')} 
          style={{alignSelf:'flex-start'}}>
            <Entypo name="menu" size={30} color='#000' />
          </Pressable>
          <View style={{alignItems: 'center', marginBottom: 30}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                letterSpacing: 0.5,
                paddingBottom: 5,
                color: '#000',
              }}>
              You're Online
            </Text>
            <Text style={{letterSpacing: 0.5, color: 'grey'}}>
              Available Orders:
            </Text>
          </View>
          {/* //Ghost view */}
          <View style={{width:25, height:25, backgroundColor:'red'}}/>
        </View>
        <BottomSheetFlatList
          data={availableOrders}
          keyExtractor={(item: IOrder) => item.id.toString()}
          renderItem={({item}: ListRenderItemInfo<IOrder>) => <OrderItemComponent order={item} />}
        />
      </BottomSheet>
    </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bottomSheetHeaderContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'blue',
  }
});