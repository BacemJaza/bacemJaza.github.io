import styled from "styled-components"




export const BoxNum = styled.img`
  height: 100%;
  width:100%;
  border:solid #0F1624 1px;
  border-radius:20px;
  // padding: 20px;
  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  text-align:justify;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`
export const Box = styled.div`
  display:flex;
  flex-direction:column;
  // justify-content:space-around;
  align-items:center;
  background: #212D45;
  // border: solid white;
  border-radius: 12px;
  height: auto;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    justify-content:center;

  }

  @media ${props => props.theme.breakpoints.md} {
    justify-content:center;
    width:90%;
  }

  @media ${props => props.theme.breakpoints.sm} {
    // height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
  width:90%;
`
export const LinkIcon = styled.img`

`
export const TextSection = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:20px;
  margin-left: 20px;
`
export const BoxTitle = styled.div`
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 40px;
letter-spacing: 0.01em;
color: #FFFFFF;
margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md} {
  font-size: 28px;
  line-height: 32px;
}
@media ${props => props.theme.breakpoints.sm} {
  font-size: 24px;
  line-height: 26px;
}
`
export const Boxes = styled.div`
  width: 100%;
  height: 100%;
  // margin:  auto;
  display: flex;
  flex-direction: column;
  // grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    // grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    // display: grid;
    // grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    // max-width: 500px;
    margin: 24px auto;
  }
`
