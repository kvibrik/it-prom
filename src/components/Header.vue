<template>
  <BNavbar toggleable="lg" type="dark" variant="info">
    <BNavbarBrand to="/">IT-prom</BNavbarBrand>
    <BNavbarToggle target="menu"></BNavbarToggle>
    <BCollapse id="menu" is-nav>
      <BNavbarNav pills class="ml-auto mr-auto">
        <BNavItem to="/professions">Профессии</BNavItem>
        <BNavItem to="/departments">Отдел</BNavItem>
        <BNavItem to="/staff">Сотрудники</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.nav-item .nav-link.router-link-exact-active.router-link-active {
  color: #fff;
  font-weight: 700;
}
</style>
