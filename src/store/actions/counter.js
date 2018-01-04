/*
 * action 类型
 */

export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'



/*
 * action 创建函数
 * increase 点击增加
 * decrease 点击减小
 */

export function increase(num) {
    return { type: INCREASE ,num}
}

export function decrease(num) {
    return { type: DECREASE ,num}
}