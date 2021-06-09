import { AppState } from '../AppState'
import { House } from '../Models/House'
import { api } from './AxiosService'

class HousesService {
  async getHouses() {
    const res = await api.get('api/houses')
    AppState.houses = await res.data.map(h => new House(h))
  }
}

export const housesService = new HousesService()
