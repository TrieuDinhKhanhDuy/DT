import React, { useContext } from "react";
import {
  ProductContext,
  ProductContextType,
} from "../../../contexts/ProductContext";
import { Link } from "react-router-dom";
import { Table, Button, Space, Popconfirm } from "antd";
import type { ColumnsType } from "antd/es/table";
import "antd/dist/reset.css"; // Import CSS của Ant Design
import { DeleteOutlined, QuestionCircleOutlined, ToolOutlined } from "@ant-design/icons";

const ProductList: React.FC = () => {
  const { state, removeProduct } = useContext(
    ProductContext
  ) as ProductContextType;

  const columns: ColumnsType<any> = [
    {
      title: "STT",
      key: "index",
      render: (_: any, __: any, index: number) => index + 1,
      width: '5%'
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: '25%'
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: '15%'
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      width: '20%',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Link to={`/admin/edit/${record._id}`}>
            <Button
              type="primary"
              style={{ backgroundColor: "#ffffff", color: '#fa8c16', borderColor: "#fa8c16" }}
              icon={<ToolOutlined />}
            >
              Edit
            </Button>
          </Link>
          <Popconfirm
            onConfirm={() => removeProduct(record._id)}
            title="Delete the task"
            description="Are you sure to delete this product?"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
          >
            <Button danger icon={<DeleteOutlined />}>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Hello Admin</h1>
      <Table
        columns={columns}
        dataSource={state.products}
        rowKey="_id"
        bordered
        className="table table-bodered table-striped text-center"
      />
    </div>
  );
};

export default ProductList;
