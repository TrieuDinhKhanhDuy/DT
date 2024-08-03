import { DeleteOutlined, QuestionCircleOutlined, ToolOutlined } from '@ant-design/icons';
import { Button, Input, Popconfirm, Select, Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { Product } from '../../../interfaces/Products';
import instance from '../../../api';

const { Option } = Select;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Fetch all products from the API
  const getAllProducts = async () => {
    try {
      const { data } = await instance.get('/products');
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // Handle sorting
  const handleSort = (value: string) => {
    let sorted = [...filteredProducts];
    if (value === 'asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === 'desc') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sorted);
  };

  // Handle search
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchValue)
    );
    setFilteredProducts(filtered);
  };

  const columns: ColumnsType<Product> = [
    {
      title: 'STT',
      key: 'index',
      render: (_: any, __: any, index: number) => index + 1,
      width: '5%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '15%',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      width: '15%',
      render: (image: string) => (
        <img src={image} alt="Product" style={{ width: '100px', height: 'auto' }} />
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      width: '20%',
      render: (_: any, record: Product) => (
        <Space size="middle">
          <Link to={`admin/products/${record.id}`}>
            <Button
              type="primary"
              style={{ backgroundColor: '#ffffff', color: '#fa8c16', borderColor: '#fa8c16' }}
              icon={<ToolOutlined />}
            >
              Edit
            </Button>
          </Link>
          <Popconfirm
            title="Delete the product"
            description="Are you sure you want to delete this product?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          >
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Space style={{ marginBottom: 16 }} direction="vertical" size="middle">
      <label htmlFor="search" className='text-2xl'>Tìm kiếm sản phẩm</label>
        <Input
          placeholder="Search product by name"
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: 200 }}
        />
              <label htmlFor="search" className='text-2xl'>Lọc sản phẩm theo giá</label>
        <Select
          defaultValue="asc"
          style={{ width: 200 }}
          onChange={handleSort}
        >
          <Option value="asc">Price: Từ thấp đến cao</Option>
          <Option value="desc">Price: Từ cao đến thấp</Option>
        </Select>
        <Button type="primary">
          Add a row
        </Button>
      </Space>
      <Table
        columns={columns}
        dataSource={filteredProducts}
        rowKey="_id"
        bordered
        className="table table-bordered table-striped text-center"
      />
    </div>
  );
};

export default ProductList;
