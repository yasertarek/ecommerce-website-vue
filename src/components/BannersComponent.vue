<template>
  <div class="row">
      <div class="banners" :id="id">
      <div class="banner" v-for="(banner, i) in banners" :key="i">
        <div class="banner__content">
          <div class="banner__text">
            <span class="banner__disc" v-if="banner.disc" v-text="banner.disc"></span>
            <h4 class="banner__heading" v-html="banner.heading"></h4>
            <button class="btn btn-light" v-text="banner.btn"></button>
          </div>
          <img :src="require('@/assets/imgs/'+banner.img)" :alt="banner.alt" />
        </div>
        <span class="banner__animation"></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BannersComponent',
  components: {

  },
  props: ['id'],
  data () {
    return {
      banners: [
        {
          heading: 'New arrivals<br>are now in!',
          btn: 'Show Collection',
          img: 'tyler-nix-unsplash_1920.jpg',
          alt: 'Adult Black Clothes'
        },
        {
          heading: 'Basic t-shirts<br>$29,99',
          btn: 'More details',
          img: 'beach-black-pants-black-shirt-2001293.png',
          alt: 'Beach black pants black shirt'
        },
        {
          heading: 'Sale this<br>summer',
          btn: 'View All',
          img: 'tyler-nix-Zhh3WM2ko3s-unsplash.jpg',
          alt: 'Person sale sign',
          disc: '-50%'
        }
      ]
    }
  }
}
</script>
