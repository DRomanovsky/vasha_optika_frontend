import {makeAutoObservable} from "mobx";

export default class ServicesStore {
    constructor() {
        this._servicesCategories = []
        this._services = []
        this._selectedCategory = {}
        this._selectedService = {}
        makeAutoObservable(this)
    }

    setServices(services) {
        this._services = services
    }
    setServicesCategory(servicesCategories){
        this._servicesCategories = servicesCategories
    }
    setSelectedCategory(serviceCategory) {
        this._selectedCategory = serviceCategory
    }
    setSelectedService(selectedService) {
        this._selectedService = selectedService
    }
    get services() {
        return this._services
    }
    get servicesCategories() {
        return this._servicesCategories
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedService() {
        return this._selectedService
    }
  }