// 총 19 + 1개(오류) 페이지 라우팅 (25.01.05)
export { default as BoardPage } from './board/BoardPage';
export { default as BoardAuthorProfilePage } from './board-author-profile/BoardAuthorProfilePage';
export { default as BoardDetailPage } from './board-detail/BoardDetailPage';
export { default as BoardWritePage } from './board-write/BoardWritePage';
export { default as ErrorPage } from './error/ErrorPage';
export { default as HomePage } from './home/HomePage';
export { default as TravelSelectPage } from './home-travel-select/TravelSelectPage';
export { default as TravelSelectRandomPage } from './home-travel-select-random/TravelSelectRandomPage';
export { default as LoginPage } from './login/LoginPage';
export { default as MyPage } from './mypage/MyPage';
export { default as MyMissionsPage } from './mypage-missions/MyMissionsPage';
export { default as MyPostsPage } from './mypage-posts/MyPostsPage';
export { default as MyProfileModifyPage } from './mypage-profile-modify/MyProfileModifyPage';
export { default as MySchedulesPage } from './mypage-schedules/MySchedulesPage';
export { default as CurrentSchedulePage } from './schedule-current/CurrentSchedulePage';
export { default as EndSchedulePage } from './schedule-end/EndSchedulePage';
export { default as NotStartedSchedulePage } from './schedule-not-started/NotStartedSchedulePage';
export { default as ScrapPage } from './scrap/ScrapPage';
export { default as SignupPage } from './signup/SignupPage';
export { default as SignupCompletePage } from './signup-complete/SignupCompletePage';

// 총 20 + 1개 페이지 라우팅 ( 25.01.07 페이지 추가 => 각 미션 인증 등록 기능은 진행중/완료 일정 페이지에서 처리)
export { default as ScheduleMissionsVerificaionStatusPage } from './schedule-missions-verification-status/ScheduleMissionsVerificaionStatusPage';