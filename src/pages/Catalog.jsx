import React, {useContext, useEffect} from 'react';
import GoodsList from '../components/GoodsList'
import { observer } from 'mobx-react-lite'
import {Context} from "../index";
import {fetchGoods, fetchGoodsCategory} from "../http/goodsAPI";

const Catalog = observer(() => {
  const {goods} = useContext(Context)

    useEffect(() => {
        fetchGoodsCategory().then(data => goods.setGoodsCategory(data))
        fetchGoods(null, 1, 2).then(data => {
            goods.setGoods(data.rows)
            goods.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchGoods(goods.selectedCategory.id, goods.page, 2).then(data => {
            goods.setGoods(data.rows)
            goods.setTotalCount(data.count)
        })
    }, [goods.page, goods.selectedCategory,])

  return (
    <div class="wrapper catalog">
      <div class="catalogLeft">

      </div>
      <div className="catalogRight">
        <h2>Категория</h2>
        <div className="cardWrapper">
          <GoodsList></GoodsList>
        </div>
      </div>
    </div>
  )
})

export default Catalog