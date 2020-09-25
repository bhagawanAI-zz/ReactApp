import React,{useState} from 'react'
import { View, Text,TouchableOpacity,TextInput,Image } from 'react-native'

const Login = ({ navigation }) => {
  const [ username, setusername ] = useState('')
  const [ password, setpassword ] = useState('')
  
    return(
      
        <View style={{ justifyContent:'center',alignItems:'center',marginTop:'30%' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Login Screen</Text>
          
              <Text style={{ alignSelf:"flex-start",marginLeft:'16%',marginTop:'6%' }}>Username</Text>  
              <TextInput style={{ height:50,width:250,borderColor:'black',borderWidth:1,marginTop:'3%',paddingLeft:10 }}
                         placeholder="Enter Email or Username"
                         value={username}
                         onChange={(e)=>setusername(e.target.value)} />
    
          <Text style={{ alignSelf:"flex-start",marginLeft:'16%',marginTop:'6%' }}>Password</Text>  
          <TextInput style={{ height:50,width:250,borderColor:'black',borderWidth:1,marginTop:'3%',paddingLeft:10 }}
                     placeholder="Enter Password"
                     value={password}
                     onChange={(e)=>setpassword(e.target.value)} />
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Home")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Login</Text>
          </TouchableOpacity>  
        </View>
      
    )
}

export default Login;