import React, { FC, PropsWithChildren } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";
import { graphql } from "gatsby";
import { MainColorPaletteType } from "../../constants/colors";

interface LayoutProps extends Queries.LayoutDataFragment {
  color: MainColorPaletteType;
}

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  ...props
}) => (
  <>
    <GlobalStyle />
    <BodyWrapper>
      <Header {...props} />
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <Footer {...props} />
    </BodyWrapper>
  </>
);

export const query = graphql`
  fragment LayoutData on ContentfulLayout {
    facebookUrl
    instagramUrl
    whatsappUrl
    sections {
      slug
      title
    }
    specialPages
  }
`;
