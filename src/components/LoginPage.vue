<template>
    <img class="logo" src="../assets/black_png_logo.png" alt="">
    <h1>
        Login
    </h1>
    <div class="login">
        <input type="email" placeholder="john@doe.com" v-model="email">
        <input type="password" placeholder="Create a password" v-model="password">

        <button @click.prevent="login" type="submit">Login</button> 
        <router-link to="register" class="button">Sign-Up</router-link>

    </div>
</template>

<script>
    import axios from 'axios';
    export default ({
        name : 'LoginPage',    
        data() {
            return {
                email : '',
                password : '',
            }
        },
        methods: {
            async login(){
                if(this.email && this.password){
                    let result = await axios.get(
                        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                    )
                    if(result.data){
                        localStorage.setItem('user-info', JSON.stringify(result.data[0]))
                    }
                }else{
                    alert("FILL THE FIELDS!");
                }
            },
            newFunction(){

            }
        },
        mounted() {
            if(localStorage.getItem('user-info')){
                this.$router.push({ name: 'HomePage'});
            }
        },
    })
</script>
