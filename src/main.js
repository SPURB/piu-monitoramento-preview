import './styles.scss'
import Preloader from './components/Preloader.vue'
const Mapa = () => import('./components/Mapa.vue')
const Sumario = () => import('./components/Sumario.vue')
const Ficha = () => import('./components/Ficha.vue')
const Conversor = () => import('./components/forms/Conversor.vue')
import { http } from './api'
import { makeServer } from '../server/index'

makeServer()

new Vue({
	el: '#app',
	mixins: [ http ],
	components: {
		Preloader,
		Mapa,
		Sumario,
		Ficha,
		Conversor
	},
	data: {
		projectId: 0,
		isFocused: false,
		display: {
			mapa: true,
			sumario: true,
			ficha: false,
		},
		api: {
			fetching: false,
			message: '',
			error: false
		},
		projetos: [],
		tramitacao: [],
		show: false
	},
	computed: {
		appLoaded () { return this.projetos.length > 0 }
	},
	watch: {
		projectId (id) {
			if (id !== 0) {
				this.display.sumario = false
				this.display.ficha = true
				this.isFocused = true
			}
			else {
				this.display.mapa = true
				this.display.sumario = true
				this.display.ficha = false
				this.isFocused = false
			}
		}
	},
	methods: {
		receiveId(id){
			this.projectId = id
			if (id === 0){
				this.display.sumario = true
				this.display.ficha = false
				this.isFocused = false
			} 
		},
		getLoad () {
			const dataTables = ['projetos', 'tramitacao' ].map(table => this.fetchJson(table))

			Promise.all(dataTables)
				.then(res => {
					this.projetos = res[0]
					this.tramitacao = res[1]
				})
				.catch(err => {
					this.error.status = true
					this.error.message = err
				})
			this.show = true
		}
	}
})