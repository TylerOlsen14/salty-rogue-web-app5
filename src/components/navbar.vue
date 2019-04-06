<template>
    <div class="navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">Salty Rogue Real Estate</router-link>
            <img src="../assets/logo.jpg" alt="Salt Rogue Real Estate">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="phoneRecords">Phone Records</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="prospects">Property Prospects</router-link>
                </li>
                <!-- <li class="nav-item dropdown">
                    <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </router-link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <router-link class="dropdown-item" to="#">Action</router-link>
                    <router-link class="dropdown-item" to="#">Another action</router-link>
                    <div class="dropdown-divider"></div>
                    <router-link class="dropdown-item" to="#">Something else here</router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</router-link>
                </li> -->
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
img{
    width: 5%;
}
.navbar{
    width: 100%;
    margin: auto;
}
</style>