import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

// COMPONENTS
import Card from '../components/Card';
import Search from '../components/Search';
import ButtonNovaPesquisa from '../components/ButtonNovaPesquisa';

const Home = (props) => {

  const goToNovaPesquisa = () => {
    props.navigation.navigate("NovaPesquisa")
  }

  const goToPesquisa = () => {
    props.navigation.navigate("AcoesPesquisa")
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
            imagem={require('../../assets/images/secomp2023.png')}
            />

            <Card 
            texto="UBUNTU 2022"
            data="05/06/2022"
            imagem={require('../../assets/images/ubuntu2022.png')}
            />

            <Card 
            texto="MENINAS CPU"
            data="01/04/2022"
            imagem={require('../../assets/images/meninascpu.png')}
            />
          </TouchableOpacity>
        </View>

        <ButtonNovaPesquisa texto="NOVA PESQUISA" funcao={goToNovaPesquisa}/>

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