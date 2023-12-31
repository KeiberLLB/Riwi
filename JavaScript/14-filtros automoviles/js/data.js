const autos = [
  {
    marca: "Ford",
    modelo: "GT",
    year: 2006,
    precio: 400000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
    imagen:
      "https://www.ilusso.com/imagetag/2523/main/l/Used-2006-Ford-GT-1699386486.jpg",
  },
  {
    marca: "Chevrolet",
    modelo: "Corvette Stingray",
    year: 2022,
    precio: 103000,
    puertas: 2,
    color: "Blanco",
    transmision: "automatico",
    imagen:
      "https://www.ilusso.com/imagetag/2122/main/l/Used-2022-Chevrolet-Corvette-Stingray-1691784221.jpg",
  },
  {
    marca: "Ferrari",
    modelo: "Enzo",
    year: 2003,
    precio: 3800000,
    puertas: 2,
    color: "Rojo",
    transmision: "automatico",
    imagen:
      "https://cdn.motor1.com/images/mgl/KLgJq/s1/2003-ferrari-enzo-sells-for-3.8-million.webp",
  },
  {
    marca: "Nissan",
    modelo: "R34 Skyline",
    year: 1998,
    precio: 78000,
    puertas: 2,
    color: "Azul",
    transmision: "manual",
    imagen:
      "https://www.motorbiscuit.com/wp-content/uploads/2023/05/1999-skyline-R34.webp",
  },
  {
    marca: "Dodge",
    modelo: "Viper SRT 10",
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: "Azul",
    transmision: "automatico",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/SRT_Viper_GTS_blue-2.jpg/1920px-SRT_Viper_GTS_blue-2.jpg",
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2020,
    precio: 30000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_823278-MCO72247902172_102023-O.webp",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2020,
    precio: 40000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
    imagen:
      "https://images.clickdealer.co.uk/vehicles/5273/5273773/large1/122005278.jpg",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: "Blanco",
    transmision: "automatico",
    imagen:
      "https://acnews.blob.core.windows.net/imggallery/800x600/GAZ_dd8de54ad2354da4b28945a66771fdd8.jpg",
  },
  {
    marca: "Audi",
    modelo: "A6",
    year: 2020,
    precio: 35000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
    imagen:
      "https://media.ed.edmunds-media.com/audi/a6/2020/oem/2020_audi_a6_sedan_prestige-55-tfsi-quattro_fq_oem_1_1600.jpg",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: "Gris",
    transmision: "automatico",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2020_BMW_530d_M_Sport_facelift.jpg/1200px-2020_BMW_530d_M_Sport_facelift.jpg",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
    imagen:
      "https://acelerando.com.co/wp-content/uploads/2022/03/MBCLASEC-8.jpg",
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: "Azul",
    transmision: "manual",
    imagen:
      "https://www.elcarrocolombiano.com/wp-content/uploads/2019/05/20190504-CHEVROLET-CAMARO-2020-AA.jpg",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: "Blanco",
    transmision: "manual",
    imagen:
      "https://www.elcarrocolombiano.com/wp-content/uploads/2019/06/20190628-FORD-MUSTANG-SHELBY-GT350-2019-COLOMBIA-PRECIO-CARACTERISTICAS-01.jpg",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2020,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
    imagen:
      "https://img.remediosdigitales.com/78a38b/1366_2000-4/1366_2000.jpg",
  },
  {
    marca: "Audi",
    modelo: "A3",
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
    imagen:
      "https://www.superwagen.es/uploads/311823a5-0c16-43ab-8e93-1ba814f09248/vehiculos/imagenes/a2cda088-ceb8-478d-8bdd-c4f9739dc09c-original.jpg?1669912143",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2020,
    precio: 25000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Dodge_Charger_Hirschaid-20220709-RM-113717.jpg",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
    imagen:
      "https://s1.eestatic.com/2021/06/21/motor/590704308_192719632_1706x960.jpg",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
    imagen:
      "https://img.remediosdigitales.com/d959de/bmw_530d_prueba_16/840_560.jpg",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
    imagen:
      "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/cab06a4333a41a50778fd4f37f0d12d0517fdd80/photos/3Ol7loyv-q273zv76p-.jpg?t=163348434456",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: "Azul",
    transmision: "automatico",
    imagen:
      "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2014/04/334255-dodge-challenger-2015.jpg",
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2023,
    precio: 50000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
    imagen:
      "https://www.autofacil.es/wp-content/uploads/2021/10/BMW-Serie-3-Mzansi-Edition-1-e1634453062440.jpg",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2022,
    precio: 80000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
    imagen:
      "https://s03.s3c.es/imag/_v0/1200x655/5/1/e/P90508151_highRes_bmw-5-series-g60-sta.jpg",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2021,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
    imagen:
      "https://autosdeprimera.com/wp-content/uploads/2022/02/mercedes-benz-c-200-amg-line-w206-a.jpg",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
    imagen:
      "https://acnews.blob.core.windows.net/imggallery/800x600/GAZ_60031242f4d5492cbc0fb856a2f5c98b.jpg",
  },
];
