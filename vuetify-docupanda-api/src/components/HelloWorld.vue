<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="80"
        />

        <v-img
          :src="require('../assets/pandalogo.webp')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Testing DocuPanda API | We finish When We Are Done
        </h1>


        <p class="subheading font-weight-regular">
          Proviamo ad implemetare il API di Docu Panda,
          <br> Ecco una guida per iniziare 
          <a
            href="https://docupanda.readme.io/reference/getting-started-with-docupanda"
          >Guida API DocuPanda</a>
        </p>
      </v-col>

      <v-col
        class="mb-3"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Why DocuPanda and how to use it
        </h2>

      </v-col>

      <v-col
        class="mb-3"
        cols="6"
      >
      
      </v-col>

      <v-col
        class="mb-3"
        cols="12"
      >

      
      
      <b> 
        DocuPanda is here to do one thing: convert complex documents into a consistent, structured payload that has the same fields and data types every time.
    </b>

      <br>

      The flow comprises of three parts:
      <br><br>

<p class="p1">1 - POST a document, which may include complex entities like tables, key-value pairs, checkboxes, signatures, etc. This triggers our AI processing, and returns a documentId. </p>
<br><br>
<p class="p1">2 - GET that document by ID, and receive a plain text representation of that document that is easily readable for both humans and AI readers. </p>
<br><br>
<p class="p1">3 - POST a standardize request, that gets a document ID, as well as a schema, and generates a structured JSON </p>
<br><br>

<p class="p1"> To start pleace upload a document PDF FILE :  </p>






        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>

<style>
  .shrink {
    transition: 0.2s;
  }

  .shrink:hover {
    transform: scale(0.9);
  }

</style>
