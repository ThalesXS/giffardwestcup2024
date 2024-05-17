let audio = new Audio("srcs/song.mp3");
let isPlaying = false;

function togglePlay()
{
	if (isPlaying)
	{
		audio.pause();
	}
	else
	{
		audio.play();
	}
	isPlaying = !isPlaying;
}
/**
 * 
 * @param {*} el 
 */
function myFunction(el)
{
	if (el.checked)
	{
		togglePlay();
	}
	else
	{
		audio.load();
		isPlaying = false;
	}
}


/*

		Music Verses

*/

const overlay = document.querySelector('.overlay');
const north = document.querySelector('.northWindow');
const btnsOpenNorth = document.querySelector('.nButton');
const btnCloseNorth = document.querySelector('.closeNorth');

const openModalN = function ()
{
	north.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModalN = function ()
{
	north.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnsOpenNorth.addEventListener('click', openModalN); 
btnCloseNorth.addEventListener('click', closeModalN);
overlay.addEventListener('click', closeModalN);
document.addEventListener('keydown', function (e)
{
	if (e.key === 'Escape' && !north.classList.contains('hidden'))
	{
		closeModalN();
	}
});









const south = document.querySelector('.southWindow');
const btnsOpenSouth = document.querySelector('.sButton');
const btnCloseSouth = document.querySelector('.closeSouth');

const openModalS = function ()
{
	south.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModalS = function ()
{
	south.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnsOpenSouth.addEventListener('click', openModalS); 
btnCloseSouth.addEventListener('click', closeModalS);
overlay.addEventListener('click', closeModalS);
document.addEventListener('keydown', function (e)
{
	if (e.key === 'Escape' && !south.classList.contains('hidden'))
	{
		closeModalS();
	}
});











const west = document.querySelector('.westWindow');
const btnsOpenWest = document.querySelector('.wButton');
const btnCloseWest = document.querySelector('.closeWest');

const openModalW = function ()
{
	west.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModalW = function ()
{
	west.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnsOpenWest.addEventListener('click', openModalW); 
btnCloseWest.addEventListener('click', closeModalW);
overlay.addEventListener('click', closeModalW);
document.addEventListener('keydown', function (e)
{
	if (e.key === 'Escape' && !west.classList.contains('hidden'))
	{
		closeModalW();
	}
});















const east = document.querySelector('.eastWindow');
const btnsOpenEast = document.querySelector('.eButton');
const btnCloseEast = document.querySelector('.closeEast');

const openModalE = function ()
{
	east.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModalE = function ()
{
	east.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnsOpenEast.addEventListener('click', openModalE); 
btnCloseEast.addEventListener('click', closeModalE);
overlay.addEventListener('click', closeModalE);
document.addEventListener('keydown', function (e)
{
	if (e.key === 'Escape' && !east.classList.contains('hidden'))
	{
		closeModalE();
	}
});





