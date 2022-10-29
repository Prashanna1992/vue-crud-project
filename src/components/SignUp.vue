<template>
    <img class="logo" src="../assets/black_png_logo.png" alt="">
    <h1>
        Sign-Up
    </h1>
    <div class="register">
        <input type="text" placeholder="Username" v-model="username">
        <input type="email" placeholder="john@doe.com" v-model="email">
        <input type="password" placeholder="Create a password" v-model="password">
        <button @click.prevent="signUp" type="submit">Sign Up</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name : 'SignUp',    
        data() {
            return {
            username : '',
            email : '',
            password : '',
            }
        },
        methods : {            
            async signUp(){
                let result = await axios.post("http://localhost:3000/users", {
                    email : this.email,
                    password : this.password,
                    username : this.username
                });
                if(result.status == 201){
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push({ name: 'HomePage'});
                }
            },     
        },
        mounted() {
            let user = localStorage.getItem("user-info");
            if(user){
                this.$router.push({ name: 'HomePage'});
            }
        },
    }
</script>

<style>
    .logo{
        width: 200px;
    }

    .register input{
        display: block;
        width: 300px;
        height: 40px;
        padding: 10px;
        margin-bottom: 30px;
        border: 1px solid #eee;
        margin-right: auto;
        margin-left: auto;
    }

    .register button{
        padding: 10px 20px 10px 20px;
        background-color: #a8e6e3;
        border-radius: 20px;
        box-shadow: none;
        width: 150px;
        height: 50px;
        border: 1px solid skyblue;
        background-image: linear-gradient(#c1e6e6,#a3d4f1);
        cursor: pointer;
    }
</style>