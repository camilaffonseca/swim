import React from 'react'

import { Image } from 'react-native'

import styles from './styles'

const separatorImage = require('../../images/separator.png')

const Separator = () => (
  <Image style={styles.separator} source={separatorImage} />
)

export default Separator
