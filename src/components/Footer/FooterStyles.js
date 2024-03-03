import styled from "styled-components"

export const FooterWrapper = styled.section`
	height:250px;
	display:flex;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	width:100%;
    align-items:center;
    justify-content: space-around;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 50px 48px;
    width: calc(100vw - 32px);
	// justify-content: space-between;
  }
`

export const LinkItem = styled.div`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		display: flex;
		font-size: 16px;
		line-height: 28px;
		
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const SocialIconsContainer = styled.div`
// max-width: 1040px;
display:flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{

  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
	width: 100%;
//   flex-direction: column;
}
`

export const CompanyContainer = styled.div`
	// align-items:baseline;
	// flex-wrap: wrap;
	// margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		// flex-direction: column;
		// align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		// flex-direction: column;
		// margin: 0 0 32px;
		// align-items: center;
	}
`


export const Slogan = styled.p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;
	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		// justify-content: center;
		// padding-right: 16px;
		// flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
	
  	display: flex;
	  justify-content: space-around;
	gap: 40px;
  	padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		// flex-direction:column;
		width: 100%;
		padding: 32px 4px 16px;
		margin:auto;
		// gap: 5px;
	}
`
export const NoteContainer = styled.div`
    display:flex;
    width: 200px;
    // margin-top:20px;
    align-items:center;
    justify-content:center;
    flex-direction:column;

`
export const ImgSection = styled.img`
    border:solid #2C304D 1px;
    border-radius:10px;
    height:140px;
    background-color:#2C304D;

`
export const NoteSection
 = styled.div`
 	display:flex;
    min-height:20px;
	justify-content:center;
	margin-top:-20px;
	color: rgba(255, 255, 255, 0.5);
	
`
export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
	}
`
