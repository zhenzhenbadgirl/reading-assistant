var IVm = new Vue({
    el: ".wrapper",
    data: {
        text: "",
        getResult: false
    },
    methods: {
        fenquecy: function (str) {
            var strArr = str.split(" ");
            var reg = /,|\.|\?|!|:|;|\r\"\"/g;
            var result = [];
            var str = null;
            var a = [];
            var b = [];
            var c = [];
            var e = [];
            var d = new Object();
            for (var i = 0; i < strArr.length; i++) {
                str = strArr[i].replace(reg, '').toLowerCase();
                result.push(str);
            }
            console.log("总共有" + result.length + "个单词");
            d.put = function (key, value) {
                d[key] = value;
            };
            for (var i = 0; i < result.length; i++) {
                if (d[result[i]] == null) {
                    d.put(result[i], 1);
                }
                else {
                    d[result[i]]++;
                }
            }
            for (var i = 0; i < result.length; i++) {
                var v = result[i];
                if (a[v] == null) {
                    a[v] = 0;
                    b.push(v);
                }
            }
            for (var i = 0; i < b.length; i++) {
                c.push(d[b[i]]);
            }
            c.sort(function (a, b) { return b - a; });
            for (var j = 0; j < 10; j++) {
                for (var i = 0; i < b.length; i++) {
                    if (d[b[i]] == c[j]) {
                        e.push("Top" + (j + 1) + ":" + b[i] + "  次数:" + c[j]);
                    }
                }
                console.log(e[j]);
            }
        },
        analyze: function () {
            this.fenquecy(this.text);
        }
    },
    created: function () {
        var that = this;
        console.log("通了");
    }
});
//# sourceMappingURL=index.js.map