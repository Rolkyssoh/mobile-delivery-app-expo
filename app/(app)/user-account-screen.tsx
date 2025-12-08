import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// import { Auth } from 'aws-amplify';
import { IUser } from '@/dto';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useAuthContext } from '../../contexts/AuthContext';

export interface IUserAccountScreenProps {
  order?: any
}

const UserAccountScreen: React.FC<IUserAccountScreenProps> = ({order}) => {
  const navigation = useNavigation()
//   const { dbCourier } = useAuthContext()
const [dbCourier, setDbCourier] = useState<IUser>()
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    console.log('the Drivvverr:::', dbCourier)
    if(dbCourier){
      setUserName(dbCourier.username)
    }
  },[dbCourier])

  return (
    <View style={styles.container}>
      <Text style={styles.greetingUserText}>Bonjour {userName}!</Text>
      <View style={styles.containView}>
        <View>
          <Text style={styles.headTitle}>Compte</Text>
          <Pressable 
            // onPress={() => navigation.navigate('Mission')} 
            style={styles.pressableItemStyles}>
            <MaterialCommunityIcons name="shopping-outline" size={20} color="#000" />
            <Text style={styles.textStyles}>Mes missions</Text>
          </Pressable>
          <Pressable 
          // onPress={() => navigation.navigate('Profile') } 
           style={styles.pressableItemStyles}>
            <AntDesign name="user" size={20} color="#000" />
            <Text style={styles.textStyles}>Mes informations</Text>
          </Pressable>
          <View style={{borderBottomWidth:1, borderBottomColor:'lightgrey', marginTop:15}} />

          <Pressable style={styles.pressableItemStyles}>
            <AntDesign name="questioncircleo" size={20} color="#000" />
            <Text style={styles.textStyles}>F.A.Q</Text>
          </Pressable>
          <Pressable 
        //   onPress={() => Auth.signOut()}  
          style={styles.pressableItemStyles}>
            <Entypo name="log-out" size={20} color="#000" />
            <Text style={styles.textStyles}>Déconnexion</Text>
          </Pressable>
        </View>
        <Text style={styles.text_version}>Version 1.0.0</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  greetingUserText: {
    color:'#000',
    fontSize:30,
    fontWeight:'700',
    margin:25
  },
  containView:{
    backgroundColor:'#fff',
    flex:1,
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
    paddingHorizontal:15,
    paddingTop:30
  },
  headTitle:{
    fontSize:25,
    fontWeight:'700',
    color:'#000'
  },
  pressableItemStyles:{
    paddingTop:15,
    flexDirection:'row',
    alignItems:'center',
  },
  textStyles:{
    color:'#000',
    fontSize:18,
    marginLeft:10
  },
  text_version: {
    position:'absolute',
    alignSelf: 'flex-end',
    fontSize: 10,
    color: 'lightgrey',
    bottom:1
  },
})

export default UserAccountScreen
