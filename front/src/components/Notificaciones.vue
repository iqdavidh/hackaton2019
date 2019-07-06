<template>

    <div class="notificaciones">

        <div style="display: flex">
            <img src="../logo_safe.svg" title="Logotipo" style="height: 100px"/>
            <div style="flex-grow: 1"></div>
            <div class="form-group" style="width: 150px">
                <input type="text"
                       class="form-control"
                       placeholder="Buscar en ubicación tipo de desastre"
                       v-model="textoBuscado">
            </div>

        </div>



        <div class="contenidoMain">

            <div style="display: flex" class="headerCointainer">
                <div @click="verPreferencias">Mis Preferencias</div>
                <div @click="removerFiltro">Ver Todas</div>
            </div>
            <div v-for="item in listaNFiltro" v-bind:key="item.id" class="itemTablaN">
                <div class="col1">

                </div>
                <div class="col2">

                </div>
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
		methods: {
			removerFiltro() {

			},
			verPreferencias() {

			}
		},
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
        display: flex;
        text-align: center;
    }

    .headerCointainer div{
        flex-grow: 1;
        color: #AAAAAA
    }

    .headerCointainer div .selected{
        color : #9D83E5
    }



    .itemTablaN {
        display: flex;
    }

</style>
