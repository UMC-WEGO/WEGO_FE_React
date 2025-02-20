// 총 19 + 1개(오류) 페이지 라우팅 (25.01.05)
export { default as BoardPage } from './feat_4/board/BoardPage';
export { default as BoardAuthorProfilePage } from './feat_4/board-author-profile/BoardAuthorProfilePage';
export { default as BoardDetailPage } from './feat_4/board-detail/BoardDetailPage';
export { default as BoardWritePage } from './feat_4/board-write/BoardWritePage';
export { default as ErrorPage } from './feat_1/error/ErrorPage';
export { default as HomePage } from './feat_2/home/HomePage';
export { default as TravelSelectPage } from './feat_2/home-travel-select/TravelSelectPage';
export { default as TravelSelectRandomPage } from './feat_2/home-travel-select-random/TravelSelectRandomPage';
export { default as LoginPage } from './feat_1/login/LoginPage';
export { default as MyPage } from './feat_5/mypage/MyPage';
export { default as MyMissionsPage } from './feat_5/mypage-missions/MyMissionsPage';
export { default as MyPostsPage } from './feat_5/mypage-posts/MyPostsPage';
export { default as MyProfileModifyPage } from './feat_5/mypage-profile-modify/MyProfileModifyPage';
export { default as MySchedulesPage } from './feat_5/mypage-schedules/MySchedulesPage';
export { default as CurrentSchedulePage } from './feat_3/schedule-current/CurrentSchedulePage';
export { default as EndSchedulePage } from './feat_3/schedule-end/EndSchedulePage';
export { default as NotStartedSchedulePage } from './feat_3/schedule-not-started/NotStartedSchedulePage';
export { default as ScrapPage } from './feat_1/scrap/ScrapPage';
export { default as SignupPage } from './feat_1/signup/SignupPage';
export { default as SignupCompletePage } from './feat_1/signup-complete/SignupCompletePage';
export { default as RegionSelectPage } from './feat_4/region/RegionSelectPage';
export { default as AlertsPage } from './feat_4/alert/AlertsPage';

// 총 20 + 1개 페이지 라우팅 ( 25.01.07 페이지 추가 => 각 미션 인증 등록 기능은 진행중/완료 일정 페이지에서 처리)
// 총 21 + 1개 페이지 라우팅 ( 25.01.14 페이지 추가 => 지역 선택 페이지 )
// 총 22 + 1개 페이지 라우팅 ( 25.01.15 페이지 추가 => 게시글 알림 페이지 )
export { default as ScheduleMissionsVerificaionStatusPage } from './feat_1/schedule-missions-verification-status/ScheduleMissionsVerificaionStatusPage';

// 총 28 + 1개 페이지 라우팅 ( 25.01.18 페이지 추가 => 마이페이지 세부 사항 페이지 )
export { default as MyPointsPage } from './feat_5/mypage-points/MyPointsPage';
export { default as CouponPage } from './feat_5/mypage-points-coupon/CouponPage';
export { default as MyPointsCompletePage } from './feat_5/mypage-points-complete/MyPointsCompletePage';
export { default as MyQuestionsPage } from './feat_5/mypage-questions/MyQuestionsPage';
export { default as MyQnAPage } from './feat_5/mypage-qna/MyQnAPage';
export { default as MyTermsPage } from './feat_5/mypage-terms/MyTermsPage';
export { default as MyPrivacyPage } from './feat_5/mypage-privacy/MyPrivacyPage';

// 30 + 1개 페이지 라우팅 ( 25.01.20 페이지 추가 => 비밀번호 찾기 및 변경 페이지  )
export { default as PasswordFindPage } from '../pages/feat_1/password-find/PasswordFindPage';
export { default as PasswordChangePage } from '../pages/feat_1/password-change/PasswordChangePage';

// 31 + 1개 페이지 라우팅 ( 25.02.12 페이지 추가 => 게시글 수정 페이지  )
export { default as BoardEditPage } from '../pages/feat_4/board-edit/BoardEditPage';
