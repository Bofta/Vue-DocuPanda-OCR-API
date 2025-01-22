// Compenente vue che gestice il file upload e fa una richiesta HTTP POST al API di DocuPanda
<template>

<v-file-input label="File input" @change="previewFiles" multiple> Upload PDF </v-file-input>
    
</template>

// Script Section
<script>
export default {
    name: 'documentPost',
    data: () => ({
            msg: 'Hello',
        }),
    methods: {
            // methods ( declari metodi lahne )
            previewFiles() {
                console.log(event.target.files);
            }
        },
    }

</script>



// Styling Section
<style>

.p1 {
    position: text-align;
    text-align: center;
}

</style>