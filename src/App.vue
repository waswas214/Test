<template>
  <div id="app">
    <header>
      <span>Registracija</span>
      <router-link to="test1">TEst1</router-link>
      <router-link to="test2">Test2</router-link>
      <router-view />
    </header>
  </div>
</template>

<script>
  //import axios from 'axios';
  import {API} from './axios'
  import User from './components/User.vue'
export default {
  name: 'app',
  components:{
    User:User
  },
  methods: {
    methods: 
    {
        login()
        {
            console.log(this.name, this.age)
        }
    
    }
  }
}
</script>

<style>
  
</style>
