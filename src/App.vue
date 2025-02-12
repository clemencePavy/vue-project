
<script setup>

  //1. Rendu Déclaratif
  let text0 = "Rendu Déclaratif";

  /*2. directives
    ☻ v-bind => :
      ☺ v-bind:value="text" -> :value="text"

    ☻ v-on => @ 
      ☺ écoutes les balise sur les évènements (ex : input)
      ☺ v-on:input="updateText" -> @input="updateText"

    ☻ v-model =>
      ☺ binding bilatéral
      ☺ v-model="text2"

    ☺ v-for 
  */
  
  import {ref} from "vue";

  //let text = "Directives"; --on commente pour utiliser une constante
  const text = ref("Directives");

  /*
  function updateText(event) {
    text.value = event.target.value;
  }*/

  const posts = ref([]);

  function addPost() {
    posts.value.push(text.value);
    text.value = "";
    console.log(posts.value);
  }

</script>

<template>
  <main>
    <div class="container">
        <form class="card" @submit.prevent="addPost">
          <textarea name="post" id="post" placeholder="Quoi de neuf ?" v-model="text" ></textarea>
          <button type="sumbit">Publier</button>
        </form>
        
        <p v-for="(post, index) in posts" :keys="index">{{ post }}</p>

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
</style>