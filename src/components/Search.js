import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const updateSearch= (query) => {
      setSearchQuery(query);
    }
  
    return (
      <Searchbar
        style={estilos.barraDePesquisa}
        iconColor = 'gray'
        placeholder="Insira o termo de busca…"
        placeholderTextColor='gray'
        inputStyle = {{ 
          fontFamily: 'AveriaLibre-Regular',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 23.87,
          minHeight: 0,
          paddingVertical: 0,
          textAlignVertical: 'center'
        }}
        onChangeText={updateSearch}
        value={searchQuery}
      />
    );
  };

  const estilos = StyleSheet.create({
    barraDePesquisa: {
      backgroundColor: '#FFFFFF',
      borderRadius: 0,
      height: 36,

    },
    placeholder: {
        fontFamily: 'AveriaLibre-Regular'
    }
  })
  
  export default Search;