<template>
    <div class="wrapper">
        <Background/>
        <img src="https://avatars3.githubusercontent.com/u/13931744">
        <h1>{{ title }}</h1>
        <p>{{ msg }}</p>
        <span v-for="link in links">
            <a target="_blank" :href="link.url">{{link.title}}</a>
            <span v-if="links.indexOf(link) !== links.length - 1"> | </span>
        </span>
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
    margin: 0 auto;
    padding: 50px 100px;
    color: #333; 
}

@-webkit-keyframes multiply {
    from { opacity: 0 }
    25% { opacity: .1 }
    50% { opacity: .2 }
    to { opacity: 1 }
}

@-moz-keyframes multiply {
    from { opacity: 0 }
    25% { opacity: .1 }
    50% { opacity: .2 }
    to { opacity: 1 }
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

<style>
html {
	font: 100%/1.5 "Roboto", Verdana, sans-serif;
	font-weight: lighter;
	color: #884745;
	overflow-x: hidden;
	text-align: center;
	-webkit-font-smoothing: antialiased;
}

body {
	margin: auto;
	padding: 100px 30px 0px;
	text-align: center;
}
</style>