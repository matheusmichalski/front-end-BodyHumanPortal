<script setup>
import router from '@/router'
import { useAuth } from '@/stores/authStore'
import { useValidationStore } from '@/stores/validationStore'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  errorTitle: {
    String,
    default: 'Algo deu errado!',
  },
  redirectErrorMessage: {
    String,
    default: 'Tente novamente',
  },
  redirectErrorLoading: String,

  sucessTitle: {
    String,
    default: 'Sucesso!',
  },
  redirectSuccessLoading: String,
  redirectSuccessMessage: String,
})

const auth = useAuth()
const validationStore = useValidationStore()

const closeLoading = () => {
  auth.loading.activated = false
  auth.loading.status = null
}

const currentPath = computed(() => router.currentRoute.value.path)

const handleRedirect = () => {
  if (!props.redirectErrorLoading) {
    console.error('O caminho de redirecionamento não está definido.')
    return
  }

  if (currentPath.value === props.redirectErrorLoading) {
    window.location.reload()
  } else {
    router.push(props.redirectErrorLoading)
  }
}
</script>
<template>
  <div v-if="auth.loading.activated || auth.loading.status !== null" class="loading-overlay">
    <div class="loading-popup">
      <a @click="closeLoading">
        <img src="/elements/closePopUp.svg" class="close-btn" alt="Fechar popup" />
      </a>
      <img
        v-if="auth.loading.activated && auth.loading.status === null"
        src="/gifs/loading.gif"
        alt="Carregando..."
      />

      <div v-if="auth.loading.status === 'Error'" class="error-container">
        <img src="/gifs/error.gif" class="error-gif" alt="Erro" />
        <h1>{{ errorTitle }}</h1>
        <p>{{ validationStore.errorMessage }}</p>
        <RouterLink
          @click.prevent="handleRedirect"
          @click="closeLoading"
          :to="redirectErrorLoading"
        >
          <span>{{ redirectErrorMessage }}</span>
        </RouterLink>
      </div>

      <div v-else-if="auth.loading.status === 'Success'" class="success-container">
        <img src="/gifs/sucess.gif" alt="Sucesso" />
        <h1>{{ sucessTitle }}</h1>
        <p>{{ validationStore.sucessMessage }}</p>
        <router-link @click.prevent="closeLoading" :to="redirectSuccessLoading">
          <span>{{ redirectSuccessMessage }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;

    .loading-popup {
      position: block;
      background: #ffff;
      width: 55vw;
      min-width: 40vw;
      border-radius: 18px;
      padding: 5vw;
      box-shadow: 0 4px 40px rgba(0, 0, 0, 0.3);
      animation: fadeIn 0.3s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;

      img {
        width: 35vw;
        height: 30vw;
        object-fit: cover;
      }

      a {
        text-decoration: none;

        .close-btn {
          margin-left: 900%;
          width: 2.5vw;
          height: 3vw;
          cursor: pointer;
        }
      }

      .error-container {
        animation: fadeIn 0.4s ease-in-out;
        text-align: center;

        h1 {
          font-family: 'Tilt Warp';
          font-size: 5vw;
          color: #1f527c;
        }

        p {
          font-family: 'Tilt Warp';
          font-size: 3.5vw;
          margin: 3vw 0 3vw 0;
          color: #f50000;
        }

        span {
          text-decoration: none;
          font-size: 3vw;
          font-family: 'Tilt Warp';
          color: #1f527c;
        }
      }

      .success-container {
        animation: fadeIn 0.4s ease-in-out;
        text-align: center;

        h1 {
          font-family: 'Tilt Warp';
          font-size: 5vw;
          color: #1f527c;
        }

        p {
          font-family: 'Tilt Warp';
          font-size: clamp(0.7rem, 1.5vw, 1.6vw);
          margin: 3vw 0 3vw 0;
          color: #48c63d;
        }

        span {
          text-decoration: none;
          font-size: 3.5vw;
          font-family: 'Tilt Warp';
          color: #1f527c;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;

    .loading-popup {
      position: block;
      background: #ffff;
      width: 32.917vw;
      min-width: 20vw;
      border-radius: 18px;
      padding: 1.5vw;
      box-shadow: 0 4px 40px rgba(0, 0, 0, 0.3);
      animation: fadeIn 0.3s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;

      img {
        width: 18vw;
        height: 18vw;
        object-fit: cover;
      }

      a {
        text-decoration: none;

        .close-btn {
          margin-left: 900%;
          width: 1.6vw;
          height: 1.6vw;
          cursor: pointer;
        }
      }

      .error-container {
        animation: fadeIn 0.4s ease-in-out;
        text-align: center;

        h1 {
          font-family: 'Tilt Warp';
          font-size: 3vw;
          color: #1f527c;
        }

        p {
          font-family: 'Tilt Warp';
          font-size: 1.5vw;
          margin: 3vw 0 2vw 0;
          color: #f50000;
        }

        span {
          text-decoration: none;
          font-size: 1.4vw;
          font-family: 'Tilt Warp';
          color: #1f527c;
        }
      }

      .success-container {
        animation: fadeIn 0.4s ease-in-out;
        text-align: center;

        h1 {
          font-family: 'Tilt Warp';
          font-size: clamp(0.9rem, 3vw, 3vw);
          color: #1f527c;
        }

        p {
          font-family: 'Tilt Warp';
          font-size: clamp(0.7rem, 1.5vw, 1.6vw);
          margin: 3vw 0 3vw 0;
          color: #48c63d;
        }

        span {
          text-decoration: none;
          font-size: clamp(0.5rem, 1.4vw, 1.3vw);
          font-family: 'Tilt Warp';
          color: #1f527c;
        }
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
