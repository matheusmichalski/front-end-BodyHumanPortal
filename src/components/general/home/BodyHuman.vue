<template>
  <section id="body">
    <ul>
      <li>
        <RouterLink to="/sistemas/digestorio"><img src="../../../../public/img/general/home/content/digestive.png"
            alt="Digestive Icon" class="dark"></RouterLink>
      </li>
      <li>
        <RouterLink to="/sistemas/cardiovascular"><img src="../../../../public/img/general/home/content/circulatory.png"
            alt="Circulatory Icon" class="medium"></RouterLink>
      </li>
      <li>
        <RouterLink to="/sistemas/osseo"><img src="../../../../public/img/general/home/content/bone.png" alt="Bone Icon"
            class="light"></RouterLink>
      </li>
      <li>
        <RouterLink to="/sistemas/nervoso"><img src="../../../../public/img/general/home/content/nervous.png" alt="Nervous Icon"
            class="dark"></RouterLink>
      </li>
    </ul>
    <ul>
      <li>
        <RouterLink to="/sistemas/muscular"><img src="../../../../public/img/general/home/content/muscular.png" alt="Muscle Icon"
            class="medium">
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/sistemas/reprodutor-feminino"><img src="../../../../public/img/general/home/content/reproductive.png"
            alt="Reproductive Icon" class="light"></RouterLink>
      </li>
      <li>
        <RouterLink to="/sistemas/respiratorio"><img src="../../../../public/img/general/home/content/respiratory.png"
            alt="Respiratory Icon" class="dark"></RouterLink>
      </li>
      <li>
        <RouterLink to="/sistemas/urinario"><img src="../../../../public/img/general/home/content/urinary.png" alt="Urinary Icon"
            class="medium">
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
#body {
  padding: 3vw 5vw 5vw 5vw;

  ul {
    display: flex;
    justify-content: center;

    li {
      margin: 0 7vw 0 7vw;

      img {
        padding: 2vw;
        border-radius: 100px;
      }

      .dark {
        background-color: #103F65;
      }

      .medium {
        background-color: #3175AD;
      }

      .light {
        background-color: #A8D4F4;
      }
    }
  }
}
</style>
