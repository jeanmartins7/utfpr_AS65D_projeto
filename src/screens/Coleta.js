import React from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { db } from '../config/firebase';
import { doc, updateDoc, increment } from "firebase/firestore";
import { useSelector } from "react-redux";

const Coleta = (props) => {

  const id = useSelector((state) => state.pesquisa.id);
  const nome = useSelector((state) => state.pesquisa.txtName);

  const registrarVoto = async (id, tipo) => {
    if (!id || !tipo) return;
  
    const docRef = doc(db, "pesquisas", id);
  
    try {
      await updateDoc(docRef, {
        [`coleta.${tipo}`]: increment(1),
      });
      console.log(`Voto registrado: ${tipo}`);
      props.navigation.navigate('AgradecPesquisa')
    } catch (error) {
      console.error("Erro ao registrar voto:", error);
    }
  };

  return(
    <View style={estilos.fundo}>
      <Text style={estilos.textoNome}>O que você achou do {nome}?</Text>
      <View style={estilos.containerColetas}>
        <TouchableOpacity style={estilos.containerCards} onPress={() => registrarVoto(id, "pessimo")}>
          <Ionicons name="sad-outline" size={100} color="#D71616" />
            <Text style={estilos.textoColeta}>Péssimo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.containerCards} onPress={() => registrarVoto(id, "ruim")}>
          <Ionicons name="sad" size={100} color="#FF360A" />
          <Text style={estilos.textoColeta}>Ruim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.containerCards} onPress={() => registrarVoto(id, "neutro")}>
          <Ionicons name="help-circle-outline" size={100} color="#FFC632" />
          <Text style={estilos.textoColeta}>Neutro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.containerCards} onPress={() => registrarVoto(id, "bom")}>
          <Ionicons name="happy-outline" size={100} color="#37BD6D" />
          <Text style={estilos.textoColeta}>Bom</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.containerCards} onPress={() => registrarVoto(id, "excelente")}>
          <Ionicons name="happy" size={100} color="#25BC22" />
          <Text style={estilos.textoColeta}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
    fundo: {
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent:'space-around',
      flexDirection: 'column',
      backgroundColor: '#372775',
      paddingVertical: 50
    },
    textoNome: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 26,
        textAlign: 'center',
    },
    containerColetas: {
      display: 'flex',
      flex: 1,
      width: '90%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection:'row'
    },
    containerCards: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      paddingVertical: 8
    },
    textoColeta: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 18,
        textAlign: 'center',
    },
  })


export default Coleta;