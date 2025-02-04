const app = Vue.createApp({
    data() {
        return {
            name: 'Kaushal Jaysawal',
            age: 23,
            imageUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#app');