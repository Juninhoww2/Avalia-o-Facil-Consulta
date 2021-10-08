<template>
  <div class="card mb-3" style="max-width: 2500px;">
      <div class="row g-0">
        <div class="col-md">
          <div class="card-body">
           <MDBRow tag="form" class="g-3 needs-validation" novalidate @submit.prevent="checkForms">
            <h1 class="title">Sobre o atendimento</h1>
            <h3 class="text">
              Detalhes do atendimento
            </h3>
            <MDBRow>
             <MDBCol md="10">
               Especialidade principal*
              <MDBInput 
              v-model="input1"
              label=""
              invalidFeedback="Por favor sua especialidade principal"
              placeholder="Selecione a especialidade" 
              type="text"
              required
              />
             </MDBCol> 
            </MDBRow>
             <MDBRow class="medium">
              <MDBCol md="6" class="mt-4">
                Informe o preço da consulta*
                <MDBInput
                  inputGroup
                  :formOutline="false"
                  type="number"
                  v-model="input2"
                  aria-describedby="basic-addon1"
                  placeholder="Valor"
                  required
                >
                  <template #prepend>
                    <span class="input-group-text span-text" id="basic-addon1">R$</span>
                  </template>
                </MDBInput>
              </MDBCol>
             </MDBRow>
              <MDBRow>
                <MDBCol md="10">
                  <p class="p-tag-two">Formas de pagamento da consulta*</p>
                  <span class="input-group-text universal-tag">
                    <MDBCheckbox
                      v-model="checkbox1"
                      class="mt-0"
                    /> <p class="p-tag-one">Pix</p>
                  </span>
                  <span class="input-group-text universal-tag">
                    <MDBCheckbox
                      v-model="checkbox2"
                      class="mt-0"
                    /><p class="p-tag-one">Em dinheiro</p>
                  </span>
                </MDBCol>
              </MDBRow>
            </MDBRow> 
            <div class="card mb-3 universal-tag" style="max-width: 500px;">
               <div class="row g-0">
                 <div class="col-md">
                  <div class="card-body cartao-p">
                      <MDBCheckbox 
                        v-model="checkbox3"
                        :wrap="false"
                        class="mt-0"
                      /> Cartão de crédito
                   </div>
                      <p class="p-tag">Parcelamento em</p>
                      <div class="test-tag">
                        <MDBRadio 
                         name="flexRadioDefault"
                         v-model="radio1"
                         :wrap="false"
                         class="mt-0 mt-tag"
                        /> 1x, sem juros
                      </div> 
                      <div class="test-tag"> 
                        <MDBRadio 
                         name="flexRadioDefault"
                         v-model="radio2"
                         :wrap="false"
                         class="mt-0 mt-tag"
                        /> 2x, sem juros
                      </div>  
                      <div class="test-tag">
                        <MDBRadio 
                         name="flexRadioDefault"
                         v-model="radio3"
                         :wrap="false"
                         class="mt-0 mt-tag"
                        /> 3x, sem juros
                      </div> 
                  </div>
                </div>
            </div>
            <MDBCol col="12">
              <MDBBtn color="secondary" class="btn btn-rounded" type="submit">PRÓXIMO</MDBBtn>
            </MDBCol>
          </div>
        </div>
        <div class="col">
          <img
            src="../assets/desktop-pagina-2.png"
            alt="..."
            class="img-fluid"
          />
        </div>
      </div>
  </div>
   <div class="card mb-3" style="max-width: 2500px;">
      <div class="row g-0">
        <div class="col-md">
          <MDBRow tag="form" class="g-3 needs-validation" novalidate @submit.prevent="checkForm">
            <MDBCol md="4">
              <MDBInput
                label="First name"
                v-model="input1"
                invalidFeedback="Please provide your first name"
                validFeedback="Looks good!"
                required
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                label="Last name"
                v-model="input2"
                invalidFeedback="Please provide your last name"
                validFeedback="Looks good!"
                required
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                inputGroup
                aria-label="Username"
                aria-describedby="basic-addon1"
                placeholder="Username"
                v-model="input3"
                invalidFeedback="Please choose a username."
                validFeedback="Looks good!"
                required
              >
                <template v-slot:prepend>
                  <span class="input-group-text" id="basic-addon1">@</span>
                </template></MDBInput
              >
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                label="City"
                v-model="input4"
                invalidFeedback="Please provide a valid city."
                validFeedback="Looks good!"
                required
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                label="Zip"
                v-model="input5"
                invalidFeedback="Please provide a valid zip."
                validFeedback="Looks good!"
                required
              />
            </MDBCol>
            <MDBCol col="12">
              <MDBCheckbox
                label="Agree to terms and conditions"
                v-model="checkbox1"
                invalidFeedback="You must agree before submitting."
                validFeedback="Looks good!"
                required
              />
            </MDBCol>
            <MDBCol col="12">
              <MDBBtn color="primary" type="submit">Submit form</MDBBtn>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
   </div>  
   <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/pagtwo">About</router-link>
   </div>
</template>

<script>
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBRadio }from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  name: 'pagtwo',
  components: {
    MDBInput,
    MDBCheckbox,
    MDBCol,
    MDBRadio,
    MDBBtn,
    MDBRow
  },
  setup() {
    const checkForms = e => {
      e.target.classList.add("foi validado")
    };
    const checkForm = e => {
      e.target.classList.add("was-validated")
    }
    const input1 = ref("");
    const checkbox1 = ref(false);
    const checkbox2 = ref(false);
    const checkbox3 =  ref(false);
    const radio1 = ref(false);
    const radio2 = ref(false);
    const radio3 = ref(false);
    const input2 = ref("");
    return {
      input1,
      input2,
      radio1,
      radio2,
      radio3,
      checkbox1,
      checkbox2,
      checkbox3,
      checkForms,
      checkForm
    };
  }
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Open+Sans:wght@700&display=swap');
.text {
  font-family: 'Open Sans', sans-serif;
}
.col {
  margin-right: 10px;
  margin-top: 65px;
}
.title {
   font-family: 'Comfortaa', cursive;
   color: #483698;
}
.cartao-p {
  font-family: 'Open Sans', sans-serif;
}
.span-text {
  background-color: #483698;

  color: white;
}
.p-tag {
  margin-left: 50px;
}
.mt-tag {
  margin-right: 50px;
}
.p-tag-one {
  font-family: 'Open Sans', sans-serif;
  margin-left: 30px;
  margin-top: 15px;
}
.universal-tag {
  margin-bottom: 10px;
  background-color: #F9F9F9;
}
.p-tag-two {
  margin-bottom: 25px;
}
.medium {
  margin-bottom: 15px;
}
.test-tag {
  margin-left: 45px;
}
</style>

