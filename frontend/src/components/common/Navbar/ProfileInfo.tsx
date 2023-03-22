import styled from "styled-components"

const ProfileInfo = () => {
  return (
    <>
      <ProfileDiv>
        <ProfileImg src="https://www.corporatephotographerslondon.com/wp-content/uploads/2021/07/LinkedIn_profile_photo_sample_1-300x300.jpg" />
        <ProfileName>Toby Mojeed</ProfileName>
      </ProfileDiv>
    </>
  )
}

export default ProfileInfo

// 프로필 이미지 styled
const ProfileImg = styled.img`
  // 크기
  width: 56px;
  height: 56px;
  border-radius: 100px;

  // 하단 마진
  margin-bottom: 24px;
`
// 사용자 이름 styled
const ProfileName = styled.div`
  // 글자
  font-weight: bold;
  font-size: 24px;
  color: white;
  text-align: center;
`
// 닉네임 작성 styled
const ProfileDiv = styled.div`
  // 내부 패딩
  padding: 45px 0px;

  // 크기
  width: 100%;

  // 세로 중앙 정렬
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // 하단 경계선
  border-bottom: solid #bbbbbb 0.5px;
`
