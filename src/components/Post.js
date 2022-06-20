import styled from "styled-components";
import { Link } from "react-router-dom";

//Modal.setAppElement(".icons");

export default function Post(infos) {

  const {  username, url, pictureURL, userId, text, title, image, description } = infos;
  
  return (
    <PostContainer>
      <img src={pictureURL} alt="Foto de perfil"></img>
      <PostInfos>
        <Link to={`/user/${userId}`} key={userId}>
          <h4>{username }</h4>
        </Link>
        <p>{text}</p>
        <LinkBox>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h5>{title}</h5>
            <p>{description}</p>
            <p>{url}</p>
            <img src={image} alt="Imagem do Post"></img>
          </a>
        </LinkBox>
      </PostInfos>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  position: relative;
  width: 611px;
  height: auto;
  padding: 17px 18px;
  background: #171717;
  display: flex;
  border-radius: 16px;
  margin: 8px 0;
  color: #ffffff;
  font-family: "Lato", sans-serif;
  font-weight: 300;

  img {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin-right: 18px;
  }
`;

const PostInfos = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 7px;
    font-weight: 400;
  }

  p {
    color: #b7b7b7;
    padding-right: 30px;
  }
  textarea {
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.edit ? "white" : "transparent")};
    color: ${(props) => (props.edit ? "black" : "white")};
    font-size: 19px;
    font-family: "Lato", sans-serif;
    border: none;
    resize: none;
    border-radius: 5px;
  }
`;

const LinkBox = styled.div`
  height: 155px;
  width: 503px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  margin: 20px 0 10px 0;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  position: relative;

  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }

  a {
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  p {
    font-size: 11px;
    margin-bottom: 13px;
  }
  h5 {
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 5px;
  }
  img {
    border-radius: 0px 9px 13px 0px;
    width: 153.44px;
    height: 155px;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
  }
`;

const Heart = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 18px;
  position: absolute;
  left: 0;
  bottom: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 5px;
    font-size: 11px;
  }

  ion-icon {
    font-size: 30px;
    color: ${(props) => (props.liked ? "red" : "#FFFFFF")};
  }
  :hover {
    cursor: pointer;
  }
`;

const Icons = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  & > ion-icon {
    font-size: 20px;
    margin-left: 5px;
    :hover {
      cursor: pointer;
    }
  }
`;
