<template>
  <div class="newsletter" :style="`background-image: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${require('@/assets/imgs/blake-wisz-GFrBMipOd_E-unsplash.png')})`">
    <p class="newsletter__text">Subscribe to our newsletter and receive exclusive offers every week</p>
    <form action="">
      <input type="email" class="input" placeholder="Enter your email" />
      <button class="btn btn-yellow">Subscribe</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'NewsletterComponent'
}
</script>
