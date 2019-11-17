<template>
    <div class="row">
      <Sidebar/>

      <!-- Main -->
      <main class="col-md-10 bg-white">
        <div class="">
          
          <div class="mesgs">
            <div class="msg_history">
              <ChatRow v-for="(m,key) in messages" :key="'message'+key" :message="m" />
            </div>
            <div class="type_msg">
              <div class="input_msg_write">
                <input type="text" class="write_msg no-outline" placeholder="Type a message" 
                  v-model="input_message"
                  @keyup.enter="sendMessage"/>
                <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"
                  @click="sendMessage"></i></button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar'
import ChatRow from '@/components/ChatRow'
import moment from 'moment'

export default {
  name: 'home',
  components: {
    Sidebar, ChatRow
  },
  data() {
    return {
      messages: [],
      user: JSON.parse(localStorage.getItem('user')),
      input_message: null,
    }
  },
  mounted(){
    let _this = this
    let ref = this.$fb.ref();
    ref.on("value", function(snapshot) {
      _this.messages = snapshot.val().chats
    });
  },
  methods: {
    sendMessage(){
      this.$fb.ref().child('chats').child(this.messages.length).set({
        name: this.user.name,
        avatar: this.user.avatar,
        message: this.input_message,
        created_at: moment().format("YYYY-MM-DD HH:mm")
      });
      this.input_message = null
    }
  }
}
</script>

<style>
main{ min-height: 100vh }
img{ max-width:100%;}
input.no-outline:focus {
  box-shadow: none;
  outline: none;
}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 15px 0 25px;
  width: 100%;
  min-height: 100vh;
}

 .sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
  padding: 10px 10px;
}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging { padding: 0 0 50px 0;}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
</style>
