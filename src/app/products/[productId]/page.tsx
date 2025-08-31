export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Details about product {productId}</h1>;
}

// The type of params is a promise that resolves to an object containing the dynamic segemnets as key value pairs. In our case, that is product id.
