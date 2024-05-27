import React from 'react';
import Link from 'next/link';
import CaseTable from '@/components/addCaseCM/CaseTable';
import LoanTable from '@/components/addCaseCM/LoanTable';
import BusinessTable from '@/components/addCaseCM/BusinessTable';
import DecisionTable from '@/components/addCaseCM/DecisionTable';
import CreditTable from '@/components/addCaseCM/CreditTable';
import { Button } from 'antd';

const Page = () => {
  const caseDetails = [
    {
      label: 'Partner*',
      type: 'select',
      value: '',
      options: ['Ashv', 'Partner2', 'Partner3'],
    },
    {
      label: 'Case Name*',
      type: 'text',
      value: '',
      placeholder: 'Enter Case Name',
    },
    {
      label: 'Case Id*',
      type: 'number',
      value: '',
      placeholder: 'Enter Case Id',
    },
    {
      label: 'Allocation Date*',
      type: 'text',
      value: '',
      placeholder: 'Select Allocation Date',
    },
    {
      label: 'Month',
      type: 'text',
      value: '',
      placeholder: 'Enter Month',
    },
  ];

  const loanDetails = [
    {
      label: 'Product',
      type: 'select',
      value: '',
      placeholder: 'Enter Product',
      options: ['product1', 'product2', 'product3'],
    },
    {
      label: 'Loan Amount (in Rs)',
      type: 'number',
      value: '',
      placeholder: 'Enter Loan Amount',
    },
    {
      label: 'Tenure',
      type: 'text',
      value: '',
      placeholder: 'Enter Tenure',
    },
    {
      label: 'ROI',
      type: 'text',
      value: '',
      placeholder: 'Enter ROI',
    },
  ];

  const decisionDetails = [
    {
      label: 'Query Reasons',
      type: 'text',
      value: '',
      placeholder: 'Enter Query Reasons',
    },
    {
      label: 'Status',
      type: 'select',
      value: '',
      placeholder: 'select Status',
      options:['Yes','No']
    },
    {
      label: 'Decision Date',
      type: 'date',
      value: '',
      placeholder: 'Select Decision Date',
    },
  ];

  const businessDetails = [
    {
      label: 'State',
      type: 'select',
      value: '',
      placeholder: 'Enter State',
      options: ['State1', 'State2', 'State3'], // Add your options here
    },
    {
      label: 'Constitution',
      type: 'text',
      value: '',
      placeholder: 'Enter Constitution',
    },
    {
      label: 'Nature of Business',
      type: 'select',
      value: '',
      placeholder: 'Select Nature of Business',
      options: ['Manufacturing', 'Retail', 'Services', 'Finance', 'Technology', 'Others'], // Add your options here
    },
    {
      label: 'Industry Type',
      type: 'select',
      value: '',
      placeholder: 'Select Industry Type',
      options: ['Automobile', 'Information Technology', 'Healthcare', 'Education', 'Construction', 'Others'], // Add your options here
    },
    {
      label: 'IT',
      type: 'select',
      value: '',
      placeholder: 'Select IT',
      options: ['Yes', 'No'], // Add your options here
    },
    {
      label: 'Business Vintage (months)',
      type: 'select',
      value: '',
      placeholder: 'Select Business Vintage (months)',
      options: ['0-12', '13-36', '37-60', '61+'], // Add your options here
    },
    {
      label: 'MSME classification',
      type: 'select',
      value: '',
      placeholder: 'Select MSME classification',
      options: ['Micro', 'Small', 'Medium', 'Large'], // Add your options here
    },
    {
      label: 'Turnover (in lakhs)',
      type: 'text',
      value: '',
      placeholder: 'Enter Turnover (in lakhs)',
    },
    {
      label: 'CIBI SCORE (Prop)',
      type: 'text',
      value: '',
      placeholder: 'Enter CIBI SCORE (Prop)',
    },
    {
      label: 'GSTIN',
      type: 'text',
      value: '',
      placeholder: 'Enter GSTIN',
    },
    {
      label: 'PAN NO.1*',
      type: 'text',
      value: '',
      placeholder: 'Enter PAN NO.1*',
    },
    {
      label: 'PAN NO.2',
      type: 'text',
      value: '',
      placeholder: 'Enter PAN NO.2',
    },
    {
      label: 'PAN NO.3',
      type: 'text',
      value: '',
      placeholder: 'Enter PAN NO.3',
    },
  ];

  const creditDetails = [
    {
      label: 'Credit Manager Name*',
      type: 'text',
      value: '',
      placeholder: 'Enter Credit Manager Name',
    },
    {
      label: 'DOA as per matrix defined in policy',
      type: 'date',
      value: '',
      placeholder: 'Select DOA',
    },
  ];

  return (
    <div className='bg-[#FAF8F5]'>
      <Link className='font-base pt-2 ml-20' href={'/add-case-cm'}>Add New Case</Link>
      <CaseTable caseDetails={caseDetails} />
      <LoanTable loanDetails={loanDetails} />
      <BusinessTable businessDetails={businessDetails} />
      <DecisionTable decisionDetails={decisionDetails} />
      <CreditTable creditDetails={creditDetails} />
      <div className='ml-[80%] flex mb-2'>
        <button className='font-bold border border-gray-500 rounded-md py-3 px-10 mr-2'>Submit</button>
        <button className='text-white font-bold bg-[#004098] rounded-md py-3 px-10'>Save</button>
      </div>
    </div>
  );
};

export default Page;
