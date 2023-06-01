import { Layout } from './../../components/layout/index';
import { Card } from './../../components/card/index';
import { ProductDetail } from '../../components/productDetail';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { useParams } from 'react-router-dom';
function Home() {
  const context = useContext(ShoppingCartContext);
  const items = context.items;
  const params = useParams();
  let category = String(params.category);
  // Render filtered items
  const renderView = () => {
    let renderItems = items;
    if (category) {
      renderItems = context.filteredItem;
    }

    if (context.searchedName?.length > 0) {
      renderItems = context.filteredItem;
    }

    if (renderItems.length === 0) {
      return <div>No items found</div>;
    }

    return renderItems?.map((item) => (
      <Card key={renderItems.id} data={item} />
    ));
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-96 mb-6">
        <h1>Home - All products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-gray-200 w-96 p-2 mb-4 text-sm focus:outline-none"
        onChange={(event) => context.setSearchedName(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
