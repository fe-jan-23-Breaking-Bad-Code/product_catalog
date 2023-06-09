export interface Phone {
  id: string,
	namespaceId: string,
	name: string,
	capacityAvailable: [string],
	capacity: string,
	fullPrice: number,
	price: number,
	colorsAvailable: string[],
	color: string,
	images: string[],
	description: [
		{
			title: string,
			text: [string]
		},
		{
			title: 'Camera',
			text: [string]
		},
		{
			title: string,
			text: [string]
		}
	],
	screen: string,
	resolution: string,
	processor: string,
	ram: string,
	camera: string,
	zoom: string,
	cell: string[],
}
