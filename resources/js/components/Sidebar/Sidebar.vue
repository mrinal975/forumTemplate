<template>
    <div class="container">
        <ul class="menu-list">
            <li><router-link to="/allThreads">All Threads</router-link></li>
            <li><router-link to="/popularthisweek">Popular This Week</router-link></li>
            <li><router-link to="/popularalltime">Popular All Time</router-link></li>
            <li><router-link to="/solved">Solved</router-link></li>
            <li><router-link to="/unsolved">Unsolved</router-link></li>
            <li><router-link to="/noRepliesyet">No Replies Yet</router-link></li>
            <li><router-link to="/leaderboard">Leaderboard</router-link></li>
        </ul>    
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('fooo Component mounted.')
        }
    }
</script>