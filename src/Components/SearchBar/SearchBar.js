import React from 'react'
import { View, Image, TextInput } from 'react-native'

const searchIcon = require('#/images/search-icon.png')
import colors from '#/constants/colors'
import styles from './styles'

const SearchBar = () => (
  <View style={styles.container}>
    <Image style={styles.searchIcon} source={searchIcon} />
    <TextInput
      placeholder='Try "Burgers"'
      placeholderTextColor={colors.gray}
      style={styles.textInput}
    />
  </View>
)

export default SearchBar
