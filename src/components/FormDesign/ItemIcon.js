export default (_self, h) => {
  let icons = [];

  icons.push(h('AIcon', {
    props: {
      type: 'setting',
    },
    nativeOn: {
      click() {
        _self.$emit('handleConfEle', _self.index);
      }
    }
  }));

  // 删除按钮
  icons.push(h('AIcon', {
    props: {
      type: 'delete'
    },
    nativeOn: {
      click() {
        _self.$emit('handleRemoveEle', _self.index);
      }
    }
  }));
  const item_icon = h('div', {
    class: {
      'item-icon': true
    }
  }, icons);
  return item_icon;
}
