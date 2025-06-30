import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledButton = styled.button`
   background-color: #baffff;
   border-style: none;
   height: 65px;
   font-size: 28px;
   width: 100%;
   &:hover {
      background-color: #75ffff;
   }
`
function TopMenu() {
   return (
      <div
         style={{
            backgroundColor: '#BAFFFF',
            height: '65px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
         }}
      >
         <Link to={'/'}>
            <StyledButton>홈</StyledButton>
         </Link>
         <Link to={'/whole'}>
            <StyledButton>전체 날씨 보기</StyledButton>
         </Link>

         <Link to={'/map'}>
            <StyledButton>우리나라 지도 보기</StyledButton>
         </Link>
      </div>
   )
}

export default TopMenu
