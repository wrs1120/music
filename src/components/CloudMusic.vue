<template>
  <div class="contain">
    <div class="headerTitle">
      <div class="headLeft">悦听</div>
      <div class="headRight">
        <input type="text" v-model="msg" />
        <img
          class="search-icon"
          src="@/assets/search.svg"
          alt="搜索"
          @click="searchMach"
          @keyup.enter="searchMach"
        />
      </div>
    </div>
    <div class="content">
      <div class="contentLeft">
        <ul>
          <li
            v-for="(item,index) in musicData"
            :key="index"
            :class="{active:currentIndex == index}"
          >
            <div class="contentLeft_list" @click="handleClick(index)">
              <img src="@/assets/play.svg" alt />
              <div class="leftName">{{item.name}}</div>
              <img class="leftImage" src="@/assets/play2.svg" alt />
            </div>
          </li>
        </ul>
      </div>
      <div class="contentCenter">
        <div class="disc">
          <div
            class="song-img"
            :style="`background-image:url(${this.musicData[this.currentIndex].songImg})`"
            ref="rotate"
          ></div>
        </div>
      </div>
      <div class="contentRight"></div>
    </div>
    <audio ref="audio" class="audio1" :src="getCurrentMusicSrc" controls autoplay>您的浏览器不支持 audio 标签。</audio>
  </div>
</template>

<script>
var musicData = [
  {
    id: 1,
    name: "于荣光 - 少林英雄 ",
    author: "于荣光 ",
    songSrc: "../../static/于荣光 - 少林英雄.mp3",
    songImg: "../../static/slyx.jpg",
  },
  {
    id: 2,
    name: "翁锡麒,翁锡麟 - 飞云之下 ",
    author: "翁锡麒,翁锡麟 ",
    songSrc: "../../static/翁锡麒,翁锡麟 - 飞云之下.mp3",
    songImg: "../../static/fyzx.jpg",
  },
  {
    id: 3,
    name: "Vk - 多幸运 ",
    author: "Vk ",
    songSrc: "../../static/Vk - 多幸运.mp3",
    songImg: "../../static/vk.jpg",
  },
  {
    id: 4,
    name: "陈硕子 - 凌晨三点",
    author: "Vk ",
    songSrc: "../../static/陈硕子 - 凌晨三点（demo）.mp3",
    songImg: "../../static/lcsd.jpg",
  },
  {
    id: 5,
    name: "周深 - 漂洋过海来看你",
    author: "周深",
    songSrc: "../../static/周深 - 漂洋过海来看你.mp3",
    songImg: "../../static/pygh.jpg",
  },
  {
    id: 6,
    name: "Vaniah维 - 光年之外(Fade.Remix)",
    author: "Vaniah维",
    songSrc: "../../static/Vaniah维 - 光年之外(Fade.Remix).mp3",
    songImg: "../../static/gnzw.jpg",
  },
];
export default {
  data() {
    return {
      msg: "",
      musicData: musicData,
      currentIndex: 0,
    };
  },
  methods: {
    searchMach() {},
    handleClick(index) {
      console.log(index, "123");
      this.currentIndex = index;
      // this.$refs.rotate.style.animationPlayState = "running";
      this.play();
    },
    play() {
      const audio = this.$refs.audio;
      if (this.isPlaying) {
        this.$refs.rotate.style.animationPlayState = "paused";
        audio.pause();
        this.isPlaying = false;
      } else {
        audio.play();
        this.$refs.rotate.style.animationPlayState = "running";
        this.isPlaying = true;
      }
    },
  },
  computed: {
    getCurrentMusicSrc() {
      return this.musicData[this.currentIndex].songSrc;
    },
  },
};
</script>

<style scoped>
/* @font-face {
    font-family: myFirstFont;
    src: url(sansation_light.woff);
} */
.contain {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  background-color: #11a1de;
}
.contain .headerTitle {
  position: relative;
  width: 100%-20px;
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
}
.contain .headerTitle input {
  display: inline-block;
  height: 28px;
  border: none;
  border-radius: 14px;
  background-color: #7ccbeb;
  outline: none;
  padding-left: 10px;
}
.contain .headerTitle .search-icon {
  position: absolute;
  top: 35px;
  right: 36px;
  cursor: pointer;
}
.contain .content {
  display: flex;
  width: 100%;
  height: 680px;
  background-image: radial-gradient(circle, #a5bfc9, #f0d4ad, #8eb5d0);
}
.contain .content .contentLeft {
  width: 300px;
  height: 100%;
  border-right: 1px solid #000;
  z-index: 10000;
}
.contain .content .contentCenter {
  width: 598px;
  height: 100%;
  border-right: 1px solid #363434;
  overflow: hidden;
}
.contain .content .contentCenter .disc {
  position: relative;
  margin-top: 15%;
  margin-left: 15%;
  width: 400px;
  height: 400px;
  border-radius: 300px;
  transform: rotate(45deg);
  background-image: radial-gradient(5em 30em ellipse, #fff, #000);
  border: 2px solid #131313;
  box-shadow: 0 0 0 10px #343935;
  opacity: 0.7;
  border-right: 1px solid #111;
}
.contentCenter .disc .song-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%) rotate(0deg);
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #000;
  border-radius: 200px;
  animation: animations1 10s linear infinite forwards;
  animation-play-state: paused;
}
.contain .content .contentRight {
  width: 300px;
  height: 100%;
}
.contentLeft_list {
  display: flex;
  width: 80%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  justify-content: space-between;
}
.leftName {
  margin: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
ul {
  padding: 0 40px;
}
ul li {
  border-radius: 20px;
}

.audio1 {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background-color: #fff;
}
ul li.active {
  background-color: #2efff5;
}

@keyframes animations1 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>