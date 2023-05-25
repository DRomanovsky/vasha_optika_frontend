import {$authHost, $host} from './index'

export const createServiceCategory = async (serviceCategory) =>{
    const {data} = await $authHost.post('api/serviceCategory', serviceCategory)
    return data
}
export const fetchServiceCategory = async () =>{
    const {data} = await $host.get('api/serviceCategory')
    return data
}
export const deleteOneServiceCategory = async(id) =>{
    const {data} = await $authHost.delete('api/serviceCategory/delete/' + id)
    return data
}
export const createServices = async (services) =>{
    const {data} = await $authHost.post('api/service', services)
    return data
}
export const fetchServices = async () =>{
    const {data} = await $host.get('api/service')
    return data
}
export const fetchOneServices = async (id) =>{
    const {data} = await $host.get('api/service' + id)
    return data
}
export const deleteOneService = async(id) =>{
    const {data} = await $authHost.delete('api/service/delete/' + id)
    return data
}