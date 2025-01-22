<script>
export default {
    name: 'documentPost',
    data: () => ({
            // data ( declari variabili  lahne )
            msg
            
        }),
    methods: {
            // methods ( declari metodi lahne )
            postPDF() {
                console.log("I am in the documentPost.vue file");
            }
        },
    }

    const msg = "Hello";

</script>


<template>



<v-btn icon="$vuetify"
  color="blue"
  class="white--text"
  @click="postPDF"
> POST PDF </v-btn>


    
</template>

<style scoped>

#button_mestwi {
    position: left;
  }

</style>