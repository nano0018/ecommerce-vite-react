import { useEffect, useState } from 'react';
import Layout from './../../components/layout/index';
import Card from './../../components/card/index';
import FetchData from '../../utils/FetchData';
function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    const URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=100';
    try {
      FetchData(URL).then((data) => setItems(data));
      console.log(items);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
