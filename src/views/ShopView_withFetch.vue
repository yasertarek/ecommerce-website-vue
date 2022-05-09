<template>
  <main>
    <div class="row">
      <div class="route">
        <router-link to="/" class="route__home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
            <path
              d="M7.028,12.906l.327-.276v7.745A.625.625,0,0,0,7.98,21H19.02a.625.625,0,0,0,.625-.625V12.63l.327.276a.625.625,0,0,0,.806-.955l-3-2.533V7.039a.625.625,0,1,0-1.25,0V8.363L13.9,6.147a.625.625,0,0,0-.806,0l-6.875,5.8a.625.625,0,1,0,.806.955ZM12.1,19.75V15.238H14.9V19.75ZM13.5,7.443l4.895,4.132V19.75H16.147V14.613a.625.625,0,0,0-.625-.625H11.478a.625.625,0,0,0-.625.625V19.75H8.605V11.575Z"
              transform="translate(-6 -6)"
              fill="#b2b2b2"
            />
          </svg>
        </router-link>
        <span
          class="route__path"
          v-for="(path, pathI) in $route.path.slice(1).split('/')"
          :key="pathI"
        >
          &nbsp;/&nbsp;<router-link
            :to="
              '/' +
              $route.path
                .slice(1)
                .split('/')
                .slice(0, pathI + 1)
                .join('/')
            "
            v-text="path"
          ></router-link>
        </span>
      </div>
      <div class="products">
        <aside class="products__filters">
          <ProductsFilter
            :heading="'Product Type'"
            :class="'products__filter--type products__filter--active'"
          >
            <template v-slot:content>
              <div class="products__filter_row">
                <label class="checkbox products__filter_input">
                  <input type="checkbox" name="t_shirts" id="t_shirts" />
                  <span class="checkbox__rect">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.371"
                      height="11.063"
                      viewBox="0 0 13.371 11.063"
                    >
                      <path
                        d="M11.763.25l-.876.929-6.1,6.473L2.955,5.821l-.9-.9-1.8,1.8.9.9L3.91,10.384l.929.929.9-.955,7-7.428L13.62,2Z"
                        transform="translate(-0.249 -0.25)"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </label>
                <label for="t_shirts" class="products__filter_label"
                  >T-Shirts <span>(411)</span></label
                >
              </div>
              <div class="products__filter_row">
                <label class="checkbox">
                  <input type="checkbox" name="sweetshirts" id="sweetshirts" />
                  <span class="checkbox__rect">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.371"
                      height="11.063"
                      viewBox="0 0 13.371 11.063"
                    >
                      <path
                        d="M11.763.25l-.876.929-6.1,6.473L2.955,5.821l-.9-.9-1.8,1.8.9.9L3.91,10.384l.929.929.9-.955,7-7.428L13.62,2Z"
                        transform="translate(-0.249 -0.25)"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </label>
                <label for="sweetshirts" class="products__filter_label"
                  >Sweatshirts <span>(131)</span></label
                >
              </div>
              <div class="products__filter_row">
                <label class="checkbox">
                  <input type="checkbox" name="tank_tops" id="tank_tops" />
                  <span class="checkbox__rect">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.371"
                      height="11.063"
                      viewBox="0 0 13.371 11.063"
                    >
                      <path
                        d="M11.763.25l-.876.929-6.1,6.473L2.955,5.821l-.9-.9-1.8,1.8.9.9L3.91,10.384l.929.929.9-.955,7-7.428L13.62,2Z"
                        transform="translate(-0.249 -0.25)"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </label>
                <label for="tank_tops" class="products__filter_label"
                  >Tank Tops <span>(131)</span></label
                >
              </div>
              <div class="products__filter_row">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    name="dress_shirts"
                    id="dress_shirts"
                  />
                  <span class="checkbox__rect">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.371"
                      height="11.063"
                      viewBox="0 0 13.371 11.063"
                    >
                      <path
                        d="M11.763.25l-.876.929-6.1,6.473L2.955,5.821l-.9-.9-1.8,1.8.9.9L3.91,10.384l.929.929.9-.955,7-7.428L13.62,2Z"
                        transform="translate(-0.249 -0.25)"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </label>
                <label for="dress_shirts" class="products__filter_label"
                  >Dress shirts <span>(8)</span></label
                >
              </div>
            </template>
          </ProductsFilter>
          <ProductsFilter :heading="'Price'" :class="'products__filter--price'">
            <template v-slot:content>
              <div class="range_double">
                <span class="range_double__amount range_double__amount--min"
                  ><span v-text="varMinVal"></span> USD</span
                >
                <span class="range_double__amount range_double__amount--max"
                  ><span v-text="varMaxVal"></span> USD</span
                >
                <div class="range_double__container">
                  <div class="range_double__track"></div>
                  <input
                    type="range"
                    name="range_double__min"
                    id="range_double__min"
                    class="range_double__min"
                    min="0"
                    max="500"
                    value="0"
                    @input="handleMinRange"
                  />
                  <input
                    type="range"
                    name="range_double__max"
                    id="range_double__max"
                    class="range_double__max"
                    min="0"
                    max="500"
                    value="500"
                    @input="handleMaxRange"
                  />
                </div>
              </div>
            </template>
          </ProductsFilter>
          <ProductsFilter
            :heading="'Collection'"
            :class="'products__filter_collection'"
          >
            <template v-slot:content> </template>
          </ProductsFilter>
          <ProductsFilter :heading="'Size'" :class="'products__filter_size'">
            <template v-slot:content>
              <div class="products__filter_size__inputs">
                <div>
                  <input type="checkbox" name="s_xs" id="s_xs" />
                  <label for="s_xs"> XS </label>
                </div>
                <div>
                  <input type="checkbox" name="s_s" id="s_s" />
                  <label for="s_s"> S </label>
                </div>
                <div>
                  <input type="checkbox" name="s_m" id="s_m" />
                  <label for="s_m"> M </label>
                </div>
                <div>
                  <input type="checkbox" name="s_l" id="s_l" />
                  <label for="s_l"> L </label>
                </div>
                <div>
                  <input type="checkbox" name="s_xl" id="s_xl" />
                  <label for="s_xl"> XL </label>
                </div>
                <div>
                  <input type="checkbox" name="s_xll" id="s_xll" />
                  <label for="s_xll"> XLL </label>
                </div>
              </div>
            </template>
          </ProductsFilter>
          <ProductsFilter :heading="'Color'" :class="'products__filter_color'">
            <template v-slot:content>
              <div class="products__filter_color__inputs">
                <div>
                  <input type="checkbox" name="black" id="black" />
                  <label for="black">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" name="brown" id="brown" />
                  <label for="brown">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" name="wheaten" id="wheaten" />
                  <label for="wheaten">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" name="gray" id="gray" />
                  <label for="gray">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" name="white" id="white" />
                  <label for="white">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" name="blue" id="blue" />
                  <label for="blue">
                    <span></span>
                  </label>
                </div>
              </div>
            </template>
          </ProductsFilter>
        </aside>
        <div class="products__view">
          <header class="products__view_header">
            <h1 v-if="$route.params.collection">
              {{ $route.name }}'s {{ $route.params.collection }}
            </h1>
            <h1 v-else>{{ $route.name }}</h1>
            <div class="products__filter_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="15.613"
                viewBox="0 0 22 15.613"
              >
                <path
                  d="M7.118,0A3.678,3.678,0,0,0,3.539,2.843H.845a.845.845,0,1,0,0,1.69H3.539a3.678,3.678,0,0,0,7.158,0H21.155a.845.845,0,1,0,0-1.69H10.7A3.678,3.678,0,0,0,7.118,0Zm0,5.686A1.988,1.988,0,1,1,9.106,3.7,1.988,1.988,0,0,1,7.118,5.686Z"
                  transform="translate(0)"
                />
                <path
                  d="M14.912,8.3a3.678,3.678,0,0,0-3.579,2.843H.845a.845.845,0,1,0,0,1.69H11.3a3.678,3.678,0,0,0,7.158,0h2.694a.845.845,0,0,0,0-1.69H18.461A3.678,3.678,0,0,0,14.912,8.3Zm0,5.667A1.988,1.988,0,1,1,16.9,11.978,1.988,1.988,0,0,1,14.912,13.967Z"
                  transform="translate(0 -0.049)"
                />
              </svg>
            </div>
          </header>
          <div class="products__content">
            <div v-for="(product, productI) in post.data" :key="productI">
              <ProductComponent :prod="product" />
            </div>
          </div>
        </div>
      </div>
      <NewsletterComponent />
    </div>
  </main>
</template>
<script>
// @ is an alias to /src
// import HeaderComponent from '@/components/HeaderComponent.vue'

import ProductsFilter from '@/components/ProductsFilterComponent.vue'
import ProductComponent from '@/components/ProductComponent.vue'
import NewsletterComponent from '@/components/NewsletterComponent.vue'
export default {
  name: 'ShopView',
  data () {
    return {
      threshold: 10,
      minVal: 0,
      maxVal: 500,
      varMinVal: 0,
      varMaxVal: 500,
      loading: false,
      post: {
        cat: 'men',
        collection: 'all',
        type: 'all',
        data: [
          {
            img: {
              front: 'jackets_1_black_front.png',
              back: 'jackets_1_black_back.png'
            },
            title: 'Mercury Anorak Black Men',
            description: 'Long sleeve anorak with front pocket.',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xll'],
            price: 99,
            curr: {
              code: 'USD',
              sym: '$'
            }
          },
          {
            img: {
              front: 'jackets_2_black_front.png',
              back: 'jackets_2_black_back.png'
            },
            badge: {
              bg_color: 'black',
              text: 'new'
            },
            title: 'Track 1/4 Zip Jacket Black Men',
            description: 'Training zipper with side stripe.',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xll'],
            price: 89.99,
            curr: {
              code: 'USD',
              sym: '$'
            }
          },
          {
            img: {
              front: 'jackets_3_darkblue_front.png',
              back: 'jackets_3_darkblue_back.png'
            },
            badge: {
              bg_color: 'red',
              text: '30%'
            },
            title: 'Track Zip Jacket Navy Men',
            description: 'Training zipper with side stripe.',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xll'],
            price: 89.99,
            old_price: 119.99,
            curr: {
              code: 'USD',
              sym: '$'
            }
          },
          {
            img: {
              front: 'tshirts_1_black_front.png',
              back: 'tshirts_1_black_back.png'
            },
            badge: {
              bg_color: 'red',
              text: '30%'
            },
            title: 'Ultimate Training Tee Black',
            description: 'Training T-shirt in a lightweight mesh fabric.',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xll'],
            price: 39,
            old_price: 80,
            curr: {
              code: 'USD',
              sym: '$'
            }
          },
          {
            img: {
              front: 'tshirts_1_darkblue_front.png',
              back: 'tshirts_1_darkblue_back.png'
            },
            badge: {
              bg_color: 'red',
              text: '30%'
            },
            title: 'Ultimate Training Tee Black',
            description: 'Training T-shirt in a lightweight mesh fabric.',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xll'],
            price: 39,
            old_price: 80,
            curr: {
              code: 'USD',
              sym: '$'
            }
          },
          {
            img: {
              front: 'tshirts_1_orange_front.png',
              back: 'tshirts_1_orange_back.png'
            },
            badge: {
              bg_color: 'red',
              text: '30%'
            },
            title: 'Ultimate Training Tee Black',
            description: 'Training T-shirt in a lightweight mesh fabric.',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xll'],
            price: 39,
            old_price: 80,
            curr: {
              code: 'USD',
              sym: '$'
            }
          },
          {
            img: {
              front: 'tshirts_2_black_front.png',
              back: 'tshirts_2_black_back.png'
            },
            badge: {
              bg_color: 'red',
              text: '30%'
            },
            title: 'Mercury Tee Black',
            description: 'Workout T-shirt in mesh fabric.',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xll'],
            price: 39,
            old_price: 80,
            curr: {
              code: 'USD',
              sym: '$'
            }
          },
          {
            img: {
              front: 'tshirts_2_yellow_front.png',
              back: 'tshirts_2_yellow_back.png'
            },
            badge: {
              bg_color: 'red',
              text: '30%'
            },
            title: 'Mercury Tee Black',
            description: 'Workout T-shirt in mesh fabric.',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xll'],
            price: 39,
            old_price: 80,
            curr: {
              code: 'USD',
              sym: '$'
            }
          },
          {
            img: {
              front: 'tshirts_3_black_front.png',
              back: 'tshirts_3_black_back.png'
            },
            badge: {
              bg_color: 'red',
              text: '30%'
            },
            title: 'Essential Tee Black Men',
            description: 'T-shirt with ICIW embroidery logo. Standard fit.',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xll'],
            price: 39,
            old_price: 80,
            curr: {
              code: 'USD',
              sym: '$'
            }
          },
          {
            img: {
              front: 'tshirts_3_blue_front.png',
              back: 'tshirts_3_blue_back.png'
            },
            badge: {
              bg_color: 'red',
              text: '30%'
            },
            title: 'Essential Tee Black Men',
            description: 'T-shirt with ICIW embroidery logo. Standard fit.',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xll'],
            price: 39,
            old_price: 80,
            curr: {
              code: 'USD',
              sym: '$'
            }
          },
          {
            img: {
              front: 'tshirts_3_green_front.png',
              back: 'tshirts_3_green_back.png'
            },
            badge: {
              bg_color: 'red',
              text: '30%'
            },
            title: 'Essential Tee Black Men',
            description: 'T-shirt with ICIW embroidery logo. Standard fit.',
            sizes: ['xs', 's', 'm', 'l', 'xl', 'xll'],
            price: 39,
            old_price: 80,
            curr: {
              code: 'USD',
              sym: '$'
            }
          }
        ]
      },
      error: null
    }
  },
  props: ['collection', 'type'],
  components: {
    ProductsFilter,
    ProductComponent,
    NewsletterComponent
  },
  methods: {
    toggleFilter (e) {
      e.currentTarget.parentElement.classList.toggle(
        'products__filter--active'
      )
    },
    handleMinRange (e) {
      if (
        parseInt(e.target.value) >
        parseInt(document.querySelector('.range_double__max').value) -
          this.threshold
      ) {
        e.target.value =
          parseInt(document.querySelector('.range_double__max').value) -
          this.threshold
      }
      this.setBackgroundTrack()
      this.varMinVal = parseInt(e.target.value)
    },
    handleMaxRange (e) {
      if (
        parseInt(e.target.value) <
        parseInt(document.querySelector('.range_double__min').value) +
          this.threshold
      ) {
        e.target.value =
          parseInt(document.querySelector('.range_double__min').value) +
          this.threshold
      }
      this.setBackgroundTrack()
      this.varMaxVal = parseInt(e.target.value)
    },
    setBackgroundTrack (
      start = parseInt(document.querySelector('.range_double__min').value),
      end = parseInt(document.querySelector('.range_double__max').value)
    ) {
      document.querySelector(
        '.range_double__track'
      ).style.background = `linear-gradient(to right, #CECECE 0 ${
        start / 5
      }%, #000 ${start / 5}% ${end / 5}%, #CECECE ${end / 5}% 100%)`
    },
    fetchData () {
      this.error = this.post = null
      this.loading = true
      fetch('http://127.0.0.1:5500/src/assets/API/main/men/data.json')
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          this.post = data
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  },
  mounted () {
    this.setBackgroundTrack()
  },
  created () {
    console.log(this.$route)
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  }
}
</script>
