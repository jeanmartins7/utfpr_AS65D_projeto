import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { useDispatch } from 'react-redux'
import { getFirestore, collection, query, onSnapshot } from 'firebase/firestore'
import { reducerSetPesquisa } from '../redux/pesquisaSlice'
import app from '../config/firebase'

// COMPONENTS
import Card from '../components/Card';
import Search from '../components/Search';
import ButtonNovaPesquisa from '../components/ButtonNovaPesquisa';

const Home = (props) => {
  const db = getFirestore(app)
  const pesquisaCollection = collection(db, "pesquisas")

  const [pesquisas, setPesquisas] = useState([]);

  const dispatch = useDispatch()

  useEffect(() => {
    const q = query(pesquisaCollection)

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const pesquisasLista = []
      snapshot.forEach((doc) => {
        pesquisasLista.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setPesquisas(pesquisasLista)
    })
  }, [])

  const goToNovaPesquisa = () => {
    props.navigation.navigate("NovaPesquisa")
  }

  const goToPesquisa = (pesquisa) => {
    dispatch(reducerSetPesquisa({ id: pesquisa.id, txtName: pesquisa.txtName, txtDate: pesquisa.txtDate, image: pesquisa.image }))
    props.navigation.navigate("AcoesPesquisa")
  }

  const renderPesquisaCard = ({ item }) => (
      <TouchableOpacity onPress={() => goToPesquisa(item)} style={estilos.containerCards}>
        <Card texto={item.txtName} data={item.txtDate} imagem={{ uri: item.image.uri }} />
      </TouchableOpacity>
  );

  return (
    <View style={estilos.fundo}>
      <View style={estilos.containerPesquisas}>

        <Search />

        <View style={estilos.containerCards}>
          <FlatList
            horizontal={true}
            data={pesquisas}
            keyExtractor={(item) => item.id}
            renderItem={renderPesquisaCard}
            contentContainerStyle={estilos.listaCards}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          />
        </View>

        <ButtonNovaPesquisa texto="NOVA PESQUISA" funcao={goToNovaPesquisa} />

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