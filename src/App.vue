<template>
<div class="container">
  <NavComp/>
  <div class="pageBody">
  <router-view></router-view></div>
</div>
</template>

<script>
import NavComp from './components/NavComp.vue'

export default {
  name: 'App',
  components: {
    NavComp
  }
}
</script>

<style>
#app {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center; 
  height: 100%;
}
button{
    margin-left: 10px;
    border-radius: 20%;
    background-color: salmon;
}
input{
    border-radius: 20%;
    height: 20px;
}
.pageBody{
  background-color: #DAE0E6;
  width: 100%;
  min-height: 750px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.page{
  background-color: white;
  width: 60%;
}
</style>
