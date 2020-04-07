import moment from "moment";


function transDate(dateValue, format) {
    if (!dateValue) return null;
    // console.log("dateValue", dateValue);
    return typeof dateValue === "string"
        ? moment(dateValue, format)
        : dateValue.format(format);
}

// designUtil
export default {
    /**
     * 设置 或者 获取 对象中的值
     * values  必填 目标对象
     * keyName 必填 多级或单级键名 key1.key2[0].key3
     * setValue 选填 需要设置的值
     */
    deepKey: (values, keyName, setValue) => {
        // if (keyName === 'earningOwnerList[0].earningOwnerLimitDate') { debugger }
        // 检测keyname是否含有 [] 或者 . 
        if (/\[|\./.test(keyName)) {
            let keys = keyName.replace(/(\[|\.)/g, '@').replace(/\]/g, '').split('@')
            let tempValue = values
            for (let index = 0; index < keys.length; index++) {
                const key = keys[index];
                if (!tempValue) {
                    console.warn('请检查取值对象，是否拥有属性：', keyName, key)
                    tempValue = null
                    break
                }
                if ((index + 1) === keys.length && setValue !== undefined) {
                    tempValue[key] = setValue
                }
                tempValue = tempValue[key]
            }
            return tempValue
        } else {
            if (setValue !== undefined) {
                // 设置
                values[keyName] = setValue
            }
            return values[keyName];
        }
    },
    stringifyFunJson: (s) => {
        return JSON.stringify(s, function (key, val) {
            if (typeof val === 'function') {
                return val + '';
            }
            return val;
        });

    },
    parseFunJson: (j) => {
        return JSON.parse(j, function (
            k,
            v
        ) {
            if (v.indexOf && v.indexOf("function") > -1) {
                return eval("(function(){return " + v + " })()");
            }
            return v;
        })
    },
    /**
     * 用于保存时 moment对象转换字符串
     * 用于展示 字符串转换moment对象
     * 
     */
    transformData: function (confs, values) {
        confs.map(conf => {
            if (conf.hasOwnProperty('list')) {
                values = this.transformData(conf.list, values)
            } else {
                // 处理日期字段格式 对象转字符串 字符串转对象
                if (conf.type == 'datepicker') {
                    let dateValue = this.deepKey(values, conf.name)
                    let newDateValue = transDate(dateValue, conf.dateValueFormat)
                    this.deepKey(values, conf.name, transDate(dateValue, conf.dateValueFormat))
                }

                // 处理附件类型
                if (conf.type == 'uploads') {
                    let fileInfo = eval('values.' + conf.name)
                    if (typeof fileInfo === 'string') {
                        this.deepKey(values, conf.name, JSON.parse(fileInfo))
                    }
                    if (typeof fileInfo === 'object') {
                        this.deepKey(values, conf.name, JSON.stringify(fileInfo))
                    }
                }


            }
        })
        return values
    },
    /**
     * 根据 require true 自动生成验证规则
     * 
     */
    getRules: function (conf) {
        if (conf.required) {
            let msgHeads = {
                input: '请输入',
                select: "请选择",
                AsyncSelect: '请选择'
            }
            let requireRule = { require: true, message: msgHeads[conf.type] + conf.label }
            return [requireRule, ...conf.rules]
        }
    }
}