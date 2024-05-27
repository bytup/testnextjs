'use client'
import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import DropdownElement from './DropdownElement';
import Search from 'antd/es/transfer/search';
const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
   
  },]

const AddCaseCM = () => {
  return (
    <div className="p-10">
      <div>
        <h1 className="font-medium text-[26px]">All Cases</h1>
      </div>
      <div className="flex justify-between mt-10">
        <div className='flex gap-5 '>
         <DropdownElement items={items} title={'Search case by'}/>
         <DropdownElement items={items} title={'partner'}/>
         <DropdownElement items={items} title={'status'}/>
         <DropdownElement items={items} title={'From-To'}/>
        </div>
        <Link href="add-case-cm/add-new-case">
          <Button type="primary" className="bg-[#004098] px-5 ">
            Add New Case
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AddCaseCM;
