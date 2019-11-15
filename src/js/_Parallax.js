import Parallax from 'parallax-js';

const parallax = () => {

    let mousesWrap = document.getElementById('mouse');
    let mousesFormWrap = document.getElementById('mouseForm');

    const parralaxModule = new Parallax(mousesWrap,{
        relativeInput: true,
        invertX: false,
        invertY: false,
        originX: 0,
        originY: 0
    });
    const parralaFormxModule = new Parallax(mousesFormWrap,{
        relativeInput: true,
        invertX: false,
        invertY: false,
        originX: 0,
        originY: 0
    });
};

export default parallax;