/*
 * @Author: 蒲飞 
 * @Date: 2017-08-02 17:06:32 
 * @Last Modified by: 蒲飞
 * @Last Modified time: 2017-08-02 17:28:30
 */
const STORAGE_KEY = 'todos-vuejs'
export default {
    fetch() {
        return JSON.parse(window.localStorage.getItem((STORAGE_KEY) || '[]'))
    },
    save(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    },
}