import Card from "./Card";
function Products() {
  return (
    <div className="container products">
        <h2 className="main-title text-center">PRODUCTS</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Dehydrated Foods" img="card1.jpg" text="Our vegetables are collected from the fresh fields in Sri Lanka. We assure our customers of healthiness, and high quality, and freshness is assured through good quality packaging."/>
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="All Kind of Spices" img="card2.jpg" text="Ceylon spices are unique in the world. We assure our consumers same quality and divine flavor through right processing and packaging to preserve quality & freshness."/>
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Dried Fruits" img="card3.jpg" text="Our dried fruits are collected from the farmers who do not use harmful chemicals. We assure freshness, quality and nutrition values through the right processing and packaging."/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Products;
