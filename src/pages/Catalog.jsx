import React, {useContext, useEffect} from 'react';
import GoodsList from '../components/GoodsList'
import { observer } from 'mobx-react-lite'
import {Context} from "../index";
import {fetchGoods, fetchGoodsCategory} from "../http/goodsAPI";
import GoodsCategoryList from '../components/GoodsCategoryList';
import Pages from '../components/Pages';

const Catalog = observer(() => {
  const {goods} = useContext(Context)

    useEffect(() => {
        fetchGoodsCategory().then(data => goods.setGoodsCategory(data))
        fetchGoods(null, goods.page, 6).then(data => {
          goods.setGoods(data.rows)
          goods.setTotalCount(data.count)
        })  
        
  }, [])
    useEffect(() => {
        fetchGoods(goods.selectedCategory.id, goods.page, 6).then(data => {
          goods.setGoods(data.rows)
          goods.setTotalCount(data.count)
        })
    }, [goods.page, goods, goods.selectedCategory, ])
  return (
    <div class="wrapper catalog">
      <div class="catalogLeft">
        <GoodsCategoryList></GoodsCategoryList>
      </div>
      <div className="catalogRight">
        <h2>Категория</h2>
        <div className="cardWrapper">
          <GoodsList></GoodsList>
        </div>
        <Pages></Pages>
      </div>
    </div>
  )
})

export default Catalog