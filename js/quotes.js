const quotes = [
	{
		quote: "삶이 있는 한 희망은 있다.",
		author: "키케로",
	},
	{
		quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
		author: "파울로 코엘료",
	},
	{
		quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
		author: "찰리 채플린",
	},
	{
		quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
		author: "F.스콧 핏제랄드",
	},
	{
		quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
		author: "L.론허바드",
	},
	{
		quote: "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다.",
		author: "마더 테레사",
	},
	{
		quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
		author: "제임스 딘",
	},
	{
		quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
		author: "헬렌켈러",
	},
	{
		quote: " 1퍼센트의 가능성, 그것이 나의 길이다.",
		author: "나폴레옹",
	},
	{
		quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
		author: "괴테",
	},
	{
		quote: "우리는 두려움의 홍수에 버티기 위해서 끊임없이 용기의 둑을 쌓아야 한다.",
		author: "마틴 루터 킹",
	},
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;