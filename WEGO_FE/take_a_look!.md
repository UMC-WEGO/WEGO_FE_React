# 협업 규칙

## 커밋 메시지 작성 규칙
- **형식**: `태그: 메시지` 
- 예: `feat: 로그인 기능 구현` 

## 코드 리뷰 규칙
- PR(Pull Request)을 올릴 때 템플릿대로 **설명**을 자세히 작성. 

## 브랜치 전략
- `main`: 배포 가능한 상태만 유지.
- `dev`: 개발 중인 기능을 합치는 브랜치.
- `feature/*`: 새로운 기능 개발용 브랜치.

## 개발 환경 및 도구
1. **Yarn + Vite + TypeScript** 환경을 사용하므로, **Yarn**으로 빌드 및 라이브러리 설치 권장.
2. **필요한 VS Code 확장 프로그램**:
   - Prettier
   - ESLint
   - Markdown Preview Enhanced
3. **Prettier(자동 텍스트 포맷팅)** 적용 명령어:
   - 터미널에 `yarn format` 작성.

## 추신
- 저장 시 마다 자동으로 포맷팅 적용을 원한다면 
   1. " cntl(컨트롤 키) + , " 로 설정 창을 열고
   2. " format on save " 를 검색합니다
   3. " Editor: Format On Save " 옵션을 체크합니다 
   4. 필요하다면 " Editor: Format On Save Mode " 를 file(파일전체) 이나 modification(수정사항만) 중 선택하시면 됩니다! 