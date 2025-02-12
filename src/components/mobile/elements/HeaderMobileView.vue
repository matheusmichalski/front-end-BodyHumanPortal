<template>
  <header class="is-mobile">
    <nav>
      <p><a href="#"><i class="fa-solid fa-robot"></i></a></p>
      <div>
        <ul>
          <li>
            <RouterLink to="/">
              <i class="fa-solid fa-house"></i>
              <p>HOME</p>
            </RouterLink>

          </li>

          <li>
            <RouterLink to="/">
              <i class="fa-solid fa-person"></i>
              <p>SISTEMAS</p>
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/contato">
              <i class="fa-solid fa-users"></i>
              <p>CONTATO</p>
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/minha-conta/profile">
              <i class="fa-solid fa-user"></i>
              <P>MINHA CONTA</P>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  bottom: 0;
  width: 100%;
  nav {
    p {
      font-family: "Urbanist";
      font-weight: 700;
      text-align: right;

      i {
        color: #ffff;
        padding: clamp(0.3rem, 4vw, 2rem);
        background-color: #A7E6EB;
        border-radius: 100vw;
        font-size: clamp(0.2rem, 5vw, 2rem);
        margin: 2vw;
      }
    }

    div {
      ul {
        text-align: center;
        display: flex;
        justify-content: space-between;
        color: #103F65;
        font-size: clamp(0.2rem, 4vw, 2.3rem);
        background-color: #f5f5f5;
        border-radius: 24px 24px 0 0;
        padding: 3vw;

        li {
          a {
            text-decoration: none;

            i {
              padding: 2vw 0;
              color: #103F65;
              font-size: clamp(0.2rem, 6vw, 2.5rem);
            }

            p {
              font-family: "Urbanist";
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
