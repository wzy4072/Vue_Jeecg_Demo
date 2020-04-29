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
      // 'item-icon': true
    },
    style: {
      ':hover': {
        background: 'yellow'  // 希望在div这个元素上添加一个伪类的样式，但是没有效果
      },
      display: 'inline-block',
      position: 'absolute',
      top: '-38px',
      right: '0px'
    },
  }, icons);
  return item_icon;
}
