<template>
  <aside>
    <h1 class="text-white text-2xl mb-4">Appendix</h1>
    <ul>
      <li class="mb-2">
        <user-icon size="1.2x" class="text-white inline-block"></user-icon>
        <nuxt-link class="text-white" to="/profile">About Me</nuxt-link>
      </li>
      <li class="mb-2">
        <mail-icon size="1.2x" class="text-white inline-block"></mail-icon>
        <nuxt-link class="text-white" to="/contact">Contact Me</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { UserIcon, MailIcon } from 'vue-feather-icons'

export default {
  components: {
    UserIcon,
    MailIcon
  }
}
</script>