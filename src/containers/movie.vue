<template>
  <div class="movie-main">
    <button class="movie-button" @click="getMovieFree()">免費活動</button>
    <button class="movie-button" @click="getMovieHot()">熱門活動</button>
    <button class="movie-button" @click="getMovieLatest()">最新活動</button>
    <div>
      <ul>
        <li v-for="(item, index) in listData" :key="index">
          {{ item.title }}: {{ item.startDate }} - {{ item.endDate}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { apiMovieFree, apiMovieHot, apiMovieLatest } from "@/mutations/movie";

export default {
  data() {
    return {
      listData: []
    }
  },
  methods: {
    getMovieFree() {
      apiMovieFree({
        limit: 20,
        offset: 0,
      }, response => {
        this.listData = response.data.response.dataList;
      });
    },
    getMovieHot() {
      apiMovieHot({
        limit: 20,
        offset: 0,
      }, response => {
        this.listData = response.data.response.dataList;
      });
    },
    getMovieLatest() {
      apiMovieLatest({
        limit: 20,
        offset: 0,
      }, response => {
        this.listData = response.data.response.dataList;
      });
    }
  }
}
</script>

<style>
.movie-main {
  margin: 10px 0;
}
.movie-button {
  background-color: lightblue;
  color: #333;
  border: 1px solid lightblue;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 16px;
}
.movie-button:nth-child(1) {
  margin-left: 0;
}
</style>