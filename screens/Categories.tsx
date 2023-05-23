import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'

const Categories = () => {
    const categories: string[] = ["Electronics",
        " Clothing", "Home Kitchen", "Beauty & Care", "Sports & Out", "Toys & Games", "Music", "Food & Bever"]
    const dispatch = useDispatch()
    const addFav = (item: string) => {
        dispatch({ type: "ADD_FAV", payload: item })
    }
    return (
        <>
            <FlatList
                data={categories}
                contentContainerStyle={{
                    marginTop: 50,
                    paddingHorizontal: 16,
                    gap: 8
                }}
                keyExtractor={(item) => item}
                renderItem={({ item }: any) => (
                    <TouchableOpacity
                        onPress={() => addFav(item)}
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

export default Categories

const styles = StyleSheet.create({})