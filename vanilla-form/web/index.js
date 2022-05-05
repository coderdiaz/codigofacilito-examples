// Obtenemos el elemento `form` a través del `id` dentro del DOM
const form = document.getElementById('form')

// Añadimos un `event listener` para escuchar cuando un form haya emitido un evento
// de submit por parte del usuario.
form.addEventListener('submit', function (e) {
  // Deshabilitamos el comportamiento por defecto
  e.preventDefault()
  // Con `form.elements` vamos a poder acceder a la información que contienen
  // cada uno de los elementos del formulario, ej. `name`, `last_name`

  // podemos acceder a través de el indice que corresponda a los elementos que tenemos
  // dentro del formulario
  const name = form.elements[0]

  // O hacerlo a través de la propiedad `name` o `id` que les hayamos asignado
  const last_name = form.elements['name']

  // Mostramos la información contenido dentro de cada uno de los elementos usando la
  // propiedad `value`
  console.log(
    'On submit event from Form',
    name.value,
    last_name.value,
  )

  // Y Listo! Aquí tienes tu formulario funcionando.
  // Muy similar al ejercicio que hicimos en React, ¿verdad? ¿qué opinas?
  // ¿Comó podríamos obtener la información de los elementos en el formulario de React?
  // Comparte tu respuesta, en el canal de Telegram.
})