<template>
    <div class="wrapper">
        <Background/>
        <img src="../assets/logo.jpg">
        <h1>{{ title }}</h1>
        <p>{{ msg }}</p>
        <h2>Links</h2>
        <ul>
            <li v-for="link in links">
                <a target="_blank" :href="link.url">{{link.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import Background from './Background'
const ID = 'gaganjakhotiya'

export default {
    name: 'app',
    data () {
      return {
        title: 'Welcome to my personal page.',
        msg: 'Follow the links to proceed.',
        links: [
            {
                title: 'Facebook',
                url: `https://facebook.com/${ID}`
            }, {
                title: 'Github',
                url: `https://github.com/${ID}`
            }, {
                title: 'Instagram',
                url: `https://instagram.com/${ID}`
            }, {
                title: 'LinkedIn',
                url: `https://linkedin.com/in/${ID}`
            }, {
                title: 'Twitter',
                url: `https://twitter.com/${ID}`
            }
        ]}
    },
    components: {
        Background
    }
}
</script>

<style scoped>
div.wrapper {
    margin: auto;
    padding: 50px 100px;
    color: #333; 
}
img {
    height: 200px;
    width: 200px;
    border-radius: 100px;
    margin-bottom: 20px;
    -webkit-animation: multiply 1500ms ease;
    -moz-animation: multiply 1500ms ease;
}
</style>