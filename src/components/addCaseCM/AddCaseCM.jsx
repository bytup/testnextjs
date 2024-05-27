
"use client";
import React from "react";
import { Table } from "antd";
import { Dropdown, Input } from "./InputCards";
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const columns = [
  {
    title: "SI.NO",
    dataIndex: "SINO",
  },
  {
    title: " Class Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Partner",
    className: "column-money",
    dataIndex: "Partner",
    align: "left",
  },
  {
    title: "Allocated Date",
    dataIndex: "date",
  },
  {
    title: "Decision Date",
    dataIndex: "enddate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      switch (status) {
        case "approved":
          return (
            <span>
              <CheckCircleOutlined style={{ color: "green" }} /> Approved
            </span>
          );
        case "recommended":
          return (
            <span>
              <InfoCircleOutlined style={{ color: "blue" }} /> Recommended
            </span>
          );
        case "rejected":
          return (
            <span>
              <CloseCircleOutlined style={{ color: "red" }} /> Rejected
            </span>
          );
        default:
          return <span>{status}</span>;
      }
    },
  },
  {
    title: "Rejection Reason",
    dataIndex: "reason",
  },
  {
    title: "Credit Manager",
    dataIndex: "manager",
  },
];
const data = [
  {
    key: "1",
    SINO: "100",
    name: "Sontanic Engine Lub Vehicle...",
    Partner: "LX",
    date: "13/05/2024",
    enddate: "-",
    status: "approved",
    reason: "-",
    manager: "Rohan Varma",
  },
  {
    key: "2",
    SINO: "99",
    name: "Sontanic Engine Lub Vehicle...",
    Partner: "Ashv",
    date: "13/05/2024",
    enddate: "-",
    status: "recommended",
    reason: "-",
    manager: "Rohan Varma",
  },
  {
    key: "3",
    SINO: "98",
    name: "Sontanic Engine Lub Vehicle...",
    Partner: "LX",
    date: "13/05/2024",
    enddate: "13/06/2025",
    status: "rejected",
    reason: "Reject-dedupe match found in SBL",
    manager: "Rohan Varma",
  },
  {
    key: "4",
    SINO: "97",
    name: "Sontanic Engine Lub Vehicle...",
    Partner: "Progcap",
    date: "13/05/2024",
    enddate: "13/06/2025",
    status: "-",
    reason: "PD norms not met",
    manager: "Rohan Varma",
  },
];
const options = [
  { value: "Search case by", label: "Search case by" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const partner = [
  { value: "Partner", label: "Partner" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const status = [
  { value: "Status", label: "Status" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const from = [
  { value: "From .To", label: "From .To" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const AddCaseCM = () => (
  <div className=" bg-white">
    <h2 className=" bg-white text-slate-700 text-xl">All Cases</h2>
    <div className=" flex justify-between bg-white mt-4 mb-8">
      <div className=" flex gap-2">
        <Dropdown options={options} />
        <Input options={partner} />
        <Input options={status} />
        <Input options={from} />
      </div>
      <div>
        <button className=" bg-blue-400 text-white px-2 py-1 rounded-sm text-sm opacity-75">
          Add New Case
        </button>
      </div>
    </div>
    <Table
      columns={columns}
      dataSource={data}
      // title={() => "Header"}
      // footer={() => "Footer"}
    />
  </div>
);
export default AddCaseCM;

