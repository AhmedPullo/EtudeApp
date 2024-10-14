import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error);
      });
  };*/

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button 
        title="Login" 
        onPress={() => {
          if (email == 'A') {
            console.log("okkk")
            navigation.navigate('HomeStudent' , {name : email});
          } 
          else{
          console.log("noo")
            navigation.navigate('Accueil', { name: email });
          }
        }} 
      />
    </View>
  );
};

export default LoginScreen;
