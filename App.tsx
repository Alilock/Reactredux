import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from './screens/Categories'
import Favorites from './screens/Favorites'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FavoritesReducer } from './redux/FavoriteReducer'

const store = createStore(FavoritesReducer)
const App = () => {
  return (
    <Provider store={store}>
      <Categories />
      <Favorites />
    </Provider>


  )
}

export default App

const styles = StyleSheet.create({})