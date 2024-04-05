// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Scott',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'b0cbb9fca5fedfa286fd525a35ed8875', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '33.214561',
	defaultLongitude: '-96.614456',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'ProtonMail',
			icon: 'mail',
			link: 'https://mail.proton.me/u/1/inbox',
		},
		{
			id: '2',
			name: 'GMail',
			icon: 'mails',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
		{
			id: '3',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/plopobo',
		},
		{
			id: '4',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '5',
			name: 'iCloud',
			icon: 'cloud',
			link: 'https://www.icloud.com/',
		},
		{
			id: '6',
			name: 'Spotify',
			icon: 'music',
			link: 'https://open.spotify.com/browse/featured',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Spotify',
			icon: 'headphones',
			link: 'https://open.spotify.com/browse/featured',
		},
		{
			id: '2',
			name: 'ABC News',
			icon: 'newspaper',
			link: 'https://iview.abc.net.au/show/abc-news-24',
		},
		{
			id: '3',
			name: 'ABC TV',
			icon: 'tv',
			link: 'https://iview.abc.net.au/show/abc-vic-live-stream',
		},
		{
			id: '4',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '5',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://www.twitch.tv/',
		},
		{
			id: '6',
			name: 'Discord',
			icon: 'figma',
			link: 'https://discord.com/app',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music-4',
			id: '1',
			links: [
				{
					name: 'musica',
					link: 'https://www.youtube.com/watch?v=huDPxtoLWN4&list=PLVNnKHE7nFtByumA9GSCiyrKlYfBY7VFS&pp=iAQB',
				},
				{
					name: 'Top Tier',
					link: 'https://www.youtube.com/watch?v=AKAqD2XG_XE&list=PLVNnKHE7nFtAfkQuUQh_PTCUY59j2kdza&pp=iAQB',
				},
				{
					name: 'True Bops',
					link: 'https://www.youtube.com/watch?v=Q0ft9ieeAuo&list=PLVNnKHE7nFtARmbgK6u30nZZBg1v1z5hF&pp=iAQB',
				},
				{
					name: 'Sunny Days',
					link: 'https://www.youtube.com/watch?v=NHuGG_FsC20&list=PLBt7yJ20zmjcxfhXea8KS7MNcGIEkmnL1&pp=gAQBiAQB',
				},
			],
		},
		{
			icon: 'skull',
			id: '2',
			links: [
				{
					name: '1337X',
					link: 'https://www.1337x.to/home/',
				},
				{
					name: 'EZTV',
					link: 'https://eztvx.to/home',
				},
				{
					name: 'Torrent Galaxy',
					link: 'https://torrentgalaxy.to/',
				},
				{
					name: 'Torrent Leech',
					link: 'https://www.torrentleech.org/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
