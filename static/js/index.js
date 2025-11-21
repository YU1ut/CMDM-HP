window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // Utility to attach a time-synced caption rotation to a caption element and its row of videos
    var attachTimedCaption = function(captionElementId, captionsTimeline) {
        var el = document.getElementById(captionElementId);
        if (!el) return;
        var container = el.closest('.container');
        if (!container) return;
        var videos = container.querySelectorAll('video');
        if (!videos || videos.length === 0) return;
        var video = videos[0]; // drive timeline from the first video in the row

        var lastCaptionIndex = -1;
        var lastTime = 0;
        var updateCaptionByTime = function() {
            var t = video.currentTime || 0;
            if (t + 0.05 < lastTime) {
                lastCaptionIndex = -1;
            }
            var idx = Math.floor(t / 3) % captionsTimeline.length;
            if (idx !== lastCaptionIndex) {
                el.innerHTML = captionsTimeline[idx] || "";
                lastCaptionIndex = idx;
            }
            lastTime = t;
        };

        var initOnce = function() {
            updateCaptionByTime();
            video.removeEventListener('loadedmetadata', initOnce);
            video.removeEventListener('playing', initOnce);
        };
        video.addEventListener('loadedmetadata', initOnce);
        video.addEventListener('playing', initOnce);
        video.addEventListener('timeupdate', updateCaptionByTime);
    };

    // First row captions (maps to ./videos/flow_1.mp4, mardm_1.mp4, ours_1.mp4 timeline)
    attachTimedCaption('long-horizon-rotating-caption', [
        "1: A person is <span style='color:#06C755'>walking forward</span>.",
        "2: A person <span style='color:#06C755'>sits down on a chair</span>.",
        "3: A person <span style='color:#06C755'>turns around</span> and <span style='color:#DF1817'>walks backward</span>.",
        "4: A person <span style='color:#06C755'>is picking up his toolbox</span>.",
        "5: A person <span style='color:#06C755'>does a jumping jack motion</span>.",
        "6: The man <span style='color:#06C755'>is lifting both arms</span>.",
        "7: A person <span style='color:#06C755'>slowly jumped forward</span>."
    ]);

    // Second row captions (your provided text_list) for the next videos row
    attachTimedCaption('long-horizon-rotating-caption-2', [
        "1: A person <span style='color:#06C755'>is jumping on one foot</span>.",
        "2: A person <span style='color:#06C755'>walks like a zombie</span>.",
        "3: A person <span style='color:#06C755'>pretend to hold a ball in the right hand</span>, <span style='color:#DF1817'>toss the ball upward</span>.",
        "4: A person <span style='color:#06C755'>walks while holding onto a handrail</span>.",
        "5: A person <span style='color:#06C755'>kicks something with the left foot</span>.",
        "6: A man <span style='color:#06C755'>lifts heavy object </span> and <span style='color:#DF1817'> places it on a surface</span>.",
        "7: A person <span style='color:#06C755'>runs on the spot</span>.",
    ]);

    // Third row captions
    attachTimedCaption('long-horizon-rotating-caption-3', [
        "1: The person <span style='color:#06C755'>calmly steps back</span>.",
        "2: The person <span style='color:#06C755'>is has both hands on his legs</span>.",
        "3: The person <span style='color:#06C755'>walks happily dancing</span>.",
        "4: The person <span style='color:#06C755'>waves his left hands</span>.",
        "5: The person <span style='color:#06C755'>puts both hands behind his back</span>.",
        "6: The person <span style='color:#06C755'>is jumping with a rope</span>.",
        "7: The person <span style='color:#06C755'>is impatiently running out into the open</span>.",
    ]);

    // Fourth row captions
    attachTimedCaption('long-horizon-rotating-caption-4', [
        "1: The person <span style='color:#06C755'>walks around while looking at a phone</span>.",
        "2: A person <span style='color:#06C755'>stretches both arms upward</span>.",
        "3: The man <span style='color:#06C755'>looks around curiously</span>.",
        "4: A person <span style='color:#06C755'>steps sideways carefully</span>.",
        "5: A person <span style='color:#06C755'>claps their hands</span>.",
        "6: A person <span style='color:#06C755'>balances on one leg for a few seconds</span>.",
        "7: A person <span style='color:#06C755'>waves both hands in excitement</span>.",
    ]);

    // Fifth row captions
    attachTimedCaption('long-horizon-rotating-caption-5', [
        "1: A person <span style='color:#06C755'>stretches their right leg forward</span>.",
        "2: A person <span style='color:#06C755'>is walking on a treadmill</span>.",
        "3: A person <span style='color:#06C755'>waves to someone on the left</span>.",
        "4: A person <span style='color:#06C755'>sits down and crosses their legs</span>.",
        "5: A person <span style='color:#06C755'>raises one hand to ask a question</span>.",
        "6: A man <span style='color:#06C755'>performs a few squats</span>.",
        "7: A person <span style='color:#06C755'>slowly walks backward</span>.",
    ]);

    // SnapMoGen Long-Horizon captions - First row
    attachTimedCaption('snap-long-horizon-caption-1', [
        "1: A person <span style='color:#06C755'>slowly walks into the room</span> and <span style='color:#DF1817'>looks around</span>.",
        "2: A person <span style='color:#06C755'>leans forward</span> to <span style='color:#DF1817'>inspect something on the floor</span>.",
        "3: A person <span style='color:#06C755'>kneels down</span> and <span style='color:#DF1817'>checks under a table</span>.",
        "4: A person <span style='color:#06C755'>stands up</span> and <span style='color:#DF1817'>stretches their back</span>.",
        "5: A person <span style='color:#06C755'>walks toward a window</span> and <span style='color:#DF1817'>peeks outside</span>.",
        "6: A person <span style='color:#06C755'>turns around</span>.",
        "7: A person <span style='color:#06C755'>runs straight forward</span>.",
    ]);

    // SnapMoGen Long-Horizon captions - Second row
    attachTimedCaption('snap-long-horizon-caption-2', [
        "1: A person <span style='color:#06C755'>takes a step back</span> and <span style='color:#DF1817'>raises both hands in preparation</span>.",
        "2: A person <span style='color:#06C755'>performs a slow squat</span> and <span style='color:#DF1817'>stands up again</span>.",
        "3: A person <span style='color:#06C755'>lifts their knees alternately</span> <span style='color:#DF1817'>in a marching motion</span>.",
        "4: A person <span style='color:#06C755'>raises both arms sideways</span> while <span style='color:#DF1817'>maintaining posture</span>.",
        "5: A person <span style='color:#06C755'>bends forward to touch their toes</span> and <span style='color:#DF1817'>straightens up</span>.",
        "6: A person <span style='color:#06C755'>takes a short run forward</span> and <span style='color:#DF1817'>stops abruptly</span>.",
        "7: A person <span style='color:#06C755'>jumps vertically</span> with <span style='color:#DF1817'>both feet leaving the ground</span>.",
    ]);

    // SnapMoGen Long-Horizon captions - Third row
    attachTimedCaption('snap-long-horizon-caption-3', [
        "1: A person <span style='color:#06C755'>places both hands on their cheeks</span> <span style='color:#DF1817'>in surprise</span>.",
        "2: A person <span style='color:#06C755'>lifts a hand</span> and <span style='color:#DF1817'>makes a gentle stopping gesture</span>.",
        "3: A person <span style='color:#06C755'>lifts both hands in excitement</span> and <span style='color:#DF1817'>waves them</span>.",
        "4: A person <span style='color:#06C755'>crosses their arms</span> and <span style='color:#DF1817'>stands still</span>.",
        "5: A person <span style='color:#06C755'>twists their body to the right</span> and <span style='color:#DF1817'>looks to the right</span>.",
        "6: A person <span style='color:#06C755'>claps their hands</span> <span style='color:#DF1817'>enthusiastically</span>.",
        "7: A person <span style='color:#06C755'>ends by bowing slightly</span> with <span style='color:#DF1817'>palms together</span>.",
    ]);

    // Sidebar navigation functionality
    var sidebar = document.getElementById('sidebar');
    var sidebarItems = document.querySelectorAll('.sidebar-item');
    var sections = ['long-horizon-humanml3d', 'text-to-motion-humanml3d', 'long-horizon-snapmogen', 'text-to-motion-snapmogen'];
    var body = document.body;
    
    // Update active sidebar item on scroll
    function updateActiveSidebarItem() {
        var scrollPos = window.scrollY + 150; // Offset for better UX
        
        sections.forEach(function(sectionId, index) {
            var section = document.getElementById(sectionId);
            if (section) {
                var sectionTop = section.offsetTop;
                var sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    sidebarItems.forEach(function(item) {
                        item.classList.remove('active');
                    });
                    if (sidebarItems[index]) {
                        sidebarItems[index].classList.add('active');
                    }
                }
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveSidebarItem);
    updateActiveSidebarItem(); // Initial check
    
    // Smooth scroll for sidebar links
    sidebarItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                var offsetTop = targetSection.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth < 1024) {
                    sidebar.classList.remove('mobile-open');
                }
            }
        });
    });
    
    // Sidebar toggle button (mobile & desktop)
    var sidebarToggleButton = document.createElement('button');
    sidebarToggleButton.className = 'sidebar-toggle';
    sidebarToggleButton.innerHTML = '✕';
    sidebarToggleButton.setAttribute('aria-label', 'Hide navigation');
    sidebarToggleButton.setAttribute('aria-expanded', 'true');
    document.body.appendChild(sidebarToggleButton);

    function updateSidebarToggleState() {
        var isMobile = window.innerWidth < 1024;
        if (!isMobile) {
            sidebar.classList.remove('mobile-open');
        }
        var isHidden = isMobile ? !sidebar.classList.contains('mobile-open') : body.classList.contains('sidebar-hidden');
        sidebarToggleButton.innerHTML = isHidden ? '☰' : '✕';
        sidebarToggleButton.setAttribute('aria-label', isHidden ? 'Show navigation' : 'Hide navigation');
        sidebarToggleButton.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
    }

    sidebarToggleButton.addEventListener('click', function(event) {
        event.stopPropagation();
        if (window.innerWidth < 1024) {
            sidebar.classList.toggle('mobile-open');
        } else {
            body.classList.toggle('sidebar-hidden');
        }
        updateSidebarToggleState();
    });

    window.addEventListener('resize', updateSidebarToggleState);

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 1024) {
            if (!sidebar.contains(e.target) && !sidebarToggleButton.contains(e.target)) {
                sidebar.classList.remove('mobile-open');
                updateSidebarToggleState();
            }
        }
    });

    updateSidebarToggleState();
})
