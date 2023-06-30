<script>
import jsonData from './dummy_courses.json';
import Header from './Header.vue';

export default {
  data() {
    return {
      course: null,
    };
  },
  mounted() {
    
    const courseId = parseInt(this.$route.params.id);
    this.course = jsonData.courses.find(course => course.id === courseId);
    //console.log(this.course)

  },
};
</script>

<template>

  <Header/>

  <div class="flex justify-center items-center mt-50">
    <div class="course-card shadow-xl">
            <template v-if="course">
              <div class="flex justify-between">
                <img :src="course.image" :alt="course.title" />
                <div class=" ml-20">
                  <h3 class="mb-4 text-gray-700 text-lg text-center">{{ course.title }}</h3>
                  <p className="text-lg mb-5 font-bold text-gray-700">Description: {{ course.description }}</p>
                  <p class="mb-5 text-gray-700 text-base">Learners Enrolled: {{ course.enrolledLearners }}</p>
                  <p class="mb-5 text-gray-700 text-base">Average Rating: {{ course.averageRating }}/5</p>
                </div>
              </div>
                
            </template>
            <template v-else>
                <p>Loading...</p>
            </template>
        </div>
  </div>
</template>

<style scoped>


.course-card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}
.course-card img {
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .course-details {
    grid-template-columns: repeat(1, 2fr);
    max-width: 300px;
    display:inline-block;
    background-color: #f0f0f0;
    
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
}
</style>

