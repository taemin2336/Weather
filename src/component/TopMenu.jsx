import styled from 'styled-components'

const StyledButton = styled.button`
   background-color: #baffff;
   border-style: none;
   height: 100%;
   margin-left: 80px;
   font-size: 28px;
`
function TopMenu() {
   return (
      <div
         style={{
            backgroundColor: '#BAFFFF',
            height: '65px',
         }}
      >
         <StyledButton>홈</StyledButton>
         <StyledButton>전체 날씨 보기</StyledButton>
         <StyledButton>메뉴1</StyledButton>
      </div>
   )
}

export default TopMenu
