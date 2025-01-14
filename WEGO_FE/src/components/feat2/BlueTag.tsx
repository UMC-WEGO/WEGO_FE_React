import styled from "styled-components";

const Item = styled.div`
    padding-top: 7px;
    padding-bottom: 7px;
    padding-right: 14px;
    padding-left: 14px;

    border: 1px solid violet;
    border-radius: 13px;

    font-size: 12px;
    font-weight: 600;

    background-color: rgba(0, 89, 255, 0.1);
    color: rgba(0, 89, 255, 1);
`

const BlueTag = () => {
    return(
        <Item>부산</Item>        
    )

}

export default BlueTag;