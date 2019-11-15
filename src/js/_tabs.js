$('.offer-tab-item').on('click', function() {
    const _button = $(this);
    const tabID = _button.attr('data-tab');

    $('.offer-tab-item').removeClass('tab-active-link');
    _button.addClass('tab-active-link');

    $('.offer-content').removeClass('offer-content-active');
    $('.offer-content[data-tab="' + tabID + '"]').addClass('offer-content-active');
});