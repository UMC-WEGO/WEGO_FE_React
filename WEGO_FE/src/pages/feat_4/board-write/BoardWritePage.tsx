import * as S from './BoardWritePage.style';
import { LuDot, LuMapPin } from 'react-icons/lu';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import TopicModal from '../../../components/feat4/TopicModal/TopicModal';

function BoardWritePage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [selectedTopic, setSelectedTopic] = useState('전체'); // 선택된 주제
  const [title, setTitle] = useState(''); // 제목 상태
  const [content, setContent] = useState(''); // 내용 상태
  const [uploadedImages, setUploadedImages] = useState<File[]>([]); // 업로드된 이미지 상태

  const navigate = useNavigate();
  const location = useLocation();
  const [selectedRegion, setSelectedRegion] = useState(
    location.state?.selectedRegion || '지역 선택',
  );

  useEffect(() => {
    if (location.state?.selectedRegion) {
      setSelectedRegion(location.state.selectedRegion);
    }
  }, [location.state]);

  // 주제 선택 버튼 -> 모달 열기
  const handleSelectButtonClick = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // 이전 페이지
  const handleBack = () => {
    navigate('/board');
  };

  // 주제 선택
  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic); // 선택된 주제
    setIsModalOpen(false);
  };

  // 완료 버튼 클릭
  const handleComplete = () => {
    console.log('완료:', {
      title,
      content,
      selectedTopic,
      selectedRegion,
      uploadedImages,
    });
    navigate('/board');
  };

  // 완료 버튼 활성화
  const isCompleteEnabled = title.trim() !== '' && content.trim() !== '';

  // 지역 선택 페이지 이동
  const handleRegionClick = () => {
    navigate('/board/region-select');
  };

  // 이미지 업로드 핸들러
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      const allImages = [...uploadedImages, ...newImages].slice(0, 5); // 최대 5장
      setUploadedImages(allImages);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <button className="cancel" onClick={handleBack}>
          취소
        </button>
        <S.TopicButton $active={isModalOpen} onClick={handleSelectButtonClick}>
          주제
          <LuDot />
          {selectedTopic}&nbsp;
          {isModalOpen ? <FaCaretUp /> : <FaCaretDown />}
        </S.TopicButton>
        <S.CompleteButton
          $isActive={isCompleteEnabled}
          onClick={handleComplete}
          disabled={!isCompleteEnabled}
        >
          완료
        </S.CompleteButton>
      </S.Header>

      <TopicModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onTopicSelect={handleTopicSelect}
      />

      <S.Content>
        <input
          placeholder="제목"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="위고의 즉흥여행러들과 이야기를 나눠보세요!"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </S.Content>

      <S.Region onClick={handleRegionClick}>
        {selectedRegion && <p>{selectedRegion}</p>}
        <span>
          <LuMapPin />
        </span>
      </S.Region>

      <S.Photo>
        <h1>사진 업로드</h1>
        <p>
          위고에서 즉흥 미션을 해결하며 여행했던 사진을 업로드 해주세요.
          <br />
          여행지와 관련 없거나 부적절한 사진을 등록하시는 경우, 사전경고 없이
          포인트 회수와 함께 사진이 삭제될 수 있습니다.
        </p>

        <S.ScrollContainer>
          <S.UploadBox>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple
            />
            <span>+</span>
            <p>{uploadedImages.length}/5</p>
          </S.UploadBox>

          {uploadedImages.slice(0, 5).map((image, index) => (
            <S.UploadBox key={index}>
              <img src={URL.createObjectURL(image)} alt={`uploaded ${index}`} />
            </S.UploadBox>
          ))}
        </S.ScrollContainer>
      </S.Photo>
    </S.Container>
  );
}

export default BoardWritePage;
