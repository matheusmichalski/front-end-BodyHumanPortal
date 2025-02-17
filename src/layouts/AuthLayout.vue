<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
@media (max-width: 767px) {
  main {
    background:
      url(/auth/signup/fundoclaro.png) no-repeat,
      url(/auth/signup/fundoescuro.png) no-repeat;

    background-position:
      top 100vw left,
      top 10vw right;

    background-size:
      30vw auto,
      31vw auto;
  }
}

@media (min-width: 768px) {
  main {
    background:
      url(/auth/signup/fundoclaro.png) no-repeat,
      url(/auth/signup/fundoescuro.png) no-repeat;

    background-position:
      top 35vw left,
      top 3vw right;

    background-size:
      23vw auto,
      24vw auto;
  }
}

</style>
