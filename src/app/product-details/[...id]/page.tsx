import ProductDetailsClient from "./ProductDetailsClient";
import { createPageMetadata } from "@/lib/metadata";
import products from "@/data/ProductData";

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = products.find((item) => String(item.id) === id[0]);
  return createPageMetadata(`/product-details/${id.map(encodeURIComponent).join("/")}`,
    product?.title ?? "Produit introuvable",
    product ? `Découvrez ${product.title} et ses caractéristiques dans le catalogue du site de VUK’AFRIK.` : "Retrouvez les articles disponibles dans le catalogue du site de VUK’AFRIK.");
}

type Props = {
  params: Promise<{ id: string[] }>;
};

export default async function Page({ params }: Props) {

  const { id } = await params;
  const productId = id[0];

  return (
    <>
      <ProductDetailsClient productId={productId} />
    </>
  )
}
