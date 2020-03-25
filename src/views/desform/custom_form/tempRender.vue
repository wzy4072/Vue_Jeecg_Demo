
<script>
function getIpt(_self, h) {
  return [
    h("AInput", {
      props: {
        placeholder: _self.conf.placeholder
      },
      directives: [
        {
          name: "decorator",
          value: [
            _self.conf.name,
            { rules: [{ required: true, message: "Please input your note!" }] }
          ],
          expression: [
            _self.conf.name,
            { rules: [{ required: true, message: "Please input your note!" }] }
          ]
          //   arg: "foo",
          //   modifiers: {}
        }
      ]
    })
  ];
}

export default {
  props: ["conf"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  render(h) {
    return h(
      "AFormItem",
      {
        props: { label: this.conf.label }
      },
      getIpt(this, h)
    );
  }
};
</script>
<style scoped>
</style>