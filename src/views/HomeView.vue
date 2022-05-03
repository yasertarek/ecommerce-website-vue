<template>
  <HeaderComponent />
  <BannersComponent :id="'banners_1'" />
  <section class="sfu">
    <div class="row">
      <header>
          <h2 class="heading-secondary">Selected just for you</h2>
          <button class="btn btn-outline sfu__btn">Show more</button>
      </header>
    </div>
    <ProductsSwiper :id="0" :products="selected_for_you.data"/>
  </section>
  <!-- Why should choose us section -->
  <section class="choose_us">
    <div class="row">
      <h2 class="heading-secondary" v-text="choose_us.heading"></h2>
      <div class="choose_us__items">
        <div class="choose_us__item" v-for="(item, itemI) in choose_us.items" :key="itemI">
          <div class="choose_us__icon" :class="{'choose_us__icon--fav': item.state}" v-html="item.icon"></div>
          <div class="choose_us__heading" v-text="item.heading"></div>
          <p class="choose_us__text" v-text="item.text"></p>
        </div>
      </div>
    </div>
  </section>
  <section class="products-sec">
    <h2 class="heading-secondary align-center">Products in today</h2>
    <ProductsSwiper :id="1" :products="products.data" />
  </section>
  <!-- Newsletter -->
  <div class="row">
    <NewsletterComponent />
  </div>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue'
import BannersComponent from '@/components/BannersComponent.vue'
import ProductsSwiper from '@/components/ProductsSwiper.vue'

import SelectedForYouData from '@/assets/API/selected_for_you.json'
import productsData from '@/assets/API/products.json'

import NewsletterComponent from '@/components/NewsletterComponent.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      choose_us: {
        heading: 'Why should you choose us?',
        items: [
          {
            icon: `
              <svg xmlns="http://www.w3.org/2000/svg" width="36.777" height="21.718" viewBox="0 0 36.777 21.718">
                <path d="M47.425,30.727l-1.7-3.949a3.9,3.9,0,0,0-3.6-2.361H39.373V23.41a1.512,1.512,0,0,0-1.51-1.51h-19.2a1,1,0,0,0-1.007,1.007,1.025,1.025,0,0,0,1.007,1.007H37.282v7.433a1.652,1.652,0,0,0,1.665,1.665h6.7v4.684a.347.347,0,0,1-.348.348H44.057a3.725,3.725,0,0,0-3.213-1.858,3.809,3.809,0,0,0-3.213,1.858H27.294a3.725,3.725,0,0,0-3.213-1.858,3.809,3.809,0,0,0-3.213,1.858H17.307a1.007,1.007,0,1,0,0,2.013h3.058a3.72,3.72,0,0,0,7.433,0h9.33a3.72,3.72,0,0,0,7.433,0h.813a2.371,2.371,0,0,0,2.361-2.361v-5.42A4.414,4.414,0,0,0,47.425,30.727ZM24.081,41.6a1.7,1.7,0,1,1,1.7-1.7A1.718,1.718,0,0,1,24.081,41.6Zm16.763,0a1.7,1.7,0,1,1,1.7-1.7A1.718,1.718,0,0,1,40.844,41.6Zm-1.51-15.137h2.749a1.814,1.814,0,0,1,1.7,1.123L45.257,31H39.334Z" transform="translate(-10.958 -21.9)"/>
                <path d="M13.307,34.813H20.43a1.007,1.007,0,1,0,0-2.013H13.307A1,1,0,0,0,12.3,33.807,1.025,1.025,0,0,0,13.307,34.813Z" transform="translate(-8.506 -28.58)"/>
                <path d="M8.407,44.813H15.53a1.007,1.007,0,1,0,0-2.013H8.407A1,1,0,0,0,7.4,43.807,1.025,1.025,0,0,0,8.407,44.813Z" transform="translate(-5.503 -34.709)"/>
                <path d="M11.675,53.807A1,1,0,0,0,10.668,52.8H3.507a1.007,1.007,0,1,0,0,2.013H10.63A.986.986,0,0,0,11.675,53.807Z" transform="translate(-2.5 -40.838)"/>
              </svg>
            `,
            heading: 'Free Shipping',
            text: 'All purchases over $199 are eligible for free shipping via USPS First Class Mail.'
          },
          {
            icon: `
              <svg xmlns="http://www.w3.org/2000/svg" width="34.5" height="34.5" viewBox="0 0 34.5 34.5">
                <path d="M6.938,88.531a.721.721,0,1,1,.513-.21A.721.721,0,0,1,6.938,88.531Z" transform="translate(-4.074 -57.042)" fill="#fbb03b"/>
                <path d="M6.67,76.642H0V74.915H4.944v-8.85H0V64.339H6.67Z" transform="translate(0 -42.142)" fill="#fbb03b"/>
                <path d="M31.754,72.171h-9.1v-8.76l.1-.191a5.676,5.676,0,0,1,2.418-2.278,7.49,7.49,0,0,1,6.13-.161,17.948,17.948,0,0,1,1.836.875c.489.256.951.5,1.429.7a4.671,4.671,0,0,0,.617.179,2.767,2.767,0,0,1,2.118,1.352,4.063,4.063,0,0,1,.26,1.875L41.91,65.7l2.255-2.5a2.359,2.359,0,0,1,3.508,3.155l-3.4,3.791Zm-7.368-1.727h7.23l11.78-1.9L46.387,65.2a.632.632,0,0,0-.94-.845l-2.759,3.055L32,67.572l-.025-1.726,3.867-.057a2.766,2.766,0,0,0-.111-1.207c-.066-.15-.641-.292-.95-.368a5.849,5.849,0,0,1-.875-.265c-.544-.23-1.06-.5-1.559-.762a16.41,16.41,0,0,0-1.659-.794,5.767,5.767,0,0,0-4.713.085,4.142,4.142,0,0,0-1.586,1.384Z" transform="translate(-14.842 -39.433)" fill="#fbb03b"/>
                <path d="M51.989,3.854V2.018L46.489,0,35.867,5.461H26.7V18.313H47.745v-3.64c.286.01.569.021.845.041.173.01.345.017.518.017a8.7,8.7,0,0,0,2.881-.514V12.372l-.024.01a7.094,7.094,0,0,1-3.26.611c-.314-.021-.631-.034-.959-.045-.552-.014-1.121-.01-1.725.01-.831.028-1.722.093-2.694.193l-1.063.11a1.009,1.009,0,0,1-.276-2l4.023-.7a.013.013,0,0,0,.01,0A2.537,2.537,0,0,0,47.745,9.4a2.574,2.574,0,0,0-2.174-3.943H39.637L46.607,1.88ZM45.572,7.186a.822.822,0,0,1,.449.128.85.85,0,0,1,0,1.439.827.827,0,0,1-.3.114l-4.023.7a2.733,2.733,0,0,0,.466,5.427,2.5,2.5,0,0,0,.276-.014s2.808-.262,3.585-.29v1.9h-17.6v-9.4Z" transform="translate(-17.489)" fill="#fbb03b"/>
                <rect width="1.725" height="1.725" transform="translate(18.984 11.024)" fill="#fbb03b"/>
              </svg>
            `,
            heading: 'Easy Payments',
            text: 'All payments are processed instantly over a secure payment protocol.',
            state: 1
          },
          {
            icon: `
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30.613" viewBox="0 0 29 30.613">
                <g transform="translate(-5 -3.997)">
                  <path d="M33.227,7.946,19.8,4.042a1.074,1.074,0,0,0-.612,0h0L5.763,7.946A1.074,1.074,0,0,0,5,8.977V20.7C5,30.9,18.657,34.433,19.242,34.578a1.052,1.052,0,0,0,.537-.005C20.617,34.363,34,30.808,34,20.7V8.977a1.074,1.074,0,0,0-.773-1.031ZM31.852,20.7c0,7.841-10.547,11.224-12.352,11.724-1.8-.5-12.352-3.867-12.352-11.724V9.788L19.5,6.19,31.852,9.783Z"/>
                  <path d="M27.7,19.074V20.2a3.222,3.222,0,0,0,.537,6.4h1.611a1.074,1.074,0,1,1,0,2.148H26.627a1.074,1.074,0,0,0,0,2.148H27.7v1.074a1.074,1.074,0,1,0,2.148,0V30.889a3.222,3.222,0,1,0,0-6.444H28.238a1.074,1.074,0,0,1,0-2.148H31.46a1.074,1.074,0,0,0,0-2.148H29.849V19.074a1.074,1.074,0,1,0-2.148,0Z" transform="translate(-9.275 -6.483)"/>
                </g>
              </svg>
            `,
            heading: 'Money-Back Guarantee',
            text: 'If an item arrived damaged or you\'ve changed your mind, you can send it back for a full refund.'
          },
          {
            icon: `
              <svg xmlns="http://www.w3.org/2000/svg" width="34.265" height="34.667" viewBox="0 0 34.265 34.667">
                <g transform="translate(-6.615 -5.977)">
                  <circle cx="1.032" cy="1.032" r="1.032" transform="translate(15.489 27.354)"/>
                  <path d="M40.881,5.977H17.742V17.506H6.615V40.644H29.753V29.115H40.881V5.977Zm-1.8,4.93-9.326,9.326V17.506h-3.43l9.647-9.647-.08-.08h3.189v3.129ZM27.952,29.057c-1.546-.26-3.946-.553-4.809,2.355a19.028,19.028,0,0,1-2.715,4.772,15.354,15.354,0,0,0-1.643,2.658H15.932a6.191,6.191,0,0,1,1.292-3.814,6.1,6.1,0,0,1,1.358-1.144,6.184,6.184,0,0,0,3.073-4.671,8.928,8.928,0,0,0-.6-5.106,9.078,9.078,0,0,1-.645-4.8h2.638c.074.368.138.749.2,1.151.378,2.276.848,5.108,3.873,6.664.169.087.279.147.349.188a1.288,1.288,0,0,0,.481.315v1.432Zm-14.638,1.6a8.253,8.253,0,0,1,.178-2.744,7.639,7.639,0,0,1,1.232-2.485,10.334,10.334,0,0,0,2-6.123H18.6a10.8,10.8,0,0,0,.763,5.422,7.224,7.224,0,0,1,.516,4.207A4.433,4.433,0,0,1,17.558,32.4a7.59,7.59,0,0,0-1.74,1.5,7.977,7.977,0,0,0-1.687,4.939H12.249A21.928,21.928,0,0,0,13.314,30.659Zm14.638-5.135-.007,0c-2.22-1.142-2.56-3.19-2.92-5.358-.047-.283-.1-.57-.149-.856h3.076Zm-8.408-9.613,8.133-8.133H33.5l-9.727,9.727H19.544ZM25.13,7.778l-5.586,5.586V7.778ZM11.215,19.307a28.132,28.132,0,0,1-1.681,4.645c-.367.872-.75,1.783-1.117,2.727V19.307Zm-2.8,13.747a38.446,38.446,0,0,1,2.777-8.4,25.647,25.647,0,0,0,1.849-5.344h1.88a8.55,8.55,0,0,1-1.7,5.125,9.331,9.331,0,0,0-1.477,3.031,9.94,9.94,0,0,0-.234,3.285,21,21,0,0,1-1.142,8.094H8.417V33.054Zm12.393,5.788c.309-.5.739-1.118,1.094-1.625a20.251,20.251,0,0,0,2.966-5.292c.405-1.365,1.134-1.375,2.963-1.061l.12.02v7.958ZM29.753,22.78l9.326-9.326v6.071L31.29,27.314H29.753V22.78Zm4.084,4.534,5.242-5.242v5.242Z"/>
                </g>
              </svg>
            `,
            heading: 'Finest Quality',
            text: 'Designed to last, each of our products has been crafted with the finest materials.'
          }
        ]
      },
      selected_for_you: {
        data: SelectedForYouData.data
      },
      products: {
        data: productsData.data
      }
    }
  },
  components: {
    HeaderComponent,
    BannersComponent,
    ProductsSwiper,
    NewsletterComponent
  },
  mounted () {
    // Listen for scrolling and add animation on scroll
    document.addEventListener('scroll', () => {
      if (document.getElementById('banners_1') && window.scrollY > document.getElementById('banners_1').offsetTop - 300) {
        document.getElementById('banners_1').classList.add('banners--active')
      }
    })
  }
}
</script>
