/* eslint-disable no-new */
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

new Vue({ el: '#page' });
