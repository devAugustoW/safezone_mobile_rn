import styled from "styled-components/native";

export const Tag = styled.View`
   width: 98%; 
   background-color: #fafafa; 
   border-radius: 8px; 
  
   margin-bottom: 25px; 
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
   width: 100%;
   border: 1px solid #d3d3d3;
`;

export const Identify = styled.Text`
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
  background-color: #f48604; 
  color: #fff; 
  padding: 5px 10px; 
  border-top-left-radius: 6px; 
  border-top-right-radius: 6px;
  border: 1px solid #f48604;
  elevation: 3; 
`;

export const TitleView = styled.Text`
  font-size: 16px; 
  margin-bottom: 5px; 
  padding-left: 10px;
`;


export const IdentView = styled.View`
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between; 
  padding-left: 10px; 
  column-gap: 10px;
`;


export const DescriptionInput = styled.TextInput`
  width: 60%;
  padding: 8px; 
  border-width: 1px; 
  border-color: #ccc; 
  border-radius: 5px; 
  font-size: 16px; 
  margin-bottom: 10px; 
  text-align-vertical: top;
`;

export const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between; 
  width: 40%;

`

export const ButtonArea = styled.TouchableOpacity`
  background-color: #f48604; 
  border-radius: 5px; 
  padding: 10px; 
  elevation: 3; 
  align-items: center;
  justify-content: center;
`;

export const ButtonAreaWithBorders = styled.TouchableOpacity`
  border-width: 1px; 
  border-color: #f48604; 
  background-color: #fff; 
  padding: 10px;
  margin-right: 11px;
  border-radius: 5px; 
`;