//perhaps give each its own regex....
//maybe also regexs/symbols for variables


export const genericParser = 
[
	{
		"name": "blacklist",
		"regex": "",
		"usertext": ["testblacklist", "nigger","nigga","fag", "faggot", "bitch", "whore", "retard", "cunt", "paki", "kike", "coon", "gook"],
		"responses": [
			{
				"response": "that's not cool",
				"context": "blacklist"
			},
			{
				"response": "don't use language like that",
				"context": "blacklist"
			},
			{
				"response": "that's offensive, don't say that",
				"context": "blacklist"
			},
			{
				"response": "hey that's really uncool",
				"context": "blacklist"
			}
		]
	},


	{
		"name": "awkward",
		"regex": /\[r, m]/,
		"usertext": ["er", "um", "awkward", "this is awkward", "lol this is awkward"],
		"responses": [
			{
				"response": "lol idk... what's your favourite color",
				"context": "color"
			},

			{
				"response": "omg so awkward... do u have a favorite band lol",
				"context": "band"
			},

			{
				"response": "omg i have no idea what to say haha",
				"context": "awkward"
			}
		]
	},

	{
		"name": "intro",
		"regex": '',
		"usertext": [],
		"responses": [

				{
					"response": "where r u?",
					"context": "location"
				},

				{
					"response": "what's your name haha",
					"context": "name"
				},

				{
					"response": "what's the weather like where you are",
					"context": "weather"
				},

				{
					"response": "are u in lockdown rn?",
					"context": "lockdown"
				},

			]
	},


	{
		"name": "later",
		"regex": '',
		"usertext": ["whaat??", "what??", "what?", "wat?", "what???", "what!", "wattt", "what do you want???", "wat??", "w h a t"],
		"responses": [
				{
					"response": "how's everything where u are?",
					"context": "location-covid"
				},

				{
					"response": "are you a bot?",
					"context": "bot-accuse-player"
				},

				{
					"response": "uh.... what's your favourite animal?",
					"context": "animal"
				},

				{
					"response": "lmao%whats your star sign",
					"context": "astrology"
				},

				{
					"response": "do u like bernie sanders?",
					"context": "bernie"
				},

			]
	}
]
