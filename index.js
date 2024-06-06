function cursorEffect() {
    var page1 = document.querySelector("#page1");
    var cursor = document.querySelector("#cursor");

    page1.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            duration:1.5,
            ease: "back.out(1.7)",
            
        });
    });

    page1.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            duration: 0.3, // Adjust the duration for the scale effect
            ease: "power2.out"
        });
    });

    page1.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
            duration: 0.3, // Adjust the duration for the scale effect
            ease: "power2.out"
        });
    });
}

function loader(){
    document.addEventListener("DOMContentLoaded", function() {
        const preloader = document.getElementById('preloader');
        const mainContent = document.getElementById('main');
        const preloaderVideo = document.getElementById('preloader-video');
    
        preloaderVideo.addEventListener('ended', function() {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                mainContent.style.display = 'block';
            }, 1000); // 1000ms corresponds to the transition duration
        });
    });
        
}


    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
      }
      function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
      }
cursorEffect();
loader();


