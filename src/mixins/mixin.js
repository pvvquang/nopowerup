export default {
  data() {
    return {
      isMobile: false,
      isTablet: false,
      isDestop: false,
    }
  },
  methods: {
    onResize() {
      if(window.innerWidth < 768) {
        this.isMobile = true;
        this.isTablet = false;
        this.isDestop = false;
      }
      if(window.innerWidth >= 768) {
        this.isMobile = false;
        this.isTablet = true;
        this.isDestop = false;
      }
      if(window.innerWidth > 1024) {
        this.isMobile = false;
        this.isTablet = false;
        this.isDestop = true;
      }
    }
  },
  created() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
}