import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = 'api'

      this.get('/BASE_Limite_MSP.kml', () => {
        return '../src/assets/kml/BASE_Limite_MSP.kml'
      })

      this.get('/0_PIUs_gestao_urbana.kml', () => {
        return '../src/assets/kml/0_PIUs_gestao_urbana.kml'
      })

      this.get('/1_PIUs_gestao_urbana_1RB.kml', () => {
        return '../src/assets/kml/1_PIUs_gestao_urbana_1RB.kml'
      })

      this.get('/2_PIUs_gestao_urbana_2VL.kml', () => {
        return '../src/assets/kml/2_PIUs_gestao_urbana_2VL.kml'
      })

      this.get('/3_PIUs_gestao_urbana_3ACT.kml', () => {
        return '../src/assets/kml/3_PIUs_gestao_urbana_3ACT.kml'
      })

      this.get('/4_PIUs_gestao_urbana_4NESP.kml', () => {
        return '../src/assets/kml/4_PIUs_gestao_urbana_4NESP.kml'
      })

      this.get('/5_PIUs_gestao_urbana_5ACJ.kml', () => {
        return '../src/assets/kml/5_PIUs_gestao_urbana_5ACJ.kml'
      })

      this.get('/7_PIUs_gestao_urbana_7ANH.kml', () => {
        return '../src/assets/kml/7_PIUs_gestao_urbana_7ANH.kml'
      })
      
      this.get('/8_PIUs_gestao_urbana_8PAC.kml', () => {
        return '../src/assets/kml/8_PIUs_gestao_urbana_8PAC.kml'
      })
      
      this.get('/9_PIUs_gestao_urbana_9VO.kml', () => {
        return '../src/assets/kml/9_PIUs_gestao_urbana_9VO.kml'
      })
      
      this.get('/10_PIUs_gestao_urbana_10NU.kml', () => {
        return '../src/assets/kml/10_PIUs_gestao_urbana_10NU.kml'
      })
      
      this.get('/11_PIUs_gestao_urbana_11AC.kml', () => {
        return '../src/assets/kml/11_PIUs_gestao_urbana_11AC.kml'
      })
      
      this.get('/12_PIUs_gestao_urbana_12ACP.kml', () => {
        return '../src/assets/kml/12_PIUs_gestao_urbana_12ACP.kml'
      })
      
      this.get('/16_PIUs_gestao_urbana_16BT.kml', () => {
        return '../src/assets/kml/16_PIUs_gestao_urbana_16BT.kml'
      })
      
      this.get('/17_PIUs_gestao_urbana_17CAP.kml', () => {
        return '../src/assets/kml/17_PIUs_gestao_urbana_17CAP.kml'
      })
      
      this.get('/18_PIUs_gestao_urbana_18CL', () => {
        return '../src/assets/kml/18_PIUs_gestao_urbana_18CL.kml'
      })
      this.get('api/18_PIUs_gestao_urbana_18CL', () => {
        return '../src/assets/kml/18_PIUs_gestao_urbana_18CL.kml'
      })

      this.get('/19_PIUs_gestao_urbana_19PI.kml', () => {
        return '../src/assets/kml/19_PIUs_gestao_urbana_19PI.kml'
      })
      
      this.get('/20_PIU_Minhocao.kml', () => {
        return '../src/assets/kml/20_PIU_Minhocao.kml'
      })
      
      this.get('/21_PIU_Jockey_Club.kml', () => {
        return '../src/assets/kml/21_PIU_Jockey_Club.kml'
      })
      
      this.get('/22_Ginasio_do_Ibirapuera.kml', () => {
        return '../src/assets/kml/22_Ginasio_do_Ibirapuera.kml'
      })

      this.get('projetos', () => {
        return localStorage.getItem('projetos')
      })

      this.get('origens', () => {
        return localStorage.getItem('origens')
      })

      this.get('proponentes', () => {
        return localStorage.getItem('proponentes')
      })

      this.get('fontes', () => {
        return localStorage.getItem('fontes')
      })

      this.get('eventos', () => {
        return localStorage.getItem('eventos')
      })

      this.get('grupos', () => {
        return localStorage.getItem('grupos')
      })

      this.get('tramitacao', () => {
        return localStorage.getItem('tramitacao')
      })

      this.get('data_tramitacao', () => {
        return localStorage.getItem('data_tramitacao')
      })

      this.get('arquivos_tramitacao', () => {
        return localStorage.getItem('arquivos_tramitacao')
      })
    }
  })

  return server
}