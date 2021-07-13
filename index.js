import axios from 'axios'

function showComponent (data) {
  const dialog = `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="w-96 h-64 bg-white shadow overflow-y-auto p-4">
        <h1>Hello World!</h1>
        <h1 class="break-words">${JSON.stringify(data)}</h1>
      </div>
    </div>
  `

  document.body.insertAdjacentHTML('afterend', dialog)
}

export async function mypackage (options) {
  const { data } = await axios.get(options.endpoint)

  console.log(data)
  showComponent(data)
}
