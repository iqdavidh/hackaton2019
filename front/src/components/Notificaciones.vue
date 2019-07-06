<template>

    <div class="notificaciones">

        <div style="text-align: center">
            <img src="/logo.png" title="Logotipo"/>
            <input type="text" style="float: right" v-model="textoBuscado">
        </div>

        <h3>Listado de notificaciones</h3>


        <div>

            <div style="display: flex" class="headerCointainer">
                <div>Mis Preferencias</div>
                <div>Ver Todas</div>
            </div>
            <div v-for="item in listaNFiltro" v-bind:key="item.id" class="itemTablaN">

            </div>
        </div>

    </div>


</template>

<script>

	export default {
		name: "Notificaciones",
		data() {
			return {
				listaN: [],
				listaNFiltro: [],
				textoBuscado: ''
			}
		},
		methods: {},
		mounted() {

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

    .headerCointainer {
        display: flex; text-align: center;
    }

    .itemTablaN{
        display: ;
    }

</style>
