<template>
  <div class="products__filter">
    <button class="products__filter_toggle" @click="toggleFilter">
      <h3 class="products__filter_heading" v-text="heading"></h3>
      <svg xmlns="http://www.w3.org/2000/svg" width="11.34" height="6.475" viewBox="0 0 11.34 6.475">
        <g transform="translate(11.34) rotate(90)">
          <path d="M6.193,4.989,1.454.25a.852.852,0,0,0-1.2,1.2L4.465,5.67.25,9.886a.852.852,0,0,0,1.2,1.2L6.193,6.351A.963.963,0,0,0,6.193,4.989Z" transform="translate(0 0)"/>
        </g>
      </svg>
    </button>
    <div class="products__filter_content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductsFilterComponent',
  props: ['heading'],
  methods: {
    toggleFilter (e) {
      e.currentTarget.parentElement.classList.toggle('products__filter--active')
    }
  }
}
</script>
