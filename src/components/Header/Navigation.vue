<template>
  <div>
    <div class="nav">
      <ul class="nav-list">
        <router-link
          :to="{ name: item.path }"
          v-for="(item, i) in navList"
          :key="i"
          class="nav-link"
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

    <div class="nav-mobile">
      <ul class="nav-list">
        <router-link
          :to="{ name: item.path }"
          v-for="(item, i) in navList"
          :key="i"
          class="nav-link"
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
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    urlName() {
      return this.$route.name;
    },
  },
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

  &.mobile {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
  }
}
</style>
