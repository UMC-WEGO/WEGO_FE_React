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

  const [isRegionRequired, setIsRegionRequired] = useState(false); // 지역 필수 여부
  const [isPhotoRequired, setIsPhotoRequired] = useState(false); // 사진 필수 여부

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

  // 선택된 주제에 따라 필수 여부 설정
  useEffect(() => {
    if (selectedTopic === '즉흥 자랑' || selectedTopic === '일반') {
      setIsRegionRequired(false);
      setIsPhotoRequired(true);
    } else if (selectedTopic === '미션 제안' || selectedTopic === '현지 정보') {
      setIsRegionRequired(true);
      setIsPhotoRequired(true);
    } else {
      setIsRegionRequired(false);
      setIsPhotoRequired(false);
    }
  }, [selectedTopic]);

  // useEffect를 추가하여 선택된 지역이 변경될 때 자동으로 오류 해제
  useEffect(() => {
    if (selectedRegion && selectedRegion !== '지역 선택') {
      setIsRegionRequired(false);
    }
  }, [selectedRegion]);

  // useEffect를 추가하여 업로드된 이미지가 변경될 때 자동으로 오류 해제
  useEffect(() => {
    if (uploadedImages.length > 0) {
      setIsPhotoRequired(false);
    }
  }, [uploadedImages]);

  useEffect(() => {
    const savedData = localStorage.getItem('boardWriteData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);

      setSelectedTopic(parsedData.selectedTopic);
      setTitle(parsedData.title);
      setContent(parsedData.content);

      if (parsedData.uploadedImages) {
        const restoredImages = parsedData.uploadedImages.map((image: File) => {
          return new File([image], image.name, { type: image.type });
        });
        setUploadedImages(restoredImages);
      }
    }
  }, []);

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
    let hasError = false;

    if (!selectedRegion || selectedRegion === '지역 선택') {
      setIsRegionRequired(true);
      hasError = true;
    } else {
      setIsRegionRequired(false);
    }

    if (uploadedImages.length === 0) {
      setIsPhotoRequired(true);
      hasError = true;
    } else {
      setIsPhotoRequired(false);
    }

    if (!hasError) {
      console.log('폼 제출 성공!');
      navigate('/board');
      localStorage.removeItem('boardWriteData');
    }
  };

  // 완료 버튼 활성화
  const isCompleteEnabled =
    title.trim() !== '' &&
    content.trim() !== '' &&
    (!isRegionRequired || selectedRegion !== '지역 선택') &&
    (!isPhotoRequired || uploadedImages.length > 0);

  // 지역 선택 페이지 이동
  const handleRegionClick = () => {
    localStorage.setItem(
      'boardWriteData',
      JSON.stringify({
        selectedTopic,
        title,
        content,
        uploadedImages,
      }),
    );

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

      <S.Region onClick={handleRegionClick} $isRequired={isRegionRequired}>
        {selectedRegion && <p>{selectedRegion}</p>}
        {isRegionRequired && selectedRegion === '지역 선택' && (
          <S.RegionWarningText>
            게시글의 지역을 선택해주세요.
          </S.RegionWarningText>
        )}
        <span>
          <LuMapPin />
        </span>
      </S.Region>

      <S.Photo>
        <h1>사진 업로드</h1>
        <p>
          위고에서 즉흥 미션을 해결하며 여행했던 사진을 업로드 해주세요.
          <br />
          여행지와 관련 없거나 부적절한 사진을 등록하시는 경우,
          <br />
          사전경고 없이 포인트 회수와 함께 사진이 삭제될 수 있습니다.
        </p>

        <S.ScrollContainer>
          <S.UploadBox $isPhotoRequired={isPhotoRequired}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple
            />
            <span>+</span>
            <p>{uploadedImages.length}/5</p>
          </S.UploadBox>

          {uploadedImages.slice(0, 5).map((image: File, index: number) => (
            <S.UploadBox key={index} $isPhotoRequired={isPhotoRequired}>
              <img src={URL.createObjectURL(image)} alt={`uploaded ${index}`} />
            </S.UploadBox>
          ))}
        </S.ScrollContainer>
        {isPhotoRequired && uploadedImages.length === 0 && (
          <S.PhotoWarningText>사진을 1장 이상 등록해주세요.</S.PhotoWarningText>
        )}
      </S.Photo>
    </S.Container>
  );
}

export default BoardWritePage;
