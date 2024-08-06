import { TreeViewItem } from './treeview.type';
import { uniqueId } from 'lodash';

// mock item
export const MOCK_TREE_ITEMS: TreeViewItem[] = [
  {
    id: 'MOCK',
    label: 'MOCK API 테스트',
    type: 'FOLDER',
    children: [
      {
        id: uniqueId(),
        label: '[MOCK-01] 검색',
        type: 'ITEM',
        config: {
          url: '/api/test/search/keyword',
          method: 'GET',
          params: {
            noAuth: 1,
            k: 'keyword1',
            i: 5,
            s: 10,
          },
        },
      },
      {
        id: uniqueId(),
        label: '[MOCK-02] 로그인',
        type: 'ITEM',
        config: {
          url: '/api/test/login',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          },
          data: {
            id: 'guest@onm.com',
            pw: 'a1d2m3i4n',
          },
        },
      },
      {
        id: uniqueId(),
        label: '[MOCK-03] 토큰 갱신',
        type: 'ITEM',
        config: {
          url: '/api/test/refresh',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          },
          data: {
            refreshToken:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QiLCJpYXQiOjE3MTkzNzY3MjMsImV4cCI6MTcyMTk2ODcyM30.PjptFrIFaZBuKhFQsmJu7IFn2TiDtqoDDdd4XJQTYaM',
          },
        },
      },
      {
        id: uniqueId(),
        label: '[MOCK-04] 더미 데이터 읽기(파라미터)',
        type: 'ITEM',
        config: {
          url: '/api/test/data',
          method: 'GET',
          params: {
            param: 'testparam',
          },
        },
      },
      {
        id: uniqueId(),
        label: '[MOCK-05] 더미 데이터 추가',
        type: 'ITEM',
        config: {
          url: '/api/test/data',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QiLCJpYXQiOjE3MjAwNTM4NDYsImV4cCI6MTcyMDA1NTY0Nn0.0eBTXKrbigSDIBKpIhLIIj7OMniBoY4CT_IqZitHiq0',
          },
          data: {
            data: 'post data',
          },
        },
      },
      {
        id: uniqueId(),
        label: '[MOCK-06] 더미 데이터 읽기(Echo)',
        type: 'ITEM',
        config: {
          url: '/api/test/dataerr',
          method: 'GET',
          params: {
            param: '402',
          },
        },
      },
      {
        id: uniqueId(),
        label: '[MOCK-07] 검색 품질',
        type: 'ITEM',
        config: {
          url: '/api/test/search/quality',
          method: 'GET',
          params: {
            noAuth: 1,
          },
        },
      },
      {
        id: uniqueId(),
        label: '[MOCK-08] 검색 품질 추가',
        type: 'ITEM',
        config: {
          url: '/api/test/search/quality',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            noAuth: 1,
          },
          data: {
            keyword: 'keyword13',
            hits: { lastHour: 9, lastDay: 90, lastWeek: 900, lastMonth: 9000 },
            quality: 0.8,
            complaints: 9,
          },
        },
      },
      {
        id: uniqueId(),
        label: '[MOCK-09] 검색 품질 수정',
        type: 'ITEM',
        config: {
          url: '/api/test/search/quality',
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            noAuth: 1,
            keyword: 'keyword13',
          },
          data: {
            quality: 0.5,
          },
        },
      },
    ],
  },
];
