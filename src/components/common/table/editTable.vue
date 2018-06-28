<template>
  <div>
    <Table :ref="refs" :columns="columnsList" :data="thisTableData" border highlight-row :loading="false" :height="height?height:'500'"></Table>
    <br>
    <Page :total="total" style="text-align: right" @on-change="pageChange" :page-size="10" @on-page-size-change="perPageHandle"></Page>
  </div>
</template>

<script>
  import expandRow from './tableExpand';
  import swich from '../switch/switch'
  /**
   * 列表-操作-投放
   */
  const sendButton = (vm, h, currentRow, index) => {
    return h('span', {
      on: {
        click: () => {
          vm.$emit('on-send', index)
        }
      }
    }, [h('span', {
      style: {
        margin: '0 5px',
        cursor: "pointer",
        color: "#348df0"
      },
      props: {
        type: 'navigate',
        color: '#008CF8',
        size: '20',
        placement: 'top'
      },
    }, '投放')])
  };
  /**
   * 列表-操作-画像
   */
  const portraitsButton = (vm, h, currentRow, index) => {
    return h('span', {
      on: {
        click: () => {
          vm.$emit('on-portraits', index)
        }
      }
    }, [h('span', {
      style: {
        margin: '0 5px',
        cursor: "pointer",
        color: "#348df0"
      },
      props: {
        type: 'social-instagram-outline',
        color: '#008CF8',
        size: '20'
      }
    }, '画像')])
  };
  /**
   * 列表-操作-编辑
   */
  const editButton = (vm, h, currentRow, index) => {
    return h('span', {
      on: {
        click: () => {
          vm.$emit('on-edit', index)
        }
      }
    }, [h('span', {
      style: {
        margin: '0 5px',
        cursor: "pointer",
        color: "#348df0"
      },
      props: {
        type: 'compose',
        color: '#008CF8',
        size: '20'
      },
      on: {
        'click': () => {
          vm.$emit('on-edit', index)
        }
      }
    }, '编辑')])
  };
  /**
   * 列表-操作-删除
   */
  const deleteButton = (vm, h, currentRow, index) => {
    return h('Poptip', {
      props: {
        confirm: true,
        title: '您确定要删除这条数据吗?',
        transfer: true
      },
      on: {
        'on-ok': () => {
          vm.$emit('on-delete', index);
        }
      }
    }, [
      h('span', {
        style: {
          margin: '0 5px',
          cursor: "pointer",
          color: "#348df0"
        },
        props: {
          type: 'android-delete',
          color: '#008CF8',
          size: '20'
        }
      }, '删除')
    ]);
  };
  /**
   * 列表-操作-下载
   */
  const downloadButton = (vm, h, currentRow, index) => {
    return h('Poptip', {
      props: {
        confirm: true,
        title: '您确定要导出这条数据吗？',
        transfer: true
      },
      on: {
        'on-ok': () => {
          vm.$emit('on-download', index);
        }
      }
    }, [
      h('span', {
        style: {
          margin: '0 5px',
          cursor: "pointer",
          color: "#348df0"
        },
        props: {
          type: 'ios-download',
          color: '#008CF8',
          size: '20'
        }
      }, '下载')
    ]);
  };
  /**
   * 列表-操作-详情
   */
   const detailsButton =  (vm, h, currentRow, index) =>{
       return h('span', {
      on: {
        click: () => {
          vm.$emit('on-details', index)
        }
      }
    }, [h('span', {
      style: {
        margin: '0 5px',
        cursor: "pointer",
        color: "#348df0"
      },
      props: {
        type: 'compose',
        color: '#008CF8',
        size: '20'
      },
      on: {
        'click': () => {
          vm.$emit('on-detailst', index)
        }
      }
    }, '详情')])
   }
   /**
   * 列表-操作-冻结
   */
 const freezeButton =  (vm, h, currentRow, index) =>{
    return h('Poptip', {
      props: {
        confirm: true,
        title: '您确定要冻结吗？',
        transfer: true
      },
      on: {
        'on-ok': () => {
          vm.$emit('on-freeze', index);
        }
      }
    }, [
      h('span', {
        style: {
          margin: '0 5px',
          cursor: "pointer",
          color: "#348df0"
        },
        props: {
          type: 'ios-download',
          color: '#008CF8',
          size: '20'
        }
      }, '冻结')
    ])
   }

  
  export default {
    name: 'canEditTable',
    props: {
      refs: String,
      columnsList: Array,
      value: Array,
      url: String,
      editIncell: {
        type: Boolean,
        default: false
      },
      hoverShow: {
        type: Boolean,
        default: false
      },
      total: {
        type: Number
      },
      height: {
        type: Number
      }
    },
    data() {
      return {
        columns: [],
        thisTableData: [],
        edittingStore: []
      };
    },
    components: {
      swich,
      expandRow
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        let vm = this;
        let cloneData = JSON.parse(JSON.stringify(this.value));
        this.thisTableData = cloneData;
        this.edittingStore = JSON.parse(JSON.stringify(this.thisTableData));
        this.columnsList.forEach(item => {
          // 如果需要开关按钮
          if (item.switch) {
            item.render = (h, param) => {
              return h('div', [
                h(swich, {
                  props: {
                    name: param.row.name
                  },
                  on: {
                    'on-change': (value) => {
                      param.row.name = value;
                      this.$emit('switch-change', value, param.index)
                    }
                  }
                }, )
              ]);
            }
          };
          if (item.icon) {
            item.render = (h, param) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'at',
                    color: '#008CF8',
                    size: '15'
                  }
                }),
                h('strong', param.row.sex)
              ]);
            }
          }
          if (item.handle) {
            item.render = (h, param) => {
              let currentRowData = this.thisTableData[param.index];
              let children = [];
              item.handle.forEach(item => {
                if (item === 'send') {
                  children.push(sendButton(this, h, currentRowData, param.index));
                } else if (item === 'edit') {
                  children.push(editButton(this, h, currentRowData, param.index));
                } else if (item === 'delete') {
                  children.push(deleteButton(this, h, currentRowData, param.index));
                } else if (item === 'download') {
                  children.push(downloadButton(this, h, currentRowData, param.index));
                } else if (item === "portraits") {
                  children.push(portraitsButton(this, h, currentRowData, param.index));
                }else if( item === "detailst"){
                  children.push(detailsButton(this, h, currentRowData, param.index));
                }else if(item === "freeze"){
                  children.push(freezeButton(this, h, currentRowData, param.index));
                }
              });
              return h('div', children);
            };
          }
          if (item.collapse) {
            item.render = (h, param) => {
              return h(expandRow, {
                props: {
                  row: param.row
                }
              })
            }
          }
        });
      },
      pageChange(page) {
        this.$emit('page-change', page)
      },
      perPageHandle(size) {
        this.$emit('page-size-change', size)
      }
    },
    watch: {
      value(data) {
        this.init();
      }
    }
  };
</script>


<style scoped>
  .midinput {
    width: 30px;
  }
</style>
