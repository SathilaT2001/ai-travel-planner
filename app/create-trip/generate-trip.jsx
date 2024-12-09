import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import { useContext } from 'react'
import { CreateTripContext } from '../../context/CreateTripContex'
import { AI_PROMPT } from '../../constants/Options'
import { useEffect } from 'react'
import { chatSession } from '../../configs/AiModel'
import { useRouter } from 'expo-router'
import {auth,db} from './../../configs/FirebaseConfig'
import { doc, setDoc } from 'firebase/firestore';


export default function GenerateTrip() {
    const {tripData,setTripData}=useContext(CreateTripContext);
    const [loading,setLoading]=useState(false);
    const router=useRouter();
    const user=auth.currentUser;

    useEffect(() => {
  if (tripData) {
    GenerateAiTrip();
  }
}, []);

    const GenerateAiTrip=async()=>{
        
        setLoading(true);
        const FINAL_PROMPT=AI_PROMPT
        .replace('{location}',tripData?.locationInfo?.name)
        .replace('{totalDays}',tripData.totalNoOfDays)
        .replace('{totalNight}',tripData.totalNoOfDays-1)
        .replace('{traveler}',tripData.traveler?.title)
        .replace('{budget}',tripData.budget)
        .replace('{totalDays}',tripData.totalNoOfDays)
        .replace('{totalNight}',tripData.totalNoOfDays-1);
 
        console.log(FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        const tripResp=JSON.parse(result.response.text());
        setLoading(false)
        const docId=(Date.now()).toString();
        await setDoc(doc(db, "UserTrips",docId), {
            userEmail:user.email,
            tripPlan:tripResp, //Ai result
            tripData:JSON.stringify(tripData), //User selection data
            docId:docId
          })
          
        
            router.push('/(tabs)/mytrip')
          
 
         
    }

  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.White,
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit Bold',
        fontSize:35,
        textAlign:'center'
      }}>Please Wait...</Text>

    <Text style={{
        fontFamily:'outfit Medium',
        fontSize:20,
        textAlign:'center',
        marginTop:40
      }}>We are generating your trip</Text>

      <Image source={require('./../../assets/images/travel.gif')}
      style={{
        width:'100%',
        height:300,
        objectFit:'contain',
        marginTop:15
      }} />

<Text style={{
        fontFamily:'outfit',
        fontSize:20,
        color:Colors.Gray,
        textAlign:'center',
        marginTop:40
      }}>Do not Go Back</Text>
    </View>
  )
}