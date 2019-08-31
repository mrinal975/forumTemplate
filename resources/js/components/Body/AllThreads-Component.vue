<template>
    
     
    <div class="columns">
        <div class="column is-one-third">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" class="is-rounded">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-6">John Smith</p>
                        <p class="subtitle is-7">@johnsmith</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="column"></div>
        <div class="column"> <div class="buttons">
            <b-button type="is-primary" outlined>Outlined</b-button>
            
        </div></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('test Component mounted.')
        }
    }
</script>