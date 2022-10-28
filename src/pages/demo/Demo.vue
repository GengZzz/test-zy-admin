<template>
  <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
    <section>
      <Title :index="1" :title="'项目演示'" />
      <a-table :columns="columns" :data-source="data" :pagination="false">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="record">
          <a-button
            type="primary"
            icon="eye"
            @click="showModal('img', record)"
          />
        </span>
      </a-table>
    </section>
    <section>
      <Title :index="2" :title="'演示视频'" />
      <a-table :columns="columns" :data-source="data" :pagination="false">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="record">
          <a-button
            type="primary"
            icon="eye"
            @click="showModal('video', record)"
          />
        </span>
      </a-table>
    </section>
    <section>
      <Title :index="3" :title="'代码仓库'" />
      <a-table :columns="columns" :data-source="data" :pagination="false">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="record">
          <a-button
            type="primary"
            icon="github"
            @click="linkTo('github', record)"
          />
          <a-divider type="vertical" />
          <a-button
            type="danger"
            icon="gitlab"
            @click="linkTo('gitee', record)"
          />
        </span>
      </a-table>
    </section>
    <a-modal v-model="visible" title="演示" @ok="handleOk" width="80vw">
      <a-carousel autoplay dot-position="top" v-if="type === 'img'">
        <div class="show-imgs" v-for="(item, index) in currentImg" :key="index">
          <img :src="item.link" alt="" />
        </div>
      </a-carousel>
      <div class="video" v-if="type === 'vi'">
        <video
          autoplay="autoplay"
          loop
          muted
          controls
          width="800"
          height="500"
          :src="currentVideo[0].link"
        >
          <source :src="currentVideo[0].link" type="video/mp4" />
        </video>
      </div>
    </a-modal>
  </div>
</template>

<script>
import Title from "../agreement/component/title/Title.vue";
import { data, columns } from "./data";
import { mapState } from "vuex";
export default {
  components: { Title },
  name: "Demo",
  i18n: require("./i18n"),
  data() {
    return {
      currentImg: [],
      currentVideo: [],
      visible: false,
      type: "img",
    };
  },
  computed: {
    ...mapState("setting", ["pageMinHeight"]),
  },
  created() {
    (this.data = data), (this.columns = columns);
  },
  methods: {
    showModal(type, item) {
      this.visible = true;
      if (type === "img") {
        this.currentImg = item.imgs;
        this.type = "img";
      } else {
        this.type = "vi";
        this.currentVideo = item.video;
      }
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    linkTo(link, item) {
      if (link === "github") {
        window.location.href = item.link.github;
      } else {
        window.location.href = item.link.gitee;
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "index";
</style>
