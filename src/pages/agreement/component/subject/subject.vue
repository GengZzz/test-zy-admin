<template>
  <div class="subject">
    <a-form
      :form="form"
      :label-col="{ span: 2 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="协议客户">
        <a-select
          default-value="lucy"
          style="width: 120px"
          @change="handleChange"
        >
          <a-select-option value="jack">
            Jack
          </a-select-option>
          <a-select-option value="lucy">
            上海正也医药有限公司
          </a-select-option>
          <a-select-option value="disabled" disabled>
            Disabled
          </a-select-option>
          <a-select-option value="Yiminghe">
            yiminghe
          </a-select-option>
        </a-select>
        <span style="margin-left:24px"> {{ selectContent }}</span>
      </a-form-item>
      <a-form-item label="协议状态">
        <a-select placeholder="正常" @change="handleSelectChange">
          <a-select-option value="male">
            正常
          </a-select-option>
          <a-select-option value="female">
            签约中
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="购进指标">
        <a-select placeholder="金额" @change="handleSelectChange">
          <a-select-option value="males">
            金额
          </a-select-option>
          <a-select-option value="male">
            品质
          </a-select-option>
          <a-select-option value="female">
            其他
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="纯销指标">
        <a-select placeholder="正常" @change="handleSelectChange">
          <a-select-option value="male">
            正常
          </a-select-option>
          <a-select-option value="female">
            签约中
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="销售区域">
        <a-select placeholder="正常" @change="handleSelectChange">
          <a-select-option value="male">
            正常
          </a-select-option>
          <a-select-option value="female">
            签约中
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="签订时间">
        <a-date-picker @change="onChange" />
      </a-form-item>
      <a-form-item label="购进渠道">
        <a-select placeholder="正常" @change="handleSelectChange">
          <a-select-option value="male">
            正常
          </a-select-option>
          <a-select-option value="female">
            签约中
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
    <a-form
      :form="form"
      :label-col="{ span: 0 }"
      :wrapper-col="{ span: 24 }"
      @submit="handleSubmit"
      class="other-form"
    >
      <a-form-item label="购进渠道">
        <a-table :columns="columns" :data-source="data" :pagination="false">
          <a slot="name" slot-scope="text">{{ text }}</a>
        </a-table>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { data, columns } from "./subject";
export default {
  data() {
    return {
      showData: {
        name: "",
        status: "",
        purchase: "",
        sale: "",
        area: "",
        orderTime: "",
        channel: [],
        data,
        columns,
      },
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      selectContent: "上海正也医药有限公司",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    /**
     * 选择内容
     * @param {*} value
     */
    handleChange(value) {
      if (value === "lucy") {
        this.selectContent = "上海正也医药有限公司";
      } else {
        this.selectContent = value;
      }
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      });
    },
    /**
     * 时间选择器
     */
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
  created() {
    (this.data = data), (this.columns = columns);
  },
};
</script>

<style lang="less" scoped>
@import "index";
</style>
