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

  <div class="body">
    <div class="course-card shadow-xl">
            <template v-if="course">
              <div class="course-details">
                <img :src="course.image" :alt="course.title" />
                <div class="course-info">
                  <h3 className="text-center">{{ course.title }}</h3>
                  <p className="text-3xl font-bold">Description: {{ course.description }}</p>
                  <p>Learners Enrolled: {{ course.enrolledLearners }}</p>
                  <p>Average Rating: {{ course.averageRating }}/5</p>
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

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
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

.course-details {
  display: flex;
  justify-content: space-between; 
}

.course-info {
  margin-left: 20px;
}

.course-card h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.course-card p {
  font-size: 1rem;
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

.learn-more-button {
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
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

