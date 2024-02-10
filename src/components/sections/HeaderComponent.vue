<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/user" class="nav-link">User</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/post" class="nav-link">Post</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style scope>
.router-link-active{
    color: rgba(0,0,0,8.9) !important;
    border-bottom: 2px solid rgba(0,0,0,0.9) !important;
}
</style>