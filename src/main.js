/* eslint-disable no-new */
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

import VueSlickCarousel from 'vue-slick-carousel';

import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

import Vue from '../vue';

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

Vue.component('section-cards', {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Lorem Ipsum is simply dummy text',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          list: [
            'Lorem Ipsum has been the industry\'s',
            'Standard dummy text ever since',
            'But also the leap into electronic typesetting',
          ],
        },
        {
          id: 2,
          title: 'Lorem Ipsum is simply dummy text',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          list: [
            'Lorem Ipsum has been the industry\'s',
            'Standard dummy text ever since',
            'But also the leap into electronic typesetting',
            ' It was popularised in the 1960s',
          ],
        },
        {
          id: 3,
          title: 'Lorem Ipsum is simply dummy text',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          list: [
            'Lorem Ipsum has been the industry\'s standard dummy text ever since',
            'But also the leap into electronic typesetting',
          ],
        },
        {
          id: 4,
          title: 'Lorem Ipsum is simply',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          list: [
            'Lorem Ipsum has been the industry\'s',
            'Standard dummy text ever since',
            'But also the leap into electronic typesetting',
          ],
        },
        {
          id: 5,
          title: 'Lorem Ipsum is simply',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          list: [
            'Lorem Ipsum has been the industry\'s',
            'Standard dummy text ever since',
            'But also the leap into electronic typesetting',
          ],
        },
      ],
    };
  },
  methods: {
    randomList(cards) {
      return cards.sort(() => 0.5 - Math.random());
    },
  },
  template:
    `<div class="fourthsection__content">
      <div v-for="card in randomList(cards)" :key="card.id" class="fourthsection__card card">
        <div class="card__image"></div>
        <h3 class="card__title">{{ card.title }}</h3>
        <p class="card__description">{{ card.description }}</p>
        <ul class="card__list">
          <li v-for="item in card.list" class="card__item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>`,
});

new Vue({ el: '#fourth' });

const form = new Vue({
  el: '#form',
  data: {
    name: null,
    email: null,
    phone: null,
    confirm: null,
    isNameValid: true,
    isEmailValid: true,
    isPhoneValid: true,
    isConfirm: true,
  },
  methods: {
    checkForm(e) {
      if (!this.name) {
        this.isNameValid = false;
      }
      if (!this.email || !this.validEmail(this.email)) {
        this.isEmailValid = false;
      }
      if (!this.phone || !this.validPhone(this.phone)) {
        this.isPhoneValid = false;
      }
      if (!this.confirm) {
        this.isConfirm = false;
      }

      alert('Error');

      e.preventDefault();
    },

    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    validPhone(phone) {
      const re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
      return re.test(phone);
    },
  },
});

Vue.component('VueSlider', VueSlider);
new Vue({ el: '#fifth' });
