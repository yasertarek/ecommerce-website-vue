<template>
  <div class="sfu">
    <div class="row">
      <header>
          <h2 class="heading-secondary">Selected just for you</h2>
          <button class="btn btn-outline sfu__btn">Show more</button>
      </header>
    </div>
    <!-- Start Swiper -->
    <div class="row--lg">
      <div class="row sfu__swiper_cont">
        <swiper
        :slides-per-view="4"
        :space-between="65"
        :modules='modules'
        :navigation='{
          prevEl: ".sfu-button--prev",
          nextEl: ".sfu-button--next",
          disabledClass: "sfu-button--disabled",
          lockClass: "sfu-button--locked"
        }'
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
          <swiper-slide v-for="(slide, i) in slides" :key="i">
            <div class="sfu__img">
              <span :class=" 'sfu__badge sfu__badge--'+slide.badge.bg_color" v-if="slide.badge" v-text="slide.badge.text"></span>
              <router-link to="/" class="sfu__link">
                <img :src="require('@/assets/imgs/' + slide.img)" :alt="slide.title">
              </router-link>
            </div>
            <div class="sfu__text">
              <router-link to="/" class="sfu__link">
                <h3 class="sfu__title" v-text="slide.title"></h3>
              </router-link>
              <span class="sfu__price" :class="{'sfu__price--red' : slide.old_price}" v-text="slide.curr.sym + slide.price"></span>
              <span class="sfu__price sfu__price--old" v-if="slide.old_price" v-text="slide.curr.sym + slide.old_price"></span>
            </div>
          </swiper-slide>
          <!-- Add custom buttons -->
        </swiper>
      </div>
      <div class="sfu-button sfu-button--prev">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.943 21.679">
          <path d="M10.837,0,1.8,9.044,0,10.845l1.8,1.8,9.036,9.032,1.8-1.8L4.875,12.119H24.943V9.572H4.875L12.638,1.8Z" />
        </svg>
      </div>
      <div class="sfu-button sfu-button--next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.943 21.679">
          <path d="M10.837,21.679,1.8,12.634,0,10.833l1.8-1.8L10.837,0l1.8,1.8L4.875,9.56H24.943v2.547H4.875l7.763,7.767Z" transform="translate(24.943 21.679) rotate(180)"/>
        </svg>
      </div>
    </div>
    <!-- End Swiper -->
  </div>
</template>
<script>
// import Swiper core and required modules
import { Navigation } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  name: 'SelectedForYouComponent',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      modules: [Navigation],
      heading: 'Selecting Just For You',
      slides: [
        {
          img: 'AdobeStock_236655481.png',
          badge: {
            bg_color: 'red',
            text: '30%'
          },
          title: 'T-Shirt Summer Vibes',
          price: 89.99,
          old_price: 119.99,
          curr: {
            code: 'USD',
            sym: '$'
          }
        },
        {
          img: 'AdobeStock_118120200.png',
          badge: {
            bg_color: 'black',
            text: 'new'
          },
          title: 'Loose Knit 3/4 Sleeve',
          price: 119.99,
          curr: {
            code: 'USD',
            sym: '$'
          }
        },
        {
          img: 'AdobeStock_136908398.png',
          title: 'Basic Slim Fit T-Shirt',
          price: 79.99,
          curr: {
            code: 'USD',
            sym: '$'
          }
        },
        {
          img: 'AdobeStock_173519034.png',
          title: 'Loose Textured T-Shirt',
          price: 119.99,
          curr: {
            code: 'USD',
            sym: '$'
          }
        },
        {
          img: 'AdobeStock_173519034.png',
          title: 'Loose Textured T-Shirt',
          price: 119.99,
          curr: {
            code: 'USD',
            sym: '$'
          }
        }
      ]
    }
  }
}
</script>
