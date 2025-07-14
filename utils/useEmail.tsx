import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
  Section,
  Row,
  Column,
  Link,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userName: string;
}

export const EmailLetter = ({ userName }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Thanks for Joining the Waitlist, {userName}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://raw.githubusercontent.com/delatois/raw/refs/heads/main/20250714_140515.png`}
          width="100"
          height="100"
          alt="Sprinx Logo"
          style={logo}
        />
        <Text style={greeting}>GM {userName}🔆,</Text>
        <Text style={paragraph}>
          Thank you for joining the Sprinx waitlist, you’re officially early!. Sprinx isn’t just another AMM. Inspired by the titans of DeFi like Curve, Convex, and Uniswap, we’re building a next-gen protocol to supercharge liquidity on Somnia through the power of ve(3,3). Being on this list means you're already ahead of the curve (pun intended). But this is just the beginning...
        </Text>
        <Text style={paragraph}>
        <h3>🪂 🎁 Airdrop alpha inbounds!</h3>
          <p>We’ll soon be sending out a <span style={secret}>SECRET CODE</span> exclusively via email. This code will unlock your access to our upcoming Airdrop program — so keep your eyes on your inbox (and spam folder, just in case). Thanks again for being early. The future of DeFi on Somnia is being built, and you’re now a part of it.</p>
          <br />
          If you have any questions or feedback, don't hesitate to reach out by replying directly to{" "}
          <a href="mailto:gm@sprinx.xyz" style={link}>
            our email {""}.
          </a>
        </Text>
        <Text style={signOff}>
          Best regards,
          <br />
          — Sprinx Team.
        </Text>
        <Hr style={hr} />
<Section>
  <Row>
    <Column colSpan={4}>
      <Img
        alt="Sprinx Logo"
        height="42"
        src="https://raw.githubusercontent.com/delatois/raw/refs/heads/main/white-logo.png"
      />
      <Text className="my-[8px] font-semibold text-[16px] text-gray-900 leading-[24px]">
        Sprinx
      </Text>
      <Text className="mt-[4px] mb-[0px] text-[16px] text-gray-500 leading-[24px]">
        The Liquidity Layers
      </Text>
    </Column>
    <Column align="left" className="table-cell align-bottom">
      <Row className="table-cell h-[44px] w-[56px] align-bottom">
        <Column className="pr-[8px]">
          <Link href="https://medium.com/@sprinxxyz">
            <Img
              alt="Medium"
              height="36"
              src="https://s.magecdn.com/social/64w/mw-medium.png"
              width="36"
            />
          </Link>
        </Column>
        <Column className="pr-[8px]">
          <Link href="https://x.com/sprinx_xyz">
            <Img alt="X" height="36" src="https://s.magecdn.com/social/64w/mw-x.png" width="36" />
          </Link>
        </Column>
        <Column>
          <Link href="https://discord.gg/aHanzx2Yg2">
            <Img
              alt="Discord"
              height="36"
              src="https://s.magecdn.com/social/64w/mw-discord.png"
              width="36"
            />
          </Link>
        </Column>
      </Row>
      <Row>
        <Text className="my-[8px] font-semibold text-[16px] text-gray-500 leading-[24px]">
          www.sprinx.xyz
        </Text>
        <Text className="mt-[4px] mb-[0px] font-semibold text-[16px] text-gray-500 leading-[24px]">
          gm@sprinx.xyz
        </Text>
      </Row>
    </Column>
  </Row>
</Section>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Sprinx waitlist.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailLetter;

const main = {
  background: "linear-gradient(-225deg, #EA2F14 0%, #E6521F 48%, #FB9E3A 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#FB9E3A",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};

const secret = {
  color: "#FFA500",
  fontWeight: "bold",
};