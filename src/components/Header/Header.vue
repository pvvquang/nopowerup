<template>
  <header>
    <div class="header">
      <div class="container" v-if="isDestop">
        <div class="header-wrap">
          <router-link to="/" class="header-logo">
            <img src="../../assets/icons/logo.svg" alt="NoPowerUp" />
          </router-link>
          <Navigation :isMobile="isShowMenu" />
        </div>
      </div>

      <div class="header-mobile" v-if="!isDestop">
        <div class="header-wrap">
          <router-link to="/" class="header-logo">
            <img src="../../assets/icons/logo.svg" alt="NoPowerUp" />
          </router-link>
          <div class="menu">
            <div class="title">Menu</div>
            <div class="btn-icon">
              <i class="fas fa-bars" @click="showMenu" v-if="!isShowMenu"></i>
              <i class="fas fa-times" @click="showMenu" v-if="isShowMenu"></i>
            </div>
          </div>
          <Navigation :active="isShowMenu" v-if="isShowMenu" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  name: "Header",
  components: { Navigation },
  data() {
    return {
      isShowMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #f5f5f5;

  &-logo {
    display: flex;
    align-items: center;
  }

  &-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 16px 0;
  }

  &-mobile {
    .header-wrap {
      padding-left: 47px;
      padding-right: 47px;
      position: relative;
    }

    .menu {
      display: flex;
      align-items: center;
      justify-content: center;

      .title {
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      }

      i {
        display: inline-block;
        font-size: 24px;
        padding: 6px 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
