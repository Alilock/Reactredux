import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Favorites = () => {
    const favorites: any = useSelector(state => state)
    const dispatch = useDispatch()
    const deleteFav = (item: string) => {
        dispatch({ type: "DELETE_FAV", payload: item })
    }
    return (
        <>
            <Text style={{ alignSelf: "center", fontSize: 40, fontWeight: "700" }}>Favorites</Text>

            <FlatList
                data={favorites}
                contentContainerStyle={{
                    marginTop: 50,
                    paddingHorizontal: 16,
                    gap: 8
                }}
                keyExtractor={(item) => item}
                renderItem={({ item }: any) => (
                    <TouchableOpacity

                        onPress={() => deleteFav(item)}

                        style={{
                            padding: 8,
                            borderRadius: 8,
                            backgroundColor: `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},1)`
                        }}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )}
            /></>
    )
}

export default Favorites

const styles = StyleSheet.create({})