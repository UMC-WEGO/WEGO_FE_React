import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  height: 352px;
  padding: 21px 9px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// height
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 98px;
  gap: 15px;
  border-bottom: 1px solid #eaeaea;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  margin-left: 9px;
  margin-right: 9px;
`;

export const Title = styled.h3`
  font-size: 25px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: -0.3199999928474426px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
  margin-left: 9px;
  margin-right: 9px;
`;

export const Tag = styled.span`
  display: inline-block;
  align-items: center;
  background: #0059ff1a;
  color: #0059ff;
  padding: 4px 9px 4px 9px;
  gap: 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.3199999928474426px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 9px;
  margin-right: 9px;
`;

export const NoMissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 9px;
  margin-right: 9px;
  height: 30px;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #0059ff;
  }
`;

export const MissionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 38px;
  gap: 8px;
`;

export const PointsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CertifiedMissionText = styled.span`
  font-size: 17px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: -0.3199999928474426px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #262626;
  flex-grow: 1;
`;

export const NextText = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.3199999928474426px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #a5a5a5;
`;

export const Points = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.3199999928474426px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #0059ff;
  text-align: right;
`;

export const MissionSection = styled.div`
  margin-top: 12px;
`;

export const MissionImages = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
`;

export const MissionItem = styled.div`
  flex-shrink: 0;
  text-align: center;
  cursor: pointer;
  gap: 12px;

  img {
    width: 171px;
    height: 142px;
    border-radius: 5px;
    object-fit: cover;
    margin-bottom: 4px;
  }
`;

export const MissionName = styled.div`
  font-size: 12px;
  color: #555;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 7px;
  margin-top: 12px;
  margin-bottom: 15px;
`;

export const CompleteButton = styled.button`
  cursor: pointer;
  width: 144px;
  height: 50px;
  padding: 17px 51px 17px 51px;
  gap: 10px;
  border-radius: 5px;
  border: 1px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  color: #262626;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.3199999928474426px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const ContinueButton = styled.button`
  cursor: pointer;
  width: 204px;
  height: 50px;
  padding: 17px 59px 17px 59px;
  gap: 10px;
  border-radius: 5px;
  background: #0059ff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.3199999928474426px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const PointModal = styled.div`
  position: fixed;
  width: 420px;
  height: 837px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
`;

export const MContent = styled.div`
  width: 270px;
  height: 126.5px;
  margin: 0px;
  gap: 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f2f2f7;
`;

export const MTextContainer = styled.div`
  width: 270px;
  height: 60px;
  padding: 10px 16px;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

export const MButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 269.5px;
  height: 45px;
  border-top: 1px solid #ddd;
  position: relative;
  top: 10px;

  .cancel-btn,
  .confirm-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2f2f7;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    z-index: 2;
    width: 50%;
    height: 100%;

    &:hover {
      opacity: 0.8;
    }
  }

  .cancel-btn {
    color: black;
    border-right: 1px solid #ddd;
  }

  .confirm-btn {
    color: #0a7aff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 40px;
    background-color: #ddd;
    z-index: 1;
  }
`;

export const ModalContent = styled.div`
  background: #ffffff;
  width: 263px;
  height: 336px;
  padding: 10px 0px;
  gap: 10px;
  border-radius: 7.04px;
  top: 9093px;
  left: 6056px;

  img {
    width: 263px;
    height: 176.68px;
  }

  h1 {
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    width: 220px;
    height: 12.12px;
    top: 233.12px;
    margin-left: 10px;
    color: #262626;
  }

  h2 {
    font-size: 10px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    width: 45px;
    height: 10.1px;
    margin-top: 70px;
    margin-left: 14px;
    color: #a5a5a5;
    white-space: nowrap;
  }
`;

export const CloseButton = styled.button`
  margin-left: 228px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  img {
    width: 25px;
    height: 25.24px;
  }
`;

export const DContent = styled.div`
  width: 270px;
  height: 104.5px;
  margin: 0px;
  gap: 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f2f2f7;
`;

export const DTextContainer = styled.div`
  width: 270px;
  height: 60px;
  padding: 19px 16px;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

export const DButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 269.5px;
  height: 45px;
  border-top: 1px solid #ddd;
  position: relative;

  .cancel-btn,
  .confirm-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2f2f7;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    z-index: 2;
    width: 50%;
    height: 100%;

    &:hover {
      opacity: 0.8;
    }
  }

  .cancel-btn {
    color: black;
    border-right: 1px solid #ddd;
  }

  .confirm-btn {
    color: #0a7aff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 40px;
    background-color: #ddd;
    z-index: 1;
  }
`;
