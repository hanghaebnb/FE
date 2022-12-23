import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getPosts } from '../../redux/modules/PostsSlice';

export default function Main() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  return <div>메인 페이지</div>;
}
