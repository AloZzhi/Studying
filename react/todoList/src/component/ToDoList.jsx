import { Input, Space, Table, Popconfirm, Button, Form } from "antd";
import "./ToDoList.css";
import axios from "axios";
import { useEffect, useState } from "react";

const { Search } = Input;

export default function ToDoList() {
  //数据请求
  const getData = () => {
    axios.get("http://localhost:3000/data").then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  };

  //删除数据
  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3000/data/${id}`);
    getData();
  };

  //检索数据
  const onSearch = async (value) => {
    const res = await axios.get(`http://localhost:3000/data/?name=${value}`);
    setList(res.data);
    console.log(res);
  };

  //提交

  const onFinish = async (values) => {
    console.log(values);
    let obj = {
      key: `${+list[list.length - 1].key + 1}`,
      id: `${+list[list.length - 1].id + 1}`,
      name: values.name,
      desc: values.desc,
    };
    await axios.post(`http://localhost:3000/data`, obj);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const [list, setList] = useState([]);

  const columns = [
    {
      title: "任务编号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "任务名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "任务描述",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "操作",
      dataIndex: "do",
      key: "do",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="确定要删除这项吗?"
            onConfirm={() => {
              onDelete(record.id);
            }}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="search-box">
        <Space direction="vertical">
          <Search
            placeholder="input add todos"
            enterButton="搜索"
            size="large"
            onSearch={onSearch}
          />
        </Space>
      </div>
      <Table pagination={false} columns={columns} dataSource={list}></Table>

      <div className="from" style={{ marginTop: "30px" }}>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="任务名称"
            name="name"
            rules={[{ required: true, message: "请输入任务名称" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="任务描述"
            name="desc"
            rules={[{ required: true, message: "请输入任务描述" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 4 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
