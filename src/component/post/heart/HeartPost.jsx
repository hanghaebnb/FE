import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeartButton from './HeartLike';

function Post(props) {
  const [like, setLike] = useState(false);

  // useEffect(async () => {
  //   const fetchData = async () => {
  //     const res = await Axios.get('/api/rooms');
  //     if (res.data.type === 'liked') setLike(true);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/api/rooms');
      if (res.data.likeCheck === 'liked') setLike(true);
    }
    fetchData();
  }, []);

  const toggleLike = async (e) => {
    const res = await axios.post('/api/rooms'); // [POST] 사용자가 좋아요를 누름 -> DB 갱신
    setLike(!like);
  };

  return <HeartButton like={like} onClick={toggleLike} />;
}

export default Post;
