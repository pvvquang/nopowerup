<template>
  <div>
    <div class="nav" v-if="isDesktop">
      <ul class="nav-list">
        <router-link
          :to="{ name: item.path }"
          v-for="(item, i) in navList"
          :key="i"
          class="nav-link"
          @click.native="handleClick"
          >{{ item.name }}</router-link
        >
      </ul>
      <div class="nav-social">
        <div class="icon">
          <img src="../../assets/icons/facebook.svg" alt="Facebook" />
        </div>
        <div class="icon">
          <img src="../../assets/icons/linkedin.svg" alt="Linkedin" />
        </div>
      </div>
    </div>

    <div class="nav-mobile" :class="{ mobile: isMobile }" v-if="!isDesktop">
      <div class="nav-mobile-social" v-if="isTablet">
        <div class="title">Social</div>
        <a href="#" class="nav-mobile-social-link">Facebook</a>
        <a href="#" class="nav-mobile-social-link">Linkedin</a>
      </div>
      <ul class="nav-mobile-list">
        <div class="title">Menu</div>
        <router-link
          :to="{ name: item.path }"
          v-for="(item, i) in navList"
          :key="i"
          class="nav-link"
          @click.native="$emit('clickShowNav')"
          >{{ item.name }}</router-link
        >
      </ul>
      <div class="nav-mobile-social" v-if="isMobile">
        <div class="title">Social</div>
        <a href="#" class="nav-mobile-social-link">Facebook</a>
        <a href="#" class="nav-mobile-social-link">Linkedin</a>
      </div>
      <div class="nav-mobile-touch">
        <div class="title">Get in touch</div>
        <a href="#" class="nav-mobile-touch-link">contact@nopowerup.com</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navList: [
        { name: "About Us", path: "AboutUs" },
        { name: "Our Game", path: "OurGame" },
        { name: "Our Life", path: "OurLife" },
        { name: "Join Us", path: "JoinUs" },
        { name: "Contact Us", path: "ContactUs" },
        { name: "Blog", path: "Blog" },
      ],
    };
  },
  props: {},
  computed: {
    urlName() {
      return this.$route.name;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: center;

  &-list {
    padding-right: 24px;
    border-right: 1px solid #c4c4c4;
  }

  &-link {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    text-align: left;

    padding: 9px 16px;
    transition: color 0.3s ease;

    & + & {
      margin-left: 48px;
    }

    &.router-link-active {
      color: #ff921e;
    }
  }

  &-social {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 9px 16px;
    margin-left: 24px;

    .icon {
      cursor: pointer;
    }

    .icon + .icon {
      margin-left: 24px;
    }
  }

  &-mobile {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    padding: 40px 47px;

    height: calc(100vh - 80px);
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    display: grid;
    grid-template-columns: 33% 67%;

    .title {
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #767676;
      padding-bottom: 40px;
    }
    &-social {
      &-link {
        text-align: left;
        display: block;
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;

        & + & {
          margin-top: 16px;
        }
      }
    }

    &-list {
      .nav-link {
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        text-align: left;
        display: block;
        padding: 0;
      }

      .nav-link + .nav-link {
        margin-left: 0;
        margin-top: 24px;
      }
    }

    &-touch {
      grid-column: 1 / span 3;
      padding-top: 82px;
      text-align: left;

      .title {
        padding-bottom: 8px;
      }

      &-link {
        font-size: 24px;
        line-height: 1;
        text-decoration: underline;
      }
    }

    &.mobile {
      height: unset;
      padding: 40px 25px;

      .nav-mobile-social,
      .nav-mobile-list {
        grid-column: 1 / span 3;
      }

      .nav-mobile-list .title {
        padding-bottom: 20px;
      }

      .nav-mobile-social,
      .nav-mobile-touch {
        .title {
          padding: 40px 0 20px;
        }
      }

      .nav-mobile-touch {
        padding-top: 0;
      }
    }
  }
}
</style>
