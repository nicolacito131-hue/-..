// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "...", time: 5 },
  { text: "Vamos a escribir nuestras iniciales juntas, eh", time: 16 },
  { text: "La verdad que tú me gustas", time: 18 },
  { text: "En invierno y en verano y", time: 20 },
  { text: "Si te hago la pregunta", time: 23 },
  { text: "El horóscopo dice que somos compatibles", time: 26 },
  { text: "Y eso que yo no creía", time: 27 },
  { text: "Pero habrá que hacerle caso", time: 29 },
  { text: "Y yo te aviso, como subas otra foto en la playa, te caso", time: 32 },
  { text: "Mami, dime si te gusto solo por si acaso", time: 36  },
  { text: "Que de tanto perder le perdí el miedo al fracaso y (je)", time: 43 },
  { text: "Estoy pensando si decirte que me gustas tanto", time: 46 },
  { text: "Que me gustas tanto", time: 51 },
  { text: "Que yo te quiero dormida", time: 53 },
  { text: "En la cama con mi hoodie", time: 56 },
  { text: "Dime si te gustaría", time: 59 },
  { text: "Quiero ser todos tus hobbies, mami", time: 61 },
  { text: "Solo una cosa te pediría", time: 64 },
  { text: "Que si te doy mi corazón", time: 66 },
  { text: "Me lo cuides todos los días", time: 70 },
  { text: "Necesito algo que no sea temporal", time: 73 },
  { text: "Alguien para presumir cuando te lleve a comer", time: 75 },
  { text: "Con mi familia en Navidad (je)", time: 78 },
  { text: "No sé si me entiendes", time: 80 },
  { text: "Que yo sé que tienes más pretendientes", time: 82 },
  { text: "Pero no tienen nada que ofrecerte", time: 84 },
  { text: "Quizá alguno te compre ropa de marca", time: 86 },
  { text: "Pero tú prefieres ponerte la mía por suerte", time: 89 },
  { text: "Y cada vez que coinciden las miradas", time: 92 },
  { text: "Pienso en si tú sientes lo mismo", time: 95 },
  { text: "Pero tampoco me dices nada", time: 99 },
  { text: "Y cuando te vas siempre me giro por si esta", time: 106 },
  { text: "Vez me decido Que yo te quiero dormida", time: 110 },
  { text: "En la cama con mi hoodie Dime si te gustaría", time: 115 },
  { text: "Quiero ser todos tus hobbies, mami", time: 119 },
  { text: "Solo una cosa te pediría que si te doy mi corazón", time: 125 },
  { text: "Me lo cuides todos los días", time: 126 },
  { text: "solo imagina", time: 131 },
  { text: "Mami, dime si te gusto", time: 134 },
  { text: "Para ser tú y yo y ya", time: 135 },
  { text: "Tú y yo y nadie más", time: 140 },
  { text: "Hay cosas Que no te dije", time: 143 },
  { text: "Aquella noche Pero creo que", time: 145 },
  { text: "En mi tablero falta reina, no tengo castillo", time: 148 },
  { text: "Pero puedes quedarte en mi casa cuando quieras", time: 151 },
  { text: "Solo júrame que tú no serás pasajera", time: 153 },
  { text: "Y antes de que te fueras", time: 157 },
  { text: "Te dije tú solo confía", time: 158 },
  { text: "Yo también tengo miedo", time: 161 },
  { text: "De estrellarme si acelero", time: 163 },
  { text: "Pero contigo no freno", time: 164 },
  { text: "Que yo te quiero dormida", time: 167 },
  { text: "En la cama con mi hoodie", time: 169 },
  { text: "Dime si te gustaría", time: 173 },
  { text: "Quiero ser todos tus hobbies, mami", time: 176 },
  { text: "Solo una cosa te pediría", time: 181 },
  { text: "Que si te doy mi corazón", time: 183 },
  { text: "Me lo cuides todos los días", time: 185 },
  { text: "Es que las palabras no vienen easy", time: 190 },
  { text: "Pa' ti, Quiero saber", time: 197 },
  { text: "Si tú piensas en mí, ¿Cómo te hago ver que esto no es easy?", time: 207 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);