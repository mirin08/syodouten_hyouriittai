document.addEventListener('DOMContentLoaded', () => {
    const timeline = gsap.timeline();

    // オープニング画像 (toki.png) の表示からフェードアウト
    timeline
        .to('#opening-animation', {
            duration: 1.5,
            rotationY: 180, // 全体が180度反転
            ease: 'power2.out',
            delay: 0.5, // 少し遅れて開始
        })
        .to('.opening-image', {
            duration: 2,
            opacity: 0,
            ease: 'power2.out',
            delay: 1, // 反転後少し表示
        })
        .to('#opening-animation', {
            duration: 1,
            opacity: 0,
            ease: 'power2.out',
            onComplete: () => {
                document.getElementById('opening-animation').style.display = 'none';
            },
        })
        // コンテンツの背景を表示 (ベールを降らせる)
        .to('.background-veil', {
            duration: 1.5,
            top: 0, // ベールが画面の上から降りてくる
            opacity: 1, // ベールを表示
            ease: 'power1.inOut',
        })
        // コンテンツ要素 (ヘッダー、メイン、フッター) を順番に表示
        .from('header, .gallery , footer', {
            duration: 1.5,
            opacity: 0,
            y: 50,
            ease: 'power2.out',
            stagger: 0.3, // ヘッダー、メイン、フッターの順でアニメーション
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.open_btn');
    const popupOverlay = document.querySelector('.popup_overlay');
    const closeBtn = document.querySelector('.close_btn');

    // ボタンが正しく取得できているか確認
    console.log(openBtn, popupOverlay, closeBtn);

    // ポップアップを開く
    openBtn.addEventListener('click', () => {
        popupOverlay.classList.add('active'); // activeクラスで表示
    });

    // ポップアップを閉じる
    closeBtn.addEventListener('click', () => {
        popupOverlay.classList.remove('active'); // activeクラスを削除して非表示
    });

    // ポップアップの背景をクリックしたら閉じる
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('active');
        }
    });
});

// ページ遷移時のアニメーション
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('#content');
    const backgroundVeil = document.querySelector('.background-veil');
  
    // GSAPタイムラインの作成
    const timeline = gsap.timeline();
  
    // ページの表示時にフェードインアニメーション
    timeline
      .from(content, {
        opacity: 0,
        ease: 'power2.in',
      })
      .to('.background-veil', {
        duration: 1.5,
        top: 0, // ベールが画面の上から降りてくる
        opacity: 1, // ベールを表示
        ease: 'power1.inOut',
    })
  
    // ページ遷移リンクの設定
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // デフォルトのリンク動作を防止
        const target = e.currentTarget.href;
  
        // コンテンツのフェードアウトアニメーション
        gsap.to(content, {
          duration: 0.5,
          opacity: 0,
          ease: 'power2.out',
          onComplete: () => {
            window.location.href = target; // ページ遷移
          },
        });
      });
    });
  });
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
});