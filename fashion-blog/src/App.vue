<template>
  <div id="container">
    <div class="header">
      <h1 class="assignment">Fashion Blog <br />Transactions</h1>
      <h1 class="ghibli">Deals</h1>
    </div>
    <div id="app">
      <div id="left">
        <div class="industry">
          <select id="industry">
            <option value="null" selected>Choose An Industry</option>
            <option value="apparel">Apparel</option>
            <option value="luxury">Luxury</option>
            <option value="resale">Resale</option>
            <option value="rental">Rental</option>
            <option value="footwear">Footwear</option>
            <option value="streetwear">Streetwear</option>
            <option value="fast fashion">Fast Fashion</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>
      </div>
      <div id="right">
        <div id="filter">
          <h1>Filter content by keyword.</h1>
          <form @submit="searchDeals">
            <input
              type="text"
              v-model="searchQueryInput"
              placeholder="search keyword in title or description"
            />
            <input id="submit" type="submit" value="Enter" /><input
              type="reset"
              @click="reset"
              value="Reset"
            />
          </form>
        </div>
        <!-- Debugging {{ JSON.stringify(deals) }} -->
        <div id="content">
          <Deal
            v-for="(deal, index) in resultQuery"
            :key="index"
            :title="deal.title"
            :country="deal.country"
            :content="deal.content"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Deal from "./components/Deal.vue";
export default {
  name: "App",
  components: { Deal },
  data: function () {
    return {
      deals: [],
      searchQuery: null,
      searchQueryInput: "",
    };
  },

  methods: {
    searchDeals: function (event) {
      console.log(event);
      event.preventDefault();
      this.searchQuery = this.searchQueryInput;
    },

    reset() {
      this.searchQuery = null;
    },
  },

  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.deals.filter((deal) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(
              (v) =>
                deal.title.S.toLowerCase().includes(v) ||
                deal.content.S.toLowerCase().includes(v)
            );
        });
      } else {
        return this.deals;
      }
    },
  },

  mounted() {
    fetch("../data/dealblog.json")
      .then((response) => response.json())
      .then((json) => {
        this.deals = json;
      });
  },
};
</script>

<style>
@font-face {
  font-family: "ObjectSans-Bold";
  src: url("./assets/ObjectSans-Bold.woff") format("woff");
  /* font-stretch: 25% 151%; */
}
@font-face {
  font-family: "ObjectSans-Regular";
  src: url("./assets/ObjectSans-Regular.woff") format("woff");
  /* font-stretch: 25% 151%; */
}

#app {
  font-size: 14px;
  /*font-family: 'Arial', sans-serif;*/
  width: 1200px;
  background-color: white;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.header {
  width: 100%;
  height: 400px;
  /*background-color: #0011ff;*/
  padding: 1%;
  display: block;
}

.ghibli {
  font-family: "ObjectSans-Regular", cursive;
  padding: 0 1rem;
  color: black;
  display: block;
  float: left;
}

.assignment {
  font-family: "ObjectSans-Regular", cursive;
  padding: 0 1rem;
  color: black;
  display: block;
  float: right;
  font-size: 1.5rem;
}

#filter > h1 {
  font-family: "ObjectSans-Regular";
  color: black;
  text-align: left;
}

.header > h2 {
  font-family: "ObjectSans-Regular";
  color: orange;
}

#filter > p,
h2,
h3 {
  font-family: "ObjectSans-Regular", sans-serif;
  color: orange;
}

li,
p {
  font-family: "Inter", sans-serif;
  color: black;
  font-weight: 200;
}

#filter {
  padding: 1% 5%;
}

input[type="text"] {
  width: 60%;
  padding: 12px 20px;
  margin: 8px 10px 8px 0px;
  display: inline-block;
  border: 1px solid #ffffff;
  border-radius: 50px;
  box-sizing: border-box;
  background-color: RGBA(132, 183, 219, 0.3);
}

input:focus {
  outline: none;
  font-family: "NeueMontreal-Regular", sans-serif;
  font-size: 1rem;
  color: black;
}

::placeholder {
  font-family: "NeueMontreal-Regular", sans-serif;
  font-size: 1rem;
  color: black;
}

input:after {
  font-family: "NeueMontreal-Regular", sans-serif;
  font-size: 1rem;
  color: black;
}

input[type="submit"],
select {
  width: 10%;
  background-color: orange;
  color: black;
  padding: 14px 20px;
  margin: 8px 4px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: "NeueMontreal-Regular", sans-serif;
}

input[type="reset"] {
  width: 10%;
  background-color: grey;
  color: black;
  padding: 14px 20px;
  margin: 8px 4px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: "ObjectSans-Regular", sans-serif;
}

input[type="submit"]:hover {
  background-color: grey;
  color: orange;
}

input[type="reset"]:hover {
  background-color: black;
  color: grey;
}

#deal {
  padding: 1% 5%;
  display: block;
}

#container {
  width: 100%;
  background-color: white;
  color: black;
}

#app {
  display: grid;
  grid-template-columns: 30% 70%;
}

#left {
  background-color: blue;
}

#industry {
  width: 50%;
}
</style>
