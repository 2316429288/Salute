import Mock from "mockjs";
import { ImageProps } from '../store'

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
const listCount = 5

for (let i = 0; i < listCount; i++) {
  listData.push(
    Mock.mock({
      createdAt: Mock.Random.now(),
      avatar: {
        _id: idRandom,
        url: "http://m.imeitou.com/uploads/allimg/2020062609/30veg53ulvd.jpeg"
      },
      __v: 0,
      author: Mock.Random.cname(),
      description: Mock.Random.paragraph(),
      title: "Salute",
      _id: idRandom,
      key: i
    })
  );
}
const columnsData: MockColumns = {
  code: 200,
  data: {
    count: listCount,
    list: listData
  }
}
export { columnsData };
