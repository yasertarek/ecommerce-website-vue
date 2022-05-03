<template>
  <header class="header">
  <swiper
    class="header__swiper"
    :modules='modules'
    :navigation='{prevEl: ".header-cust-button--prev", nextEl: ".header-cust-button--next"}'
    :loop= 'true'
    :autoplay="{
      delay: 2000
    }"
    :speed="800"
    @swiper='onSwiper'
    @slideChange='onSlideChange'
    @init='onInit'
  >
    <swiper-slide v-for="(slide, i) in slides" :key="i">
      <div class="header__text" :key="i">
        <h2 class="header__heading" :key="i" v-text="slide.heading"></h2>
        <button class="header__cta">
          <div class="header__cta__icon" :key="i" v-html="slide.cta_icon">
          </div>
          <div class="header__cta__text" :key="i" v-text="slide.cta_text">
          </div>
        </button>
      </div>
      <picture :key="i">
        <source
          :key="i"
          :srcset="require('@/assets/imgs/'+slide.img.desktop)"
          media="(min-width: 900px)"
        />
        <source
          :key="i"
          :srcset="require('@/assets/imgs/'+slide.img.mobile)"
          media="(min-width: 0)"
        />
        <img
          :key="i"
          :src="require('@/assets/imgs/'+slide.img.desktop)"
          :alt="slide.img.alt"
        />
      </picture>
    </swiper-slide>
    <!-- Add custom progressbar -->
      <template v-slot:container-start>
        <div class="header-progressbar">
          <span class="header-current" v-text="currentSlide"></span>
          <span class="header-progThumb" :style="{height: progHeight}"></span> <!-- Progressbar Thumb -->
          <span class="header-total" v-text="totalSlides"></span>
        </div>
      </template>
      <!-- Add custom buttons -->
      <template v-slot:container-end>
          <div class="header-button-cont">
            <div class="header-cust-button header-cust-button--prev">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.943 21.679">
                <path d="M10.837,0,1.8,9.044,0,10.845l1.8,1.8,9.036,9.032,1.8-1.8L4.875,12.119H24.943V9.572H4.875L12.638,1.8Z" />
              </svg>
            </div>
            <div class="header-cust-button header-cust-button--next">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.943 21.679">
                <path d="M10.837,21.679,1.8,12.634,0,10.833l1.8-1.8L10.837,0l1.8,1.8L4.875,9.56H24.943v2.547H4.875l7.763,7.767Z" transform="translate(24.943 21.679) rotate(180)"/>
              </svg>
            </div>
          </div>
      </template>
  </swiper>
  <div class="header__pills">
    <div class="header__pill">
      <div class="header__pill-icon header__pill-icon--van">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.49 12.1">
          <g transform="translate(-2.5 -21.9)">
            <path d="M33.641,26.818l-.949-2.2A2.172,2.172,0,0,0,30.686,23.3H29.155v-.561a.842.842,0,0,0-.841-.841h-10.7a.557.557,0,0,0-.561.561.571.571,0,0,0,.561.561H27.99v4.141a.921.921,0,0,0,.927.927h3.731V30.7a.193.193,0,0,1-.194.194h-.69a2.075,2.075,0,0,0-1.79-1.035,2.122,2.122,0,0,0-1.79,1.035H22.425a2.075,2.075,0,0,0-1.79-1.035,2.122,2.122,0,0,0-1.79,1.035H16.861a.561.561,0,1,0,0,1.122h1.7a2.072,2.072,0,0,0,4.141,0h5.2a2.072,2.072,0,0,0,4.141,0H32.5A1.321,1.321,0,0,0,33.814,30.7V27.68A2.459,2.459,0,0,0,33.641,26.818ZM20.635,32.878a.949.949,0,1,1,.949-.949A.957.957,0,0,1,20.635,32.878Zm9.339,0a.949.949,0,1,1,.949-.949A.957.957,0,0,1,29.974,32.878Zm-.841-8.433h1.531a1.01,1.01,0,0,1,.949.625l.82,1.9h-3.3Z" transform="translate(-10.824)" fill="#fbb03b"/>
            <path d="M12.861,33.922h3.969a.561.561,0,1,0,0-1.122H12.861a.557.557,0,0,0-.561.561A.571.571,0,0,0,12.861,33.922Z" transform="translate(-7.686 -8.549)" fill="#fbb03b"/>
            <path d="M7.961,43.922h3.969a.561.561,0,1,0,0-1.122H7.961a.557.557,0,0,0-.561.561A.571.571,0,0,0,7.961,43.922Z" transform="translate(-3.843 -16.392)" fill="#fbb03b"/>
            <path d="M7.612,53.361a.557.557,0,0,0-.561-.561H3.061a.561.561,0,1,0,0,1.122H7.029A.549.549,0,0,0,7.612,53.361Z" transform="translate(0 -24.235)" fill="#fbb03b"/>
          </g>
        </svg>
      </div>
      <div class="header__pill-text">
        <h6>Free Shiping</h6>
        <p>On purchases over $199</p>
      </div>
    </div>
    <div class="header__pill">
      <div class="header__pill-icon header__pill-icon--happy">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.49 12.1">
          <g transform="translate(-2.5 -21.9)">
            <path d="M33.641,26.818l-.949-2.2A2.172,2.172,0,0,0,30.686,23.3H29.155v-.561a.842.842,0,0,0-.841-.841h-10.7a.557.557,0,0,0-.561.561.571.571,0,0,0,.561.561H27.99v4.141a.921.921,0,0,0,.927.927h3.731V30.7a.193.193,0,0,1-.194.194h-.69a2.075,2.075,0,0,0-1.79-1.035,2.122,2.122,0,0,0-1.79,1.035H22.425a2.075,2.075,0,0,0-1.79-1.035,2.122,2.122,0,0,0-1.79,1.035H16.861a.561.561,0,1,0,0,1.122h1.7a2.072,2.072,0,0,0,4.141,0h5.2a2.072,2.072,0,0,0,4.141,0H32.5A1.321,1.321,0,0,0,33.814,30.7V27.68A2.459,2.459,0,0,0,33.641,26.818ZM20.635,32.878a.949.949,0,1,1,.949-.949A.957.957,0,0,1,20.635,32.878Zm9.339,0a.949.949,0,1,1,.949-.949A.957.957,0,0,1,29.974,32.878Zm-.841-8.433h1.531a1.01,1.01,0,0,1,.949.625l.82,1.9h-3.3Z" transform="translate(-10.824)" fill="#fbb03b"/>
            <path d="M12.861,33.922h3.969a.561.561,0,1,0,0-1.122H12.861a.557.557,0,0,0-.561.561A.571.571,0,0,0,12.861,33.922Z" transform="translate(-7.686 -8.549)" fill="#fbb03b"/>
            <path d="M7.961,43.922h3.969a.561.561,0,1,0,0-1.122H7.961a.557.557,0,0,0-.561.561A.571.571,0,0,0,7.961,43.922Z" transform="translate(-3.843 -16.392)" fill="#fbb03b"/>
            <path d="M7.612,53.361a.557.557,0,0,0-.561-.561H3.061a.561.561,0,1,0,0,1.122H7.029A.549.549,0,0,0,7.612,53.361Z" transform="translate(0 -24.235)" fill="#fbb03b"/>
          </g>
        </svg>
      </div>
      <div class="header__pill-text">
        <h6>99% Satisfied Customers</h6>
        <p>Our clients' opinions<br>speak for themselves</p>
      </div>
    </div>
    <div class="header__pill">
      <div class="header__pill-icon header__pill-icon--guarantee">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20.057">
          <g transform="translate(-5 -3.997)">
            <path d="M23.493,6.584,14.7,4.026a.7.7,0,0,0-.4,0h0L5.5,6.584A.7.7,0,0,0,5,7.26v7.681c0,6.685,8.948,9,9.331,9.092a.689.689,0,0,0,.352,0C15.232,23.892,24,21.563,24,14.941V7.26A.7.7,0,0,0,23.493,6.584Zm-.9,8.356c0,5.137-6.91,7.354-8.093,7.681-1.182-.327-8.093-2.533-8.093-7.681V7.791L14.5,5.434l8.093,2.354Z" transform="translate(0)" fill="#fbb03b"/>
            <path d="M26.782,18.7v.735a2.111,2.111,0,0,0,.352,4.191h1.056a.7.7,0,1,1,0,1.407H26.078a.7.7,0,1,0,0,1.407h.7v.7a.7.7,0,1,0,1.407,0v-.7a2.111,2.111,0,1,0,0-4.222H27.133a.7.7,0,0,1,0-1.407h2.111a.7.7,0,0,0,0-1.407H28.189v-.7a.7.7,0,1,0-1.407,0Z" transform="translate(-12.985 -9.076)" fill="#fbb03b"/>
          </g>
        </svg>
      </div>
      <div class="header__pill-text">
        <h6>Originality Guaranteed</h6>
        <p>30 days warranty for each<br>product from our store</p>
      </div>
    </div>
  </div>
  <span class="header__animation"></span>
  </header>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  name: 'HeaderComponent',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      modules: [Navigation, Autoplay],
      slides: [
        {
          heading: 'Sale of the summer collection',
          cta_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24.943" height="21.679" viewBox="0 0 24.943 21.679">
              <path id="noun_Arrow_Left_2682937" data-name="noun_Arrow Left_2682937" d="M10.837,21.679,1.8,12.634,0,10.833l1.8-1.8L10.837,0l1.8,1.8L4.875,9.56H24.943v2.547H4.875l7.763,7.767Z" transform="translate(24.943 21.679) rotate(180)"/>
            </svg>`,
          cta_text: 'Shop now',
          img: {
            desktop: 'header/brandon-atchison-unsplash_1920.jpg',
            mobile: 'header/brandon-atchison-unsplash_640.jpg',
            alt: 'Fashionista'
          }
        },
        {
          heading: 'Sale of the summer collection',
          cta_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24.943" height="21.679" viewBox="0 0 24.943 21.679">
              <path id="noun_Arrow_Left_2682937" data-name="noun_Arrow Left_2682937" d="M10.837,21.679,1.8,12.634,0,10.833l1.8-1.8L10.837,0l1.8,1.8L4.875,9.56H24.943v2.547H4.875l7.763,7.767Z" transform="translate(24.943 21.679) rotate(180)"/>
            </svg>`,
          cta_text: 'Shop now',
          img: {
            desktop: 'header/hunters-race-unsplash_1920.jpg',
            mobile: 'header/hunters-race-unsplash_640.jpg',
            alt: 'Gentele'
          }

        },
        {
          heading: 'Sale of the summer collection',
          cta_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24.943" height="21.679" viewBox="0 0 24.943 21.679">
              <path id="noun_Arrow_Left_2682937" data-name="noun_Arrow Left_2682937" d="M10.837,21.679,1.8,12.634,0,10.833l1.8-1.8L10.837,0l1.8,1.8L4.875,9.56H24.943v2.547H4.875l7.763,7.767Z" transform="translate(24.943 21.679) rotate(180)"/>
            </svg>`,
          cta_text: 'Shop now',
          img: {
            desktop: 'header/austin-wade-unsplash_1920.jpg',
            mobile: 'header/austin-wade-unsplash_640.jpg',
            alt: 'Casual'
          }
        },
        {
          heading: 'Sale of the summer collection',
          cta_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24.943" height="21.679" viewBox="0 0 24.943 21.679">
              <path id="noun_Arrow_Left_2682937" data-name="noun_Arrow Left_2682937" d="M10.837,21.679,1.8,12.634,0,10.833l1.8-1.8L10.837,0l1.8,1.8L4.875,9.56H24.943v2.547H4.875l7.763,7.767Z" transform="translate(24.943 21.679) rotate(180)"/>
            </svg>`,
          cta_text: 'Shop now',
          img: {
            desktop: 'header/asdrubal-luna-unsplash_1920.jpg',
            mobile: 'header/asdrubal-luna-unsplash_640.jpg',
            alt: 'Generous'
          }

        }
      ],
      currentSlide: '',
      totalSlides: '',
      progHeight: '',
      swiper: {},
      mouseX: 0,
      mouseY: 0
    }
  },
  methods: {
    onSwiper (swiper) {
      this.currentSlide = swiper.realIndex + 1 > 9 ? swiper.realIndex + 1 : `0${swiper.realIndex + 1}`
      this.totalSlides = swiper.slides.length - 2 > 9 ? swiper.slides.length - 2 : `0${swiper.slides.length - 2}`
    },
    onSlideChange (swiper) {
      this.progHeight = `${(parseFloat(getComputedStyle(document.querySelector('.header-progressbar')).height) / (swiper.slides.length - 2)) * (swiper.realIndex + 1)}px`
      this.currentSlide = swiper.realIndex + 1 > 9 ? swiper.realIndex + 1 : `0${swiper.realIndex + 1}`
    },
    onInit (swiper) {
      this.swiper = swiper
    }
  },
  mounted () {
    // Listen on resizing window, then adjust progHeight
    document.querySelector('header.header').classList.add('header--active')
    window.addEventListener('resize', () => {
      this.progHeight = `${(parseFloat(getComputedStyle(document.querySelector('.header-progressbar')).height) / (this.swiper.slides.length - 2)) * (this.swiper.realIndex + 1)}px`
    })
  }
}
</script>
