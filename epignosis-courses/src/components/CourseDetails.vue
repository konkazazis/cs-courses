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

    <div id="course-container" >
        <div class="course-card shadow-xl">
           
            <template v-if="course">
                <img :src="course.image" :alt="course.title" />
                <h3 className="text-center">{{ course.title }}</h3>
                <p className="text-3xl font-bold underline">Description: {{ course.description }}</p>
                <p>Learners Enrolled: {{ course.enrolledLearners }}</p>
                <p>Average Rating: {{ course.averageRating }}/5</p>
            </template>
            <template v-else>
                <p>Loading...</p>
            </template>
        </div>
    </div>

</template>

<style scoped>

#course-container {
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

.learn-more-button {
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
}
</style>

