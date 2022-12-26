import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../hooks/ImageUplod";
import { __addPosts } from "../../redux/modules/PostsSlice";

export default function PostsAdd() {
  //값을 담을 두 공간 필요 1. 제목 2. 내용
  //따라서 2개의 useState가 필요 현재 상태를 저장하고
  //변경할 수 있다.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [posts, setPosts] = useState({
    title: "",
    description: "",
    price: "",
    address: "",
    imageFile: "",
  });
  const [prevImg, setPrevImg] = useState("");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    console.log(imageFile);
  }, [imageFile]);

  //input값
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPosts({ ...posts, [name]: value });
  };
  //추가하기 버튼
  const onSumitHandler = () => {
    if (
      posts.title.trim() === "" ||
      posts.description.trim() === "" ||
      posts.price.trim() === "" ||
      posts.address.trim() === ""
    ) {
      return alert("모든 항목을 입력해주세요.");
    }

    console.log(posts, imageFile);

    dispatch(
      __addPosts({
        title: posts.title,
        description: posts.description,
        price: posts.price,
        address: posts.address,
        imageFile: imageFile,
      })
    );
    navigate(`/`);
    setPosts({
      title: "",
      description: "",
      price: "",
      address: "",
      imageFile: "",
    });
  };

  return (
    <>
      <Container>
        <P>공유 작성 페이지</P>
        <ImageUpload setImageFile={setImageFile} />
        <input
          type="text"
          name="title"
          value={posts.title}
          onChange={onChangeHandler}
          placeholder="제목을 입력해주세요"
        />
        <input
          type="text"
          name="description"
          value={posts.description}
          onChange={onChangeHandler}
          placeholder="내용을 입력해주세요"
        />
        <input
          type="text"
          name="price"
          value={posts.price}
          onChange={onChangeHandler}
          placeholder="가격을 입력해주세요"
        />
        <input
          type="text"
          name="address"
          value={posts.address}
          onChange={onChangeHandler}
          placeholder="가격을 입력해주세요"
        />
        <button
          onClick={(e) => {
            onSumitHandler();
          }}
        >
          추가하기
        </button>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  margin: 0;
  text-align: center;
  letter-spacing: 0.1px;
  line-height: 1.5;
  color: black;
`;
