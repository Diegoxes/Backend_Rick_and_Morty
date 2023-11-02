const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;

  try {
    const apiRequest = await axios.get(`${URL}${id}`);
    const { data } = apiRequest;

    // Verifica si se obtuvo un personaje válido
    if (data && data.id !== undefined) {
      const { id, name, status, species, origin, image, gender } = data;

      const character = {
        id,
        status,
        name,
        species,
        origin,
        image,
        gender,
      };

      // Enviar el personaje como respuesta
      res.json(character);
    } else {
      // Manejar el caso en el que no se encontró el personaje
      res.status(404).json({ error: "Personaje no encontrado" });
    }
  } catch (error) {
    // Manejar errores de la solicitud a la API
    console.error("Error en la solicitud a la API:", error);
    res.status(500).json({ error: "Error en la solicitud a la API" });
  }
}





module.exports = getCharById;

/*
const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((resp) => {
        const { data } = resp;
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            location:data.location,
            status: data.status,
        };

        //res.status(200).json(character); otra opcion
        res.writeHead(200, { "Content-Type": "application/json" });
       return res.end(JSON.stringify(character));




    }).catch((error => {
        return res.status(404).contentType('text/plain').send(error.message);
            //aca puedo usar res.writeHead

    }))
}

*/