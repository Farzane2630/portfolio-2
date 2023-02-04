import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import postsData from "../components/BlogBody/postsData";
import {FaUser,FaComments,FaFacebookF,FaTwitter,FaDribbble,FaBehance,
} from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import CommentSection from '../components/CommentSection'
import '../components/BlogBody/BlogBody.css'
import RightSide from "../components/BlogBody/RightSide";

export default function MainBlog() {
  const params = useParams();
  let mainBlogData = postsData.find((post) => post.id == params.id);
  let hasPost = postsData.some((post) => post.id == params.id);

  return (
    <>
      {!hasPost ? (
        <>
          <Navigate to="/"></Navigate>
        </>
      ) : (
        <>
          <Container fluid className="bh-container">
          
            <h1> Blog Deals </h1>
            <p>
              {" "}
              We build effective strategies to help you reach customers and
              prospects across the entire web.{" "}
            </p>
          </Container>
          <Row  style={{marginRight: 0}}>
            {/* Left-side */}
            <Col className="main-blog-left-col" xs={12} lg={8}>
              <Container className="main-blog-container">
                <img src={mainBlogData.image} alt="blog-post" />
                <h3 className="main-blog-title"> {mainBlogData.title} </h3>
                <p className="main-blog-summery"> {mainBlogData.summery} </p>
                
                <div className="post-deps">
                <span className="category">
                  <FaUser></FaUser>
                  <p>
                    <a>Travel, Lifestyle</a>
                  </p>
                </span>
                |
                <span className="comments">
                  <FaComments></FaComments>
                  <p>
                    <a> {mainBlogData.comments} Comments </a>
                  </p>
                </span>
                </div>
                <br />
                <p className="main-blog-text">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower
                </p>
                <p className="main-blog-text">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower to actually sit through a self-imposed MCSE
                  training. who has the willpower to actually
                </p>
                <div>
                  <div>
                    <p className="qoute-text">
                      "MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower to actually sit through a
                      self-imposed MCSE training."

                    </p>
                  </div>
                </div>
                <p className="main-blog-text">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower
                </p>
                <p className="main-blog-text">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have to spend money on
                  boot camp when you can get the MCSE study materials yourself
                  at a fraction of the camp price. However, who has the
                  willpower to actually sit through a self-imposed MCSE
                  training. who has the willpower to actually
                </p>
                <hr />
                <div className="main-blog-sub">
                  <div className="main-blog-like">
                  <HiHeart className="like-icon" />
                  <p>Lily and 4 people liked this</p>
                </div>
                <div className="social-icons">
                  <FaFacebookF className="social-items" />
                  <FaTwitter className="social-items" />
                  <FaDribbble className="social-items" />
                  <FaBehance className="social-items" />
                </div>
                </div>
                
                </Container>
                <CommentSection id={mainBlogData.id} />
            </Col>

            {/* Right-side */}
            <Col className="blog-right-col" xs={12} lg={4}>
              <RightSide />
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
