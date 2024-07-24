import { QuestionCircleOutlined  } from '@ant-design/icons';
import type { GetRef, InputRef } from 'antd';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';


type FormInstance<T> = GetRef<typeof Form<T>>;

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
  key: React.Key;
  name: string;
  age: string;
  address: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

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
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
       Add a row
      </Button>
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
