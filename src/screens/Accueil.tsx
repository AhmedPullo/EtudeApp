import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import AvisScreen from './prof/AvisScreen';
import AbsenceScreen from './prof/AbsenceScreen';
import EmploiScreen from './prof/EmploiScreen';
import NoteScreen from './prof/NoteScreen';




/*function NoteScreen(){
    return(
        
    <Text>ok ok </Text>
    
    );
}*/

/*function EmploiScreen(){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Note!</Text>
    </View>
    );
}

function AbsenceScreen(){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Note!</Text>
    </View>
    );
}

function AvisScreen(){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Note!</Text>
      <Text>EmploiScreen</Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
    
    <Text>EmploiScreen</Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>

    <Text>Note!</Text>
      <Text>EmploiScreen</Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
      <Text>
        hztekkhtz
      </Text>
    
    <Text>EmploiScreen</Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>
    <Text>
      hztekkhtz
    </Text>
    </View>
    );
}*/


const Tab = createBottomTabNavigator();

export default function Accueil() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Note des etudiant" component={NoteScreen}/>
        <Tab.Screen name="Abscence des etudiant" component={AbsenceScreen}/>
        <Tab.Screen name="Emplo des etudiant" component={EmploiScreen}/>
        <Tab.Screen name="Avis des etudiant" component={AvisScreen}/>
        </Tab.Navigator>
   
  )


}