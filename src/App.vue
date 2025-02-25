
<script setup>

  //WYSIWYG => content

  //1. Rendu Déclaratif
  let text0 = "Rendu Déclaratif";

  //avant les directives


  /*2. directives
    ☻ v-bind => :
      ☺ v-bind:value="text" -> :value="text"

    ☻ v-on => @ 
      ☺ écoutes les balise sur les évènements (ex : input)
      ☺ v-on:input="updateText" -> @input="updateText"

    ☻ v-model =>
      ☺ binding bilatéral
      ☺ v-model="text2"

    ☻ v-for 

    ☻ v-if
      ☺ peut caché automatiquement

    ☺ ref : update la valeur automatiquement
  */
  
  import {ref, computed} from "vue";

  /*V1
  let text = "Directives"; --on commente pour utiliser une constante
  
  function updateText(event) {
    text.value = event.target.value;
  }*/
  const text = ref("");

  const trimmedText = computed(() => text.value.trim());

  const posts = ref([]);

  function addPost() {
    const newPost = {
      id: Math.random.toString(36).substring(2),
      content: trimmedText.value,
      createdAt: new Date(),
      autor: {
        username: "Clem",
        avatarUrl: "https://media1.tenor.com/m/a5RGfluwSOgAAAAd/sylvian-delhoumi.gif"
      }
    };

    //https://i.pinimg.com/originals/f3/13/e1/f313e1532486c2f96301ee5c5b14037d.gif raclette
    //https://media1.tenor.com/m/a5RGfluwSOgAAAAd/sylvian-delhoumi.gif delhoumi
    
    //V1 posts.value.push(trimmedText.value);
    posts.value.push(newPost);
    
    text.value = "";
    console.log(posts.value);
  }

</script>

<template>
  <main>
    <div class="container">
        <form class="card" @submit.prevent="addPost">
          <textarea name="post" id="post" placeholder="Quoi de neuf ?" v-model="text" ></textarea>
          <button type="sumbit" :disabled="!trimmedText">Publier</button>
        </form>

        <h2 v-if="!posts.length">Aucun post pour le moment. (il supp quand c'est faux)</h2>
        <h2 v-show="!posts.length">Pour voir quand on fait "inspect "(genre réaparaitre souvent)</h2>
        
        <article v-for="(post, index) in orderBy(posts, Date)" :keys="index" class="card">

          <header>
            <img :src="post.autor.avatarUrl" alt="avatar" width="36" height="36">
            <a>{{ post.autor.username }}</a>
          </header>
          
          <p>{{ post.content }}</p>

        </article>

        <!--<p>{{ text }}</p>-->
        <!--<p>{{ text0 }}</p>-->
    </div>
  </main>
</template>

<style scoped>
  .container {
  height: 100vh;
  margin: 0 auto;
  max-width: 640px;
}
.card {
  background-color: var(--color-bg-secondary);
  border-radius: 10px;
  border: 1px solid var(--color-border);
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  width: 100%;
}
textarea {
  background: none;
  border: none;
  color: var(--color-text-primary);
  flex: 1;
  margin-bottom: 1rem;
  outline: none;
  padding: 0.5rem 0;
  resize: none;
  field-sizing: content;
}
button {
  align-self: flex-end;
  background: none;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  cursor: pointer;
  font-size: 1rem;
  height: 40px;
  padding: 0 1rem;
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

article {
  padding: 1rem;
  overflow: hidden;
}

article p /*article > p (1er article*/ {
  white-space: pre-wrap;
}

article header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

article img {
  border-radius: 50%;
}

</style>