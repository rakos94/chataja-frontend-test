<template>
  <div class="mb-3" v-if="message">
    <div class="outgoing_msg" v-if="isMe(message.name)">
      <div class="sent_msg">
        <p class="line_height_content">{{ message.message }}</p>
        <span class="time_date">{{ getDateTime(message.created_at) }}</span> </div>
    </div>
    <div class="incoming_msg" v-else>
      <div class="incoming_msg_img"> <img :src="message.avatar" alt="sunil"></div>
      <div class="received_msg">
        <div class="received_withd_msg">
          <div class="received_msg_wrapper">
            <div class="font-weight-bold">{{ message.name }}</div>
            <div class="line_height_content">{{ message.message }}</div>
          </div>
          <span class="time_date">{{ getDateTime(message.created_at) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  props: ['message'],
  data(){
    return {
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    isMe(name){
      if(this.user.name == name) return true
      return false
    },
    getDateTime(datetime){
      return moment(datetime,"YYYY-MM-DD HH:mm").format('HH:mm | MMM DD')
    },
  }
}
</script>
