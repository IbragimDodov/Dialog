window.addEventListener("DOMContentLoaded", () => {

  const headerButton = document.querySelector('.header__btn');
  const popupOverlay = document.querySelector('.overlay');
  const popupClose = document.querySelector('.popup__close');
  const formBtn = document.querySelector('.form__btn');

  const videoBlock = document.querySelector('.video-frame');
  const videoBtn = document.querySelector('.video-frame__image');
  
  function bindModal(trigger, modal, close) {
    trigger.addEventListener('click', (e) => {
      if(e.target) {
        e.preventDefault();
      }
  
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    })
  
    close.addEventListener('click', () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    })

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    })
  }
  
  bindModal(headerButton, popupOverlay, popupClose);

  videoBtn.addEventListener('click', () => {
    
    if (videoBlock.classList.contains('ready')) {
      return
    }
    videoBlock.classList.add('ready');

    let videoSrc = videoBlock.dataset.src;

    videoBlock.insertAdjacentHTML('afterbegin', `<iframe width="770" height="440" src="${videoSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`)
  })


  const tabHeaderItems = document.querySelectorAll('.tab__header-item');

  tabHeaderItems.forEach(item => {
    if (!item.classList.contains('tab__header-item--active')) {
      item.classList.add('headerTabHover')
    }
  })

  const teachersSliderDots = document.querySelectorAll('.teachers__slider-link');

  teachersSliderDots.forEach(item => {
    if (!item.classList.contains('teachers__slider-link--active')) {
      item.classList.add('teacherDot')
    }
  })

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

    // nextButton.addEventListener('click', () => {
    //   tab.forEach((item, i) => {
    //     if(item.classList.contains('tab__header-item--active')) {
    //       console.log(item.nextElementSibling);
    //       item.classList.remove('tab__header-item--active')
    //       item.nextElementSibling.classList.add('tab__header-item--active')
    //       return;
    //     }
    //   })
    // })

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

  

})
