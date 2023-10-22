<template>
    <div class="container">
    <div class="icon">
        <img src=".\assets\yatta.jpeg">
        <h2>YAchaTTA</h2>
    </div>
    <div class="navContain">
        <nav>
            <router-link to="/" class="navItem">Home</router-link>
            <router-link to="/chat" class="navItem">Chat</router-link>
            <router-link to="/info" class="navItem">Info</router-link>
            <router-link to="/api" class="navItem">API</router-link>
        </nav>
    </div>
    </div>
</template>


<script>
export default {
  name: 'NavComp'
}
</script>


<style scoped>
.container{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid gray;
}
.navContain{
    font-family: sans-serif;
    height: 60px;
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
}
nav{
    width: 400px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
a{
    color: black;
    text-decoration: none;
}
.router-link-active{
    text-decoration: underline;
}
img{
    width: 70px;
    height: 70px;
}
.icon{
    display: flex;
    align-items: center;
}
.navItem{
    width: 25%;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
