"use client";

const ContactTitle = "REACH OUT";
const ContactMailto = "mailto:nilsen.tele@proton.me";
import { Highlight } from "../../components/Highlight";

const ContactText = (
  <>
    I&apos;m always open to <Highlight>new opportunities</Highlight> and
    collaborations. Feel free to reach out on email at{" "}
    <a href={ContactMailto} className="mailto-link">
      nilsen.tele@proton.me
    </a>
    .
  </>
);

export { ContactTitle, ContactText };
