export default {
  global: {
    componenteFormativo: 'Emprendimiento y negociación',
    descripcionCurso:
      'Un factor fundamental para el logro de objetivos en el emprendimiento, es la interacción con otras personas; como seres sociales, promover relaciones de confianza y generar espacios de negociación se convierte en una clave para la consecución de nuevos proyectos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Intereses y acuerdos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Mapa de negociación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estilos de negociación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<em>Tips</em> de negociación',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bosh, R. (16 de mayo de 2018). El método Harvard de negociación. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=qcO9FuM1nzA',
    },

    {
      referencia:
        'Fisher, R., Ury, W., y Patton, B. (2018). ¡Sí, de acuerdo!: cómo negociar sin ceder. Norma.',
    },
    {
      referencia:
        'Gutiérrez, R., Martínez, L., Gómez, M., García, G., y Caycedo, M. (2020). Cartilla de comportamiento emprendedor ¡camino al logro! Servicio Nacional de Aprendizaje SENA.',
    },

    {
      referencia:
        'Sánchez, J. A. (2013). Instrumentos y casos prácticos de negociación.',
      link:
        'http://e-spacio.uned.es/fez/eserv/bibliuned:500689/n9.5_Instrumentos_y_casos_practicos_de_negociacion.pdf',
    },

    {
      referencia: 'Suares, M. (2017). Negociación (capítulo 5 y 6). ',
      link:
        'http://proyectos.javerianacali.edu.co/cursos_virtuales/posgrado/maestria_asesoria_familiar/mediacion/modulo2/unidad2/CAP%205%20Y%206-Neg-2017.pdf',
    },

    {
      referencia:
        'Universidad Manuela Beltrán. (s. f.). Comunicación efectiva y negociación. ',
      link:
        'http://virtualnet2.umb.edu.co/cursos/TLPC003018/mod1/anexos/modulo2.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo',
      significado:
        'resultado del proceso de negociación y se espera que beneficie a las partes involucradas.',
    },
    {
      termino: 'Alternativas ',
      significado:
        'soluciones o partes de soluciones que es posible elegir y que benefician o no a las partes involucradas.',
    },
    {
      termino: 'Conflicto',
      significado:
        'situación que enfrenta a dos o más personas a partir de una discrepancia generada y que requiere de un proceso de negociación para ser resuelto.',
    },
    {
      termino: 'Intereses',
      significado:
        'motivaciones de las partes para llevar a cabo una negociación.',
    },
    {
      termino: 'Negociación',
      significado:
        'proceso que involucra dos o más individuos para el intercambio de intereses y opiniones con el fin de llegar a un acuerdo.',
    },
  ],
  complementario: [
    {
      texto:
        'Gutiérrez, R., Martínez, L., Gómez, M., García, G., y Caycedo, M. (2020). <em>Cartilla comportamiento emprendedor ¡camino al logro!</em> Servicio Nacional de Aprendizaje SENA.',
      tipo: 'Libro',
      descarga:
        '/downloads/Anexo_1_Cartilla_comportamiento_emprendedor_camino_al_logro.pdf',
    },
    {
      texto:
        'Bosh, R. (2018). <em>El método Harvard de negociación.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qcO9FuM1nzA',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Paula Gómez Franco',
        cargo: 'Coordinación Nacional de Emprendimiento',
        centro: 'Dirección de Empleo, Trabajo y Emprendimiento - SENA',
      },
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Esperanza Ortiz Russi',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Miguel Ricardo Rivera Lizcano',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, La Empresa y Los Servicios - Regional Huila',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Marcela González Gómez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres      ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
