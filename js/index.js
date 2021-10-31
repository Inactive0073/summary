$(document).ready(function () {


    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.slider__container');
    const track = $('.slider__track');
    const btnPrev = $('.btn__prev');
    const btnNext = $('.btn__next');
    const items = $('.slider__item');
    const itemsCount = items.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnNext.click(function () {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    btnPrev.click(function () {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled',
            position <= -(itemsCount - slidesToShow) * itemWidth
        );
    };

    checkBtns();

    $('.menu__burger').click(function() {
        $('.menu__burger,.menu__list-items').toggleClass('active');
    })

    

});


$(function () {
    $('.title__link').on('click', function (e) {
        e.preventDefault();

        $('.title__link').removeClass('title__link--active');
        $(this).addClass('title__link--active');
    });

    $('.lists__block').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('.menu__list-item--active');

    });
});

const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
);
document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tabs-triggers__item').forEach(
            (child) => child.classList.remove('tabs-triggers__item--active')
        );
        document.querySelectorAll('.tabs-content__item').forEach(
            (child) => child.classList.remove('tabs-content__item--active')
        );

        item.classList.add('tabs-triggers__item--active');
        document.getElementById(id).classList.add('tabs-content__item--active');
    })
);
document.querySelector('.tabs-triggers__item').click();

