<template>
  <div class="policy">
    <header>
      <a-button type="primary">
        添加产品
      </a-button>
      <div class="list-item" v-for="(item, index) in topList" :key="index">
        <div class="left">
          <p>{{ item.title }}</p>
        </div>
        <div class="right">
          <p v-for="(item1, index1) in item.value" :key="index1">{{ item1 }}</p>
        </div>
      </div>
    </header>
    <main>
      <div class="top">
        <a-form
          :form="form"
          :label-col="{ span: 3 }"
          :wrapper-col="{ span: 12 }"
          @submit="handleSubmit"
        >
          <a-form-item label="产品">
            <a-select
              default-value="lucy"
              style="width: 120px"
              @change="handleChange"
            >
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                美复胶丸 24粒/盒
              </a-select-option>
              <a-select-option value="disabled" disabled>
                Disabled
              </a-select-option>
              <a-select-option value="Yiminghe">
                yiminghe
              </a-select-option>
            </a-select>
            <span style="margin-left:24px;color:blue">
              {{ selectContent }}</span
            >
          </a-form-item>
          <a-form-item label="协议有效期:">
            <a-range-picker>
              <template slot="dateRender" slot-scope="current">
                <div
                  class="ant-calendar-date"
                  :style="getCurrentStyle(current)"
                >
                  {{ current.date() }}
                </div>
              </template>
            </a-range-picker>
          </a-form-item>
          <a-form-item>
            <a-button type="danger" ghost>
              删除
            </a-button>
          </a-form-item>
        </a-form>
      </div>
      <section>
        <a-table
          :columns="columns"
          :data-source="data"
          :pagination="false"
          :bordered="true"
        >
          <a-input
            placeholder="请输入"
            v-for="(item, index) in slotList"
            :key="index"
            :slot="item"
          />
        </a-table>
        <a-table
          :columns="columnsTwo"
          :data-source="dataTwo"
          :pagination="false"
          :bordered="true"
          style="margin-top:8px"
        >
          <a-input
            placeholder="请输入"
            v-for="(item, index) in slotListTwo"
            :key="index"
            :slot="item"
          />
        </a-table>
      </section>
    </main>
  </div>
</template>

<script>
import { data, columns, dataTwo, columnsTwo } from "./policy";
export default {
  data() {
    return {
      topList: [
        {
          title: "购进总指标(万元) :",
          value: ["￥152.65"],
        },
        {
          title: "指标按季度分解(万元):",
          value: ["[Q1] ￥12.5", "[Q2] ￥12.5", "[Q3] ￥12.5", "[Q4] ￥12.5"],
        },
        {
          title: "纯销总指标(万元) :",
          value: ["￥152.65"],
        },
      ],
      value: "",
      selectContent: "美复胶丸 24粒/盒",
      data,
      columns,
      dataTwo,
      columnsTwo,
      slotList: ["name", "name1", "name2", "name3", "name4", "name5", "name6"],
      slotListTwo: [
        "name",
        "name1",
        "name2",
        "name3",
        "name4",
        "name5",
        "name6",
        "name7",
      ],
    };
  },
  methods: {
    /**
     * 选择内容
     * @param {*} value
     */
    handleChange(value) {
      if (value === "lucy") {
        this.selectContent = "美复胶丸 24粒/盒";
      } else {
        this.selectContent = value;
      }
    },
    getCurrentStyle(current) {
      const style = {};
      if (current.date() === 1) {
        style.border = "1px solid #1890ff";
        style.borderRadius = "50%";
      }
      return style;
    },
  },
  created() {
    (this.data = data), (this.columns = columns);
    (this.dataTwo = dataTwo), (this.columnsTwo = columnsTwo);
  },
};
</script>

<style lang="less" scoped>
@import "index";
</style>
