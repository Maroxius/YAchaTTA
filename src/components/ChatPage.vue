<template>
  <div class="chatDiv page">
  <div v-if="username">
    <div class="chat">
      <h2>Chat</h2>
      <div class="text" v-for="message in messages" :key="message.id">
        {{ message.user }}:{{ message.text }}
      </div>
      <div v-show="emptyMsg" class="empty">No messages</div>
    </div>
    <input
      v-model="newMessage"
      placeholder="Text your message here..."
      @keyup.enter="sendMessage"
    />
    <button @click="sendMessage">Send</button>
    <button v-show="deleteBtn" @click="delMessage">Delete</button>
  </div>
  <div v-else class="alert">
    For authentication go <router-link :to="{ name: 'Home' }">here</router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: "ChatPage",
  data() {
    return {
      messages: [],
      newMessage: "",
      emptyMsg: true,
      deleteBtn: false,
      username: localStorage.getItem("username"),
    };
  },
  computed() {
    localStorage.setItem("username", this.$route.query.username);
  },
  methods: {
    sendMessage() {
      if (this.username == "") {
        this.username = "Anonymous";
      }
      if (this.newMessage !== "") {
        this.emptyMsg = false;
        console.log("You entered message", this.newMessage);
        this.messages.push({
          id: new Date().getTime(),
          text: this.newMessage,
          user: this.username,
        });
        this.saveChatRecords();
        this.newMessage = "";
        this.deleteBtn = true;
      } else {
        console.log("Enter your message!");
        alert("Enter your message!");
      }
    },
    delMessage() {
      this.messages = [];
      localStorage.removeItem(
        `messages_${this.username}`,
        JSON.stringify(this.message)
      );
      console.log("All messages deleted");
      this.emptyMsg = true;
    },
    saveChatRecords() {
      const records = this.messages;
      console.log(records);
      localStorage.setItem(
        `messages_${this.username}`,
        JSON.stringify(records)
      );
    },
    loadChatRecords() {
      const records = JSON.parse(
        localStorage.getItem(`messages_${this.username}`)
      );
      if (records) {
        this.messages = records;
        this.emptyMsg = false;
      }
    },
  },
  created() {
    this.loadChatRecords();
  },
};
</script>

<style scoped>
.text {
  margin-bottom: 25px;
}
.chat {
  width: 600px;
  height: 100%;
  border: 3px solid black;
  background-color: whitesmoke;
  color: black;
  font-weight: 20px;
  margin: 20px;
  padding: 15px;
}
.empty {
  margin-bottom: 30px;
  font-style: italic;
}
input {
  margin-right: 15px;
}
button {
  margin-left: 5px;
  margin-bottom: 20px;
}
.alert {
  padding: 30px;
}
.chatDiv{
  display: flex;
  justify-content: center;
  align-items: baseline;
}
</style>
