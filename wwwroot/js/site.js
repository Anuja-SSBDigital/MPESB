// ESB Website Custom JavaScript

$(document).ready(function () {
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

    // Add active class to current navigation item
    var currentPath = window.location.pathname;
    $('.main-nav ul li a').each(function () {
        var href = $(this).attr('href');
        if (currentPath.indexOf(href) !== -1 && href !== '/') {
            $(this).parent().addClass('active');
        }
    });

    // Sidebar menu accordion effect (optional)
    $('.sidebar-menu li a').on('click', function (e) {
        var $this = $(this);
        var $parent = $this.parent();
        
        // Add visual feedback
        $parent.addClass('clicked');
        setTimeout(function () {
            $parent.removeClass('clicked');
        }, 300);
    });

    // Latest updates expand/collapse
    $('.section-title i').on('click', function () {
        var $updatesList = $(this).closest('.latest-updates').find('.updates-list');
        var $icon = $(this);
        
        if ($updatesList.is(':visible')) {
            $updatesList.slideUp(300);
            $icon.removeClass('fa-minus-circle').addClass('fa-plus-circle');
        } else {
            $updatesList.slideDown(300);
            $icon.removeClass('fa-plus-circle').addClass('fa-minus-circle');
        }
    });

    // Print functionality for admit cards and results
    if ($('.print-button').length) {
        $('.print-button').on('click', function () {
            window.print();
        });
    }

    // Form validation enhancement
    $('form').on('submit', function (e) {
        var isValid = true;
        
        $(this).find('input[required], select[required], textarea[required]').each(function () {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('error-field');
            } else {
                $(this).removeClass('error-field');
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    });

    // Mobile menu toggle
    $('.mobile-menu-toggle').on('click', function () {
        $('.main-nav ul').slideToggle(300);
    });

    // Sticky navigation on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.main-nav').addClass('sticky');
        } else {
            $('.main-nav').removeClass('sticky');
        }
    });

    // Marquee pause on hover
    $('marquee').hover(
        function () {
            $(this).attr('scrollamount', 0);
        },
        function () {
            $(this).attr('scrollamount', 6);
        }
    );

    // File upload preview
    $('input[type="file"]').on('change', function () {
        var fileName = $(this).val().split('\\').pop();
        $(this).next('.file-name').text(fileName);
    });

    // Tooltip initialization (if using Bootstrap tooltips)
    if (typeof $().tooltip === 'function') {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // Date picker initialization (if using date picker)
    if (typeof $().datepicker === 'function') {
        $('.date-picker').datepicker({
            dateFormat: 'dd/mm/yy',
            changeMonth: true,
            changeYear: true,
            yearRange: '-100:+0'
        });
    }

    // Search functionality for tables
    $('#searchInput').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('#dataTable tbody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    // Back to top button
    if ($('.back-to-top').length) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });

        $('.back-to-top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }

    // Download link tracking
    $('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".xlsx"]').on('click', function () {
        var fileName = $(this).attr('href').split('/').pop();
        console.log('Downloading: ' + fileName);
        // You can add analytics tracking here
    });

    // Confirmation dialogs for important actions
    $('.confirm-action').on('click', function (e) {
        var message = $(this).data('confirm-message') || 'Are you sure you want to proceed?';
        if (!confirm(message)) {
            e.preventDefault();
        }
    });

    // Auto-hide alerts after 5 seconds
    if ($('.alert-auto-hide').length) {
        setTimeout(function () {
            $('.alert-auto-hide').fadeOut(500);
        }, 5000);
    }

    // Character counter for textareas
    $('textarea[maxlength]').each(function () {
        var maxLength = $(this).attr('maxlength');
        var currentLength = $(this).val().length;
        var remaining = maxLength - currentLength;
        
        $(this).after('<div class="char-counter"><span class="current">' + currentLength + '</span> / <span class="max">' + maxLength + '</span></div>');
        
        $(this).on('keyup', function () {
            var current = $(this).val().length;
            var remain = maxLength - current;
            $(this).next('.char-counter').find('.current').text(current);
        });
    });

    // Prevent double form submission
    $('form').on('submit', function () {
        $(this).find('button[type="submit"]').prop('disabled', true);
    });

    // Initialize any custom components
    initializeCustomComponents();
});

// Custom component initialization function
function initializeCustomComponents() {
    // Add any custom component initialization here
    console.log('Custom components initialized');
}

// Utility functions
function showLoader() {
    if ($('#loader').length === 0) {
        $('body').append('<div id="loader" class="loader-overlay"><div class="loader-spinner"></div></div>');
    }
    $('#loader').fadeIn();
}

function hideLoader() {
    $('#loader').fadeOut(function () {
        $(this).remove();
    });
}

function showNotification(message, type) {
    type = type || 'info';
    var notification = $('<div class="notification notification-' + type + '">' + message + '</div>');
    $('body').append(notification);
    notification.fadeIn();
    
    setTimeout(function () {
        notification.fadeOut(function () {
            $(this).remove();
        });
    }, 3000);
}

// Export functions for global use
window.ESB = {
    showLoader: showLoader,
    hideLoader: hideLoader,
    showNotification: showNotification
};
