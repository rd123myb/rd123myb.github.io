import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";
// Components
import Headline from "../../components/common/Headline";

const testimonial1 = [
    {
        name: "Jeremiah Deng",
        type: "Clients",
        post: "Semantic Segmentation",
        avatar: "/assets/images/people/s1.jpg",
        content: "I havent asked Jeremaih for his comment yet but he said we did well and learned some important skills fast.",
    },
    {
        name: "Abbe Hyde",
        type: "Clients",
        post: "Particle Device Monitoring",
        avatar: "/assets/images/people/s2.png",
        content: "I havent asked Abbe yet for comment either but my understanding is that winely liked what we did and Renjith said he was impressed with our abilities.",
    },
    {
        name: "Rodney Tamblyn",
        type: "Clients",
        post: "No SQL Database Design",
        avatar: "/assets/images/people/rodny.jpg",
        content: "Same goes with Rodney, i talked to him at the networking event and he said what we did helped them along quite a bit with thier move to Cassandra.",
    },
];

const testimonial2 = [
    {
        name: "Jiro Ishida",
        type: "Partners",
        post: "Semantic Segmentation Project",
        avatar: "/assets/images/people/s1.jpg",
        content: '"Rory was able to pick up technical skills quickly, had a positive attitude and showed initiative throughout the project. He also showed a great ability to find solutions the team needed. Would gladly work with him again!"',
    },
    {
        name: "Martha Bell",
        type: "Partners",
        post: "Particle IoT Project",
        avatar: "/assets/images/people/s2.png",
        content: '"I had the pleasure of working with Rory on our studio project for Winely. Rory had the ability to drill down into how the wireless sensor network, IoT devices and APIs interacted which got the project off on the right track. Although it was new to all of us, Rory kept learning and sharing resources with the team. Rory puts a lot of energy into collaboration, pushing team output forward while also meeting his own high standards. I know he is going to do some interesting projects in the future!"',
    },
    {
        name: "Group Member 3 from Projects",
        type: "Partners",
        post: "Project leader",
        avatar: "/assets/images/people/s1.jpg",
        content: "I will ask someone to give me a comment about working with me.          ",
    },
];

function Testimonial() {
    const sliderSettings = {
        dots: true,
        speed: 700,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000
    };
    return (
        <section className="section section-testimonial section-testimonial-1">
            <div className="display-spacing">
                <Container className="container">
                    <Headline label="testimonial" title="Customer’s Stories" divider_1={true} position="center" />
                    <Row className="mb--15">
                        <Col lg={6} xl={6} className="mb-15">
                            <Slider className="el-slider" {...sliderSettings}>
                                {testimonial1.map((item, index) => (
                                    <div key={index} className="testimonial-item testimonial-clients">
                                        <div className="type">
                                            <span>{item.type}</span>
                                        </div>
                                        <p>{item.content}</p>
                                        <div className="author">
                                            <img src={item.avatar} alt="Relevant textual alternative" />
                                            <h4>{item.name}</h4>
                                            <h5>{item.post}</h5>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                        <Col lg={6} xl={6} className="mb-15">
                            <Slider className="el-slider" {...sliderSettings}>
                                {testimonial2.map((item, index) => (
                                    <div key={index} className="testimonial-item testimonial-clients">
                                        <div className="type">
                                            <span>{item.type}</span>
                                        </div>
                                        <p>{item.content}</p>
                                        <div className="author">
                                            <img src={item.avatar} alt="coming soon" />
                                            <h4>{item.name}</h4>
                                            <h5>{item.post}</h5>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                    <div className="div-center text-center lets-work">
                    <Link to={`//contact`}>
                        <button type="button" className="button button-md button-primary">
                            let's work together
                        </button>
                        </Link>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Testimonial;
