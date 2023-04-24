import React from "react";
import {
  Desc,
  FirstName,
  GroupWrapper,
  GruopTitle,
  NoteWrapper,
  OrderContainer,
  OrderWrapper,
  Title,
  Panel,
} from "./order.style";

const OrderComponent = () => {
  return (
    <OrderContainer>
      <OrderWrapper>
        <Title>Get your notes</Title>
        <Desc>
          Please provide the following information to process your request.
          Enter any other information in the Additional Notes section. After
          submitting this form you will be taken to complete the Payment.
        </Desc>
        <NoteWrapper>
          <GroupWrapper>
            <GruopTitle>PRIMARY APPLICANT</GruopTitle>
            <FirstName>
              <Panel>FIRST NAME</Panel>
            </FirstName>
          </GroupWrapper>
          <GroupWrapper>
            <GruopTitle>SPOUSE or PARTNER</GruopTitle>
          </GroupWrapper>
          <GroupWrapper>
            <GruopTitle>APPLICANT INFO</GruopTitle>
          </GroupWrapper>
        </NoteWrapper>
      </OrderWrapper>
    </OrderContainer>
  );
};

export default OrderComponent;
