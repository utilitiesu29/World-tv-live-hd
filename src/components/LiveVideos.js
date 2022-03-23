import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ReactPlayer from 'react-player'
import './LiveVideos.css'

const LiveVideos = () => {

    return (
        <div>
            <Container>
                <section id="international" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">International</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">Euro News</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/sPgqEHsONK8' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">Aljazeera English</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/-upyPouRrB8' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">Africa News</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/NQjabLGdP5g' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-center">ABC News</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/w_Ma8oQLmSM' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
                <section id="pakistan" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">Pakistan</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">ARY News</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/38IEolI8f-w' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">Geo News</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/HrrpR7zjFpU' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">Samaa News</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/XbBUCQPLL_Y' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
                <section id="india" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">India</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">India Today</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/08_n1WmIFqg' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">NDTV 24x7</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/1Y7eA2aWOKk' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">News 18</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/IpXp83q_2zs' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
                <section id="germany" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">Germany</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">DW English</Card.Title>

                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/V9KZGs1MtP4' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
                <section id="france" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">France</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">France 24</Card.Title>

                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/h3MuIUNCCzI' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
                <section id="japan" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">Japan</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">Ann News</Card.Title>

                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/coYw-eVU0Ks' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
                <section id="saudiArabia" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">Saudi Arabia</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">Ekhbariya TV</Card.Title>

                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/CE9JPmUFjPw' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
                <section id="singapore" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">Singapore</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">CNA</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/XWq5kBlakcQ' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
                <section id="turkey" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">Turkey</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">CNN Turk</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/Ue9SnIpwNB4' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
                <section id="UK" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">UK</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">Sky News</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/9Auq9mYxFEE' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
                <section id="egypt" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">Egypt</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">CBC Arabic</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/BtbxUmsrh4E' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
                <section id="USA" className="ChannelSection">
                    <Row className="titleRow">
                        <Col className="titleCol" xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h3 className="text-center">USA</h3>
                        </Col>
                    </Row>
                    <Row className="mainRow">
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">News Max</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/FErQVDzgBLo' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Card >
                                <Card.Body>
                                    <Card.Title className="text-center">NASA TV</Card.Title>
                                </Card.Body>
                                <ReactPlayer url='https://youtu.be/21X5lGlDOfg' controls={true} muted={true} width="100%" />
                            </Card>
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    )
}

export default LiveVideos