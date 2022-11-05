window.addEventListener("DOMContentLoaded", () => {

  // const headerButton = document.querySelectorAll('.btn');
  // const popupOverlay = document.querySelector('.overlay');
  // const popupClose = document.querySelector('.popup__close');

  // const videoBlock = document.querySelector('.video-frame');
  // const videoBtn = document.querySelector('.video-frame__image');
  
  // function bindModal(trigger, modal, close) {
  //   trigger.forEach(modalButton => {
  //     modalButton.addEventListener('click', (e) => {
  //       if(e.target) {
  //         e.preventDefault();
  //       }
    
  //       modal.style.display = "flex";
  //       document.body.style.overflow = "hidden";
  //     })
  //   })
    
  
  //   close.addEventListener('click', () => {
  //     modal.style.display = "none";
  //     document.body.style.overflow = "";
  //   })

  //   modal.addEventListener('click', (e) => {
  //     if (e.target === modal) {
  //       modal.style.display = "none";
  //       document.body.style.overflow = "";
  //     }
  //   })
  // }
  
  // bindModal(headerButton, popupOverlay, popupClose);

  // videoBtn.addEventListener('click', () => {
    
  //   if (videoBlock.classList.contains('ready')) {
  //     return
  //   }
  //   videoBlock.classList.add('ready');

  //   let videoSrc = videoBlock.dataset.src;

  //   videoBlock.insertAdjacentHTML('afterbegin', `<iframe width="770" height="440" src="${videoSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`)
  // })


  // const tabHeaderItems = document.querySelectorAll('.tab__header-item');

  // tabHeaderItems.forEach(item => {
  //   if (!item.classList.contains('tab__header-item--active')) {
  //     item.classList.add('headerTabHover')
  //   }
  // })

  // const teachersSliderDots = document.querySelectorAll('.teachers__slider-link');

  // teachersSliderDots.forEach(item => {
  //   if (!item.classList.contains('teachers__slider-link--active')) {
  //     item.classList.add('teacherDot')
  //   }
  // })

  function tabSlider(headerSelector, tabSelector, contentSelector, activeClass, prevBtn, nextBtn) {
    
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    const prevButton = document.querySelector(prevBtn);
    const nextButton = document.querySelector(nextBtn);

    function hideContent() {
      content.forEach(item => {
        item.style.display = "none";
      })
      tab.forEach(item => {
        item.classList.remove(activeClass);
      })
    }

    function showContent(i = 0) {
      content[i].style.display = "block";
      tab[i].classList.add(activeClass);
    }
    hideContent();
    showContent();

    nextButton.addEventListener('click', () => {
      let activeTabIndex = [...tab].findIndex(item => item.classList.contains('tab__header-item--active'));
      console.log(activeTabIndex)
      if (tab[activeTabIndex]) {
        hideContent();
        showContent(tab.length > activeTabIndex + 1 ? activeTabIndex + 1 : 0);
      }
    })

    prevButton.addEventListener('click', () => {
      let activeTabIndex = [...tab].findIndex(item => item.classList.contains('tab__header-item--active'));
      console.log(activeTabIndex)
      if (tab[activeTabIndex]) {
        hideContent();
        showContent(activeTabIndex > 0 ? activeTabIndex - 1 : tab.length - 1);
      }
    })

    header.addEventListener('click', (e) => {
      const target = e.target;
      if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ""))  )) {
          tab.forEach((item, i) => {
            if (target == item || target.parentNode == item) {
              hideContent();
              showContent(i);
            }
          })
        }
      })
    }
    
  tabSlider('.courses__tab-header', '.tab__header-item', '.courses__tab-body', 'tab__header-item--active', '.courses__prev-btn', '.courses__next-btn');

  // const slider = document.querySelector('.teachers__slider');
  // const items = document.querySelectorAll('.teachers__slider-item');
  // const slideDots = document.querySelectorAll('.teachers__slider-link');

  // let position = 0;

  // function activeSlide(index) {
  //   for (let dot of slideDots) {
  //     dot.classList.remove('teachers__slider-link--active')
  //   }
  //   slideDots[index].classList.add('teachers__slider-link--active');

  // }

  // slideDots.forEach((dot, index) => {
  //   dot.addEventListener('click', () => {
  //     activeSlide(index);
  //     position = 1183.17 * index;
  //     slider.style.left = -position + 'px';
  //   })
  // })

  const burgerBtn = document.querySelector('.burger-btn');
  const burgerBtnClose = document.querySelector('.burger-btn-close');

  burgerBtn.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = "block";
  })

  burgerBtnClose.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = "none";
  })


})
