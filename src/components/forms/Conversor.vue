<template>
  <div class="conversor">
    <section>
      <h1 class="conversor__h1">Projetos de Intervenção Urbana - Área de preview</h1>
		  <h2 class="conversor__h2">Sistema desenvolvido para ter preview das atualizações locais.</h2>
    </section>
		<section>
      <input type="file" id="file" accept=".xlsx" @change="getFile"/>
      <label for="file" class="file">
        <span>Selecione o arquivo .xlsx</span>
      </label>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Conversor',
  methods: {
    getFile (event) {
      const selectedFile = event.target.files[0]
      var fileReader = new FileReader();
      fileReader.onload = function(event) {
        var data = event.target.result;

        var workbook = XLSX.read(data, {
          type: "binary"
        });
          
        workbook.SheetNames.forEach(sheet => {
          let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
          let jsonObject = JSON.stringify(rowObject);
          
          if (sheet !== 'documentos') {
            localStorage.setItem(sheet, jsonObject)
          }
        });
      }
      fileReader.readAsBinaryString(selectedFile);
      setTimeout(() => {
        this.$emit('load', true)
      }, 2000);
    }
  }
}
</script>
