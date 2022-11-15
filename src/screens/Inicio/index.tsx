import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { styles } from "./styles";
import React from "react";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons';


export const Inicio = () => {

  return (

    <View style={styles.container}>
      <MaterialCommunityIcons name="quadcopter" size={32} color="#1465bb" />

      <Text style={styles.title}>
        Olá, MICHAEL!
      </Text>

      <Text style={styles.sub}>
        O que você gostaria de aprender hoje?
      </Text>

      <TextInput
        style={styles.input} placeholder='Procurar por cursos...'

      />

      <View style={styles.icons}>
        <Ionicons name="md-search-circle-sharp" size={50} color="#1465bb" />
      </View>



      <View style={styles.conteudo}>

        <TouchableOpacity
          style={styles.button}
        >
          <FontAwesome5 name="book-reader" size={30} color="#1465bb" />

          <Text
            style={styles.buttonText}
          >
            Ambiente do Aluno
          </Text>

        </TouchableOpacity>
        <TouchableOpacity

          style={styles.button}
        >
          <Feather name="download" size={24} color="#1465bb" />

          <Text
            style={styles.buttonText}
          >
            Meus   Dowloads
          </Text>

        </TouchableOpacity>
        <TouchableOpacity

          style={styles.button}
        >
          <FontAwesome name="newspaper-o" size={30} color="#1465bb" />
          <Text
            style={styles.buttonText}
          >
            Notícias
          </Text>

        </TouchableOpacity>

      </View>



      <View style={styles.conteudo}>


        <TouchableOpacity
          style={styles.button}
        >
          <MaterialIcons name="event" size={30} color="#1465bb" />
          <Text
            style={styles.buttonText}
          >
            Eventos
          </Text>

        </TouchableOpacity>
        <TouchableOpacity

          style={styles.button}
        >
          <AntDesign name="tago" size={30} color="#1465bb" />
          <Text
            style={styles.buttonText}
          >
            Cupons
          </Text>

        </TouchableOpacity>
        <TouchableOpacity

          style={styles.button}
        >

          <AntDesign name="staro" size={30} color="#1465bb" />
          <Text
            style={styles.buttonText}
          >
            Avaliação
          </Text>

        </TouchableOpacity>

      </View>


      <View style={styles.conteudo}>

        <TouchableOpacity

          style={styles.button}
        >
          <FontAwesome5 name="comment" size={30} color='#1465bb' />
          <Text
            style={styles.buttonText}
          >

            Sobre
          </Text>

        </TouchableOpacity>
        <TouchableOpacity

          style={styles.button}
        >
          <Foundation name="clipboard-notes" size={30} color="#1465bb" />
          <Text
            style={styles.buttonText}
          >
            Questões
          </Text>

        </TouchableOpacity>
        <TouchableOpacity

          style={styles.button}
        >
          <FontAwesome name="sticky-note-o" size={30} color="#1465bb" />
          <Text
            style={styles.buttonText}
          >

            Gerenciador      de Estudos
          </Text>

        </TouchableOpacity>

      </View>


      <View style={styles.conteudo}>

        <TouchableOpacity

          style={styles.button}
        >

          <SimpleLineIcons name="earphones" size={30} color="#1465bb" />
          <Text
            style={styles.buttonText}
          >
            Audiobooks
          </Text>

        </TouchableOpacity>


      </View>


      <View style={styles.menu}>
        <TouchableOpacity

          style={styles.buttonM}
        >

          <Ionicons name="ios-menu-outline" size={24} color="#a0a0a0" />
          <Text
            style={styles.buttonTextM}
          >
            Menu
          </Text>

        </TouchableOpacity>
        <TouchableOpacity

          style={styles.buttonM}
        >

          <Ionicons name="home-outline" size={24} color="#1465bb" />
          <Text
            style={styles.buttonTextM}
          >
            Inicio
          </Text>

        </TouchableOpacity>
        <TouchableOpacity

          style={styles.buttonM}
        >

          <Ionicons name="search" size={24} color="#a0a0a0" />
          <Text
            style={styles.buttonTextM}
          >
            Acesso Ilimitado
          </Text>

        </TouchableOpacity>
        <TouchableOpacity

          style={styles.buttonM}
        >

          <Foundation name="play-circle" size={24} color="#a0a0a0" />
          <Text
            style={styles.buttonTextM}
          >
            Meus Cursos
          </Text>

        </TouchableOpacity>
        <TouchableOpacity

          style={styles.buttonM}
        >

          <Entypo name="download" size={25} color="#a0a0a0" />
          <Text
            style={styles.buttonTextM}
          >
            Downloads
          </Text>

        </TouchableOpacity>

      </View>


    </View>


  )
}
