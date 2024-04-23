import React, { useEffect } from 'react';
// import axios from "axios";
import { Link } from 'react-router-dom';

import '../css/Reset.css';
import '../css/App.css';

function Home() {
  

  useEffect(() => {
    // 1. postBoard (글쓰기 버튼)
    function postBoard() {
      const modal = document.querySelector('.modal');
      const modalBody = document.querySelector('.modalBody');
      const openModal = document.getElementById('openBtn');
      // 닫기버튼
      const closeModalBtn = document.getElementById('closeFn');

      openModal.addEventListener("click", ()=>{
        modal.style.display="block";
        modalBody.style.display="block";
      });

      closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalBody.style.display="none";
    });
    }
    postBoard();
  }, []);

    return (
        <div className="App">
          {/* header */}
          <header id="header">
            <div className="logo">
              <Link to="/" className="logoLink">
                JBoard ver.2
              </Link>
            </div>

            <nav className="nav">
              <ul className="gnb">
                <li className="gnbItem">
                  <Link to="Login">로그인</Link>
                </li>
                <li className="gnbItem">
                  <Link to="SignUp">회원가입</Link>
                </li>
                <li className="gnbItem">
                  <Link to="/contact">문의</Link>
                </li>
              </ul>
            </nav>

            <div className="search">
              <input type="text" className="searchBox" placeholder="검색어를 입력하세요" />
              <button className="searchBtn">검색</button>
            </div>
          </header>
    
          {/* main */}
          <main id='main' className="main">
            <div className="work w1">
              <h3>게시판 제목</h3>
              <table className="board">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>작성시간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="5" class="text-center">글을 쓰려면 하단 버튼을 눌러주세요 :&gt;</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="work pagination">
              <ul className='paginationPages'>
                <li>
                  <a href='#'>&lt;</a>
                </li>
                <li>
                  <a href='#' className='active'>1</a>
                </li>
                <li>
                  <a href='#'></a>
                </li>
                <li>
                  <a href='#'></a>
                </li>
                <li>
                  <a href='#'>&gt;</a>
                </li>
              </ul>
            </div>
            <button className='openModalBtn' id='openBtn'>글쓰기</button>
          </main>
    
          {/* footer */}
          <footer id='footer'>
            <h4>
              <Link to={"https://tuy112.github.io/"}>JStory로 바로가기</Link>
            </h4>
          </footer>
          
          {/* modal */}
          <div class="modal">
            <div className="modalBody">
                <div class="close" id='closeFn'></div>
                <h2>모달창 제목</h2>
                <p>모달창 내용 </p>
                <button className='postBtn' id='upload'>글쓰기 완료</button>
            </div>
          </div>
        </div> // end App
      );
}

export default Home;