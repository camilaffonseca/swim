import React from 'react'
import { Image } from 'react-native'

const separatorImage = require('#/images/separator.png')
import styles from './styles'

const Separator = () => (
  <Image style={styles.separator} source={separatorImage} />
)

export default Separator
