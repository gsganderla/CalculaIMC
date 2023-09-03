import { Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { useState } from "react";

export function Home() {

  const [result, setResultado] = useState([]);
  const [textResult, setText] = useState('');
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();

  function setResult() {
    setResultado(peso / (altura * altura)) 
    console.log(result);

    if (result < 18.5) { setText('Abaixo do peso') } 
    if (result >= 18.5 && result < 24.9) { setText('Peso normal')  } 
    if (result >= 25 && result < 29.9) { setText('Sobrepeso') }  
    if (result >= 30 && result < 34.9) { setText('Obesidade grau 1') } 
    if (result >= 35 && result < 39.9) { setText('Obesidade grau 2') } 
    if (result >= 40) { setText('Obesidade grau 3') }
  }

    return (  
    <View style={styles.container}>

      <Text style={styles.title}>Calculadora de IMC</Text>
      <Text style={styles.subTitle}>Descubra qual seu indice de massa corporal</Text>

      <View style={styles.section}>
        <View style={styles.form}>
          <Text style={styles.text}>Peso (kg)</Text>
        <TextInput style={styles.input} onChangeText={setPeso} value={peso}/>
        </View>
        
        <View style={styles.form}>
        <Text style={styles.text} >Altura (m)</Text>
        <TextInput style={styles.input} onChangeText={setAltura} value={altura}/>
        </View>

      </View>

      <View style={styles.sectionButton}>
        <TouchableOpacity style={styles.button} onPress={setResult}>
        <Text style={styles.textButton}>CALCULAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.assection}>
        <Text style={styles.textIndex}>Seu indice de massa corporal é: {result.toFixed(2)}</Text>
        <Text style={styles.textResultado}>{textResult}</Text>
      </View>
      <Text style={styles.textUNIPAR}>UNIPAR</Text>
    </View>
    
    )
}