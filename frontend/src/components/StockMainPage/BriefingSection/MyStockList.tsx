import StockBlock from "./StockBlock"
const MyStockList = () => {
  return (
    <div>
      <StockBlock
        companyLogo="naver"
        companyName="네이버"
        currentPrice={59800}
        priceChange={0.17}
      />
    </div>
  )
}

export default MyStockList
