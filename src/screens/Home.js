import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Card from '../components/Card';
import Search from '../components/Search';
import BotaoNovaPesquisa from '../components/BotãoNovaPesquisa';


const Home = (props) => {

  const goToNovaPesquisa = () => {
    props.navigation.navigate('') //Colocar nome da tela de nova pesquisa
  }

  const goToPesquisa = () => {
    props.navigation.navigate('') //Colocar nome da tela de pesquisa aqui
  }

  return (
    <View style={estilos.fundo}>
      <View style={estilos.containerPesquisas}>

        <Search/>

        <View style={estilos.containerCards}>
          <TouchableOpacity onPress={goToPesquisa} style={estilos.containerCards}>
            <Card 
            texto="SECOMP 2023"
            data="10/10/2023"
            icone="devices"
            corIcone="#7a3d43"
            />

            <Card 
            texto="UBUNTU 2022"
            data="05/06/2022"
            icone="groups"
            corIcone="#3b3b3b"
            />

            <Card 
            texto="MENINAS CPU"
            data="01/04/2022"
            icone="girl"
            corIcone="#f30016"
            />
          </TouchableOpacity>
        </View>

        <BotaoNovaPesquisa texto="NOVA PESQUISA" funcao={goToNovaPesquisa}/>

      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  fundo: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#372775',
    paddingVertical: 8
  },
  containerPesquisas: {
    display: 'flex',
    flex: 1,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerCards: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8
  }
})

export default Home;