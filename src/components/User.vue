<template>
<main>
        <input type="text" v-model="name" placeholder="Vardas">
        <p></p>
        <input type="text" v-model="created_at" placeholder="Amžius">
        <p></p>
        <input type="text" v-model="age" placeholder="Amžius">
        <p></p>
        <button @click="insert" type="submit">Login</button>
    </main>
</template>

<script>
import axios from "axios"
export default {
    name: "User",
    data(){
        return {
            name: '',
            created_at: '',
            age: ''
        }
    },
    methods: {
        insert(){
            axios.post('http://december.lt:8080/users', this.$data)
            .then( (response)=>{
                if (response.status == 200) alert("User added")
                else alert("Error")
            })
        }
    }
}
</script>

<style>

</style>
