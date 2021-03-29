import React from 'react'

import { View, Image, TextInput } from 'react-native'

import styles from './styles'

const searchIcon = require('../../images/search-icon.png')

const SearchBar = () => (
  <View style={styles.container}>
    <Image style={styles.searchIcon} source={searchIcon} />
    <TextInput placeholder='Try "Burgers"' placeholderTextColor={'#AFB0B3'} />
  </View>
)

export default SearchBar
