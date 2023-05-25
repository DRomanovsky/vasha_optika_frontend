import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

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
      <div className="wrapper">
        <div className="goodsAdmin">
          <h2>Товары</h2>
          <Button className="mt-3" onClick={() => setGoodVisible (true)}>Добавить товар</Button>
          <Button className="mt-3">Изменить товар</Button>
          <Button className="mt-3" onClick={() => setDeleteGoodVisible (true)}>Удалить товар</Button>
        </div>
        <div className="servicesAdmin">
          <h2>Услуги</h2>
          <Button className="mt-3" onClick={() => setServiceVisible (true)}>Добавить услугу</Button>
          <Button className="mt-3">Изменить услугу</Button>
          <Button className="mt-3" onClick={() => setDeleteServiceVisible (true)}>Удалить услугу</Button>
        </div>
        <div className="goodCategoriesAdmin">
          <h2>Категории товаров</h2>
          <Button className="mt-3" onClick={() => setGoodCategoryVisible (true)}>Добавить категорию</Button>
          <Button className="mt-3">Изменить категорию</Button>
          <Button className="mt-3" onClick={() => setDeleteGoodsCategoryVisible (true)}>Удалить категорию</Button>
        </div>
        <div className="serviceCategoriesAdmin">
          <h2>Категории услуг</h2>
          <Button className="mt-3" onClick={() => setServiceCategoryVisible (true)}>Добавить категорию</Button>
          <Button className="mt-3">Изменить категорию</Button>
          <Button className="mt-3" onClick={() => setDeleteServiceCategoryVisible (true)}>Удалить категорию</Button>
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