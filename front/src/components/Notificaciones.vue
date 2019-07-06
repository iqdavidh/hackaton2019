<template>

    <div class="notificaciones">

        <div style="display: flex; margin-bottom: 10px">
            <img src="../logo_safe.svg" title="Logotipo" style="height: 100px"/>
            <div style="flex-grow: 1"></div>
            <div class="form-group" style="width: 250px">
                <input type="text"
                       class="form-control"
                       placeholder="Buscar ubicación / desastre"
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



        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
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
