<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">MovieSite</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                     <router-link :to="{ name: 'home' }" class="nav-link"
                        >Home</router-link
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Movies</a>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'login' }" class="nav-link"
                        >login</router-link
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Signup</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
// JavaScript logic can go here if needed
</script>

<style scoped>
/* Custom styles can go here */
.navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
}
.nav-link {
    font-size: 1.1rem;
    margin-right: 15px;
}
</style>
