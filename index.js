import axios from 'axios'

export async function mypackage (options) {
  const data = await axios.get(options.endpoint)

  console.log(data)
}
