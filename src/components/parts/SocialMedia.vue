<template>
<div>
    <a :href="lnk_linkedin" target="_blank">
      <LinkedIn id="social" title="LinkedIn" w="30px" h="30px"/>  
    </a>
    <a :href="lnk_github" target="_blank">
        <GitHub id="social" title="GitHub" w="30px" h="30px"/>
    </a>
    <a :href="lnk_twitter" target="_blank">
      <Twitter id="social" title="Twitter" w="30px" h="30px"/>  
    </a>
    <a :href="lnk_twitch" target="_blank">
      <Twitch id="social" title="Twitch" w="30px" h="30px"/>  
    </a>
</div>
</template>

<script>
import LinkedIn from 'vue-ionicons/dist/logo-linkedin';
import GitHub from 'vue-ionicons/dist/logo-github';
import Twitter from 'vue-ionicons/dist/logo-twitter';
import Twitch from 'vue-ionicons/dist/logo-twitch'; 

import socialMedia from '../../config/config.js';

export default {
    name: 'SocialMedia',
    components: {
        LinkedIn,
        GitHub,
        Twitter,
        Twitch,
    },
    data: function() {
        return {
            // Social Links from config file
            lnk_github: socialMedia.socialMedia.GitHub,
            lnk_twitter: socialMedia.socialMedia.Twitter,
            lnk_linkedin: socialMedia.socialMedia.LinkedIn,
            lnk_twitch: socialMedia.socialMedia.Twitch,
        }
    }
}
</script>

<style>
#social {
    /* display: flex; */
    padding: 1vh;
    /* not sure why this width option puts the social icons on the side... */
    /* width: 99%; */
}
</style>
