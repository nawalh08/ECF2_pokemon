import { StyleSheet, Text, View } from 'react-native'
import {React , useEffect}  from 'react'
import {useSelector} from 'react-redux'

export default function screenHome() {
    const pokemon = useSelector(state=> state.pokemon.pokemons)
   
    useEffect(() => {
    
        dispatch(fetchPokeby(`https://pokeapi.co/api/v2/pokemon/`))

    }, [])  

  return (
    <View>
      {
        pokemon?.map((pokemon , index) => (
            <ScreenItem pokemon={pokemon} key={index}/>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({})