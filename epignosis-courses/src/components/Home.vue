<script >
import Header from '../components/Header.vue'
import Grid from '../components/Grid.vue'
import jsonData from '../components/dummy_courses.json';

export default {
  components: {
    Grid,
    Header,
  },
  data() {
    return {
      searchQuery: '',
      allResults: [],
    };
  },
  mounted() {
    this.allResults = jsonData.courses;
  },
  computed: {
    filteredResults() {
      const query = this.searchQuery.toLowerCase().trim();
      return this.allResults.filter(result =>
        result.title.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    performSearch(query) {
      console.log(query);
      this.searchQuery = query;
    },
  },
};
</script>

<template>
  <Header @search="performSearch"/>

  <Grid :results="filteredResults"/>

</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    
    place-items: center;
    
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
