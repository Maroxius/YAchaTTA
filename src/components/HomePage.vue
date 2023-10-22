<template>
    <div class="homeDiv page">
        <div v-if="isAuthenticated">
            <div>Welcome, <b>{{ username }}</b></div>
            <button @click="logout">Log out</button>
        </div>

        <div v-else>
            <label>Your name:</label>
            <input v-model="username" @keyup.enter="login">
            <button @click="login">Login</button>
        </div>
    </div>
</template>


<script>
export default {
  name: 'HomePage',
  data(){
    return{
        isAuthenticated: false,
        username: ""
    }
  },
  methods: {
    login(){
        if(this.username != ""){
            console.log("You entered as", this.username);
            this.isAuthenticated = true;
            localStorage.setItem("isAuthenticated", true)
            localStorage.setItem("username", this.username)
            this.$router.push({
                name: "Chat",
                query: {username: this.username}
            })
        }else{
            console.log('Enter your name!');
        }
    },
    logout(){
        this.isAuthenticated = false
        this.username = ""
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('username')
    }
  },
  created(){
    if(localStorage.getItem('isAuthenticated')){
        this.isAuthenticated = true
        this.username = localStorage.getItem('username')
    }
  }
}
</script>


<style scoped>
div{
    padding-top: 20px;
    font-size: 25px;
}
label{
    margin: 1px;
}
</style>
