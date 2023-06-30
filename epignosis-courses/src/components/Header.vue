

<template>
  <header>

    <!-- <h1 class="text-blue-600">Epignosis-Courses</h1> -->
    <img src="../assets/epignosis-removebg-preview.png" class="w-2/12">
    <div class="search-box">
      <button class="btn-search text-blue-600"><img src = "./icons/search-button-svgrepo-com.svg"/></button>
      <input type="text" class="input-search" placeholder="Type to Search...">
    </div>

  </header>
  
</template>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  padding-right: 0;
}
search-box {
  float: left;
}

.search-box img {
  width: 25px;
  padding-top: 5px;
  height: 35px;
}
.search-box{
  width: fit-content;
  height: fit-content;
  position: relative;
}
.input-search{
  height: 50px;
  width: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all .5s ease-in-out;
  background-color: aliceblue;
  padding-right: 40px;
  color:black;
}
.input-search::placeholder{
  color:black;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
}
.btn-search{
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color:black ;
  background-color:transparent;
  pointer-events: painted;  
}
.btn-search:focus ~ .input-search{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid black;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid black;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
}


</style>
