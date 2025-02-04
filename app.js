const app = Vue.createApp({
    data() {
        return {
            name: 'Kaushal Jaysawal',
            age: 23,
            imageUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            confirmedName: '',
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.floor(Math.random() * 100); // Returns a random integer between 0 and 99
        },
        setName(event) {
            this.name = event.target.value;
        },
        setAge(event) {
            this.age += parseInt(event.target.value);
        },
        reduceAge(event) {
            this.age -= parseInt(event.target.value);
        },
        submitForm() {
            alert('Form Submitted');
        },
        confirmedNameOutput() {
            this.confirmedName = this.name;
        }
    }
});

app.mount('#app');