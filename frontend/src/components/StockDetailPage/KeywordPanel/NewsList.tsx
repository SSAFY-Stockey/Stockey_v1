import NewsListItem from "./NewsListItem"

interface Props {
  keyphrase: string
}

export interface NewsProps {
  title: string
  date: string
  url: string
  content: string
  imgUrl?: string
  press: string
}

const NewsList = ({ keyphrase }: Props) => {
  const newsList: NewsProps[] = [
    {
      title: "[르포] '역대급' 인터배터리 개막… 관람객 홀린 'K-배터리",
      date: "2023.03.15",
      url: "https://www.naver.com",
      content:
        "올해 인터배터리에는 477개 기업이 참가해 1400개 부스를 꾸렸습니다. 전시회 기간 총 4만명가량의 관람객이 찾을 것으로 예상됩니다.",
      press: "머니S",
    },
    {
      title: "[르포] '역대급' 인터배터리 개막… 관람객 홀린 'K-배터리",
      date: "2023.03.15",
      url: "https://www.naver.com",
      content:
        "올해 인터배터리에는 477개 기업이 참가해 1400개 부스를 꾸렸습니다. 전시회 기간 총 4만명가량의 관람객이 찾을 것으로 예상됩니다.",
      press: "머니S",
    },
    {
      title: "[르포] '역대급' 인터배터리 개막… 관람객 홀린 'K-배터리",
      date: "2023.03.15",
      url: "https://www.naver.com",
      content:
        "올해 인터배터리에는 477개 기업이 참가해 1400개 부스를 꾸렸습니다. 전시회 기간 총 4만명가량의 관람객이 찾을 것으로 예상됩니다.",
      press: "머니S",
    },
    {
      title: "[르포] '역대급' 인터배터리 개막… 관람객 홀린 'K-배터리",
      date: "2023.03.15",
      url: "https://www.naver.com",
      content:
        "올해 인터배터리에는 477개 기업이 참가해 1400개 부스를 꾸렸습니다. 전시회 기간 총 4만명가량의 관람객이 찾을 것으로 예상됩니다.",
      press: "머니S",
    },
  ]

  return (
    <>
      {newsList.map((news, index) => (
        <NewsListItem
          key={`${keyphrase}-${index}`}
          news={news}
          order={index + 1}
        />
      ))}
    </>
  )
}

export default NewsList
