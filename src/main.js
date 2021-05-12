/* eslint-disable no-new */
import Vue from '../vue';

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
