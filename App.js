import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';

export default function App() {
const [usuario, setUsuario] = useState('');
const [senha, setSenha] = useState('');
const handleUsuario = (text) =>{
  setUsuario(text)
}
const handleSenha = (text) => {
  setSenha(text)
}
  return (
    <View style={styles.container}>
      <Image source={require('./assets/vendas.png')} 
        style={styles.logoRemoto} 
      /> 
      <Text style={styles.titulo}>Projeto de Vendas Padrão</Text>
      <View style={styles.container2}>
        <Text style={styles.subTitulo}>Etec Paulistano</Text>
      </View>
      <View style={styles.container3}>
        <TextInput style={styles.textInput} value={usuario} placeholder='usuario' 
          onChangeText={(text)=>{setUsuario(text)}}></TextInput>

        <TextInput style={styles.textInput} value={senha} placeholder='senha' 
          onChangeText={ handleSenha } secureTextEntry={true}></TextInput>
       {/* <Button color='#037' title='Entrar' onPress = {()=>{alert("Usuario: "+ usuario+"\n Senha: "+senha)}}>  </Button>*/}
        <TouchableOpacity style={styles.botao} onPress={()=>{alert("Usuario: "+ usuario+"\n Senha: "+senha)}}>
          <Text>Entrar</Text>
         
        </TouchableOpacity>
      </View>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width:'100%',
    marginRight:50,
  },
  titulo:{
    fontSize:30,
    color:'#696969',
    marginBottom:5,
  },
  subTitulo:{
    fontWeight: 'bold',
    color: '#4169E1',
    fontSize:20,
  },
  logoRemoto:{
    width:150,
    height:150,
    resizeMode:'contain',
  },
  container3:{
    marginTop: 30,
    width:'80%'
  },
  textInput:{
    margin:10,
    borderWidth: 1,
    borderStyle:'solid',
    borderColor: '#ccc',
    paddingLeft:5,
    borderRadius:15
  },
  botao:{
    marginTop:20,
    padding:10,
    backgroundColor:'#ccc',
    borderWidth: 1,
    borderStyle:'solid',
    borderColor: '#000',
    alignItems:'center',
    borderRadius:15

  }

});
