import styled from 'styled-components';

const SlideWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    padding-bottom: 61px;
    @media screen and (max-width: 599.98px) {
        padding-bottom: 50px;
    }
    img {
        max-width: 100%;
        height: 290px;
        border-radius: 34px;
        object-fit: cover;
        margin-bottom: 9px;
        @media screen and (max-width: 599.98px) {
            height: 250px;
            margin-bottom: 34px;
        }
    }
    h2 {
        font-size: 32px;
        font-weight: 400;
        line-height: 37px;
        color: #000000;
    }
`

const Slide = props => {
    return (
        <SlideWrapper>
            <img src={props.imgSrc} alt='slide' />
            <h2>{props.title}</h2>
        </SlideWrapper>
    )
}
export default Slide;