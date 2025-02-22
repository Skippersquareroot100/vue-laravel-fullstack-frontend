<template>
  <GuestLayout>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create an account</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="submit" class="space-y-6" action="#" method="POST">


        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
          <div class="mt-2">
            <input type="email"
                   name="email"
                   id="email"
                   autocomplete="email"
                   v-model="data.email"
                   required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>



        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input type="password"
                   name="password"
                   id="password"
                   required=""
                   v-model="data.password"
                   class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>




        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Don't have an account?
        {{ ' ' }}
        <RouterLink :to="({name:'Signup'})" class="font-semibold text-indigo-600 hover:text-indigo-500">Register Here</RouterLink>
      </p>
    </div>
  </GuestLayout>
</template>
<script setup lang="ts">
import GuestLayout from "../components/GuestLayout.vue";
import {ref} from "vue";
import axiosClient from "../axios"
import router from "../router"

const data= ref(
    {
      email:'',
      password:'',
    },
)

function submit() {
  axiosClient.get('/sanctum/csrf-cookie').then(response => {
    axiosClient.post("/login", data.value)
        .then(response => {
          router.push({name: 'Home'})
        })
        .catch(error => {
          if (error.response && error.response.data) {
            // Log and handle the error response
            console.log('Error Data:', error.response.data);
            errors.value = error.response.data.errors || error.response.data.message;
          } else if (error.request) {
            // The request was made but no response was received
            console.log('Request Error:', error.request);
          } else {
            // Something else happened
            console.log('Error:', error.message);
          }
        })
  });
}

</script>