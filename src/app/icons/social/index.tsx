import Image from "next/image";
import facebookSvg from "public/social/facebook.svg";
import instagramSvg from "public/social/instagram.svg";
import pinterestSvg from "public/social/pinterest.svg";
import twitterSvg from "public/social/twitter.svg";

export function Twitter() {
  return (
    <Image
      src={twitterSvg}
      alt="Twitter"
    />
  );
}

export function Pinterest() {
  return (
    <Image
      src={pinterestSvg}
      alt="Pinterest"
    />
  );
}

export function Instagram() {
  return (
    <Image
      src={instagramSvg}
      alt="Instagram"
    />
  );
}

export function Facebook() {
  return (
    <Image
      src={facebookSvg}
      alt="Facebook"
    />
  );
}
