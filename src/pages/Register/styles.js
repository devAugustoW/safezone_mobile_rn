import styled from "styled-components/native";

export const RegisterContainer = styled.SafeAreaView`
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

export const BtnCamera = styled.TouchableOpacity`
   background-color: #f48604;
   padding: 15px 25px;
   border-radius: 8px;
   align-self: flex-start;
   margin-top: 15px;
   margin-left: 18px;
   margin-bottom: 15px;
   elevation: 2;
`;



export const CameraText = styled.Text`
 color: #fff;
`;

export const ImageView = styled.Image`
   width: 80%;
   height: 140px;
   objectFit: contain;
   z-index: 100;
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