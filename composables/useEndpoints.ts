export const endpoints = {
  firestore: {
    add: (col?: string) => `/api/firestore/add?col=${col}`,
    delete: (col: string, id: string) => `/api/firestore/delete?col=${col}&id=${id}`,
    query: (col: string) => `/api/firestore/query?col=${col}`,
    addUser: (col: string, id: string) => `/api/firestore/addUser?col=${col}&id=${id}`,
    update: (col: string, id: string) => `/api/firestore/update?col=${col}&id=${id}`,
    getDoc: (col: string, id: string) => `/api/firestore/getDoc?col=${col}&id=${id}`,
  },
};