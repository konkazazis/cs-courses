<script>
import jsonData from './dummy_courses.json';

export default {
  data() {
    return {
      course: null,
    };
  },
  mounted() {
    
    const courseId = parseInt(this.$route.params.id);
    this.course = jsonData.courses.find(course => course.id === courseId);
    console.log(this.course)

  },
};
</script>

<template>
    <div>
    <h2>Course Details</h2>
    <template v-if="course">
      <p>{{ course.title }}</p>
      <p>{{ course.description }}</p>
      <!-- Display other course details here -->
    </template>
    <template v-else>
      <p>Loading...</p>
      <!-- Or display an error message -->
    </template>
  </div>
</template>

<style scoped>
h2, p{
    color: black;
}
</style>

