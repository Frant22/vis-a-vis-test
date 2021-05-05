import VueSlickCarousel from 'vue-slick-carousel';
import Vue from '../vue';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

const corousel = new Vue({
  el: '#corousel',
  data: {
    settings: {
      dots: true,
      dotsClass: 'slick-dots custom-dot-class',
      focusOnSelect: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      touchThreshold: 5,
    },
    box: {
      title: 'Lorem Ipsum',
      description: {
        firstText: 'It is a long established fact that a reader will be distracted',
        secondText: 'The readable content',
        thirdText: 'There are many variations of passages',
      },
    },
  },
  components: { VueSlickCarousel },
  template: `<VueSlickCarousel v-bind="settings">
              <div class="box">
                <h3 class="box__heading">{{ box.title }}</h3>
                <ul class="box__list">
                  <li class="box__element">{{ box.description.firstText }}</li>
                  <li class="box__element">{{ box.description.secondText }}</li>
                  <li class="box__element">{{ box.description.thirdText }}</li>
                </ul>
              </div>

              <div class="box">
                <h3 class="box__heading">{{ box.title }}</h3>
                <ul class="box__list">
                  <li class="box__element">{{ box.description.firstText }}</li>
                  <li class="box__element">{{ box.description.secondText }}</li>
                  <li class="box__element">{{ box.description.thirdText }}</li>
                </ul>
              </div>

              <div class="box">
                <h3 class="box__heading">{{ box.title }}</h3>
                <ul class="box__list">
                  <li class="box__element">{{ box.description.firstText }}</li>
                  <li class="box__element">{{ box.description.secondText }}</li>
                  <li class="box__element">{{ box.description.thirdText }}</li>
                </ul>
              </div>

              <div class="box">
                <h3 class="box__heading">{{ box.title }}</h3>
                <ul class="box__list">
                  <li class="box__element">{{ box.description.firstText }}</li>
                  <li class="box__element">{{ box.description.secondText }}</li>
                  <li class="box__element">{{ box.description.thirdText }}</li>
                </ul>
              </div>

              <div class="box">
                <h3 class="box__heading">{{ box.title }}</h3>
                <ul class="box__list">
                  <li class="box__element">{{ box.description.firstText }}</li>
                  <li class="box__element">{{ box.description.secondText }}</li>
                  <li class="box__element">{{ box.description.thirdText }}</li>
                </ul>
              </div>

              <div class="box">
                <h3 class="box__heading">{{ box.title }}</h3>
                <ul class="box__list">
                  <li class="box__element">{{ box.description.firstText }}</li>
                  <li class="box__element">{{ box.description.secondText }}</li>
                  <li class="box__element">{{ box.description.thirdText }}</li>
                </ul>
              </div>

              <div class="box">
                <h3 class="box__heading">{{ box.title }}</h3>
                <ul class="box__list">
                  <li class="box__element">{{ box.description.firstText }}</li>
                  <li class="box__element">{{ box.description.secondText }}</li>
                  <li class="box__element">{{ box.description.thirdText }}</li>
                </ul>
              </div>

              <div class="box">
                <h3 class="box__heading">{{ box.title }}</h3>
                <ul class="box__list">
                  <li class="box__element">{{ box.description.firstText }}</li>
                  <li class="box__element">{{ box.description.secondText }}</li>
                  <li class="box__element">{{ box.description.thirdText }}</li>
                </ul>
              </div>
            </VueSlickCarousel>`,
});
