import React,{useState} from 'react'
import { View, Text,TouchableOpacity,TextInput } from 'react-native'

const Registeration = ({ navigation }) => {
    const [ username, setusername ] = useState('')
    const [ password, setpassword ] = useState('')
    const [ email, setemail ] = useState('')

    return(
        <View style={{ justifyContent:'center',alignItems:'center',marginTop:'30%' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Registeration Screen</Text>
          <Text style={{ alignSelf:"flex-start",marginLeft:'16%',marginTop:'6%' }}>Username</Text>  
              <TextInput style={{ height:50,width:250,borderColor:'black',borderWidth:1,marginTop:'3%',paddingLeft:10 }}
                         placeholder="Enter your name"
                         value={username}
                         onChange={(e)=>setusername(e.target.value)} />
              <Text style={{ alignSelf:"flex-start",marginLeft:'16%',marginTop:'6%' }}>Email</Text>  
              <TextInput style={{ height:50,width:250,borderColor:'black',borderWidth:1,marginTop:'3%',paddingLeft:10 }}
                         placeholder="Enter Email"
                         value={email}
                         onChange={(e)=>setemail(e.target.value)} />           
    
          <Text style={{ alignSelf:"flex-start",marginLeft:'16%',marginTop:'6%' }}>Create Password</Text>  
          <TextInput style={{ height:50,width:250,borderColor:'black',borderWidth:1,marginTop:'3%',paddingLeft:10 }}
                     placeholder="Enter Password"
                     value={password}
                     onChange={(e)=>setpassword(e.target.value)} />
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Login")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Register</Text>
          </TouchableOpacity>  
        </View>
    )
}

export default Registeration;