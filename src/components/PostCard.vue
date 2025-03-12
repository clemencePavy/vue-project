<script setup>

    
    import { TrashIcon, HeartIcon } from "@heroicons/vue/24/outline";
    import { HeartIcon as HeartIconSolid } from "@heroicons/vue/24/solid";

    const props = defineProps({
        post: {
           type: Object,
           required: true, 
        },
    });

    const emit = defineEmits(["delete", "like"]);

    const isLiked = false;

    function deletePost() {
        emit("delete", props.post.id);
    }

    function likePost() {
        if(isLiked) {
            isLiked = false;
            emit("like", false);
        }
        else {
            isLiked = true;
            emit("like", true);
        }
    }

</script>

<template>
    <article class="card">

        <header>
            <img :src="post.autor.avatarUrl" alt="avatar" width="36" height="36" class="avatar">
            <a>{{ post.autor.username }}</a>
        </header>

        <p>{{ post.content }}</p>

        <footer>
            <button @click="likePost">
                <HeartIcon @click=""/>
                <HeartIconSolid @click=""/>
            </button>
            <button @click="deletePost" class="btn-icon">
                <TrashIcon/>
            </button>
        </footer>

    </article>
</template>
