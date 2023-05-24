import React, {useContext, useEffect} from 'react';
import GoodsList from '../components/GoodsList'
import { observer } from 'mobx-react-lite'
import {Context} from "../index";
import {fetchGoods, fetchGoodsCategory, fet} from "../http/goodsAPI";
import GoodsCategoryList from '../components/GoodsCategoryList';

const Catalog = observer(() => {
  const {goods} = useContext(Context)

    useEffect(() => {
        fetchGoodsCategory().then(data => goods.setGoodsCategory(data))
        fetchGoods(goods.selectedCategory.id).then(data => {
          goods.setGoods(data.rows)
          goods.setTotalCount(data.count)
      })
  }, [goods.selectedCategory])

        

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
      </div>
    </div>
  )
})

export default Catalog