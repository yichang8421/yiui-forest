<template>
    <div>
        <Topnav/>
        <div class="banner"></div>
        <h1>EUI</h1>
        <h2>一个美观的 UI 框架</h2>
        <p class="actions">
            <a href="#">GitHub</a>
            <a href="#">开始</a>
        </p>
    </div>
</template>

<script lang="ts">
    import Topnav from "../../components/Topnav/index.vue";

    export default {
        components: {Topnav}
    };
</script>