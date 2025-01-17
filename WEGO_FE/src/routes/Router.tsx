import AppLayout from '../layout/AppLayout';
import HomeScedulePage from '../pages/feat_3/schedule-home/HomeScedulePage';
import {
  BoardPage,
  BoardAuthorProfilePage,
  BoardDetailPage,
  BoardWritePage,
  HomePage,
  TravelSelectPage,
  TravelSelectRandomPage,
  LoginPage,
  MyPage,
  MyMissionsPage,
  MyPostsPage,
  MyProfileModifyPage,
  MySchedulesPage,
  MyPointsPage,
  MyQuestionPage,
  MyQAPage,
  MyTermsPage,
  MyPrivacyPage,
  CurrentSchedulePage,
  EndSchedulePage,
  NotStartedSchedulePage,
  ScrapPage,
  SignupPage,
  SignupCompletePage,
  ErrorPage,
  RegionSelectPage,
} from '../pages/index';

const Router = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <LoginPage /> },

      // 로그인 관련 라우팅
      { path: '/login', element: <LoginPage /> },
      { path: '/signup/:step', element: <SignupPage /> },
      { path: '/signup/complete', element: <SignupCompletePage /> },

      // 스크랩
      { path: '/scrap', element: <ScrapPage /> },

      // 메인 페이지 라우팅
      { path: '/home', element: <HomePage /> },
      {
        path: '/home/travel-select/random',
        element: <TravelSelectRandomPage />,
      },
      { path: '/home/travel-select', element: <TravelSelectPage /> },

      // 일정 페이지 라우팅
      { path: '/schedule', element: <HomeScedulePage /> },
      {
        path: '/schedule/:scheduleId/missions/status',
        element: <EndSchedulePage />,
      },
      {
        path: '/schedule/not-started/:scheduleId', //피그마 여행전
        element: <NotStartedSchedulePage />,
      },
      {
        path: '/schedule/current/:scheduleId',
        element: <CurrentSchedulePage />,
      },
      { path: '/schedule/end/:scheduleId', element: <EndSchedulePage /> },

      // 게시판 관련 라우팅
      { path: '/board', element: <BoardPage /> },
      { path: '/board/write', element: <BoardWritePage /> },
      { path: '/board/detail/:postId', element: <BoardDetailPage /> },
      {
        path: '/board/author/profile/:authorId',
        element: <BoardAuthorProfilePage />,
      },
      {
        path: '/board/region-select',
        element: <RegionSelectPage />,
      },

      // 마이페이지 관련 라우팅
      { path: '/mypage/:userId', element: <MyPage /> },
      {
        path: '/mypage/:userId/profile/modify',
        element: <MyProfileModifyPage />,
      },
      { path: '/mypage/:userId/schedules', element: <MySchedulesPage /> },
      { path: '/mypage/:userId/posts', element: <MyPostsPage /> },
      { path: '/mypage/:userId/missions', element: <MyMissionsPage /> },
      { path: '/mypage/:userId/question', element: <MyQuestionPage /> },
      { path: '/mypage/:userId/question/:qId', element: <MyQAPage /> },
      { path: '/mypage/:userId/points', element: <MyPointsPage /> },
      { path: '/mypage/:userId/terms', element: <MyTermsPage /> },
      { path: '/mypage/:userId/privacy', element: <MyPrivacyPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default Router;
