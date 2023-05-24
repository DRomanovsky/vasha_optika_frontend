import {makeAutoObservable} from "mobx";

export default class GoodsStore {
    constructor() {
        this._goodsCategories = []
        this._goodes = []
        this._selectedCategory = {}
        this._selectedGood = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 6
        makeAutoObservable(this)
    }

    setGoods(goodes) {
        this._goodes = goodes
    }
    setGoodsCategory(goodsCategories){
        this._goodsCategories = goodsCategories
    }
    setSelectedCategory(goodsCategory) {
        this._selectedCategory = goodsCategory
    }
    setSelectedGood(selectedGood) {
        this._selectedGood = selectedGood
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get goodes() {
        return this._goodes
    }
    get goodsCategories() {
        return this._goodsCategories
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedGood() {
        return this._selectedGood
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
  }