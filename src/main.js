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
    value: null,
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
      if (!this.email && !this.validEmail(this.email)) {
        this.isEmailValid = false;
      }
      if (!this.phone && !this.validPhone(this.phone)) {
        this.isPhoneValid = false;
      }
      if (!this.confirm) {
        this.isConfirm = false;
      }

      if (this.isNameValid && this.isEmailValid && this.isPhoneValid && this.isConfirm) {
        alert('Form has sent!');
      }

      e.preventDefault();
    },

    validEmail(email) {
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return re.test(email);
    },

    validPhone(phone) {
      const re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
      return re.test(phone);
    },
  },
});

const slider = new Vue({
  el: '#slider',
  data: {
    value: 1500,
    marks: {
      0: '',
      500: {
        label: '500 грн',
        style: {
          width: '4px',
          height: '0.8rem',
          display: 'block',
          backgroundColor: '#b4b4b4',
          transform: 'translate(0, -0.3rem)',
          borderRadius: '1.2rem',
        },
        labelStyle: {
          color: '#b4b4b4',
          padding: '0.8rem',
          fontWeight: 400,
          fontSize: '1rem',
        },
      },
      1500: {
        label: '1500 грн',
        style: {
          width: '4px',
          height: '0.8rem',
          display: 'block',
          backgroundColor: '#b4b4b4',
          transform: 'translate(0, -0.3rem)',
          borderRadius: '1.2rem',
        },
        labelStyle: {
          color: '#b4b4b4',
          padding: '0.8rem',
          fontWeight: 400,
          fontSize: '1rem',
        },
      },
      2500: {
        label: '2500 грн',
        style: {
          width: '4px',
          height: '0.8rem',
          display: 'block',
          backgroundColor: '#b4b4b4',
          transform: 'translate(0, -0.3rem)',
          borderRadius: '1.2rem',
        },
        labelStyle: {
          color: '#b4b4b4',
          padding: '0.8rem',
          fontWeight: 400,
          fontSize: '1rem',
        },
      },
      3500: {
        label: '3500 грн',
        style: {
          width: '4px',
          height: '0.8rem',
          display: 'block',
          backgroundColor: '#b4b4b4',
          transform: 'translate(0, -0.3rem)',
          borderRadius: '1.2rem',
        },
        labelStyle: {
          color: '#b4b4b4',
          padding: '0.8rem',
          fontWeight: 400,
          fontSize: '1rem',
        },
      },
      4500: {
        label: '4500 грн',
        style: {
          width: '4px',
          height: '0.8rem',
          display: 'block',
          backgroundColor: '#b4b4b4',
          transform: 'translate(0, -0.3rem)',
          borderRadius: '1.2rem',
        },
        labelStyle: {
          color: '#b4b4b4',
          padding: '0.8rem',
          fontWeight: 400,
          fontSize: '1rem',
        },
      },
      5500: {
        label: '5500 грн',
        style: {
          width: '4px',
          height: '0.8rem',
          display: 'block',
          backgroundColor: '#b4b4b4',
          transform: 'translate(0, -0.3rem)',
          borderRadius: '1.2rem',
        },
        labelStyle: {
          color: '#b4b4b4',
          padding: '0.8rem',
          fontWeight: 400,
          fontSize: '1rem',
        },
      },
      6500: {
        label: '6500 грн',
        style: {
          width: '4px',
          height: '0.8rem',
          display: 'block',
          backgroundColor: '#b4b4b4',
          transform: 'translate(0, -0.3rem)',
          borderRadius: '1.2rem',
        },
        labelStyle: {
          color: '#b4b4b4',
          padding: '0.8rem',
          fontWeight: 400,
          fontSize: '1rem',
        },
      },
      7000: '',
    },
    options: {
      railStyle: {
        backgroundColor: '#b4b4b4',
      },
      dotOptions: [{
        tooltip: 'always',
        tooltipStyle: {
          width: '6rem',
          backgroundColor: '#fff',
          border: '2px solid #0093E6',
          borderRadius: '20px',
          padding: '0.5rem',

          color: '#000',
          fontSize: '1rem',
          fontWeight: 400,
          transform: 'translate(-0.13rem, 0)',
        },
        style: {
          width: '0.6rem',
          height: '1.2rem',
          backgroundColor: '#0093E6',
          borderRadius: '20px',
          transform: 'translate(0, -0.15rem)',
        },
      }],
    },
    formatter: '{value} грн',
  },
  components: { VueSlider },
  template:
    `<div>
      <vue-slider
        v-model="value"
        v-bind="options"
        :interval="100"
        :data="data"
        :marks="marks"
        :min="0"
        :max="7000"
        :process="false"
        :tooltip-formatter="formatter"
      ></vue-slider>
    </div>`,
});

