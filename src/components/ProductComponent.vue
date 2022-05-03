<template>
  <div class="product">
    <router-link class="product__photo" to="/">
      <span :class=" 'product__badge product__badge--'+prod.badge.bg_color" v-if="prod.badge" v-text="prod.badge.text"></span>
      <div class="product__img">
        <img :src="require('@/assets/imgs/products/' + prod.img.front)" :alt="prod.title" class="product__img_front">
      </div>
      <div v-if="prod.img.back" class="product__img">
        <img :src="require('@/assets/imgs/products/' + prod.img.back)" :alt="prod.title" class="product__img_back">
      </div>
    </router-link>
    <div class="product__text">
      <router-link to="/" class="product__link">
        <h3 class="product__title" v-text="prod.title"></h3>
      </router-link>
      <span class="product__price" :class="{'product__price--red' : prod.old_price}" v-text="prod.curr.sym + prod.price"></span>
      <span class="product__price product__price--old" v-if="prod.old_price" v-text="prod.curr.sym + prod.old_price"></span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ProductComponent',
  props: ['prod']
}
</script>
