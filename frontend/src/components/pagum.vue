<template>
  <div class="app">
    <div class="card mb-3">
    <div class="row g-0"> 
      <div class="col-md">   
        <h1 class="msg">{{ msg }}</h1>
        <h3 class="h3"> Dados do profissional</h3>
            <MDBRow class="div">
              <MDBRow tag="form" class="g-3 needs-validation" novalidate @submit.prevent="checkForms">
                <MDBCol md="7">
                  Nome completo*
                  <MDBInput
                    v-model="input11"
                    placeholder="Digite seu nome completo"
                    invalidFeedback="Por favor digite seu nome completo"
                    validFeedback="Ótimo!"
                    required
                  />
                </MDBCol>
                <MBRow >
                  <MDBCol md="4">
                    CPF*
                    <MDBInput
                      inputGroup
                      aria-describedby="basic-addon1"
                      type="number"
                      invalidFeedback="Por favor digite um CPF"
                      validFeedback="Ótimo!"
                      placeholder="Digite um CPF"
                      v-model="input10"
                      required
                    />
                  </MDBCol>
                </MBRow>
                <MBRow> 
                  <MDBCol md="4">
                    Numero de celular*
                    <MDBInput
                      placeholder="(00) 0 0000-0000"
                      type="number"
                      v-model="input9"
                      invalidFeedback="Por favor digite um numero"
                      validFeedback="Ótimo!"
                      required  
                    />
                  </MDBCol>
                </MBRow>
                  <MDBCol md="4">
                    Estado*
                    <MDBInput
                      invalidFeedback="Selecione um Estado"
                      validFeedback="Ótimo!"
                      type="text"
                      v-model="input8"
                      placeholder="Selecione"
                      required
                    />
                  </MDBCol>
                  <MDBCol md="4">
                    Cidade*
                    <MDBInput
                      v-model="input7"
                      placeholder="Selecione"
                      type="text"
                      invalidFeedback="Selecione uma Cidade"
                      validFeedback="Ótimo!"
                      required
                    />
                  </MDBCol>
                  <MDBCol col="12">
                    <MDBBtn color="secondary"  class="btn btn-rounded" type="submit">PRÓXIMO</MDBBtn>
                  </MDBCol>
              </MDBRow>
            </MDBRow>
      </div>
        <div class="col">
          <img src="../assets/desktop-pagina-1.png" class="img-fluid" 
          />
        </div>
    </div>
    </div>  
  </div>
</template>

<script>
  import { MDBCol, MDBRow, MDBInput, MDBBtn } from "mdb-vue-ui-kit";
  import { ref } from "vue";

export default {
  name: 'pagum',
  props: {
    msg: String
  },
   components: {
      MDBCol,
      MDBRow,
      MDBInput,
      MDBBtn
  },
  data: () => ({
    country: ''
  }),
  setup() {
    const checkForms = e => {
      e.target.classList.add("was-validated")
    };
    const input7 = ref("");
    const input8 = ref("");
    const input9 = ref("");
    const checkbox2 = ref(false);
    const input10 = ref("");
    const input11 = ref('');
    return {
        input7,
        input8,
        input9,
        input10,
        input11,
        checkbox2,
        checkForms
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap'); 
.app {
  background-color: #FFE766;
}

.h3 {
  margin-left: 30px;
}

.div {
  margin-left: 30px;
}

.col {
  margin-right: 50px;
}

.msg {
  margin-left: 30px;
  color: #483698;
  font-family: 'Comfortaa', cursive;
}
.btn-rounded {

 color: #483698;

 width: 370px;
 height: 40px;
}
.p-tag {
  color: whitesmoke;
}

.mdbprogress {
  width: 400px;
  height: 40px;
}
progress-bar {
  width: 30px;
}
.h3 {
  margin-top: 30px;
}
</style>
