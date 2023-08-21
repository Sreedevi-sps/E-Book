import { View, Text } from 'react-native'
import React from 'react'
import ReaderScreen from './src/Screens/AfterLogin/ReaderScreen'
import { Search } from './src/Screens/AfterLogin/Search'
import BookList from './src/Screens/AfterLogin/BookList'

const App = () => {
  return (
    <View>
      {/* <Search /> */}
    <ReaderScreen />
    {/* <BookList /> */}
    </View>
  )
}

export default App