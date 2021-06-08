import axios from 'axios'
import { AppState } from '../AppState'

class PlanetService {
  async findPlanet(query) {
    console.log(query)
    // debugger
    const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DJcx9TglnUIDLSUpPTVBxod2srReoaBuHHCUW5YC&date=' + query)
    AppState.planet = res.data
    console.log(res.data)
  }
}

export const planetService = new PlanetService()
