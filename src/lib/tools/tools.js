//  数组去重
Array.prototype.unique = function () {
    let newArr = []
    this.forEach((item) => {
        if (newArr.indexOf(item) < 0) {
            newArr.push(item)
        }
    })
    return newArr
}
//  数组长度
Array.prototype.len = function () {
    return this.length
}
//  数组最大值  最小值
Array.prototype.max = function () {
    let imax = this.shift()
    this.forEach((item) => {
        imax = item > imax ? item : imax
    })
    return imax
}
Array.prototype.min = function () {
    let imin = this.shift()
    this.forEach((item) => {
        imin = item < imin ? item : imin
    })
    return imin
}
// 向数组指定位置插入数据
Array.prototype.prepend = function (item) {
    let arr = this.slice(0)
    arr.unshift(item)
    return arr
}
// 数组克隆
Array.prototype.clone = function () {
    return this.slice(0)
}

//  数组总和
Array.prototype.sum = function () {
    return this.reduce((acc, val) => acc + val, 0)
}


//  数组平均数
Array.prototype.average = function () {
    return this.reduce((acc, val) => acc + val, 0) / this.length
}

//  数组中值出现的次数
Array.prototype.count = function (res) {
    return this.reduce((a, v) => v === res ? a + 1 : a + 0, 0)
}
// 填充数组
Array.prototype.fillArray = function (val, sta = 0, end = this.length) {
    return this.map((v, i) => sta && i < end ? val : v)
}

//  二维数组矩阵行列转换
Array.prototype.matrix = function () {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr[i] = []
    }
    for (let j = 0; j < this.length; j++) {
        for (let n = 0; n < this[j].length; n++) {
            if (this[j][n]) {
                arr[n][j] = this[j][n]
            }
        }
    }
    return arr
}

/* ------------------ /数组相关方法 ---------------------- */

/* ------------------ String相关方法 ---------------------- */
// 字符串去除空格
String.prototype.trimAll = function () {
    return this ? this.replace(/\s/g, "") : ''
}
// 字符串长度
String.prototype.len = function () {
    return this.length
}
/* ------------------ /String相关方法 ---------------------- */
