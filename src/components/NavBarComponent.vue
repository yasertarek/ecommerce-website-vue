<template>
  <nav class="nav" :class="{ 'nav--routed' : route !== 'home'}">
    <div class="row nav__wrapper">
      <div class="nav__elmnt nav__menu">
        <header class="nav__menu_header">
          <div class="nav__menu-icon" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
          </div>
          <router-link to="/" class="nav__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 45.77 35.001"
            >
              <defs></defs>
              <path
                class="a"
                d="M437.579,459a1.344,1.344,0,0,1-1.3-.867l-3.26-8.556H418.69a2.69,2.69,0,0,1-2.69-2.692V426.692A2.691,2.691,0,0,1,418.7,424h18.843a1.346,1.346,0,0,1,1.218.773l4.07,8.65h16.252a2.69,2.69,0,0,1,2.69,2.692v20.192a2.691,2.691,0,0,1-2.7,2.692Zm-.895-32.308H418.7s0,6.731,0,20.192h27.494Zm7.41,9.423,5.432,11.542a1.346,1.346,0,0,1-.332,1.586l-8.073,7.064h17.952s0-6.731,0-20.192Zm-5.986,19.251,6.617-5.79H435.9Z"
                transform="translate(-416 -424)"
              />
            </svg>
          </router-link>
          <router-link to="/" class="nav__site-name"> E-Shop </router-link>
          <div class="nav__menu_profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19 19"
            >
              <path
                class="a"
                d="M23.144,19.823l-4.2-1.723a.594.594,0,0,1-.375-.548V16.57a.557.557,0,0,1,.119-.349,8.265,8.265,0,0,0,1.721-5.03C20.41,8.086,18.437,6,15.5,6s-4.91,2.086-4.91,5.192a8.266,8.266,0,0,0,1.721,5.03.557.557,0,0,1,.119.348v.981a.594.594,0,0,1-.375.548l-4.2,1.723A2.97,2.97,0,0,0,6,22.575v1.634A.792.792,0,0,0,6.792,25H24.208A.792.792,0,0,0,25,24.208V22.575A2.97,2.97,0,0,0,23.144,19.823Zm.273,3.594H7.583v-.842a1.392,1.392,0,0,1,.874-1.287l4.2-1.723a2.172,2.172,0,0,0,1.357-2.013V16.57a2.145,2.145,0,0,0-.468-1.34,6.729,6.729,0,0,1-1.372-4.038c0-2.66,1.718-3.608,3.327-3.608s3.327.948,3.327,3.608a6.729,6.729,0,0,1-1.372,4.038,2.146,2.146,0,0,0-.468,1.34v.981a2.172,2.172,0,0,0,1.357,2.013l4.2,1.723a1.392,1.392,0,0,1,.874,1.287Z"
                transform="translate(-6 -6)"
              />
            </svg>
          </div>
        </header>
        <ul class="nav__links">
          <li v-for="(link, linkI) in navLinks" :key="linkI">
            <router-link class="nav__link" :to="link.route">
              <!-- <nav-link class="nav__link" :href="`${window.location.protocol}//${window.location.host}/${window.location.pathname.split('/')[1]}${link.route}`" v-text="link.title" @click="oneClick"></nav-link> -->
              <a :href="link.route" v-text="link.title" @click.prevent="oneClick"></a>
            </router-link>
            <ul class="nav__sub_menu" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
              <li>
                <ul>
                  <li v-for="(fstList, fstListI) in link.firstList" :key="fstListI"><router-link :to="fstList.route" v-text="fstList.title"></router-link></li>
                </ul>
              </li>
              <li v-for="(subList, subListI) in link.sub_lists" :key="subListI">
                <ul>
                  <li v-for="(subItem, subItemI) in subList" :key="subItemI"><router-link :to="subItem.route" v-text="subItem.title"></router-link></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="nav__elmnt">
        <div class="nav__icon nav__icon--search ">
          <input type="text" name="search" id="search" placeholder="Enter the product you are looking for" class="nav__search-bar input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21.996 22"
            @click="handleSearchIcon"
          >
            <path
              class="a"
              d="M14.129,22.253a8.109,8.109,0,0,0,5.061-1.768l7.246,7.246a.917.917,0,1,0,1.3-1.3l-7.246-7.246a8.131,8.131,0,1,0-6.357,3.064ZM9.677,9.677a6.3,6.3,0,1,1,0,8.9A6.253,6.253,0,0,1,9.677,9.677Z"
              transform="translate(-6.004 -6)"
            />
          </svg>
        </div>
        <div class="nav__icon nav__icon--profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 19"
          >
            <path
              class="a"
              d="M23.144,19.823l-4.2-1.723a.594.594,0,0,1-.375-.548V16.57a.557.557,0,0,1,.119-.349,8.265,8.265,0,0,0,1.721-5.03C20.41,8.086,18.437,6,15.5,6s-4.91,2.086-4.91,5.192a8.266,8.266,0,0,0,1.721,5.03.557.557,0,0,1,.119.348v.981a.594.594,0,0,1-.375.548l-4.2,1.723A2.97,2.97,0,0,0,6,22.575v1.634A.792.792,0,0,0,6.792,25H24.208A.792.792,0,0,0,25,24.208V22.575A2.97,2.97,0,0,0,23.144,19.823Zm.273,3.594H7.583v-.842a1.392,1.392,0,0,1,.874-1.287l4.2-1.723a2.172,2.172,0,0,0,1.357-2.013V16.57a2.145,2.145,0,0,0-.468-1.34,6.729,6.729,0,0,1-1.372-4.038c0-2.66,1.718-3.608,3.327-3.608s3.327.948,3.327,3.608a6.729,6.729,0,0,1-1.372,4.038,2.146,2.146,0,0,0-.468,1.34v.981a2.172,2.172,0,0,0,1.357,2.013l4.2,1.723a1.392,1.392,0,0,1,.874,1.287Z"
              transform="translate(-6 -6)"
            />
          </svg>
        </div>
        <div class="nav__icon nav__icon--cart">
          <router-link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
            >
              <g transform="translate(-6 -6)">
                <path
                  class="a"
                  d="M6.917,7.833H8.448l2.295,10.355a3.289,3.289,0,0,0-1.871,3.042,3.133,3.133,0,0,0,2.962,3.275H23.988a.917.917,0,1,0,0-1.833H11.833A1.332,1.332,0,0,1,10.7,21.231a1.332,1.332,0,0,1,1.128-1.442H23.988a.917.917,0,0,0,.863-.606l3.1-8.591a.917.917,0,0,0-.863-1.227H10.665l-.586-2.646A.916.916,0,0,0,9.184,6H6.917a.917.917,0,0,0,0,1.833ZM25.779,11.2l-2.435,6.758H12.568l-1.5-6.758H25.779Z"
                />
                <path
                  class="a"
                  d="M19.261,50a.917.917,0,0,0,0,1.833h1.164a.917.917,0,1,0,0-1.833Z"
                  transform="translate(-6.687 -23.833)"
                />
                <path
                  class="a"
                  d="M37.713,50a.917.917,0,0,0,0,1.833h1.164a.917.917,0,1,0,0-1.833Z"
                  transform="translate(-16.682 -23.833)"
                />
              </g>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBarComponent',
  props: ['navLinks', 'handleSearchIcon', 'oneClick', 'route'],
  data () {
    return {

    }
  },
  methods: {
    toggleMenu () {
      document.querySelector('nav.nav').classList.toggle('nav--active')
      document.querySelector('body').classList.toggle('body--overflow-y')
    },
    onMouseEnter (e) {
      e.currentTarget.parentElement.querySelector('.nav__link').classList.add('nav__link--active')
    },
    onMouseLeave (e) {
      e.currentTarget.parentElement.querySelector('.nav__link').classList.remove('nav__link--active')
    }
  }
}
</script>
