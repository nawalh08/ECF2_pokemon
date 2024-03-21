import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fetchPokebyID } from './pokeSlice';

import { useState, useEffect } from 'react';

export default function ScreenDetails() {

   
        const id = useParams()
        console.log(id);
        const [poke, setPoke] = useState()
        const dispatch = useDispatch()
        useEffect(() => {
    
            dispatch(fetchPokebyID(`https://pokeapi.co/api/v2/pokemon/${id.id}`)).then(response => setPoke(response.payload))
    
        }, [])  

  return (
    <View>
      <Text>ScreenDetails</Text>
    </View>
  )
}

const styles = StyleSheet.create({})