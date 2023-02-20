import './App.scss';
import CardList from './components/CardList/CardList';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import Landing from './components/Landing/Landing';
import Test from './components/Test';

const products = [
	{
		createdAt: '2031-08-14T23:29:05.432Z',
		name: 'name 7',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'cow',
		price: 53,
		rating: 91,
		isFavorite: true,
		id: '7',
	},
	{
		0: {
			createdAt: '2031-08-14T23:29:05.432Z',
			name: 'name 7',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'cow',
			price: 53,
			rating: 91,
			isFavorite: true,
			id: '7',
		},
		1: {
			createdAt: '2081-09-28T03:25:33.407Z',
			name: 'name 9',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'cow',
			price: 91,
			rating: 12,
			isFavorite: true,
			id: '9',
		},
		2: {
			createdAt: '2046-11-05T22:41:53.767Z',
			name: 'name 10',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'fish',
			price: 73,
			rating: 22,
			isFavorite: false,
			id: '10',
		},
		3: {
			createdAt: '1996-05-06T07:21:45.215Z',
			name: 'name 11',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'crocodilia',
			price: 10,
			rating: 72,
			isFavorite: false,
			id: '11',
		},
		4: {
			createdAt: '2096-07-12T13:04:06.398Z',
			name: 'name 12',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'horse',
			price: 48,
			rating: 77,
			isFavorite: false,
			id: '12',
		},
		5: {
			createdAt: '1996-02-18T10:07:04.780Z',
			name: 'name 13',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'crocodilia',
			price: 16,
			rating: 56,
			isFavorite: false,
			id: '13',
		},
		6: {
			createdAt: '1990-04-19T16:05:57.984Z',
			name: 'name 14',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'crocodilia',
			price: 7,
			rating: 49,
			isFavorite: false,
			id: '14',
		},
		7: {
			createdAt: '2048-10-18T20:32:26.525Z',
			name: 'name 15',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'bird',
			price: 35,
			rating: 15,
			isFavorite: false,
			id: '15',
		},
		8: {
			createdAt: '2068-12-14T11:41:28.569Z',
			name: 'name 16',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'insect',
			price: 28,
			rating: 60,
			isFavorite: false,
			id: '16',
		},
		9: {
			createdAt: '2046-11-22T00:16:11.074Z',
			name: 'name 17',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'rabbit',
			price: 15,
			rating: 97,
			isFavorite: false,
			id: '17',
		},
		10: {
			createdAt: '2044-11-06T11:13:28.369Z',
			name: 'name 18',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'bear',
			price: 90,
			rating: 79,
			isFavorite: false,
			id: '18',
		},
		11: {
			createdAt: '2039-02-02T00:57:04.660Z',
			name: 'name 19',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'rabbit',
			price: 53,
			rating: 66,
			isFavorite: true,
			id: '19',
		},
		12: {
			createdAt: '2098-05-11T22:30:36.433Z',
			name: 'name 20',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'rabbit',
			price: 71,
			rating: 3,
			isFavorite: false,
			id: '20',
		},
		13: {
			createdAt: '2056-12-10T05:21:43.450Z',
			name: 'name 21',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'insect',
			price: 41,
			rating: 18,
			isFavorite: false,
			id: '21',
		},
		14: {
			createdAt: '2005-12-15T13:39:25.883Z',
			name: 'name 22',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'cow',
			price: 10,
			rating: 32,
			isFavorite: false,
			id: '22',
		},
		15: {
			createdAt: '2015-05-17T09:16:13.822Z',
			name: 'name 23',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'horse',
			price: 65,
			rating: 11,
			isFavorite: false,
			id: '23',
		},
		16: {
			createdAt: '2051-09-04T14:00:10.075Z',
			name: 'name 24',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'cow',
			price: 85,
			rating: 91,
			isFavorite: false,
			id: '24',
		},
		17: {
			createdAt: '2054-02-17T17:12:29.147Z',
			name: 'name 25',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'lion',
			price: 2,
			rating: 61,
			isFavorite: false,
			id: '25',
		},
		18: {
			createdAt: '2027-11-26T22:59:38.284Z',
			name: 'name 26',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'crocodilia',
			price: 60,
			rating: 40,
			isFavorite: false,
			id: '26',
		},
		19: {
			createdAt: '2070-01-28T14:30:33.080Z',
			name: 'name 27',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'insect',
			price: 62,
			rating: 60,
			isFavorite: false,
			id: '27',
		},
		20: {
			createdAt: '1992-12-03T05:29:14.968Z',
			name: 'name 28',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'rabbit',
			price: 20,
			rating: 85,
			isFavorite: false,
			id: '28',
		},
		21: {
			createdAt: '2097-04-07T04:11:28.471Z',
			name: 'name 29',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'cetacean',
			price: 54,
			rating: 92,
			isFavorite: false,
			id: '29',
		},
		22: {
			createdAt: '2078-12-07T14:53:01.569Z',
			name: 'name 30',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'crocodilia',
			price: 3,
			rating: 29,
			isFavorite: false,
			id: '30',
		},
		23: {
			createdAt: '2093-07-15T03:45:42.553Z',
			name: 'name 31',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'snake',
			price: 20,
			rating: 36,
			isFavorite: false,
			id: '31',
		},
		24: {
			createdAt: '2080-01-25T04:08:03.867Z',
			name: 'name 32',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'cow',
			price: 61,
			rating: 78,
			isFavorite: false,
			id: '32',
		},
		25: {
			createdAt: '2009-05-12T02:12:28.778Z',
			name: 'name 33',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'bird',
			price: 33,
			rating: 2,
			isFavorite: false,
			id: '33',
		},
		26: {
			createdAt: '1997-07-09T02:47:58.775Z',
			name: 'name 34',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'snake',
			price: 27,
			rating: 53,
			isFavorite: false,
			id: '34',
		},
		27: {
			createdAt: '2023-03-02T13:50:40.405Z',
			name: 'name 35',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'insect',
			price: 6,
			rating: 52,
			isFavorite: false,
			id: '35',
		},
		28: {
			createdAt: '1990-11-20T06:03:11.494Z',
			name: 'name 36',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'cow',
			price: 64,
			rating: 76,
			isFavorite: false,
			id: '36',
		},
		29: {
			createdAt: '2028-03-04T15:51:14.891Z',
			name: 'name 37',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'cetacean',
			price: 67,
			rating: 13,
			isFavorite: false,
			id: '37',
		},
		30: {
			createdAt: '2008-06-01T14:48:10.081Z',
			name: 'name 38',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'insect',
			price: 37,
			rating: 46,
			isFavorite: false,
			id: '38',
		},
		31: {
			createdAt: '2036-08-04T23:56:46.199Z',
			name: 'name 39',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'bird',
			price: 42,
			rating: 85,
			isFavorite: false,
			id: '39',
		},
		32: {
			createdAt: '2012-09-01T00:02:25.414Z',
			name: 'name 40',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'horse',
			price: 61,
			rating: 72,
			isFavorite: false,
			id: '40',
		},
		33: {
			createdAt: '2010-10-01T19:19:51.623Z',
			name: 'name 41',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'dog',
			price: 74,
			rating: 94,
			isFavorite: false,
			id: '41',
		},
		34: {
			createdAt: '2055-01-24T09:13:44.576Z',
			name: 'name 42',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'crocodilia',
			price: 23,
			rating: 19,
			isFavorite: false,
			id: '42',
		},
		35: {
			createdAt: '2010-02-23T07:09:18.328Z',
			name: 'name 43',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'insect',
			price: 47,
			rating: 88,
			isFavorite: false,
			id: '43',
		},
		36: {
			createdAt: '2053-06-23T17:00:37.600Z',
			name: 'name 44',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'bear',
			price: 91,
			rating: 28,
			isFavorite: false,
			id: '44',
		},
		37: {
			createdAt: '2039-03-20T16:35:00.715Z',
			name: 'name 45',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'insect',
			price: 33,
			rating: 98,
			isFavorite: false,
			id: '45',
		},
		38: {
			createdAt: '2010-01-24T04:22:46.542Z',
			name: 'name 46',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'dog',
			price: 89,
			rating: 100,
			isFavorite: false,
			id: '46',
		},
		39: {
			createdAt: '2024-11-14T16:06:14.985Z',
			name: 'name 47',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'bear',
			price: 19,
			rating: 82,
			isFavorite: false,
			id: '47',
		},
		40: {
			createdAt: '1993-07-14T08:33:33.647Z',
			name: 'name 48',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'cat',
			price: 58,
			rating: 18,
			isFavorite: false,
			id: '48',
		},
		41: {
			createdAt: '2062-02-03T01:05:38.774Z',
			name: 'name 49',
			image: 'https://loremflickr.com/640/480/cats',
			category: 'rabbit',
			price: 86,
			rating: 64,
			isFavorite: false,
			id: '49',
		},
		createdAt: '2081-09-28T03:25:33.407Z',
		name: 'name 9',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'cow',
		price: 91,
		rating: 12,
		isFavorite: true,
		id: '9',
	},
	{
		createdAt: '2046-11-05T22:41:53.767Z',
		name: 'name 10',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'fish',
		price: 73,
		rating: 22,
		isFavorite: true,
		id: '10',
	},
	{
		createdAt: '1996-05-06T07:21:45.215Z',
		name: 'name 11',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'crocodilia',
		price: 10,
		rating: 72,
		isFavorite: false,
		id: '11',
	},
	{
		createdAt: '2096-07-12T13:04:06.398Z',
		name: 'name 12',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'horse',
		price: 48,
		rating: 77,
		isFavorite: false,
		id: '12',
	},
	{
		createdAt: '1996-02-18T10:07:04.780Z',
		name: 'name 13',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'crocodilia',
		price: 16,
		rating: 56,
		isFavorite: false,
		id: '13',
	},
	{
		createdAt: '1990-04-19T16:05:57.984Z',
		name: 'name 14',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'crocodilia',
		price: 7,
		rating: 49,
		isFavorite: false,
		id: '14',
	},
	{
		createdAt: '2048-10-18T20:32:26.525Z',
		name: 'name 15',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'bird',
		price: 35,
		rating: 15,
		isFavorite: false,
		id: '15',
	},
	{
		createdAt: '2068-12-14T11:41:28.569Z',
		name: 'name 16',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'insect',
		price: 28,
		rating: 60,
		isFavorite: false,
		id: '16',
	},
	{
		createdAt: '2046-11-22T00:16:11.074Z',
		name: 'name 17',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'rabbit',
		price: 15,
		rating: 97,
		isFavorite: false,
		id: '17',
	},
	{
		createdAt: '2044-11-06T11:13:28.369Z',
		name: 'name 18',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'bear',
		price: 90,
		rating: 79,
		isFavorite: false,
		id: '18',
	},
	{
		createdAt: '2039-02-02T00:57:04.660Z',
		name: 'name 19',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'rabbit',
		price: 53,
		rating: 66,
		isFavorite: false,
		id: '19',
	},
	{
		createdAt: '2098-05-11T22:30:36.433Z',
		name: 'name 20',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'rabbit',
		price: 71,
		rating: 3,
		isFavorite: false,
		id: '20',
	},
	{
		createdAt: '2056-12-10T05:21:43.450Z',
		name: 'name 21',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'insect',
		price: 41,
		rating: 18,
		isFavorite: false,
		id: '21',
	},
	{
		createdAt: '2005-12-15T13:39:25.883Z',
		name: 'name 22',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'cow',
		price: 10,
		rating: 32,
		isFavorite: false,
		id: '22',
	},
	{
		createdAt: '2015-05-17T09:16:13.822Z',
		name: 'name 23',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'horse',
		price: 65,
		rating: 11,
		isFavorite: false,
		id: '23',
	},
	{
		createdAt: '2051-09-04T14:00:10.075Z',
		name: 'name 24',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'cow',
		price: 85,
		rating: 91,
		isFavorite: false,
		id: '24',
	},
	{
		createdAt: '2054-02-17T17:12:29.147Z',
		name: 'name 25',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'lion',
		price: 2,
		rating: 61,
		isFavorite: false,
		id: '25',
	},
	{
		createdAt: '2027-11-26T22:59:38.284Z',
		name: 'name 26',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'crocodilia',
		price: 60,
		rating: 40,
		isFavorite: false,
		id: '26',
	},
	{
		createdAt: '2070-01-28T14:30:33.080Z',
		name: 'name 27',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'insect',
		price: 62,
		rating: 60,
		isFavorite: false,
		id: '27',
	},
	{
		createdAt: '1992-12-03T05:29:14.968Z',
		name: 'name 28',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'rabbit',
		price: 20,
		rating: 85,
		isFavorite: false,
		id: '28',
	},
	{
		createdAt: '2097-04-07T04:11:28.471Z',
		name: 'name 29',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'cetacean',
		price: 54,
		rating: 92,
		isFavorite: false,
		id: '29',
	},
	{
		createdAt: '2078-12-07T14:53:01.569Z',
		name: 'name 30',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'crocodilia',
		price: 3,
		rating: 29,
		isFavorite: false,
		id: '30',
	},
	{
		createdAt: '2093-07-15T03:45:42.553Z',
		name: 'name 31',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'snake',
		price: 20,
		rating: 36,
		isFavorite: false,
		id: '31',
	},
	{
		createdAt: '2080-01-25T04:08:03.867Z',
		name: 'name 32',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'cow',
		price: 61,
		rating: 78,
		isFavorite: false,
		id: '32',
	},
	{
		createdAt: '2009-05-12T02:12:28.778Z',
		name: 'name 33',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'bird',
		price: 33,
		rating: 2,
		isFavorite: false,
		id: '33',
	},
	{
		createdAt: '1997-07-09T02:47:58.775Z',
		name: 'name 34',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'snake',
		price: 27,
		rating: 53,
		isFavorite: false,
		id: '34',
	},
	{
		createdAt: '2023-03-02T13:50:40.405Z',
		name: 'name 35',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'insect',
		price: 6,
		rating: 52,
		isFavorite: false,
		id: '35',
	},
	{
		createdAt: '1990-11-20T06:03:11.494Z',
		name: 'name 36',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'cow',
		price: 64,
		rating: 76,
		isFavorite: false,
		id: '36',
	},
	{
		createdAt: '2028-03-04T15:51:14.891Z',
		name: 'name 37',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'cetacean',
		price: 67,
		rating: 13,
		isFavorite: false,
		id: '37',
	},
	{
		createdAt: '2008-06-01T14:48:10.081Z',
		name: 'name 38',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'insect',
		price: 37,
		rating: 46,
		isFavorite: false,
		id: '38',
	},
	{
		createdAt: '2036-08-04T23:56:46.199Z',
		name: 'name 39',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'bird',
		price: 42,
		rating: 85,
		isFavorite: false,
		id: '39',
	},
	{
		createdAt: '2012-09-01T00:02:25.414Z',
		name: 'name 40',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'horse',
		price: 61,
		rating: 72,
		isFavorite: false,
		id: '40',
	},
	{
		createdAt: '2010-10-01T19:19:51.623Z',
		name: 'name 41',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'dog',
		price: 74,
		rating: 94,
		isFavorite: false,
		id: '41',
	},
	{
		createdAt: '2055-01-24T09:13:44.576Z',
		name: 'name 42',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'crocodilia',
		price: 23,
		rating: 19,
		isFavorite: false,
		id: '42',
	},
	{
		createdAt: '2010-02-23T07:09:18.328Z',
		name: 'name 43',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'insect',
		price: 47,
		rating: 88,
		isFavorite: false,
		id: '43',
	},
	{
		createdAt: '2053-06-23T17:00:37.600Z',
		name: 'name 44',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'bear',
		price: 91,
		rating: 28,
		isFavorite: false,
		id: '44',
	},
	{
		createdAt: '2039-03-20T16:35:00.715Z',
		name: 'name 45',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'insect',
		price: 33,
		rating: 98,
		isFavorite: false,
		id: '45',
	},
	{
		createdAt: '2010-01-24T04:22:46.542Z',
		name: 'name 46',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'dog',
		price: 89,
		rating: 100,
		isFavorite: false,
		id: '46',
	},
	{
		createdAt: '2024-11-14T16:06:14.985Z',
		name: 'name 47',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'bear',
		price: 19,
		rating: 82,
		isFavorite: false,
		id: '47',
	},
	{
		createdAt: '1993-07-14T08:33:33.647Z',
		name: 'name 48',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'cat',
		price: 58,
		rating: 18,
		isFavorite: false,
		id: '48',
	},
	{
		createdAt: '2062-02-03T01:05:38.774Z',
		name: 'name 49',
		image: 'https://loremflickr.com/640/480/cats',
		category: 'rabbit',
		price: 86,
		rating: 64,
		isFavorite: false,
		id: '49',
	},
];

function App() {
	const user = {
		name: 'John',
		age: 10,
	};

	return (
		<div className='container'>
			<Header></Header>

			<Test test="test"/>
			<p className='text-warning'>
				{user.age > 20
					? 'Siz voyaga yetgansiz'
					: 'Siz voyaga yetmagansiz'}
			</p>

			<CardList title={'Katta sotuvlar'} products={products}></CardList>

			<Footer />
		</div>
	);
}

export default App;
