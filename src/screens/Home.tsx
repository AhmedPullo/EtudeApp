import React, { useState } from 'react';
import { View, TextInput, Button, Text} from 'react-native';



const home = ({navigation}) => {


    return (
        <View>
        <Text>
            Bienvenue au Ecole Virtuel </Text>
            <Button
            title="Go to login profile"
            onPress={() =>
                navigation.navigate('Login' , {name:'jane'})
            }
            />

            
        
        </View>
    );
    
  };

  const ProfileScreen =({navigation , route}) =>{
    return <Text> this is {route.params.name}'s profile </Text>
  }
  
  export default home;
  