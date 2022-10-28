<template>
  <div class="supplement">
    <header>
      <aside>
        <a-radio-group v-model="value" @change="onChange">
          <a-radio-button value="a">
            补充协议一
          </a-radio-button>
          <a-radio-button value="b">
            补充协议二
          </a-radio-button>
          <a-radio-button value="c">
            补充协议三
          </a-radio-button>
        </a-radio-group>
      </aside>
      <aside>
        <a-button type="primary" size="small">
          新增
        </a-button>
      </aside>
    </header>
    <section>
      <div class="deal">
        <h2>协议内容:</h2>
        <a-button type="danger" ghost>
          删除
        </a-button>
      </div>
      <main>
        <a-textarea
          v-model="value1"
          placeholder="请输入协议补充内容"
          :auto-size="{ minRows: 12, maxRows: 25 }"
        />
      </main>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "a",
      value1: "",
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    onChange(e) {
      console.log(`checked = ${e.target.value}`);
    },
  },
};
</script>

<style lang="less" scoped>
@import "index";
</style>
