<template>
  <div class="agreement">
    <section>
      <Title :index="1" :title="'协议主体'" />
      <Subject />
    </section>
    <section>
      <Title :index="2" :title="'产品政策'" />
      <Policy />
    </section>
    <section>
      <Title :index="3" :title="'补充协议'" />
      <Supplement />
    </section>
    <a-button type="primary" block>
      保存
    </a-button>
  </div>
</template>

<script>
import Title from "./component/title/Title.vue";
import Subject from "./component/subject/subject.vue";
import Supplement from "./component/supplement/Supplement.vue";
import Policy from "./component/policy/Policy.vue";
export default {
  components: {
    Title,
    Subject,
    Supplement,
    Policy,
  },
};
</script>

<style lang="less" scoped>
@import "index";
</style>
