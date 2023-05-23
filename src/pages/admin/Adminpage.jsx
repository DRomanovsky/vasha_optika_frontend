import React from 'react'
import { useState } from 'react'

import CreateGood from '../../components/modal/create/CreateGood'
import CreateGoodCategory from '../../components/modal/create/CreateGoodCategory'
import CreateServiceCategory from '../../components/modal/create/CreateServiceCategory'
import CreateService from '../../components/modal/create/CreateService'

import DeleteServiceCategory from '../../components/modal/delete/deleteServiceCategory'
import DeleteGoodsCategory from '../../components/modal/delete/deleteGoodCategory'
import DeleteGood from '../../components/modal/delete/deleteGood'
import DeleteService from '../../components/modal/delete/deleteService'
const Adminpage = () => {
  const [goodVisible, setGoodVisible] = useState(false)
  const [serviceVisible, setServiceVisible] = useState(false)
  const [goodCategoryVisible, setGoodCategoryVisible] = useState(false)
  const [serviceCategoryVisible, setServiceCategoryVisible] = useState(false)
  const [serviceDeleteCategoryVisible, setDeleteServiceCategoryVisible] = useState(false)
  const [goodDeleteCategoryVisible, setDeleteGoodsCategoryVisible] = useState(false)
  const [serviceDeleteVisible, setDeleteServiceVisible] = useState(false)
  const [goodDeleteVisible, setDeleteGoodVisible] = useState(false)
  return (
      <div class="wrapper">
        <div class="Goods">
          <h3>Товары</h3>
          <button onClick={() => setGoodVisible (true)}>Добавить товар</button>
          <button>Изменить товар</button>
          <button onClick={() => setDeleteGoodVisible (true)}>Удалить товар</button>
        </div>
        <div class="Services">
          <h3>Услуги</h3>
          <button onClick={() => setServiceVisible (true)}>Добавить услугу</button>
          <button>Изменить услугу</button>
          <button onClick={() => setDeleteServiceVisible (true)}>Удалить услугу</button>
        </div>
        <div class="GoodCategories">
          <h3>Категории товаров</h3>
          <button onClick={() => setGoodCategoryVisible (true)}>Добавить категорию</button>
          <button>Изменить категорию</button>
          <button onClick={() => setDeleteGoodsCategoryVisible (true)}>Удалить категорию</button>
        </div>
        <div class="ServiceCategories">
          <h3>Категории услуг</h3>
          <button onClick={() => setServiceCategoryVisible (true)}>Добавить категорию</button>
          <button>Изменить категорию</button>
          <button onClick={() => setDeleteServiceCategoryVisible (true)}>Удалить категорию</button>
        </div>
        <CreateGood show = {goodVisible} onHide={() => setGoodVisible (false)}></CreateGood>
        <CreateGoodCategory show = {goodCategoryVisible} onHide={() => setGoodCategoryVisible (false)}></CreateGoodCategory>
        <CreateService show = {serviceVisible} onHide={() => setServiceVisible (false)}></CreateService>
        <CreateServiceCategory show = {serviceCategoryVisible} onHide={() => setServiceCategoryVisible (false)}></CreateServiceCategory>
        <DeleteServiceCategory show = {serviceDeleteCategoryVisible} onHide={() => setDeleteServiceCategoryVisible (false)}></DeleteServiceCategory>
        <DeleteGoodsCategory show = {goodDeleteCategoryVisible} onHide={() => setDeleteGoodsCategoryVisible (false)}></DeleteGoodsCategory>
        <DeleteGood show = {goodDeleteVisible} onHide={() => setDeleteGoodVisible (false)}></DeleteGood>
        <DeleteService show = {serviceDeleteVisible} onHide={() => setDeleteServiceVisible (false)}></DeleteService>
</div>
  )
}

export default Adminpage