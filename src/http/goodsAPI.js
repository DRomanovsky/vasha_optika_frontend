import {$authHost, $host} from './index'

export const createGoodsCategory = async (goodCragory) =>{
    const {data} = await $authHost.post('api/goodCategory', goodCragory)
    return data
}
export const fetchGoodsCategory = async () =>{
    const {data} = await $host.get('api/goodCategory')
    return data
}
export const deleteOneGoodsCategory = async(id) =>{
    const {data} = await $authHost.delete('api/goodCategory/delete/' + id)
    return data
}
export const createGoods = async (goods) =>{
    const {data} = await $authHost.post('api/good', goods)
    return data
}
export const fetchGoods = async (goodsCategoryId, page, limit) =>{
    const {data} = await $host.get('api/good', {params: {
        goodsCategoryId, page, limit
    }})
    return data
}
export const fetchOneGoods = async (id) =>{
    const {data} = await $host.get('api/good' + id)
    return data
}

export const deleteOneGoods = async(id) =>{
    const {data} = await $authHost.delete('api/good/delete/' + id)
    return data
}