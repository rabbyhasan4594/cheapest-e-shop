
export async function getStaticProps() {
  const res = await fetch('@/data/fakeData.json');
  const data = await res.json();

  return {
    props: {
      products: data.products
    }
  };
}






