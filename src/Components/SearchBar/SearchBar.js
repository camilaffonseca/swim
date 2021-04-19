import React from 'react'
import { View, Image, TextInput } from 'react-native'

const searchIcon = require('../../images/search-icon.png')
import { gray } from '../../modules/colors'
import styles from './styles'

const SearchBar = () => (
  <View style={styles.container}>
    <Image style={styles.searchIcon} source={searchIcon} />
    <TextInput
      placeholder='Try "Burgers"'
      placeholderTextColor={gray}
      style={styles.textInput}
    />
  </View>
)

export default SearchBar
