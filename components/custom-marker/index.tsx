import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import MaterialsIcons from 'react-native-vector-icons/MaterialIcons';
// import { getStructure } from '../../graphql/queries';
// import { API, graphqlOperation } from 'aws-amplify';
import { IOrder, IStructure, StructureType } from '@/dto';
import { Entypo } from '@expo/vector-icons';

export interface ICustomMarkerComponentProps {
  data: IOrder
  type: StructureType
}

export const  CustomMarkerComponent: React.FC<ICustomMarkerComponentProps> = ({data, type}) =>  {
  const [structure, setStructure] = useState<IStructure | null>(null);
  const [driverCoor, setDriverCoor] = useState({});
  // console.log('in custom marker:', data);

  useEffect(() => {
    if(data?.structureID){
      getStructureByOrderId(data.structureID)
    }
  },[data])

  const getStructureByOrderId = (struct_id: string) => {
    console.log({struct_id})
    // API.graphql(graphqlOperation(getStructure, {id: struct_id})).then(result => {
    //   setStructure(result.data.getStructure);
    // });
  }


  return (
    <Marker
      coordinate={{
        latitude: structure!=null ? structure?.lat : 0, 
        longitude:structure!=null ? structure?.lng : 0
      }}
      title={structure?.name}
      description={structure?.address}>
      <View style={{backgroundColor: 'green', padding: 5, borderRadius: 20}}>
        {type === StructureType.RESTAURANT ? (
          <Entypo name="shop" size={30} color="#fff" />
        ) : (
          <MaterialsIcons name="restaurant" size={30} color="#fff" />
        )}
      </View>
    </Marker>
  );
};
