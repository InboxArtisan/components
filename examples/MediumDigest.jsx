import {
  Html,
  Button,
  Preview,
  Text,
  Head,
  Font,
  Container,
  Section,
  Img,
  Link,
  Column,
  Hr,
  Heading,
} from "@react-email/components";
import * as React from "react";

// HEADER COMPONENT
const EmailHeader = () => {
  return (
    <Section
      style={{
        background: "#FFF",
        padding: "28px 40px 5px",
        borderBottom: "1px solid rgba(230,230,230,1)",
      }}
    >
      <Section style={{ display: "inline-block", verticalAlign: "middle" }}>
        <Column style={{ paddingRight: "10px" }}>
          <Link href="https://medium.com/@n00bgineer">
            <Img
              src="https://pbs.twimg.com/profile_images/1681651359815458817/YIdklQqG_400x400.jpg"
              style={{
                borderRadius: "50%",
                hieght: "32px",
                width: "32px",
              }}
            />
          </Link>
        </Column>
        <Column>
          <Link
            href="https://medium.com/@n00bgineer"
            style={{ color: "black" }}
          >
            <Text style={{ margin: "0px", lineHeight: "18px" }}>
              Stories for{" "}
              <span style={{ fontWeight: "bolder" }}>Noob Engineer</span>
            </Text>
            <Section>
              <Column>
                <Text style={{ margin: "0px", lineHeight: "18px" }}>
                  @n00bgineer
                </Text>
              </Column>
              <Column style={{ paddingLeft: "5px" }}>
                <Link
                  href="https://medium.com/plans?source=email-69235449bcc0-1666128610353-digest.reader-------------------------ed1157b6_10af_4b11_829d_f73467a71d59"
                  style={{ color: "#1A8917" }}
                >
                  <Text style={{ margin: "0px", lineHeight: "18px" }}>
                    Become a member
                  </Text>
                </Link>
              </Column>
            </Section>
          </Link>
        </Column>
      </Section>
      <Link href="https://medium.com/" target="_blank">
        <Img
          src="https://ci5.googleusercontent.com/proxy/QaS6DxDe9LCW0rQnzXuGIrWPbdO98ndjptPj7tLdPPwJ0vYJddWtZCN4bdNjxmYkjMsH5XdH5CBI2SWQ4sa97m903grRctgn7C2iU9LoqWY=s0-d-e1-ft#https://miro.medium.com/max/1200/4*pUIfRlZh07mLXKHFllcZSw.png"
          alt="Medium Digest Email"
          style={{
            width: "70%",
            minWidth: "400px",
            margin: "25px auto 5px",
          }}
        />
      </Link>
    </Section>
  );
};

// FOOTER COMPONENT
const EmailFooter = () => {
  return (
    <Section
      style={{
        color: "#FFF",
        background: "#000",
        padding: "28px 40px 28px",
      }}
    >
      <Section>
        <Column>
          <Heading as="h4" style={{ margin: "10px 0px" }}>
            Read from anywhere.
          </Heading>
        </Column>
        <Column style={{ float: "right", top: "center" }}>
          <Img
            src="https://ci5.googleusercontent.com/proxy/9BV-gO4TEU7_uwf_i05T6sGao-jNF5GgnClcJ-rf2SujsG9rO-sz7SN7y3IZeieadQlr-A4I0pVr3BV462suKEK_TSpLfn8Oxuu5EParkec=s0-d-e1-ft#https://miro.medium.com/proxy/1*CXKdDEfFShoF6Azy5V8ZKQ@2x.png"
            style={{
              width: "120px",
              display: "inline",
              paddingRight: "10px",
              height: "40px",
            }}
          />
          <Img
            src="https://ci4.googleusercontent.com/proxy/q5bGATAru0VVCl8tVwHZKgGVRyJgoxx4yjARFqQ7vUO8pAultDMJJjvgsLcbCMcFs9u51CQo4DAlN8TJ9ir-U-azPVYVHhAHED1NILCi2tY=s0-d-e1-ft#https://miro.medium.com/proxy/1*D-oULOaPtKR8A1jatsII4w@2x.png"
            style={{ width: "120px", display: "inline", height: "40px" }}
          />
        </Column>
      </Section>
      <Hr style={{ borderColor: "white" }} />
      <Section>
        <Column>
          <Text style={{ margin: "0px" }}>
            Sent by Medium - Medium, 548 Market St, PMB 42061, San Francisco,
            CA, 94104
          </Text>
        </Column>
      </Section>
      <Section>
        <span>
          <Text
            style={{
              margin: "0px",
              display: "inline-block",
              paddingRight: "5px",
            }}
          >
            <Link
              href="#"
              style={{ color: "white", textDecoration: "underline" }}
            >
              Unsubscribe
            </Link>{" "}
            from this type of email .
          </Text>
        </span>
        <span>
          <Text
            style={{
              margin: "0px",
              display: "inline-block",
              paddingRight: "5px",
            }}
          >
            <Link
              href="#"
              style={{ color: "white", textDecoration: "underline" }}
            >
              Switch to weekly digest
            </Link>{" "}
            .
          </Text>
        </span>
        <span>
          <Text
            style={{
              margin: "0px",
              display: "inline-block",
              paddingRight: "5px",
            }}
          >
            <Link
              href="#"
              style={{ color: "white", textDecoration: "underline" }}
            >
              Careers
            </Link>{" "}
            .
          </Text>
        </span>
        <span>
          <Text
            style={{
              margin: "0px",
              display: "inline-block",
              paddingRight: "5px",
            }}
          >
            <Link
              href="#"
              style={{ color: "white", textDecoration: "underline" }}
            >
              Help Center
            </Link>{" "}
            .
          </Text>
        </span>
        <span>
          <Text
            style={{
              margin: "0px",
              display: "inline-block",
              paddingRight: "5px",
            }}
          >
            <Link
              href="#"
              style={{ color: "white", textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>{" "}
            .
          </Text>
        </span>
        <span>
          <Text
            style={{
              margin: "0px",
              display: "inline-block",
              paddingRight: "5px",
            }}
          >
            <Link
              href="#"
              style={{ color: "white", textDecoration: "underline" }}
            >
              Terms of Service
            </Link>
          </Text>
        </span>
      </Section>
    </Section>
  );
};

// DIGEST ITEM
const PostItem = ({
  link,
  title,
  body,
  author,
  publication,
  readTime = 3,
  postImage,
  publicationImage,
}) => {
  return (
    <>
      <Link href={link} style={{ color: "black", textDecoration: "unset" }}>
        <Section sx={{ margin: "10px 0px" }}>
          <Column style={{ width: "75%", maxWidth: "75%" }}>
            <Heading as="h4" style={{ margin: "10px 0px" }}>
              {title}
            </Heading>
            <Heading as="h4" style={{ fontWeight: "normal", margin: "0px" }}>
              {body}
            </Heading>
            <Section>
              <Column style={{ width: "32px", paddingRight: "10px" }}>
                {publicationImage && (
                  <Img
                    src={publicationImage}
                    style={{ height: "32px", width: "32px" }}
                    alt="publication image/logo"
                  />
                )}
              </Column>
              <Column style={{ width: "fit-content" }}>
                <Heading as="h5" style={{ display: "inline-block" }}>
                  {author} {publication ? `in ${publication}` : ""}
                </Heading>
                <Text
                  style={{
                    margin: "0px",
                    display: "inline-block",
                    paddingLeft: "5px",
                    color: "rgba(41,41,41,1)",
                  }}
                >
                  {readTime} min read
                </Text>
              </Column>
            </Section>
          </Column>
          <Column style={{ width: "25%", maxWidth: "25%" }}>
            <Img
              src={postImage}
              alt={title}
              style={{
                width: "90%",
                height: "100%",
                margin: "auto",
                float: "right",
                top: "0px",
              }}
            />
          </Column>
        </Section>
      </Link>
      <Hr
        style={{
          borderBottom: "1px solid rgba(230,230,230,1)",
          margin: "10px 0px",
        }}
      />
    </>
  );
};

const Email = () => {
  return (
    <>
      <Preview>Your daily digest by Medium</Preview>
      <Html style={{ background: "rgba(242,242,242,1)" }}>
        <Head>
          <Font
            fontFamily="sans-serif"
            fallbackFontFamily="serif"
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Container
          style={{
            border: "1px solid rgba(230,230,230,1)",
            minWidth: "500px",
            maxWidth: "800px",
            margin: "20px auto",
            fontFamily: "sans-serif",
          }}
        >
          <EmailHeader />
          <Container
            style={{
              background: "#fafafa",
              padding: "20px 40px 40px",
              width: "100%",
              maxWidth: "unset",
            }}
          >
            <Section>
              <Heading
                as="h4"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                TODAY'S HIGHLIGHT
              </Heading>
              <Hr style={{ borderColor: "black" }} />
              <PostItem
                link="https://medium.com/@ioanamircea080/how-to-create-a-telegram-bot-using-python-making-300-per-month-cf80d0693bb5"
                title="How to Create a Telegram Bot Using Python — Making $300 Per Month"
                body="A Step-by-Step Guide"
                author="Ioana Mircea"
                publication="ILLUMINATION"
                postImage="https://miro.medium.com/v2/resize:fit:1400/0*2q-4eButWdj5ZDTE.jpg"
                publicationImage="https://ci3.googleusercontent.com/proxy/n6iKxUpCV5CuHL-U2oFZsJB2j9Q-kQuxauqu1s9nPmrM7eD_49I-h87cNCCydNpAN-LhDK7hPARFGtyZI00Z7OyE8rKhtovffCwiQ3KhOxiBeiU=s0-d-e1-ft#https://miro.medium.com/fit/c/64/64/1*lTGoREgdOsvBq2YFMQOv0Q.png"
              />

              <PostItem
                link="https://medium.com/@codedev101/10-killer-apis-to-automate-your-daily-problems-e0b27d84c992"
                title="10 Killer APIs to Automate Your Daily Problems"
                body="A collection of handy public APIs for your Python projects"
                author="Haider Imtiaz"
                publication="Python in Plain English"
                postImage="https://miro.medium.com/v2/resize:fit:720/format:webp/1*LO2g2_5Ushp0Py8JnKipMw.jpeg"
                publicationImage="https://ci6.googleusercontent.com/proxy/McONFEIVgDfPY_aoa-F0fPAaX-vuXLbo4S6hA_H_cwSnx1jxzKsaloH4NmrPCG8JSDPqoLNJcyKfIt6Mkac2vx4ikErk3cIcgUL-JWecfEaXcJFwnMc=s0-d-e1-ft#https://miro.medium.com/fit/c/64/64/1*VA3oGfprJgj5fRsTjXp6fA@2x.png"
              />

              <PostItem
                link="https://medium.com/@amit08255/how-to-speed-up-data-heavy-react-components-afe18d17b28b?source=email-69235449bcc0-1665178339424-digest.reader-5c2fdf847f4a-afe18d17b28b----0-96------------------58f5c17f_1397_44a7_9e5e_14e118331a8e-1"
                title="How To Speed Up Data Heavy React Components"
                body="Boost performance for data-heavy React applications with this simple technique…"
                author="Amit Kumar"
                publication="Bits & Pieces"
                postImage="https://miro.medium.com/v2/resize:fit:720/format:webp/1*hfq_tit8W9gk8nDtA7HGPQ.jpeg"
                publicationImage="https://ci6.googleusercontent.com/proxy/GhKDdQyQMS5OTGQkldSAhY5yZuWV8kEZIqVR1VVUk7PcYtjzTu1KfIpncML0xW5mEPfw-ANfUs0OofgGYA9b4F6JWTCjrsenYCb3QZBtN2Uhihs=s0-d-e1-ft#https://miro.medium.com/fit/c/64/64/1*CbLVQCvVuulnBXlbu3B21A.png"
              />
            </Section>

            <Section>
              <Heading
                as="h4"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                IN CASE YOU MISSED IT
              </Heading>
              <Hr style={{ borderColor: "black" }} />

              <PostItem
                link="https://medium.com/@harnarayans/how-i-got-6-offers-in-2-months-from-google-amazon-salesforce-microsoft-vmware-and-target-fb32b60c364d?source=email-69235449bcc0-1665092576808-digest.reader--fb32b60c364d----0-71------------------929960df_d115_499f_8e56_9f2be32be637-27"
                title="How I got 6 offers in 2 months from Google, Amazon, Salesforce, Microsoft…"
                body="Obviously the journey was much longer than 2 months. Actually more than 2 years."
                author="Har Narayan Singh"
                postImage="https://miro.medium.com/v2/resize:fit:720/format:webp/1*gs1ZjBVeanvHYMdTZHWA0Q.png"
                publicationImage="https://ci3.googleusercontent.com/proxy/F7GKSzWSTOT6MnHTATdqkpUMOxT96VNet6AWB7yZVWui3J_vRpbEvGCMe6ajW4qez-Jy0TaTlS3YHqTZgPBctb8HtuICU9Ssa0hJhCX5kx7jNYsS=s0-d-e1-ft#https://miro.medium.com/fit/c/64/64/1*LW34rDnnfM9ueG-lMsoSVw.jpeg"
              />

              <PostItem
                link="https://medium.com/@irina-seng/top-20-books-a-software-developer-must-read-updated-b24bcc9ee3d?source=email-69235449bcc0-1665264361131-digest.reader--b24bcc9ee3d----1-71------------------40eacfc5_5abb_40e4_b1bd_68bafdf9a89b-27"
                title="Top 20 Books a Software Developer Must Read (Updated)"
                body="A continuous learning mindset is a key quality of a software developer who wants to stay relevant and grow…"
                author="Irina Seng"
                postImage="https://global-uploads.webflow.com/5dd400807030aa202c821691/64075ea9d60d0b12ba3901c2_open-graph-25_4ac567f31fa5c992fb38fb1d4db9cb9e.jpeg"
                publicationImage="https://ci4.googleusercontent.com/proxy/dlGF1udMaemGSryW6G9JIEa6nZVx0GcZGiP-UAzxxOhrVk-P4NeiHUNqTrHCCs9MFLsi_8dw5v4UqwsOvYdH3lnCZWPxLxA9bahhwO1bFa599_c=s0-d-e1-ft#https://miro.medium.com/fit/c/64/64/2*fy3Zgsd2ryzOdqiUmcRZsg.png"
              />

              <PostItem
                link="https://medium.com/@melih193/nodejs-developer-roadmap-2022-80d33457e2f2?source=email-69235449bcc0-1665005004793-digest.reader-29038077e4c6-80d33457e2f2----0-71------------------85284513_3325_421c_9bd5_126f2fd9d723-27"
                title="Nodejs Developer Roadmap 2022"
                body="In this article we will explore nodejs developer roadmap for 2022"
                author="Melih Yumak"
                publication="CodeX"
                postImage="https://miro.medium.com/v2/resize:fit:720/format:webp/0*HlFE_IBr9PrKl6Bw.png"
                publicationImage="https://ci5.googleusercontent.com/proxy/6Si-T4R5N4rQ90iURaHQDKlbP3Xfuf_uNUZLR3IzSGFFTbOIz3qWyBeYizn_qgdwyxsck9fxjAlYCdG5UYOvUkeySTF2ax_v-Y_v7aHnAXNQtKc=s0-d-e1-ft#https://miro.medium.com/fit/c/64/64/1*VqH0bOrfjeUkznphIC7KBg.png"
              />
            </Section>

            <Section>
              <Heading
                as="h4"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                QUICK READS
              </Heading>
              <Hr style={{ borderColor: "black" }} />

              <PostItem
                link="https://medium.com/@IamValerio/how-to-really-know-youre-in-love-9d9e1224f869?source=email-69235449bcc0-1665005004793-digest.reader-b7b055e558b7-9d9e1224f869----0-73------------------85284513_3325_421c_9bd5_126f2fd9d723-28"
                title="How to “really” Know You’re In Love"
                body="You think you’re nothing, don’t you?"
                author="Valerio"
                publication="Hello Love"
                postImage="https://miro.medium.com/v2/resize:fit:720/format:webp/1*k4n8Eow5GdD1WTktb9O7ew.jpeg"
                publicationImage="https://ci5.googleusercontent.com/proxy/xp3VMGZMZLohv0znpYODs5kpGJ5W4DapNfH9kYcQ6VhQQU-CKbtoRbKaC8NJbfRhx8UzM-UV7bCy1JNoArgSybHtCjahgiujwnlVWXEqOAZQyg2u=s0-d-e1-ft#https://miro.medium.com/fit/c/64/64/1*bQrOCsmXteRwFJQ7plGXHQ.jpeg"
              />

              <PostItem
                link="https://medium.com/@aarondinin/a-venture-capitalist-told-me-how-he-decides-which-startups-to-fund-and-i-couldnt-believe-it-ca0a186e0bd4?source=email-69235449bcc0-1665005004793-digest.reader-7adf33e44ae3-ca0a186e0bd4----1-96------------------85284513_3325_421c_9bd5_126f2fd9d723-28"
                title="A Venture Capitalist Told Me How He Decides Which Startups to Fund, and I…"
                body="The real reasons people invest in startups aren’t always what you’d think."
                author="Aaron Dinin, PhD"
                publication="Entrepreneur's Handbook"
                postImage="https://miro.medium.com/v2/resize:fit:720/0*84zk1MkNm6H2aMW0"
                publicationImage="https://ci6.googleusercontent.com/proxy/t4wHOFPC8SN46sDbsZ2sjAVypoxDZzsxEfJvVN3KzgSpwWUQET4ufZHrVm1HKxBE0XlsaHJMY9PdzVla0IeYElebpYUE2GJo9YJMd1LhVMOcZ5w=s0-d-e1-ft#https://miro.medium.com/fit/c/64/64/1*ZpqTjur1EEzN4KzM4e-Bnw.png"
              />

              <PostItem
                link="https://medium.com/@infosecwriteups/40-000-bounty-authentication-bypass-techniques-cache-poisoning-idors-password-recovery-2ec097380c57?source=email-69235449bcc0-1665005004793-digest.reader-7b722bfd1b8d-2ec097380c57----2-96------------------85284513_3325_421c_9bd5_126f2fd9d723-28"
                title="👩‍💻$40,000 Bounty, Authentication Bypass Techniques, Cache Poisoning, IDORs…"
                body="$40,000 for finding 3 distinct bugs in Microsoft’s new chromium based browser."
                author="InfoSec Writeups"
                postImage="https://miro.medium.com/v2/resize:fit:720/format:webp/1*aewbMd_3l4gSHIEoED46ew.jpeg"
                publicationImage="https://ci5.googleusercontent.com/proxy/lsfpHNNzekoAVIU1qEuzgTQVoTfQ_cKc3xX7-1BMfnU8GKpiEmc30kNEg8sWLvmGMdVB4NMoZtL6w4wH1g46DKcl_L9skbqBpJcFgp7Syt9gaxM=s0-d-e1-ft#https://miro.medium.com/fit/c/64/64/1*AYD5ja6D0tjSzJ4RjetQtQ.png"
              />
            </Section>

            <Section>
              <Container>
                <Heading as="h3" style={{ textAlign: "center" }}>
                  See more of what you like and less of what you don’t.
                </Heading>
                <div style={{ margin: "auto", width: "fit-content" }}>
                  <Link
                    style={{
                      borderRadius: "9999px",
                      background: "#1A8917",
                      color: "white",
                      padding: "9px 20px",
                    }}
                  >
                    Control your recommendations
                  </Link>
                </div>
              </Container>
            </Section>
          </Container>
          <EmailFooter />
        </Container>
      </Html>
    </>
  );
};

export default Email;
