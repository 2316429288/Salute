import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Mock from "mockjs";
import { ImageProps } from '../store'

// Mock数据
interface ListData {
  createdAt: string;
  avatar?: ImageProps;
  __v?: number;
  author: string;
  description: string;
  title: string;
  _id: string;
  key: number;
}
interface MockColumns {
code: number;
data: {
  count: number;
  list: ListData[]
}
}

const listData:ListData[] = [];
const idRandom = Math.random().toString(36).substr(2);
const listCount = 4
const status = 200

for (let i = 0; i < listCount; i++) {
listData.push(
  Mock.mock({
    createdAt: Mock.Random.now(),
    avatar: {
      _id: idRandom,
    },
    __v: 0,
    author: Mock.Random.cname(),
    description: Mock.Random.cparagraph(3, 5),
    title: "Salute",
    _id: idRandom,
    key: i
  })
);
}
const columnsData: MockColumns = {
code: status,
data: {
  count: listCount,
  list: listData
}
}

// 拦截请求
export default {
  getColumns() {
    const mock = new MockAdapter(axios);
    mock.onGet("https://api.shayu.com/api/columns").reply(status, columnsData);
  },
};
