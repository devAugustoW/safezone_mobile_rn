import styled from 'styled-components/native';

export const ViewRiskPointContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  padding-top: 35px;
`;

export const Titulo = styled.Text`
   width: 90%;
   color: #959595;
   font-size: 24px;
   margin-top: 10px;
   margin-bottom: 15px;
`;

export const AreaInput = styled.View`
   flex-direction: row;
`;

export const Input = styled.TextInput`
   background-color: #fafafa;
   border: 1px solid #d3d3d3;
   width: 90%;
   font-size: 17px;
   padding: 10px;
   border-radius: 8px;
   color: #121212;
   margin-bottom: 15px;
   elevation: 2;
`;

export const DescriptionInput = styled.TextInput`
   background-color: #fafafa;
   border: 1px solid #d3d3d3;
   width: 90%;
   font-size: 17px;
   padding: 10px;
   border-radius: 8px;
   color: #121212;
   margin-bottom: 15px;
   text-align-vertical: top;
   elevation: 2;
`;

export const BtnAndImageView = styled.View`
  flex-direction: row;
  justify-content: space-between;   
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  
`;

export const BtnEdit = styled.TouchableOpacity`
   background-color: #f48604;
   padding: 15px 25px;
   border-radius: 8px;
   align-self: flex-start;
   justify-content: center;

   margin-bottom: 10px;
   elevation: 2;
`;

export const CameraEdit = styled.Text`
  margin-left: 2px;
  color: #fff;
`;

export const ImageView = styled.Image`
  width: 46%;
  height: 260px;
  objectFit: contain;
  text-align: right;
`

export const ButtonSubmit = styled.TouchableOpacity`
   background-color: #f48604;
   width: 90%;
   border-radius: 8px;
   align-items: center;
   padding: 10px;
   position: absolute;
   bottom: 30px;
   elevation: 1;
`;


export const BtnText = styled.Text`
   font-size: 24px;
   color: #fff;
`;