import React, { useEffect } from 'react';
import { Container, Badge, Tabs, Tab, Button, Row, Col } from 'react-bootstrap';


export const Products = ({ products }) => {
    return (<Container>
        <Row className='mb-2'>
            <Col sm={10}>
            </Col>
            <Col sm={1}>
                <Button variant="outline-dark"  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                    </svg></Button>
            </Col>
            <Col sm={1}>
                <Button variant="outline-dark" c ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg></Button>
            </Col>
        </Row>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" >Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Statut</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {products?.map((product) =>
                    <React.Fragment>
                        <tr>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                                </svg>
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
    products.map((product) => {
        if (product.statut === "Bought") {
            productsBought.push(product);
        } else {
            productsToBuy.push(product);
        }
    });
    return (
        <>

            <h1 style={{marginTop:'-30px'}}>{wishlistname}</h1> 
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="To Buy">
                    <Products products={productsToBuy} />
                </Tab>
                <Tab eventKey="profile" title="Bought">
                    <Products products={productsBought} />
                </Tab>
            </Tabs>


        </>
    );
}
export default ProductsOfWishlist;