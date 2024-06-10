import styled from "styled-components/native";

export const Tag = styled.View`
   padding-bottom: 20px;
   margin-bottom: 10px;
   
   border-radius: 8px;
   width: 100%;
   margin-bottom: 25px;
   background-color: #fafafa;
   border: 1px solid #d3d3d3;
   elevation: 3;
`;

export const Identify = styled.Text`
   width: 100%;
   font-weight: bold;
   font-size: 16px;
   margin-bottom: 5px;
   color: #fff;
   background-color: #f48604;
   padding: 5px 10px;
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
   elevation: 3;
`;


export const IdentView = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding-left: 5px;
   padding-right: 10px;
   margin-top: 15px;
`;

export const Title = styled.Text`
   font-size: 18px;
   margin-left: 8px;
   margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-size: 14px;
  width: 205px;
  color: #666667;
  padding-bottom: 65px;
  background-color: #fafafa;
   border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding-top: 5px;
  padding-left: 5px;
   elevation: 3;
`;

export const ButtonView = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: center;
   column-gap: 10px;
`

export const ButtonArea = styled.TouchableOpacity`
  background-color: #f48604;
  border-radius: 5px;
  padding: 10px;
  margin-right: 3px;
  elevation: 3;
`;

export const ButtonAreaWithBorders = styled.TouchableOpacity`
   border-width: 1px;
   border-color: #f48604;
   background-color: #fff;
   border-radius: 5px;
   padding-top: 11px;
   padding-bottom: 11px;
   padding-left: 11px;
   padding-right: 8px;
   elevation: 3;
   align-items: center;
   justify-content: center;
`;