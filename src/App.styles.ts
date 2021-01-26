import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton'

export const Wrapper = styled.div`
    margin: 40px;
    overflow: hidden;
`;

export const CustomButton = styled(IconButton)`
 position: fixed;
 z-index: 100;
 right: 20px;
 top: 20px;

`;