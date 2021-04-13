import React from 'react'

import { View, Image, TextInput } from 'react-native'

import styles from './styles'

import { gray } from '../../modules/colors'

const searchIcon = require('../../images/search-icon.png')

const SearchBar = () => (
  <View style={styles.container}>
    <Image style={styles.searchIcon} source={searchIcon} />
    <TextInput placeholder='Try "Burgers"' placeholderTextColor={gray} style={styles.textInput} />
  </View>
)

export default SearchBar
