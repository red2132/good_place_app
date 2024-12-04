import {QueryClient} from '@tanstack/react-query';

const queryCleint = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export default queryCleint;
