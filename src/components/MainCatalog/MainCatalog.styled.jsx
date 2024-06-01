import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 24px;
    position: relative;
    width: 360px;
`;

export const SupportingText = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #475467;
    margin-bottom: 8px;
`;

export const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0;
    gap: 16px;
    width: 100%;
`;

export const Input = styled.input`
    border-radius: 10px;
    padding: 18px 218px 18px 18px;
    width: 360px;
    height: 56px;
    width: 100%;
    border: 1px solid #ccc;
    font-size: 16px;
    background: #f7f7f7;
`;

export const FiltersTitle = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #475467;
    margin-top: 20px;
`;

export const FiltersSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
`;

export const FilterTitle = styled.div`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #475467;
    margin-bottom: 8px;
`;

export const Filters = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
`;

export const FilterButton = styled.button`
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
    padding: 17px 27px;
    width: 114px;
    height: 95px;
    font-size: 16px;
    cursor: pointer;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #f0f0f0;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 60px;
    gap: 10px;
    width: 173px; 
    height: 56px; 
    background: #e44848;
    border-radius: 200px;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    align-self: center; 
    margin-top: 20px;
    &:hover {
        background: #d33d3d;
    }
`;
