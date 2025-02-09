<script setup>
import InputAuthBtnProfile from './InputEmailProfile.vue'
import SubmitAuthBtn from '@/components/general/auth/SubmitAuthBtn.vue'
import InputAuthBtnTripleFieldsProfile from './InputProfileTriple.vue'
import InputPasswordProfile from './InputPasswordProfile.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import ButtonDeleteAccount from './ButtonDeleteAccount.vue'

const user = ref({
  name: 'Nicole FeMello',
  picture: '/user.jpeg',
  email: 'nicfmello@gmail.com',
  birthday: '27/01/2009',
  create: '30/01/2025',
})

const showPassword = ref({
  current: false,
  new: false,
  confirm: false,
  delete: false,
})

const emailInput = ref('')
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const deletePassword = ref('')

</script>

<template>
  <section class="is-mobile">
      <h2>Segurança</h2>

      <div class="info">
        <h3>Atualizar email</h3>
        <p>Email atual: {{ user.email }}</p>
        <div class="fillField">
        <InputAuthBtnProfile type=email text=Email />
        <font-awesome-icon icon=envelope class="Icon" style="color: #1663a3" />
      </div>
      </div>
      <div class="button">
      <SubmitAuthBtn text="Atualizar email" />
      </div>

      <div class="info">
        <h3>Atualizar senha</h3>
        <div class="fillField">
          <InputAuthBtnTripleFieldsProfile
          labelText1="Senha atual"
          labelText2="Nova senha"
          labelText3="Confirme a sua senha"
          icon1="eye"
          icon2="eye"
          icon3="eye"
        />
      </div>
      </div>
      <div class="button">
      <SubmitAuthBtn text="Atualizar senha" />
      </div>

      <div class="infoThree">
        <h3>Excluir conta</h3>
        <p>Esta ação é irreversível! Você realmente deseja excluir sua conta?</p>
        <div class="fillField">
        <InputPasswordProfile
        labelText1="Senha"
        icon1="eye"
        />
      </div>
      </div>
      <div class="button">
      <ButtonDeleteAccount
      text="Excluir conta"
      />
      </div>
  </section>
</template>

<style scoped>
.is-mobile {
  h2 {
    text-align: center;
    font-family: "Urbanist";
    font-weight: 600;
    font-size: max(8vw, 20px);
    color: #10293d;
    margin-bottom: 5vw;
  }
  .info{
    background-color: #EDF8F9;
    padding: 5vw;
    border-radius: 15px;

    h3 {
      font-family: "Urbanist";
      font-weight: 600;
      font-size: max(5vw, 20px);
      color: #10293d;
    }
    p {
      margin-top: 2vw;
      font-family: "Urbanist";
      font-weight: 600;
      font-size: max(3vw, 15px);
      color: #10293d;
      margin-bottom: 3vw;
    }

  }
}

.fillField {
    display: flex;
    .Icon{
      margin-top: 4.1vw;
      padding-bottom: 1.2vw;
      border-bottom: #10293d solid 0.15vw;
    }
    .Mode {
      width: 76vw;
    }
  }

.button {
  text-align: center;
  margin-bottom: 5vw;
}

.infoThree {
    background-color: #EDF8F9;
    padding: 5vw;
    border-radius: 15px;

    h3 {
      font-family: "Urbanist";
      font-weight: 600;
      font-size: max(5vw, 20px);
      color: #10293d;
    }
    p {
      margin-top: 2vw;
      font-family: "Urbanist";
      font-weight: 600;
      font-size: max(3vw, 15px);
      color: #FF0000;
      margin-bottom: 5vw;
    }
  }
</style>
