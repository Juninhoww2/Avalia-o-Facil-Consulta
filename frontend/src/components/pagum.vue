<template>
  <div class="card mb-3" >
   <div class="row g-0"> 
    <div class="col-md">   
      <h1 class="msg">{{ msg }}</h1>
      <h3 class="h3"> Dados do profissional</h3>
          <MDBRow >
            <MDBRow tag="form" class="g-3 needs-validation" novalidate @submit.prevent="checkForm">
              <MDBCol md="7">
                Nome completo*
                <MDBInput
                  v-model="input1"
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
                    v-model="input3"
                    required
                  >
                  </MDBInput>
                </MDBCol>
              </MBRow>
              <MBRow> 
                Numero de celular*
                <MDBCol md="4">
                  <MDBInput
                    placeholder="(00) 0 0000-0000"
                    v-model="input4"
                    invalidFeedback="Por favor digite um numero valido"
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
                    v-model="input5"
                    placeholder="Selecione"
                    required
                  />
                </MDBCol>
                <MDBCol md="4">
                  Cidade*
                  <MDBInput
                    v-model="input6"
                    placeholder="Selecione"
                    invalidFeedback="Selecione uma Cidade"
                    validFeedback="Ótimo!"
                    required
                  />
                </MDBCol>
                <MDBCol col="12">
                 <MDBProgress class="mdbprogress" >
                     <MDBProgressBar :value="50" />
                  </MDBProgress>

                  <MDBBtn color="secondary"  class="btn btn-rounded" type="button"><p class="p-tag">PRÓXIMO</p></MDBBtn>
                </MDBCol>
            </MDBRow>
          </MDBRow>
     </div>
       <div class="col-md">
        <img src="../assets/desktop-pagina-1.png" class="img-fluid" 
        />
       </div>
   </div>
  </div>
  <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="col-md">
          <img
            src="../assets/desktop-pagina-1.png"
            alt="..."
            class="img-fluid"
          />
        </div>

      </div>
  </div>
</template>

<script>
  import { MDBCol, MDBRow, MDBInput,  MDBBtn, MDBProgress, MDBProgressBar } from "mdb-vue-ui-kit";
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
      MDBBtn,
      MDBProgress,
      MDBProgressBar
  },
  setup() {
    const checkForm = e => {
      e.target.classList.add("was-validated")
    };
    const input1 = ref("");
    const input2 = ref("");
    const input3 = ref("");
    const input4 = ref("");
    const input5 = ref("");
    const input6 = ref("");
    return {
        input1,
        input2,
        input3,
        input4,
        input5,
        input6,
        checkForm
    };
  }
}
</script>

<style scoped>
.msg {
  color: #483698;
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
