import React from 'react'
import {Pagination} from "react-bootstrap";
import {useContext} from 'react'
import {Context} from '../index'
import { observer } from 'mobx-react-lite';

const Pages = observer(() => {
    const {goods} = useContext(Context)
    const pageCount = Math.ceil(goods.totalCount / goods.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

  return (
    <Pagination>
            {pages.map(page =>
                <Pagination.Item
                    style={{cursor: 'pointer'}}
                    active={goods.page === page}
                    onClick={() => goods.setPage(page)}
                    key={page}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
  )
})

export default Pages