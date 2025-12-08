import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
// import { useOrderContext } from '../../contexts/OrderContext'
// import { API, graphqlOperation } from 'aws-amplify';
// import { getStructure } from '../../graphql/queries';
import { MissionItemComponent } from '@/components';
import { IOrder, OrderStatus } from '@/dto';
import { userOrderStore } from '@/stores';

const MissionScreen = () => {
   const { availableOrders } = userOrderStore()
   const [courierHisOrders, setCourierHisOrders] = useState<IOrder[]>([]);
  
  useEffect(() => {
    console.log('the courieer his order::::', availableOrders)
    setCourierHisOrders(availableOrders.filter((order) => order.status === OrderStatus.COMPLETED && order.user != null))
  },[availableOrders])

  return (
    <View style={styles.container}>
      <FlatList 
        data={courierHisOrders}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <MissionItemComponent mission={item} /> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'whitesmoke'
  },
})

export default MissionScreen