import towTable from './src/tow-dimensional-table.vue'
towTable.install = function (Vue) {
  Vue.component(towTable.name, towTable)
}

export default towTable