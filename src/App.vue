<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-container>
        <b-navbar-brand to="/">Towles.io</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            
            <b-nav-item-dropdown text="Apps" right>
              <b-dropdown-item to="/right-angled-triangle-solver">Right Angled Triangle Solver</b-dropdown-item>
              <b-dropdown-item href="#">Hangman</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <content>
      <b-container>
          <router-view/>
      </b-container>
    </content>
  </div>
</template>

