<!-- HTML TEMPLATE -->

<template>
  <div class="menu">
    <!-- Logo -->
    <div class="logo">
      <img class="logo__img" src="@/assets/img/logo.png" alt="Logo">
      <h1 class="logo__label">Vibester</h1>
    </div>
    <!-- NAVIGATION -->
    <nav class="nav"> 
      <h3 class="nav__label">Browse Music</h3>
      <ul class="nav__list">
        <router-link tag="li" to="/" class="nav__list__item active-bar">
          <i class="fa fa-compass" ></i>          
          <span  class="nav__list__link">Discover</span>          
        </router-link>
        <router-link tag="li" to="/files" class="nav__list__item active-bar">
          <i class="fa fa-folder-open" ></i>          
          <span  class="nav__list__link">Local Tunes</span>          
        </router-link>
        <router-link :class="{'router-link-exact-active':$route.name=='playlist'}" tag="li" to="/playlists" class="nav__list__item active-bar">
          <i class="fa fa-list-ul" ></i>          
          <span  class="nav__list__link">Playlists</span>          
        </router-link>
      </ul>
    </nav>
  </div>
</template>


<!-- SCRIPT -->

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<!-- STYLES -->

<style lang="scss" scoped>
.menu {
  grid-row: 1/2;
  grid-column: 1/2;
  position: relative;
  background: var(--primary);
  padding: 3rem 4rem;
}

.logo {
  display: flex;
  align-items: center;
  &__label {
    text-transform: capitalize;
    font-weight: 700;
    // font-size: 2.5rem;
    letter-spacing: 0.2rem;
    color: #f0e6e8;
    width: max-content;
  }

  &__img {
    height: 35px;
    margin-right: 1.5rem;
  }
}

.nav {
  margin: 5rem 0;

  &__label {
    margin: 1rem 0;
    font-size: 1.6rem;
  }

  &__list {
    &__item {
      padding-left: 1.4rem;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      margin: 2rem 0;
      color: #f0e6e8;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }

    &__link {
      text-decoration: none;
      color: inherit;
    }
  }
}

.open {
  backface-visibility: hidden;
  width: max-content;
  font-size: 1.4rem;
  margin: 0 1rem;
  color: #f0e6e8;
  cursor: pointer;
  display: block;
  .fa {
    font-size: 1.5rem !important;
  }
}

.fa {
  font-size: 1.3rem !important;
  margin-right: 0.8rem;
  &__big {
    color: #f0e6e8;
    margin-left: 1rem;
    font-size: 1.7rem !important;
  }
}

.router-link-exact-active {
  padding-left: 0.9rem;
  color: white;
  border-left: 3px solid white;
}

.premium {
  color: #fdab00;
}

.watermark {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  img {
    margin: 0 1rem;
    height: 50px;
  }
  &__label {
    text-decoration: none;
    cursor: pointer;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d8bfd8;
  }
  &__icon {
    font-size: 2rem !important;
    margin-left: 1rem;
  }
}
</style>


