<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 A continuación, se presenta un video con una breve introducción del presente componente formativo
    .bbg1.mb-5.px_5.mx-auto
      .col-lg-10.mx-auto(data-aos='fade-right')
        figure.p-4
          img(src='@/assets/curso/if1.png' alt='Personas trabajando')
        p Un factor fundamental para el logro de objetivos en el emprendimiento, es la interacción favorable con otras personas como seres sociales que somos, es así que al promover relaciones de confianza, estas puedan llegar a generar espacios de negociación exitosos que serán clave para la consecución del crecimiento del emprendimiento o nacimiento de  nuevos proyectos.
    p En esta unidad se conocerá el concepto de negociación, su importancia y aplicabilidad en diferentes contextos para la resolución de conflictos, además de reconocer cómo la interacción con los otros, dentro de un proceso de negociación, puede afectar positiva o negativamente el logro de sus objetivos. 
    p.mb-5 También se identificarán los elementos de una negociación y por qué resultan ser factores clave dentro del proceso, lo que permite llevar de forma efectiva una negociación y generar habilidades como autoconfianza, adaptación, fijación de metas, entre otras, las que posibilitan el logro de los objetivos propuestos; de esta manera, se reconocerá la importancia de la negociación en el emprendimiento teniendo en cuenta los intereses, acuerdos y técnicas.
    .row.align-items-center
      .col-lg-5
        img(src='@/assets/curso/if2.png' alt='Libreta en blanco')
      .col-lg-7
        .cajon.color-acento-contenido.p-5
          h4 Recomendación:
          p.mb-0 Para un mejor aprendizaje, se recomienda responder a las preguntas y ejercicios de reflexión propuestos en el desarrollo de los contenidos, para ello puede disponer de una bitácora física (cuaderno) o digital. Este será el diario de viaje (la bitácora no constituye una actividad evaluativa).
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
