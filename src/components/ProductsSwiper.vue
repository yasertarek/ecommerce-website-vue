<template>
  <div class="row--lg prods">
    <div class="row prods__swiper_cont">
      <swiper
      :slides-per-view="4"
      :space-between="65"
      :modules='modules'
      :speed="500"
      :navigation='{
        prevEl: `.prods-button--prev--${id}`,
        nextEl: `.prods-button--next--${id}`,
        disabledClass: "prods-button--disabled",
        lockClass: "prods-button--locked"
      }'
      :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :breakpoints='{
        0: {
          slidesPerView: 2.5,
          spaceBetween: 19
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 45
        }
      }'>
        <swiper-slide v-for="(prod, i) in products" :key="i">
          <Product :prod="prod" />
        </swiper-slide>
        <!-- Add custom buttons -->
      </swiper>
    </div>
    <div :class="`prods-button prods-button--prev prods-button--prev--${id}`">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.943 21.679">
        <path d="M10.837,0,1.8,9.044,0,10.845l1.8,1.8,9.036,9.032,1.8-1.8L4.875,12.119H24.943V9.572H4.875L12.638,1.8Z" />
      </svg>
    </div>
    <div :class="`prods-button prods-button--next prods-button--next--${id}`">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.943 21.679">
        <path d="M10.837,21.679,1.8,12.634,0,10.833l1.8-1.8L10.837,0l1.8,1.8L4.875,9.56H24.943v2.547H4.875l7.763,7.767Z" transform="translate(24.943 21.679) rotate(180)"/>
      </svg>
    </div>
  </div>
</template>
<script>
// import Swiper core and required modules
import { Autoplay, Navigation } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// import Product item
import Product from '@/components/ProductComponent.vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  name: 'ProductsSwiper',
  components: {
    Swiper,
    SwiperSlide,
    Product
  },
  props: ['id', 'products'],
  data () {
    return {
      modules: [Navigation, Autoplay]
    }
  }
}
</script>
