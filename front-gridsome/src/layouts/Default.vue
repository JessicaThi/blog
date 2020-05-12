<template>
  <div class="layout bg-gray-100 antialiased">
    <header class="header bg-black text-gray-100">
      <nav class="nav container sm:pxi-0 mx-auto">
        <div class="flex justify-between mx-3 py-3">
          <div>
            <g-link class="nav__link uppercase text-sm font-medium mr-4" to="/"
              >Home</g-link
            >
            <g-link class="nav__link uppercase text-sm font-medium" to="/about/"
              >About</g-link
            >
          </div>
          <div class="flex">
            <!-- <font-awesome :icon="['fas', 'sun']" /> -->
            <div class="mr-4">
              <font-awesome :icon="['fas', 'moon']" />
            </div>
            <a href="instagram.com">
              <font-awesome :icon="['fab', 'instagram']" />
            </a>
          </div>
        </div>
      </nav>
      <div
        class="container mx-auto flex flex-col justify-center items-center text-center py-3"
      >
        <g-image alt="Example image" src="~/favicon.png" width="135" />
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </div>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
/* 
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
} */
</style>
