import styled from 'styled-components'
import TopMenu from './TopMenu'
import '../css/Home.css'

const StyledButton = styled.button`
   background-color: #78ff95;
   width: 183px;
   height: 61px;
   border-radius: 30%;
   border: 0px;
   font-size: 24px;
   font-weight: bold;
`

function Main() {
   return (
      <div>
         <TopMenu />
         <div className="regionButton">
            <StyledButton>서울</StyledButton>
            <StyledButton>인천</StyledButton>
            <StyledButton>대전</StyledButton>
            <StyledButton>광주</StyledButton>
            <StyledButton>대구</StyledButton>
            <StyledButton>울산</StyledButton>
            <StyledButton>부산</StyledButton>
            <StyledButton>제주</StyledButton>
         </div>
         <div>
            <img src="../image/clear" alt="weather" />
            <p>맑음</p>
         </div>
         <div>
            <p>온도</p>
            <p>체감온도</p>
            <p>습도</p>
            <p>풍속</p>
            <p>강수량</p>
            <p>풍향</p>
         </div>
      </div>
   )
}

export default Main
