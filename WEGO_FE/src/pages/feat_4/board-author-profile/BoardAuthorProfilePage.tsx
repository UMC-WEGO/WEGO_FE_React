import * as S from './BoardAuthorProfilePage.style';
import { TbArrowLeft } from 'react-icons/tb';
import { LuDot } from 'react-icons/lu';
import { useNavigate } from 'react-router';
import PostList from '../../../components/feat4/PostList';
// import { allPosts } from '../../../mocks/board/postData';
import { getUserProfileApi } from '../../../apis/feat4/postApi';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

type Post = {
  post_id: number;
  picture_url: string | null;
  category_name: string;
  title: string;
  content: string;
  location_name: string;
  created_at: string;
  total_comment: number;
  total_like: number;
  total_scrap: number;
};

type UserInfo = {
  nickname: string;
  profile_image: string;
  temp: number;
  sum_travels: number;
  sum_posts: number;
  sum_likes: number;
  sum_missions: number;
};

function BoardAuthorProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [posts, setPosts] = useState<Post[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const authorId = location.state?.authorId;

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getUserProfileApi(authorId);
      console.log(data);
      if (data) {
        setPosts(data.posts);
        setUserInfo(data.user_info);
      }
    };

    fetchPosts();
  }, [authorId]);

  const handleBack = () => {
    navigate(-1); // 이전 페이지
  };

  return (
    <S.Container>
      <S.Header>
        <span onClick={handleBack}>
          <TbArrowLeft />
        </span>
      </S.Header>
      <S.Profile>
        <img src="https://buly.kr/CsipNnM" alt="Profile" />
        <div>
          <h3>{userInfo?.nickname}</h3>
          <p>
            즉흥여행 {userInfo?.sum_travels}회
            <LuDot />
            즉흥온도 {userInfo?.temp}°C
          </p>
        </div>
      </S.Profile>
      <S.Info>
        <div>
          <p>작성글</p>
          <span>{userInfo?.sum_posts}</span>
        </div>
        <div>
          <p>받은 공감</p>
          <span>{userInfo?.sum_likes}</span>
        </div>
        <div>
          <p>미션 수행</p>
          <span>{userInfo?.sum_missions}</span>
        </div>
      </S.Info>
      <hr />
      <S.PostBox>
        <p>작성글</p>
        <S.Post>
          <PostList posts={[...posts].reverse()} />
        </S.Post>
      </S.PostBox>
    </S.Container>
  );
}

export default BoardAuthorProfilePage;
