<template>
  <div>
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item label="Note" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this, {}),
      
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
</style>