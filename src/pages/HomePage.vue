
<script setup>
  
  import {ref, computed} from "vue";
  import PostCard from "@/components/PostCard.vue";


  const text = ref("");

  const trimmedText = computed(() => text.value.trim());

  const posts = ref([]);
  //const sortedPosts = computed( () => [...posts.value].sort( (a, b) => b.createdAt - a.createdAt ));
  const sortedPosts = computed( () => posts.value.toSorted( (a, b) => b.createdAt - a.createdAt ));

  function addPost() {
    const newPost = {
      id: Math.random().toString(36).substring(2),
      content: trimmedText.value,
      createdAt: new Date(),
      liked: 0,
      author: {
        username: "Clem",
        avatarUrl: "https://media1.tenor.com/m/a5RGfluwSOgAAAAd/sylvian-delhoumi.gif"
      }
    };

    posts.value.push(newPost);
    
    text.value = "";
    console.log(posts.value);
  }

  function deletePost(id) {
    posts.value = posts.value.filter( (post) => post.id !== id );
  }

  function likePost(id) {
    const postToUpdate = posts.value.find((post) => post.id == id);
    postToUpdate.liked = !postToUpdate.liked;
  }

//API --------------------------------------
 
  const apiPosts = ref([]);

  function fetchPosts() {
    const result = fetch("https://posts-crud-api.vercel.app/posts");
    result
        .then((response) => response.json())
        .then((data) => {
            apiPosts.value = data;
          });
  }

  fetchPosts();
</script>

<template>
  <main>
    <div class="container">

        <form class="card" @submit.prevent="addPost">
          <textarea name="post" id="post" placeholder="Quoi de neuf ?" v-model="text" ></textarea>
          <button type="sumbit" :disabled="!trimmedText">Publier</button>
        </form>

        <h2 v-if="!apiPosts.length">Aucun post pour le moment.</h2>

        <PostCard 
            v-for="(post, index) in apiPosts" 
            :key="post.id" 
            :post="post" 
            @delete="deletePost" 
            @like="likePost"
            class="card"/>

    </div>
  </main>
</template>
