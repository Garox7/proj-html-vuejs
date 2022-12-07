<template>
  <div class="mailcounter-container flex-row-center">
    <div class="mail-input">
      <h3><span>{{counterDate.text.title_first}}</span>{{counterDate.text.title_second}}</h3>
      <div class="label-mail">
        <label for="input-mail">
          <input type="mail" name="input-mail" placeholder="Enter your E-mail">
        </label>
        <button>SUBSCRIBE</button>
      </div>
    </div>
    <div class="countdown-container flex-row-center">
      <div v-if="loaded" class="counter flex-row-center">
        <div class="days flex-column-center">
          <h1>{{ daysLeft }}</h1>
          <p>Days</p>
        </div>
        <div class="days flex-column-center">
          <h1>{{ hoursLeft }}</h1>
          <p>Hours</p>
        </div>
        <div class="days flex-column-center">
          <h1>{{ minutesLeft }}</h1>
          <p>Minutes</p>
        </div>
        <div class="days flex-column-center">
          <h1>{{ secondsLeft }}</h1>
          <p>Seconds</p>
        </div>
      </div>
      <div v-else class="container-loader flex-row-center">
        <img src="../../public/img/timer-loader.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MailCounter',
  props: {
    counterDate: Object,
  },
  data() {
    return {
      daysLeft: 0,
      hoursLeft: 0,
      minutesLeft: 0,
      secondsLeft: 0,
      loaded: false,
    };
  },
  computed: {
    seconds: () => 1000,
    minutes() {
      return this.seconds * 60;
    },
    hours() {
      return this.minutes * 60;
    },
    days() {
      return this.hours * 24;
    },
    end() {
      return new Date(
        this.counterDate.year,
        this.counterDate.mounth,
        this.counterDate.day,
        this.counterDate.hour,
        this.counterDate.minute,
        this.counterDate.second,
      );
    },
  },
  mounted() {
    this.countDown();
  },
  methods: {
    formatNum(num) {
      // eslint-disable-next-line
      return num < 10 ? '0' + num : num;
    },
    countDown() {
      const timer = setInterval(() => {
        const now = new Date();
        const distance = this.end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor(distance / this.days);
        const hours = Math.floor((distance % this.days) / this.hours);
        const minutes = Math.floor((distance % this.hours) / this.minutes);
        const seconds = Math.floor((distance % this.minutes) / this.seconds);
        this.daysLeft = this.formatNum(days);
        this.hoursLeft = this.formatNum(hours);
        this.minutesLeft = this.formatNum(minutes);
        this.secondsLeft = this.formatNum(seconds);
        this.loaded = true;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/reset';

.mailcounter-container {
  background-color: $buttercup;
  width: 885px;
  padding: 2.2rem;
  margin: 0 0 -40px 0;
  gap: 2rem;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  .mail-input {
    flex: 1 1 60%;

    h3 {
      margin-bottom: 1rem;

      span {
        color: $white;
      }
    }

    .label-mail {
      position: relative;

      input {
        width: 100%;
        border: none;
        height: 2.5rem;
        padding: 1rem;
        border-radius: 30px;
        box-shadow: 2px 2px 4px rgba(0 0 0 / .2);

        &:focus-visible {
          outline: 1px solid $firefly;
          box-shadow: -2px 2px 4px rgba(0 0 0 / .2);
        }
      }

      button {
        background-color: $firefly;
        position: absolute;
        width: 20%;
        height: 100%;
        right: 0;

        &:hover {
          background-color: $buttercup;
        }
      }
    }
  }

  .countdown-container {
    flex: 1 1 40%;

    .counter {
      gap: 1.5rem;

      h1 {
        color: $white;
      }

      p {
        font-family: 'Roboto Slab', serif;
        font-size: 14px;
        font-weight: bold;
      }
    }

    .container-loader {
      max-width: 80px;
    }
  }

}
</style>
