<template>
  <span class="j-breadcrumb__item">
    <span
      :class="['j-breadcrumb__inner', to ? 'is-link': '']"
      ref="link"
      role="link">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="j-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="j-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>

<script>
  export default{
    name: 'JBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {
        separator: '',
        separatorClass: ''
      }
    },
    inject: ["jBreadcrumb"],

    mounted() {
      this.separator = this.jBreadcrumb.separator
      this.separatorClass = this.jBreadcrumb.separatorClass
      const link = this.$refs.link  // 获取span元素
      link.setAttribute('role', 'link')
      link.addEventListener('click', _ => {
        const {to, $router} = this
        if (!to || !$router) return
        this.replace ? $router.replace(to) : $router.push(to)
      })
    }
  }
</script>