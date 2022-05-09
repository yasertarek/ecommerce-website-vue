<template>
  <div class="demo">Uncompleted yet</div>
  <NavBarComponent :oneClick="oneClick" :handleSearchIcon="handleSearchIcon" :navLinks="navLinks" :route="$route.name"/>
  <router-view />
  <FooterComponent :footerLinks="footerLinks" />
</template>
<script>

import NavBarComponent from '@/components/NavBarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    NavBarComponent,
    FooterComponent
  },
  data () {
    return {
      result: [],
      delay: 200,
      clicks: 0,
      timer: null,
      navLinks: [
        {
          title: 'Men',
          route: '/men',
          firstList: [
            { title: 'Sale', route: '/sale' },
            { title: 'Bestsellers', route: '/bestsellers' },
            { title: 'Latest Arrivals', route: '/latest_arrivals' }
          ],
          sub_lists: [
            [
              { title: 'Shoes', route: '/men/shoes' },
              { title: 'Lifestyle', route: '/men/shoes/lifestyle' },
              { title: 'Running', route: '/men/shoes/running' },
              { title: 'Soccer', route: '/men/shoes/soccer' },
              { title: 'Basketball', route: '/men/shoes/basketball' },
              { title: 'Football', route: '/men/shoes/football' },
              { title: 'Golf', route: '/men/shoes/golf' },
              { title: 'Baseball', route: '/men/shoes/baseball' }
            ],
            [
              { title: 'Clothing', route: '/men/clothing' },
              { title: 'Pants', route: '/men/clothing/pants' },
              { title: 'Hoodies & Sweatshirts', route: '/men/clothing/hoodies' },
              { title: 'Jackets & Vests', route: '/men/clothing/jackets' },
              { title: 'Track Suits', route: '/men/clothing/suits' },
              { title: 'Short Sleeve Shirts', route: '/men/clothing/short_shirts' },
              { title: 'T-Shirts', route: '/men/clothing/t_shirts' },
              { title: 'Jerseys', route: '/men/clothing/jerseys' },
              { title: 'Shorts', route: '/men/clothing/shorts' },
              { title: 'Jeans', route: '/men/clothing/jeans' }
            ],
            [
              { title: 'Accessories', route: '/men/accessories' },
              { title: 'Backpacks', route: '/men/accessories/backpacks' },
              { title: 'Caps & Hats', route: '/men/accessories/caps_hats' },
              { title: 'Watches', route: '/men/accessories/watches' },
              { title: 'Belts', route: '/men/accessories/belts' },
              { title: 'Bags', route: '/men/accessories/bags' },
              { title: 'Wallets & Cases', route: '/men/accessories/wallets_cases' },
              { title: 'Scarves', route: '/men/accessories/scraves' },
              { title: 'Glasses', route: '/men/accessories/glasses' }
            ]
          ]
        },
        {
          title: 'Women',
          route: '/women',
          firstList: [
            { title: 'Sale', route: '/sale' },
            { title: 'Bestsellers', route: '/bestsellers' },
            { title: 'Latest Arrivals', route: '/latest_arrivals' }
          ],
          sub_lists: [
            [
              { title: 'Shoes', route: '/women/shoes' },
              { title: 'Lifestyle', route: '/women/shoes/lifestyle' },
              { title: 'Running', route: '/women/shoes/running' },
              { title: 'Soccer', route: '/women/shoes/soccer' },
              { title: 'Basketball', route: '/women/shoes/basketball' },
              { title: 'Football', route: '/women/shoes/football' },
              { title: 'Golf', route: '/women/shoes/golf' },
              { title: 'Baseball', route: '/women/shoes/baseball' }
            ],
            [
              { title: 'Clothing', route: '/women/clothing' },
              { title: 'Pants', route: '/women/clothing/pants' },
              { title: 'Hoodies & Sweatshirts', route: '/women/clothing/hoodies' },
              { title: 'Jackets & Vests', route: '/women/clothing/jackets' },
              { title: 'Track Suits', route: '/women/clothing/suits' },
              { title: 'Short Sleeve Shirts', route: '/women/clothing/short_shirts' },
              { title: 'T-Shirts', route: '/women/clothing/t_shirts' },
              { title: 'Jerseys', route: '/women/clothing/jerseys' },
              { title: 'Shorts', route: '/women/clothing/shorts' },
              { title: 'Jeans', route: '/women/clothing/jeans' }
            ],
            [
              { title: 'Accessories', route: '/women/accessories' },
              { title: 'Backpacks', route: '/women/accessories/backpacks' },
              { title: 'Caps & Hats', route: '/women/accessories/caps_hats' },
              { title: 'Watches', route: '/women/accessories/watches' },
              { title: 'Belts', route: '/women/accessories/belts' },
              { title: 'Bags', route: '/women/accessories/bags' },
              { title: 'Wallets & Cases', route: '/women/accessories/wallets_cases' },
              { title: 'Scarves', route: '/women/accessories/scraves' },
              { title: 'Glasses', route: '/women/accessories/glasses' }
            ]
          ]
        },
        {
          title: 'Kids',
          route: '/kids',
          firstList: [
            { title: 'Sale', route: '/sale' },
            { title: 'Bestsellers', route: '/bestsellers' },
            { title: 'Latest Arrivals', route: '/latest_arrivals' }
          ],
          sub_lists: [
            [
              { title: 'Shoes', route: '/kids/shoes' },
              { title: 'Lifestyle', route: '/kids/shoes/lifestyle' },
              { title: 'Running', route: '/kids/shoes/running' },
              { title: 'Soccer', route: '/kids/shoes/soccer' },
              { title: 'Basketball', route: '/kids/shoes/basketball' },
              { title: 'Football', route: '/kids/shoes/football' },
              { title: 'Golf', route: '/kids/shoes/golf' },
              { title: 'Baseball', route: '/kids/shoes/baseball' }
            ],
            [
              { title: 'Clothing', route: '/kids/clothing' },
              { title: 'Pants', route: '/kids/clothing/pants' },
              { title: 'Hoodies & Sweatshirts', route: '/kids/clothing/hoodies' },
              { title: 'Jackets & Vests', route: '/kids/clothing/jackets' },
              { title: 'Track Suits', route: '/kids/clothing/suits' },
              { title: 'Short Sleeve Shirts', route: '/kids/clothing/short_shirts' },
              { title: 'T-Shirts', route: '/kids/clothing/t_shirts' },
              { title: 'Jerseys', route: '/kids/clothing/jerseys' },
              { title: 'Shorts', route: '/kids/clothing/shorts' },
              { title: 'Jeans', route: '/kids/clothing/jeans' }
            ],
            [
              { title: 'Accessories', route: '/kids/accessories' },
              { title: 'Backpacks', route: '/kids/accessories/backpacks' },
              { title: 'Caps & Hats', route: '/kids/accessories/caps_hats' },
              { title: 'Watches', route: '/kids/accessories/watches' },
              { title: 'Belts', route: '/kids/accessories/belts' },
              { title: 'Bags', route: '/kids/accessories/bags' },
              { title: 'Wallets & Cases', route: '/kids/accessories/wallets_cases' },
              { title: 'Scarves', route: '/kids/accessories/scraves' },
              { title: 'Glasses', route: '/kids/accessories/glasses' }
            ]
          ]
        }
      ],
      footerLinks: [
        {
          title: 'Shopping online',
          list: [
            {
              title: 'Order Status',
              link: '/order_status'
            },
            {
              title: 'Shipping and Delivery',
              link: '/shipping_and_Delivery'
            },
            {
              title: 'Returns',
              link: '/returns'
            },
            {
              title: 'Payment Options',
              link: '/payment_options'
            },
            {
              title: 'Contact Us',
              link: '/contact_us'
            }
          ]
        },
        {
          title: 'Information',
          list: [
            {
              title: 'Gift Cards',
              link: '/gift_cards'
            },
            {
              title: 'Find a store',
              link: '/find_a_store'
            },
            {
              title: 'Newsletter',
              link: '/newsletter'
            },
            {
              title: 'Bacome a member',
              link: '/bacome_a_member'
            },
            {
              title: 'Site feedback',
              link: '/site_feedback'
            }
          ]
        },
        {
          title: 'Contact',
          list: [
            {
              title: 'store@uikit.com',
              link: ''
            },
            {
              title: 'Hotline: +1 131 138 138',
              link: ''
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleSearchIcon (e) {
      // check if search bar is visible, then search | else show search bar
      if (e.currentTarget.parentElement.classList.contains('nav__icon--search--active')) {
        // check if there is input to search for, then search | else show warn message says you should enter product to look for
        if (e.currentTarget.parentElement.querySelector('input').value !== '') {
          // search
        } else {
          // show message
          window.alert('You should enter product to search for !')
        }
      } else {
        // show search bar
        e.currentTarget.parentElement.classList.add('nav__icon--search--active')
        // move links list
        document.querySelector('.nav__links').classList.add('nav__links--moved')
        // focus in search bar
        e.currentTarget.parentElement.querySelector('input').focus()
      }
    },
    oneClick (e) {
      if (window.innerWidth < 900) {
        /* ** Simulate Double click event ** */
        this.clicks++
        e.currentTarget.parentElement.parentElement.querySelector('.nav__sub_menu').classList.toggle('nav__sub_menu--active')
        // check if user clicked only once, then start timer | else cut timer and trigger double click
        if (this.clicks === 1) {
          this.timer = setTimeout(() => {
            this.result.push(e.type)
            // if timer passed, trigger one click
            this.clicks = 0
          }, this.delay)
        } else {
          clearTimeout(this.timer)
          // Route
          this.$router.push(e.currentTarget.getAttribute('href'))
          this.result.push('dblclick')
          this.clicks = 0
        }
        /* **** */
      } else {
        // Route
        this.$router.push(e.currentTarget.getAttribute('href'))
      }
    }
  },
  mounted () {
    // Listen for scroll on window, toggle scrolled class on navbar
    window.addEventListener('scroll', () => {
      if (window.scrollY > document.querySelector('nav.nav').offsetHeight + 50) {
        document.querySelector('nav.nav').classList.add('nav--scrolled')
      } else {
        document.querySelector('nav.nav').classList.remove('nav--scrolled')
      }
    })
    // Listen for clicking anywhere
    document.addEventListener('click', (e) => {
      // If user clicked outside searchbar of navbar, then hide it
      if (!e.target.closest('.nav__icon--search') && !e.target.closest('.nav__icon--search svg')) {
        document.querySelector('.nav__icon--search').classList.remove('nav__icon--search--active')
        // move links list
        document.querySelector('.nav__links').classList.remove('nav__links--moved')
      }
      // check for clicking outside menu in mobile and then hide it
      // if(e.target)
    })
  },
  unmounted () {
    console.log('Destroyed')
  },
  watch: {
    $route (to, from) {
      document.querySelector('.nav').classList.remove('nav--active')
      document.querySelector('body').classList.remove('body--overflow-y')
    }
  }
}
</script>
