import axios from 'axios'

const getCurrentTemp = async (city) => {
  const resp = await axios.get(`https://api.apixu.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}`)
  
  return {
    name: resp.data.location.name,
    temperature: resp.data.current.temp_c
  }
}

export default { getCurrentTemp }