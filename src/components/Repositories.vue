<template>
  
    <div>
        <table>
            <tr>
                <th>name: </th>
                <th>registered: </th>
                <th>age: </th>
            </tr>
           
            <tr v-for="user in users">
                <td>{{user.name}}</td>
                <td>{{user.created_at}}</td>
                <td>{{user.age}}</td>
            </tr>

        </table>
    </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Repositories',
    created (){
        axios.get('http://december.lt:8080/users')
        .then((response) => {
            this.users = response.data
        })
    },
    data(){
        return {
            users: []
        }
    }
}
</script>

<style>

</style>
