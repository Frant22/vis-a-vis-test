/* eslint-disable no-new */
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import Vue from '../vue';

new Vue({
  el: '#form',
  data: {
    name: null,
    email: null,
    phone: null,
    confirm: null,
    salary: 2500,
    isNameValid: true,
    isEmailValid: true,
    isPhoneValid: true,
    isConfirm: false,
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
  methods: {
    submitForm(e) {
      if (!this.name) {
        this.isNameValid = false;
      } else {
        this.isNameValid = true;
        this.name = null;
      }
      if (!this.email && !this.emailValidator(this.email)) {
        this.isEmailValid = false;
      } else {
        this.isEmailValid = true;
        this.email = null;
      }
      if (!this.phone && !this.phoneValidator(this.phone)) {
        this.isPhoneValid = false;
      } else {
        this.isPhoneValid = true;
        this.phone = null;
      }
      if (!this.confirm) {
        this.isConfirm = false;
      } else {
        this.isConfirm = true;
        this.confirm = null;
      }

      if (this.isNameValid && this.isEmailValid && this.isPhoneValid && this.isConfirm) {
        alert('Form has sent!');
      }

      e.preventDefault();
    },

    emailValidator(email) {
      const emailValidationExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return emailValidationExp.test(email);
    },

    phoneValidator(phone) {
      const phoneValidationExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
      return phoneValidationExp.test(phone);
    },
  },
  components: { VueSlider },
});
