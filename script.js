let audio = new Audio("srcs/Test.mp3");
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

const north = document.querySelector('.northWindow');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelector('.nButton');

const openModal = function ()
{
	north.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function ()
{
	north.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnsOpenModal[i].addEventListener('click', openModal); 
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e)
{
	if (e.key === 'Escape' && !north.classList.contains('hidden'))
	{
		closeModal();
	}
});
