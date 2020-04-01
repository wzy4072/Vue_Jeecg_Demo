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
                    let dateValue = values[conf.name]
                    values[conf.name] = transDate(dateValue, conf.dateValueFormat)
                }
            }
        })
        return values
    }
}