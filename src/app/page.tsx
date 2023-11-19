import React from "react";

const page = () => {
  return (
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Carlos Hernández</div>
          </div>
        </figcaption>
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Very easy this was to integrate
          </h3> */}
          <p className="my-4">
            Gracias a la maestra Ana, mi vida cambió por completo. Ella me ayudó
            a recuperar a mi esposo con un poderoso amarre de amor que funcionó
            en solo una semana. Ahora somos más felices que nunca y estamos
            planeando renovar nuestros votos
          </p>
        </blockquote>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>José Martínez</div>
          </div>
        </figcaption>
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Solid foundation for any project
          </h3> */}
          <p className="my-4">
            La magia amorosa es el mejor sitio web que he encontrado para
            resolver mis problemas sentimentales. Me ofrecieron una atención
            personalizada, un trato profesional y unos resultados increíbles.
            Gracias a sus hechizos, encontré a mi alma gemela y ahora estamos
            viviendo juntos
          </p>
        </blockquote>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Ana Cruz</div>
          </div>
        </figcaption>
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Mindblowing workflow
          </h3> */}
          <p className="my-4">
            Si buscas un servicio de calidad, confianza y efectividad, no dudes
            en contactar con la hechicera del amor. Ella es una experta en todo
            tipo de magia blanca y roja, y sabe cómo hacer que el amor florezca
            en tu vida. Yo le pedí un hechizo para atraer a la persona que me
            gustaba y funcionó de maravilla
          </p>
        </blockquote>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Luis Gonzáles</div>
          </div>
        </figcaption>
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Efficient Collaborating
          </h3> */}
          <p className="my-4">
            No tengo palabras para expresar lo mucho que le debo a la chamana
            del amor. Ella me salvó de una depresión profunda causada por una
            ruptura dolorosa. Con su ayuda, pude sanar mi corazón, perdonar a mi
            ex y abrirme a nuevas oportunidades.
          </p>
        </blockquote>
      </figure>
    </div>
  );
};

export default page;
