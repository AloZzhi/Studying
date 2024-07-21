<template>
  <nav class="navbar">
    <div class="logo">Spotify</div>
    <ul class="nav-links">
      <li>Home</li>
      <li>Search</li>
      <li>Your Library</li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1db954;
  color: white;
}
.navbar .logo {
  font-size: 24px;
  font-weight: bold;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}
.nav-links li {
  cursor: pointer;
}
</style>
