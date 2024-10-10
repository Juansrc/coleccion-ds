const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://Juansrc.github.io",
  "baseurl": "/coleccion-ds",
  "title": "Visualizando el Desastre",
  "subtitle": "Imágenes sobre la crisis climática en Colombia",
  "credits": "Por Juan Sebastián Ramírez Campos",
  "copyright": "Todos los derechos reservados, 2024",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "key word",
        "label": "Key word",
        "type": "text"
      },
      {
        "key": "año",
        "label": "Año",
        "type": "text"
      },
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "fuente",
        "label": "Fuente",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "key word",
      "año",
      "autor",
      "fuente"
    ]
  }
};
export default config;