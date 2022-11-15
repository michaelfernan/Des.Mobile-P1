import { View, TouchableOpacity, Text, TextInput, Image, FlatList, StatusBar } from "react-native";
import { styles } from "./styles";
import facebook from '../../assets/facebook.jpg'
import apple from '../../assets/apple.jpg'
import google from '../../assets/google.jpg'
import gran from '../../assets/gran.png'
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';


export const Login = ({ navigation }) => {
  const goToScreen2 = () => {
    navigation.push("Inicio");
  };

  const [isChecked, setChecked] = useState(false);

  return (

    <View style={styles.container}>

      <View style={styles.containerC}>
        <Image
          source={gran}
          style={styles.logo}
        />

        <Text style={styles.entrar}>
          Entrar com
        </Text>

        <View style={styles.conteudoImg}>

          <Image
            source={facebook}
            style={styles.image}
          />
          <Image
            source={google}
            style={styles.image}
          />

          <Image
            source={apple}
            style={styles.image}
          />

        </View>


        <Text style={styles.entrar}>
          ou com
        </Text>


        <TextInput
          style={styles.input} keyboardType="email-address" placeholder='E-mail'
        />

        <TextInput
          style={styles.input} keyboardType="numeric" secureTextEntry placeholder='Senha'
        />

        <View style={styles.conteudo}>

          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#1465bb' : undefined}
          />

          <Text style={styles.textL}>
            Lembrar credenciais
          </Text>

          <Text style={styles.textEs}>
            Esqueceu sua senha?
          </Text>
        </View>


        <TouchableOpacity

          style={styles.button} onPress={goToScreen2}
        >
          <Text
            style={styles.buttonText}
          >
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity

          style={styles.button2}
        >


          <Text
            style={styles.buttonText2}
          >
            Criar conta
          </Text>
        </TouchableOpacity>

        <Text style={styles.textTer}>
          Termo de uso e politica de Privacidade
        </Text>
        <Text style={styles.textOff}>
          Acessar em modo offline
        </Text>
      </View>
    </View>

  )
}

