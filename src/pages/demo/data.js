export const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
    width: "280px",
  },
];

export const data = [
  {
    key: "1",
    name: "微信小程序",
    tags: ["wechat", "vant"],
    video: [{ link: require("../../assets/img/1.mp4") }],
    link: {
      github: "https://github.com/GengZzz/test-zy-wechat.git",
      gitee: "https://gitee.com/GengZzz/test-zy-wechat.git",
    },
    imgs: [
      { link: require("../../assets/img/6.jpg") },
      { link: require("../../assets/img/7.jpg") },
      { link: require("../../assets/img/8.jpg") },
      { link: require("../../assets/img/9.jpg") },
    ],
  },
  {
    key: "2",
    name: "后台管理系统",
    tags: ["vue-antd-admin", "vue2"],
    link: {
      github: "https://github.com/GengZzz/test-zy-admin.git",
      gitee: "https://gitee.com/GengZzz/test-zy-admin.git",
    },
    imgs: [
      { link: require("../../assets/img/1.png") },
      { link: require("../../assets/img/2.png") },
      { link: require("../../assets/img/3.png") },
      { link: require("../../assets/img/4.png") },
    ],
    video: [{ link: require("../../assets/img/2.mp4") }],
  },
];
