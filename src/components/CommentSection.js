import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export default function CommentSection(props) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState([]);

  function commentHandler() {
    let commentSectionInfo = {
      name,
      comment,
      email,
    };

    fetch(
      `https://comments-section-3f2f3-default-rtdb.firebaseio.com/comments/${props.id}.json`,
      {
        method: "POST",
        body: JSON.stringify(commentSectionInfo),
      }
    ).then((data) => console.log(data));
  }

  useEffect(() => {
    async function fetchData(){
      await fetch(
      `https://comments-section-3f2f3-default-rtdb.firebaseio.com/comments/${props.id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setComments(Object.entries(data));
      });
    }
    
    fetchData()
  }, [comments]);


  return (
      <div className="comments-container">
        <p className="comment-nums"> {comments.length} Comments</p>
        {comments.map((cm) => (
          <>
            <div className="comment-name">{cm[1].name} <span className="say">says</span>: </div>
            <div className="comments-row">
           <p className="comment-text">{cm[1].comment}</p>
            <div className="cm-icons">  
            <AiFillLike className="thumbs-icon" style={{ cursor: "pointer" }} />
            <AiFillDislike className="thumbs-icon" style={{ cursor: "pointer" }} />
            </div>
            </div>
            
        </>
      ))}
      
      <p className="leave-cm"> Leave a comment</p>
      <Container>
        <Row>
          <Col>
            <textarea
            className="cm-txt"
              placeholder="Write Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <input
            className="cm-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </Col>
          <Col>
            <input
            className="cm-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </Col>
        </Row>
        <button className="post-cm" onClick={commentHandler}>
          POST COMMENT
        </button>
      </Container>
    </div>
  );
}
