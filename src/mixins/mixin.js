export default {
  data() {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth < 768) {
        this.isMobile = true;
        this.isTablet = false;
        this.isDesktop = false;
      }
      if (window.innerWidth >= 768) {
        this.isMobile = false;
        this.isTablet = true;
        this.isDesktop = false;
      }
      if (window.innerWidth > 1024) {
        this.isMobile = false;
        this.isTablet = false;
        this.isDesktop = true;
      }
    },
  },
  created() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
};
