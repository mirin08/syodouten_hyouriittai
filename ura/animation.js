document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('#content');
    const backgroundVeil = document.querySelector('.background-veil');
  
    // GSAPタイムラインの作成
    const timeline = gsap.timeline();
  
    // ページの表示時にフェードインアニメーション
    timeline
      .from(content, {
        duration: 1.0,
        opacity: 0,
        ease: 'power2.in',
      })
      .to('.background-veil2, .background-veil3', {
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
