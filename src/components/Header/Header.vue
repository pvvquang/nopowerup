<template>
  <header>
    <div class="header">
      <div class="container" v-if="isDesktop">
        <div class="header-wrap">
          <router-link
            to="/"
            class="header-logo"
            @click.native="handleShowNav()"
          >
            <img src="../../assets/icons/logo.svg" alt="NoPowerUp" />
          </router-link>
          <Navigation :isMobile="isShowMenu" />
        </div>
      </div>

      <div
        class="header-mobile"
        :class="{ mobile: isMobile }"
        v-if="!isDesktop"
      >
        <div class="header-wrap">
          <router-link to="/" class="header-logo">
            <img src="../../assets/icons/logo.svg" alt="NoPowerUp" />
          </router-link>
          <div class="menu">
            <transition class="fade">
              <div class="title" v-if="isShowMenu && isMobile">Menu</div>
            </transition>
            <div class="title" v-if="isTablet">Menu</div>
            <div class="btn-icon">
              <i class="fas fa-bars" @click="showMenu" v-if="!isShowMenu"></i>
              <i class="fas fa-times" @click="showMenu" v-if="isShowMenu"></i>
            </div>
            <transition name="fade">
              <Navigation @clickShowNav="handleShowNav()" v-if="isShowMenu" />
            </transition>
          </div>
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
    handleShowNav() {
      this.isShowMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
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

    &.mobile {
      .header-wrap {
        padding-left: 25px;
        padding-right: 25px;
      }
    }

    .menu {
      display: flex;
      align-items: center;
      justify-content: center;

      .btn-icon {
        width: 54px;
      }

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
