import { Table, DatePicker, Button, Space } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const ReportPage = () => {
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState([]);

  const handleGenerate = () => {
    const [start, end] = dateRange;
    const newData = Array.from({ length: 10 }, (_, index) => ({
      key: index,
      date: dayjs(start).add(index, 'day').format('YYYY-MM-DD'),
      parameter1: `Параметр 1 - ${index}`,
      parameter2: `Параметр 2 - ${index}`,
      parameter3: `Параметр 3 - ${index}`,
      parameter4: `Параметр 4 - ${index}`,
      parameter5: `Параметр 5 - ${index}`,
    }));
    setData(newData);
  };

  const columns = [
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'Параметр 1', dataIndex: 'parameter1', key: 'parameter1' },
    { title: 'Параметр 2', dataIndex: 'parameter2', key: 'parameter2' },
    { title: 'Параметр 3', dataIndex: 'parameter3', key: 'parameter3' },
    { title: 'Параметр 4', dataIndex: 'parameter4', key: 'parameter4' },
    { title: 'Параметр 5', dataIndex: 'parameter5', key: 'parameter5' },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <RangePicker
          onChange={(dates) => setDateRange(dates)}
          style={{ width: '100%' }}
        />
        <Button type="primary" onClick={handleGenerate}>
          Сгенерировать отчет
        </Button>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Space>
    </div>
  );
};

export default ReportPage;
