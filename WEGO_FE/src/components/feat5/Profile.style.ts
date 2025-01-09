import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfilePic = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  margin-left: 20px;
  margin-right: 35px;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 39px;
  white-space: nowrap;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 51px;
  height: 43px;
  gap: 3px;

  h3 {
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.3199999928474426px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 153px;
  height: 35px;
  top: 210px;
  left: 20px;
  gap: 5px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  p {
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
    letter-spacing: -0.3199999928474426px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;
