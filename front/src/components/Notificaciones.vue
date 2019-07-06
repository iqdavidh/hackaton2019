<template>

    <div class="notificaciones">
        <h3>Listado de notificaciones</h3>
       
    </div>


</template>

<script>

    export default {
        name: "Notificaciones",
        data() {
            return {
                notificaciones: [],
                notificacionesConFiltro:[],
                textoBuscado:''
            }
        },
        methods:{

        },
        mounted(){

            //
            // fetch('http://localhost:3000/movies')
            //     .then((response)=>{
            //         return response.json()
            //     })
            //     .then((json) =>{
            //         this.notificaciones =json;
            //     })
            //     .catch(error=>{
            //         alert(error);
            //     })


        }
    }

</script>

<style scoped>


</style>
