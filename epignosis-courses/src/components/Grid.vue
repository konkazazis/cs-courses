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
  <div div class="body">
    <div id="course-container" >
      <div v-for="result in results" :key="result.id" class="course-card shadow-xl">
        <img :src="result.image" :alt="result.title" />
        <h3 className="text-center">{{ result.title }}</h3>
        <p className="text-3xl font-bold">{{ result.description }}</p>
        <p>Learners Enrolled: {{ result.enrolledLearners }}</p>
        <p>Average Rating: {{ result.averageRating }}/5</p>
        <router-link className="learn-more-button bg-gradient-to-r from-blue-400 to-indigo-100 hover:scale-110 cursor-pointer" :to="{ name: 'CourseDetails', params: { id: result.id }}">
          Learn More
        </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

#course-container {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 20px;
  max-width: 1000px;
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

.course-card a:hover {
  background-color: #555;
}

.learn-more-button {
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
}

@media (max-width: 768px) {
  #course-container {
    grid-template-columns: repeat(1, 2fr);
    max-width: 300px;
  }
}
</style>

