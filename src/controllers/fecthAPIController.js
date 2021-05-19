import { mapState } from "vuex";

export const fetch = {
  data() {
    return {
      categories: [],
      current: 1,
      maxPages: 2,
      total: 0,
      skeletonAlive: false,
      data: []
    };
  },
  methods: {
    showDialog() {
      this.$store.commit("provinces/DIALOG_CAD", true);
    },
    async getType(type) {
      this.categories = Array();
      let response = await this.$axios.get(
        `${process.env.API}category/typefor/${type}`
      );
      this.categories.push('Todas categorias')
      response.data.forEach(element => {
        this.categories.push(element.description);
      });
    },
    async getCount(endpoint) {
      const response = await this.$axios.put(
        `${process.env.API}${endpoint}/count`,
        { search: this.modelSearch, category: this.modelCategory }
      );
      this.total = response.data;
      this.maxPages = parseInt(Math.ceil(this.total / 10));
    },
    async getInfoFromDB() {
      const endpoint =
        this.searchPeopleOrDocument === "Documentos" ? "document" : "people";
      this.skeletonAlive = true;
      const response = await this.$axios.put(
        `${process.env.API}${endpoint}/search?page=${this.current}&limit=10`,
        { search: this.modelSearch, category: this.modelCategory }
      );
      this.data = response.data;
      setTimeout(() => {
        this.skeletonAlive = false;
      }, 1000);
      this.getCount(endpoint);
    },
    reverse() {
      if (this.cadChoice === "doc") {
        this.cadChoice = "pessoa";
      } else if (this.cadChoice === "pessoa") {
        this.cadChoice = "doc";
      }
    }
  },
  computed: {
    ...mapState("provinces", ["provinces", "selectedProvince"]),
    searchPeopleOrDocument: {
      get() {
        return this.$store.state.provinces.searchType;
      },
      set(val) {
        this.$store.commit("provinces/SEARCH_TYPE", val);
      }
    },
    showDialogCad: {
      get() {
        return this.$store.state.provinces.showDialogCad;
      },
      set(val) {
        this.$store.commit("provinces/DIALOG_CAD", val);
      }
    },
    modelProvince: {
      get() {
        return this.$store.state.provinces.selectedProvince;
      },
      set(val) {
        this.$store.commit("provinces/SELECT_PROVINCE", val);
      }
    },
    modelSearch: {
      get() {
        return this.$store.state.provinces.search;
      },
      set(val) {
        this.$store.commit("provinces/SELECT_SEARCH", val);
      }
    },
    modelCategory: {
      get() {
        return this.$store.state.provinces.category;
      },
      set(val) {
        this.$store.commit("provinces/SELECT_CATEGORY", val);
      }
    }
  },
  mounted() {
    this.getType("Pessoa");
    this.getInfoFromDB();
  },
  watch: {
    searchPeopleOrDocument(newValue) {
      this.getInfoFromDB();
      if (this.searchPeopleOrDocument === "Documentos") {
        this.getType("Documento");
      } else {
        this.getType("Pessoa");
      }
      if (this.searchPeopleOrDocument === null) {
        this.searchPeopleOrDocument = "Pessoas";
        this.getType("Pessoa");
      }
    },
    current() {
      this.getInfoFromDB();
    },
    modelCategory(newValue, oldValue) {
      if (this.modelCategory === null) {
        this.modelCategory = "Todas";
        this.getType("Pessoa");
      }
      this.getInfoFromDB();
    },
    modelSearch() {
      this.getInfoFromDB();
    }
  }
};
