<template>
    <h1>
        Hi User, welcome to homepage!
    </h1>
</template>

<script>
    export default {
        mounted() {
            let user = localStorage.getItem("user-info");
            if(!user){
                this.$router.push({ name: 'SignUp'});
            }
        },
    }
</script>