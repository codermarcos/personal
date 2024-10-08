module.exports = (args: any) => JSON.stringify({
	"@context": "https://schema.org",
	"@type": "Person",
	"address": {
		"@type": "PostalAddress",
		"addressLocality": args.address.city,
		"addressRegion": args.address.state,
		"postalCode": args.address.cep,
		"streetAddress": args.address.street
	},
	"sameAs": [
		args.contacts.linkedin.href,
		args.contacts.github.href,
	],
	"colleague": [],
	"disambiguatingDescription": args.aboutMe,
	"email": `mailto:${args.contacts_raw.email}`,
	"image": `${args.photo.file}.${args.photo.ext}`,
	"jobTitle": args.job,
	"name": args.name,
	"telephone": args.contacts_raw.phone,
	"url": args.site
})
