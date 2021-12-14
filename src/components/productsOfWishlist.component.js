import React, { useEffect } from 'react';
import { Container, Badge, Tabs, Tab, Image, Row, Col, Card } from 'react-bootstrap';
import image1 from '../images/product.jpg';

export const ProductsCard = ({ products }) => {
    return (<Container>
        <Row className='mb-2'>
            {products?.map((product) =>
                <Col sm={3} >
                    <Card style={{ width: '16rem' }} className='m-2'>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <h3>{product.price + ' ' + product.currency}</h3>
                            <Badge bg="warning" text="dark">
                                {product.statut}
                            </Badge>{' '}
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    </Container>
    )
}

export const Products = ({ products }) => {
    return (<Container>
        <table className="table">
            <thead>
                <tr  >
                    <th scope="col" className="w-auto p-2" >Image</th>
                    <th scope="col" className="w-auto p-2" >Title</th>
                    <th scope="col" className="w-auto p-2" >Description</th>
                    <th scope="col" className="w-auto p-2" >Statut</th>
                    <th scope="col" className="w-auto p-2" >Price</th>
                </tr>
            </thead>
            <tbody>
                {products?.map((product) =>
                    <React.Fragment>
                        <tr >
                            <td className="w-auto p-2" >
                                <Image variant="top" src={image1} style={{ width: '20%' }} />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>
                                <Badge bg="warning" text="dark">
                                    {product.statut}
                                </Badge>{' '}
                            </td>
                            <td>{product.price + ' ' + product.currency}</td>

                        </tr>
                    </React.Fragment>
                )}

            </tbody>
        </table>
    </Container>
    )
}

export const ProductsOfWishlist = ({ products, wishlistname }) => {
    const productsBought = [];
    const productsToBuy = [];
    const prod = [];

    products.map((product) => {
        prod.push(product);
        if (product.statut === "Bought") {
            productsBought.push(product);
        } else {
            productsToBuy.push(product);
        }
    });

    products.map((product) => {
        prod.push(product);
    });

    return (
        <>
            <h1 style={{ marginTop: '-30px' }}>{wishlistname}</h1>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" value='hee'>
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>}>
                    <h2>To Buy</h2>
                    <Products products={productsToBuy} />
                </Tab>
                <Tab eventKey="profile" title={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" value='hee'>
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>} >
                    <h2>Bought</h2>

                    <Products products={productsBought} />
                </Tab>
                <Tab eventKey="card" title={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                </svg>}>
                    <h2>Cards</h2>

                    <ProductsCard products={prod} />
                </Tab>
            </Tabs>
        </>
    );
}
export default ProductsOfWishlist;