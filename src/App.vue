<template>
    <Navbar />
   <div class="container">
     <router-view />
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
    components: { Navbar }
}
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .container {
        max-width: 1200px;
        margin: auto;
    }

    nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    @media (max-width:745px) {
        .container{
            padding: 10px; 
        }
    }

</style>