import Head from 'next/head';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default function Home({ pizzaList }) {
  return (
    <div >
      <Head>
        <title>PIZZA_HUB</title>
        <link rel="icon" href="/img/pizza-logo.png" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  )
}
export const getServerSideProps = async () => {
  const res = await axios.get(`${BASE_URL}/api/products/`);
  return {
    props: {
      pizzaList: res.data,
    }
  }
}
