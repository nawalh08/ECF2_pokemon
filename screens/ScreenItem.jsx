import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchPokebyID } from './pokeSlice'

export default function ScreenItem(props) {
    const pokemon = props.pokemon
    const [poke , setChange] = useState()
    const dispatch = useDispatch({})
    const navigate = useNavigate()


    useEffect(()=> {
        dispatch(fetchPokebyID(pokemon.url)).then(Response=> setChange(Response.payload))
    })
  return (
    <View>
      <Text>ScreenItem</Text>
    </View>
  )
}

const styles = StyleSheet.create({})