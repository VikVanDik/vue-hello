const { createApp } = Vue;

createApp ({
  data () {
    return {
      message: 'Ciao, sono Vue',
      imgSource: 'https://baconmockup.com/640/360'
    }
  }
}) .mount('#app')
