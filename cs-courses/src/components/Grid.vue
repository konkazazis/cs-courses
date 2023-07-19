<script>
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
  props: {
    results: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<template>
  <div  class="flex justify-center items-center mt-30">
    <div class="course-container grid grid-cols-3 gap-20 max-w-1000">
      <div v-for="result in results" :key="result.id" class=" bg-gray-200 p-3 rounded-lg shadow-xl">
        <img class="w-full h-auto rounded-lg mb-10" :src="result.image" :alt="result.title" />
        <h3 class="text-base font-medium mb-5 text-gray-700 text-center">{{ result.title }}</h3>
        <p class="text-sm mb-10 text-gray-700 font-bold">{{ result.description }}</p>
        <p class="text-sm mb-5 text-gray-700">Learners Enrolled: {{ result.enrolledLearners }}</p>
        <p class="text-sm mb-10 text-gray-700">Average Rating: {{ result.averageRating }}/5</p>
        <router-link class="learn-more-button text-white px-8 py-2 border-none rounded-md bg-gradient-to-r from-blue-400 to-indigo-100 hover:scale-110 cursor-pointer" :to="{ name: 'CourseDetails', params: { id: result.id }}">
          Learn More
        </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped>


@media (max-width: 768px) {
  .course-container {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    max-width: 800px;
  }
}
</style>

