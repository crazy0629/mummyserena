import styled from "styled-components";

export const OrderContainer = styled.div`
  padding: calc(15%+48px) caclc(10%+48px);
  display: flex;
  justify-content: center;
  background-color: rgba(170, 170, 170, 0.692);
`;

export const OrderWrapper = styled.div`
  padding: 8%;
  border-radius: 7px;
  background: rgba(39, 15, 15, 0.9);
  max-width: 1000px;
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 0px 0px 15px;
  padding: 0px 0px 10px;
`;

export const Desc = styled.div`
  font-size: 18px;
  color: white;
  text-align: center;
  margin: 0px 0px 18px;
  padding: 0px 0px 30px;
`;

export const NoteWrapper = styled.div`
  color: rgba(39, 15, 15, 0.9);
  background: white;
  padding: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GroupWrapper = styled.div``;

export const GruopTitle = styled.p`
  text-align: left !important;
  font-size: 1.25rem;
  font-weight: 300;
`;

export const FirstName = styled.div``;

export const Panel = styled.div`
  background-color: #270f0f;
  color: white;
  text-align: center;
  width: fit-content;
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
  max-width: 100%;
  padding-right: calc(1.5rem * 0.5);
  padding-left: calc(1.5rem * 0.5);
  margin-top: 0;
`;
