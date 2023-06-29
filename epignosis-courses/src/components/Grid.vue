<script>

import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

import jsonData from './dummy_courses.json';

export default {
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    this.courses = jsonData.courses;
  },
};
</script>

<template>
   <div>
    <div id="course-container">
      <div v-for="course in courses" :key="course.title" class="course-card">
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .course-grid {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 20px;
  margin-top: 50px;
}

.course-card {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}

.course-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.course-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.course-card p {
  font-size: 14px;
  margin-bottom: 20px;
  color: #333;
}

.course-card a {
  display: inline-block;
  background-color: #333;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
}

.course-card a:hover {
  background-color: #555;
}
</style>

