import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, Input, InputNumber, Typography } from 'antd';
import React, { useContext, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../../api';
import { ProductContext, ProductContextType } from '../../../contexts/ProductContext';
import { Product } from '../../../interfaces/Products';
import { productSchema } from '../../../ultis/validation';

const { Title } = Typography;

const ProductForm: React.FC = () => {
  
  const { handleProduct } = useContext(ProductContext) as ProductContextType;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const { data } = await instance.get(`/products/${id}`);
          reset(data.data);
        } catch (error) {
          console.error('Failed to fetch product data:', error);
        }
      })();
    }
  }, [id, reset]);

  const onFinish = async (data: Product) => {
    await handleProduct({ ...data, _id: id });
    navigate('/admin/products'); // Navigate to the product list or any other route after submit
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>{id ? 'Edit Product' : 'Add Product'}</Title>
      <Form
        layout="vertical"
        onFinish={handleSubmit(onFinish)}
        initialValues={{ title: '', price: 0, description: '' }}
      >
        <Form.Item
          label="Title"
          name="title"
          validateStatus={errors.title ? 'error' : ''}
          help={errors.title ? errors.title.message : ''}
        >
          <Controller
            name="title"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          validateStatus={errors.price ? 'error' : ''}
          help={errors.price ? errors.price.message : ''}
        >
          <Controller
            name="price"
            control={control}
            render={({ field }) => <InputNumber {...field} style={{ width: '100%' }} />}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
        >
          <Controller
            name="description"
            control={control}
            render={({ field }) => <Input.TextArea {...field} rows={4} />}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            {id ? 'Update Product' : 'Add Product'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductForm;
