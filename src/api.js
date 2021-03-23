export const http = {
	methods: {
		fetchJson (file, url = '/api/') {
				return new Promise((resolve, reject) => {
				const oReq = new XMLHttpRequest()
				oReq.addEventListener("load", evt => resolve(JSON.parse(evt.target.response)))
				oReq.addEventListener("error", evt => reject(`Requisição para ${file} falhou`))
				oReq.addEventListener("abort", evt => reject(`Requisição para ${file} foi cancelada`))
				oReq.open('GET', `${url}${file}`, true)
				oReq.send()
			})
		},
		consultaAbertaClass(status) {
			return status ? 'consultaAberta' : ''
		}
	}
}
