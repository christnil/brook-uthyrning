export interface PriceRange {
    period: string
    weekPrice: string
    dayPrice: string
}

export interface OtherPrice {
    service: string
    price: string
}

export interface PricingInfo {
    apartmentPrices: PriceRange[]
    cottagePrices: PriceRange[]
    otherPrices: OtherPrice[]
    additionalInfo: string[]
}
    

export const pricingInfo: PricingInfo = {
    apartmentPrices: [
      { period: "v. 14-22", weekPrice: "2900:-", dayPrice: "480:-" },
      { period: "v. 23-25", weekPrice: "3900:-", dayPrice: "680:-" },
      { period: "v. 26-32", weekPrice: "5000:-", dayPrice: "840:-" },
      { period: "v. 33-34", weekPrice: "3900:-", dayPrice: "680:-" },
      { period: "v. 35-43", weekPrice: "2900:-", dayPrice: "480:-" },
    ],
    cottagePrices: [
      { period: "v. 14-22", weekPrice: "3400:-", dayPrice: "560:-" },
      { period: "v. 23-25", weekPrice: "4500:-", dayPrice: "750:-" },
      { period: "v. 26-32", weekPrice: "6100:-", dayPrice: "1000:-" },
      { period: "v. 33-34", weekPrice: "4500:-", dayPrice: "750:-" },
      { period: "v. 35-43", weekPrice: "3400:-", dayPrice: "560:-" },
    ],
    otherPrices: [
      { service: "Hyra av bastu", price: "200:- / 3 timmar" },
      { service: "Uppställning av husvagn / husbil", price: "150:- / dygn" },
      { service: "El till husvagn / husbil", price: "50:- / dygn" },
      { service: "Tält", price: "60:- / dygn" },
      { service: "Dusch", price: "20:-" },
      { service: "Tvättstuga", price: "50:- / maskin" },
    ],
    additionalInfo: [
      "Kinnerstugan (storstugan) kan hyras för 800:- / dygn. I stugan finns en konferenslokal med plats för 70 sittande konferensdeltagare samt kök med porslin och annan utrustning för fester och event. För att hyra Kinnerstugan kontaktar du bokning@gotlandsbrook.com",
      "Vid stugan finns laddstolpar där man kan ladda elbilar mot betalning. Som betallösning används Real Load.",
    ],
  }
  
  