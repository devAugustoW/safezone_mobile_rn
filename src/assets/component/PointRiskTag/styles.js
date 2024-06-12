import styled from "styled-components/native";

export const Tag = styled.View`
  width: 95vw; 
  background-color: #fafafa; 
  border-radius: 8px; 
  margin-bottom: 25px; 
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
  width: 100%;
  border: 1px solid #d3d3d3;   
`;

export const IdentifyView = styled.View`
  flex-direction: row;  
  justify-content: space-between;  
  align-items: center;    
  margin-bottom: 5px;
  background-color: #f48604; 
  padding: 5px 10px; 
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: 1px solid #f48604;
  elevation: 3;
`;

export const Identify = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff; 
`;
  

export const TitleView = styled.Text`
  font-size: 16px; 
  margin-bottom: 5px; 
  padding-left: 10px;
`;


export const IdentView = styled.View`
  flex-direction: row; 
  justify-content: space-between; 
  padding-left: 10px; 
  padding-right: 5px;
  column-gap: 10px;  
  height: 100px;
`;

export const DesciptionText = styled.Text`
  width: 60%;
  color: #9f9ca1;
  line-height: 18px;
`;


export const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between; 
  width: 40%;
  align-items: flex-end;
  margin-bottom: 5px;
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
  background-color: #fff; 
  border-radius: 5px; 
  padding: 11px;
  align-items: center;
  justify-content: center;
  border-width: 1px; 
  border-color: #f48604; 
  margin-right: 10px;
`;