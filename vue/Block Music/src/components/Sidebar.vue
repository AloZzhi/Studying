<template>
  <div class="sidebar">
    <ul>
      <li>Home</li>
      <li>Search</li>
      <li>Library</li>
      <!-- Add more links here -->
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #000;
  color: white;
  height: 100vh;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.2);
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar ul li {
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
