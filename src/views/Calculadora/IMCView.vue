<script setup>
import { ref } from 'vue';

const popupVisible = ref(false);
const resultado = ref('');
const altura = ref('');
const peso = ref('');

const openPopup = () => {
  popupVisible.value = true;
};

const closePopup = () => {
  popupVisible.value = false;
};

const calculateIMC = () => {
  const alturaNum = parseFloat(altura.value);
  const pesoNum = parseFloat(peso.value);

  if (!alturaNum || !pesoNum) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  const imc = pesoNum / (alturaNum ** 2);
  if (imc < 18.5) {
    resultado.value = `Seu IMC é ${imc.toFixed(2)}: Abaixo do peso.`;
  } else if (imc < 24.9) {
    resultado.value = `Seu IMC é ${imc.toFixed(2)}: Peso normal.`;
  } else if (imc < 29.9) {
    resultado.value = `Seu IMC é ${imc.toFixed(2)}: Sobrepeso.`;
  } else {
    resultado.value = `Seu IMC é ${imc.toFixed(2)}: Obesidade.`;
  }
};
</script>

<template>
  <Header />
  <main>
    <section>
      <button @click="openPopup">Calculadora de IMC</button>

      <div v-if="popupVisible" class="pop-wrapper" @click.self="closePopup">
        <div class="popup">
          <div class="pop-close" @click="closePopup">x</div>
          <h2>Calculadora de IMC</h2>
          <form>
            <label for="altura">Altura (em metros):</label>
            <input type="number" v-model="altura" step="0.01" placeholder="Ex: 1,75" required />
            <label for="peso">Peso (em kg):</label>
            <input type="number" v-model="peso" step="0.1" placeholder="Ex: 60,00" required />
            <button type="button" @click="calculateIMC">Calcular</button>
          </form>
          <div v-if="resultado" id="resultado">{{ resultado }}</div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
section {
  margin-top: 10vw;
}

button {
  display: block;
  margin: 20px auto;
  background-color: rgb(1, 10, 92);
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 5px;
}

.pop-wrapper {
  display: flex;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.popup {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  background-color: rgb(237, 241, 250);
  position: relative;
  border-radius: 20px;
}

.popup h2 {
  color: rgb(38, 38, 102);
}

.popup label {
  display: block;
  margin-top: 10px;
}

.popup input {
  width: calc(100% - 22px);
  padding: 5px;
  margin: 5px 0;
}

.popup button {
  margin-top: 10px;
  background-color: rgb(1, 10, 92);
  color: rgb(255, 255, 255);
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.pop-close {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
</style>
