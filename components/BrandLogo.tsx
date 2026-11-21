import Image from "next/image";
import Logo from "@/app/assets/images/logo-cargo-new.png";

export default function BrandLogo() {
  return (
    <span className="brand">
      <span className="brand-symbol">
        <Image src={Logo} alt="" width={112} height={112} priority />
      </span>
      <span className="brand-wordmark">
        <strong>
          PR GLOBAL <span>GROUP</span>
        </strong>
        <small>เชื่อมต่อทุกโอกาส ไปด้วยกัน</small>
      </span>
    </span>
  );
}
