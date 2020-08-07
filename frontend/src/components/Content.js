import React from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View
} from 'react-native';

export default class Content extends React.Component {
  constructor(props){
    super(props)

    this.state = {
        
        altura:0,
        massa:0,
        resultado:0,
        resultadoText:""
    }

    this.calcular = this.calcular.bind(this)
  }

  calcular(){
   let imc = this.state.massa / (this.state.altura * this.state.altura)

   let s = this.state

   s.resultado = imc

   if(s.resultado < 16){
     s.resultadoText ='Muito abaixo do peso'
   }
    else if (s.resultado < 17){
     s.resultadoText ='Moderadamente abaixo do peso'
    }
    else if (s.resultado < 18.5){
     s.resultadoText ='Abaixo do peso'
    }
    else if (s.resultado < 25) {
     s.resultadoText ='Saudavel'
    }
    else if (s.resultado < 30) {
     s.resultadoText ='Sobrepeso'
    }
    else if (s.resultado < 35) {
     s.resultadoText ='Obesidade Grau 1°'
    }
    else if (s.resultado < 40) {
      s.resultadoText ='Obesidade Grau 2°'
    }
    else{
      s.resultadoText ='Obesidade Grau 3°'
    }

   this.setState(s)



  }

  render() {

    return (
        <View style={styles.content}> 
<Text id="resultadotext" style={{fontSize: 25, textAlign: 'center', paddingTop: 35, color: 'white'}}>{this.state.resultadoText}</Text>


<TextInput placeholder="Altura ex 1.80" keyboardType="numeric"
style={{textAlign: 'center', height: 80, width: 400, fontSize: 50,
marginTop: 40, color: 'white'}} onChangeText={(altura)=>{this.setState({altura})}}></TextInput>


<TextInput placeholder="Massa" keyboardType="numeric" 
onChangeText={(massa)=>{this.setState({massa})}} style={{
height: 80, width: 400, fontSize: 50, marginTop: 20, textAlign: 'center', color: 'white'
}}></TextInput>

<View style={styles.btn}>

<TouchableOpacity onPress={this.calcular}>
 <Text style={{fontSize: 28, color: 'black', fontWeight: 'lighter' ,height: '100%'}} >Calcular</Text>
</TouchableOpacity>
    
       </View>

<Text style={{fontSize:32, textAlign: 'center',  color: 'white', paddingTop: 20}}>IMC {this.state.resultado.toFixed(2)}</Text>


    </View>
    )
}
}
const styles = StyleSheet.create({
    content: {
    alignSelf: 'center',
 
    },
    btn: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        height: 90,
        paddingTop: 25, 
       marginTop: 50,
        width: 180, 
        alignSelf: 'center', 
        borderRadius: 20
    }
        
})








