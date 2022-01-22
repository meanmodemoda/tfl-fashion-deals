import titleBlocks from './component.js'


const app = Vue.createApp({
    components: {
        titleBlocks
    },
    data:
        function () {
            return {
                deals: [
                    {
                        id: '111',
                        title: 'G-III to Acquire Sonia Rykiel',
                        dt: '1632787200000',
                        updatedAt: 'Tue Sep 28 2021',
                        country: 'United States',
                        region: 'North America',
                        industry: 'apparel',
                        Year: '2021',
                        content:
                            'G-III Apparel Group revealed that it has entered into an agreement to purchase Sonia Rykiel, with plans to accelerate the relaunch of the French fashion brand primarily in Europe, for the fall of 2022, with collections across multiple categories. The transaction, which comes less than two years after brothers Eric and Michael Dayan successfully bid to acquire all of the bankrupt brand’s assets via a court-administered process. (Those assets included the brand’s intellectual property rights (namely, its various global trademark registrations, and decades of archives and product prototypes); the commercial leases for its brick-and-mortar outposts in France – from its Saint Germain flagship to a glitzy boutique in Cannes, among others; and its remaining stock of garments and accessories.)The deal is expected to close by the end of October 2021.'
                    },

                    {
                        id: '123',
                        title: 'G-III to Acquire Sonia Rykiel',
                        dt: '1632787200000',
                        updatedAt: 'Tue Sep 28 2021',
                        country: 'United States',
                        region: 'North America',
                        industry: 'footwear',
                        Year: '2021',
                        content:
                            'G-III Apparel Group revealed that it has entered into an agreement to purchase Sonia Rykiel, with plans to accelerate the relaunch of the French fashion brand primarily in Europe, for the fall of 2022, with collections across multiple categories. The transaction, which comes less than two years after brothers Eric and Michael Dayan successfully bid to acquire all of the bankrupt brand’s assets via a court-administered process. (Those assets included the brand’s intellectual property rights (namely, its various global trademark registrations, and decades of archives and product prototypes); the commercial leases for its brick-and-mortar outposts in France – from its Saint Germain flagship to a glitzy boutique in Cannes, among others; and its remaining stock of garments and accessories.)The deal is expected to close by the end of October 2021.'
                    },


                    {
                        id: '233',
                        title: 'ABCFEF',
                        dt: '1632787200000',
                        updatedAt: 'Tue Sep 28 2021',
                        country: 'United States',
                        region: 'North America',
                        industry: 'footwear',
                        Year: '2021',
                        content:
                            'G-III Apparel Group revealed that it has entered into an agreement to purchase Sonia Rykiel, with plans to accelerate the relaunch of the French fashion brand primarily in Europe, for the fall of 2022, with collections across multiple categories. The transaction, which comes less than two years after brothers Eric and Michael Dayan successfully bid to acquire all of the bankrupt brand’s assets via a court-administered process. (Those assets included the brand’s intellectual property rights (namely, its various global trademark registrations, and decades of archives and product prototypes); the commercial leases for its brick-and-mortar outposts in France – from its Saint Germain flagship to a glitzy boutique in Cannes, among others; and its remaining stock of garments and accessories.)The deal is expected to close by the end of October 2021.'
                    },

                    {
                        id: '345',
                        title: 'Happy Go Lucky',
                        dt: '1632787200000',
                        updatedAt: 'Tue Sep 28 2021',
                        country: 'United States',
                        region: 'North America',
                        industry: 'footwear',
                        Year: '2021',
                        content:
                            'G-III Apparel Group revealed that it has entered into an agreement to purchase Sonia Rykiel, with plans to accelerate the relaunch of the French fashion brand primarily in Europe, for the fall of 2022, with collections across multiple categories. The transaction, which comes less than two years after brothers Eric and Michael Dayan successfully bid to acquire all of the bankrupt brand’s assets via a court-administered process. (Those assets included the brand’s intellectual property rights (namely, its various global trademark registrations, and decades of archives and product prototypes); the commercial leases for its brick-and-mortar outposts in France – from its Saint Germain flagship to a glitzy boutique in Cannes, among others; and its remaining stock of garments and accessories.)The deal is expected to close by the end of October 2021.'
                    },


                    {
                        title: 'Happy Go Lucky',
                        dt: '1632787200000',
                        updatedAt: 'Tue Sep 28 2021',
                        country: 'United States',
                        region: 'North America',
                        industry: 'apparel',
                        Year: '2021',
                        content:
                            'G-III Apparel Group revealed that it has entered into an agreement to purchase Sonia Rykiel, with plans to accelerate the relaunch of the French fashion brand primarily in Europe, for the fall of 2022, with collections across multiple categories. The transaction, which comes less than two years after brothers Eric and Michael Dayan successfully bid to acquire all of the bankrupt brand’s assets via a court-administered process. (Those assets included the brand’s intellectual property rights (namely, its various global trademark registrations, and decades of archives and product prototypes); the commercial leases for its brick-and-mortar outposts in France – from its Saint Germain flagship to a glitzy boutique in Cannes, among others; and its remaining stock of garments and accessories.)The deal is expected to close by the end of October 2021.'
                    }
                ],
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
                    return this.searchQuery.toLowerCase().split(' ').every(v => (deal.title.toLowerCase().includes(v)) ||
                        (deal.content.toLowerCase().includes(v)))
                })
            } else {
                return this.deals;
            }
        }
    },

})


app.mount('#app')