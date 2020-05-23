import styled from 'styled-components';

export const DoBtn = styled.button`
    border: none;
    outline: none;
    background-color: rgba(255,255,255,0.30);
    color: #fff;
    &:hover {
    background-color: rgba(255,255,255,0.20);
    color: #fff;
    }
`;

export const SearchInput = styled.input`
    position: absolute;
    width: 210px;
    height: 32px;
    padding: 9px;
    border: none;
    outline: none;
    border-radius: 3px;
    background-color: rgba(255,255,255,0.30);
    color: #fff;
`;

export const styles = {
    header: {
        display: 'flex',
        color: '#fff'
    },
    search: {
        position: 'absolute',
        left: '5px',
        top: '4px',
        width: '210px',
        height: '32px',
    },
    searchIcon: {
        position: 'absolute',
        right: '5px',
        top: '5px'
    },
    title: {
        height: '40px',
        width: '100%',
        fontSize: '25px',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.15)'
    },
    btnContainer: {
        position: 'absolute',
        right: '5px',
        top: '4px',
    }
};