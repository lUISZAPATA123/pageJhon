import HeaderItems from "./HeaderItems";
import { BiGridAlt } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [Toggle, setToggle] = useState(false);

  return (
    <header
      className="fixed top-0 right-0 z-50 w-full "
      style={{ background: "#2f3542" }}
    >
      <nav className="container flex items-center justify-between py-3 ">
        <div className="relative py-1 text-white">
          <img src="/logohero.png" alt="Logo" width="100" height="80" />
        </div>
        <div className="relative">
          <BiGridAlt
            className="text-2xl text-white cursor-pointer "
            onClick={() => setToggle(!Toggle)}
          />
          {Toggle && (
            <BoxItems>
              <ul>
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/games">
                  <li>Games</li>
                </Link>
                <Link href="/music">
                  <li>Music</li>
                </Link>
                <Link href="/sports">
                  <li>Sports</li>
                </Link>
                <Link href="/news">
                  <li>News</li>
                </Link>
              </ul>
            </BoxItems>
          )}
        </div>

        <div className="flex justify-end flex-1 sm:hidden">
          <IoMenu className="text-3xl text-white cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}

const BoxItems = styled.div`
  position: absolute;
  width: 150px;
  top: 30px;
  right: -70px;
  background-color: #2f3542;
  ul {
    border-radius: 8px;
  }
  li {
    font-size: 16px;
    color: white;
    padding: 0.5rem;
    text-align: center;
    cursor: pointer;
    :hover {
      background: #68809d;
    }
  }
`;
