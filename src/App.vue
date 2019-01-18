<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Towles.io</span>
        <span class="pl-2 font-weight-light">DEVELOPMENT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn flat to="/about">
        <span class="mr-2">About</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid >
        <v-layout >
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

