// var fs = require('fs');

import dealBlock from './component.js'


const app = Vue.createApp({
    components: {
        dealBlock
        //referencing component object dealBlock not the name property of the object
    },
    data:
        function () {
            return {
                deals: [],
                searchQuery: null,
                searchQueryInput: ''
            }
        },

    methods: {
        searchDeals: function (event) {
            console.log(event);
            event.preventDefault();
            this.searchQuery = this.searchQueryInput;
        },

        reset() {
            this.searchQuery = null;
        }
    },

    computed: {
        resultQuery() {
            if (this.searchQuery) {
                return this.deals.filter((deal) => {
                    return this.searchQuery.toLowerCase().split(' ').every(v => (deal.title.S.toLowerCase().includes(v)) ||
                        (deal.content.S.toLowerCase().includes(v)))
                })
            } else {
                return this.deals;
            }
        }
    },

    mounted() {
        fetch('./data/dealblog.json')
            .then(response => response.json())
            .then(json => {
                this.deals = json;
            })

    }

})

app.mount('#app')