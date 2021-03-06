var liquid;

liquid = {
  'g/uL': {
    name: {
      singular: 'Gram per micro litre'
    , plural: 'Grams per micro litres'
    }
  , to_anchor: 1000/1000000
  },
  'g/L': {
    name: {
      singular: 'Gram per litre'
    , plural: 'Grams per litres'
    }
  , to_anchor: 1000
  },
  'g/dL': {
    name: {
      singular: 'Gram per deci litre'
    , plural: 'Grams per deci litres'
    }
  , to_anchor: 1000/10
  },
  'g/mL': {
    name: {
      singular: 'Gram per milli litre'
    , plural: 'Grams per milli litres'
    }
  , to_anchor: 1
  },
  'mg/uL': {
    name: {
      singular: 'MilliGram per micro litre'
    , plural: 'MilliGrams per micro litres'
    }
  , to_anchor: 1
  },
  'mg/L': {
    name: {
      singular: 'MilliGram per litre'
    , plural: 'MilliGrams per litres'
    }
  , to_anchor: 1
  },
  'mg/dL': {
    name: {
      singular: 'MilliGram per decilitre'
    , plural: 'MilliGrams per decilitres'
    }
  , to_anchor: 1/10
  },
  'mg/mL': {
    name: {
      singular: 'MilliGram per decilitre'
    , plural: 'MilliGrams per decilitres'
    }
  , to_anchor: 1/1000
  },
  'K/uL': {
    name: {
      singular: 'KiloGram per micro litre'
    , plural: 'KiloGrams per micro litres'
    }
  , to_anchor: 1/1000000
  },
  'K/L': {
    name: {
      singular: 'Gram per litre'
    , plural: 'Grams per litres'
    }
  , to_anchor: 1
  },
  'K/dL': {
    name: {
      singular: 'KiloGram per deci litre'
    , plural: 'KiloGrams per deci litres'
    }
  , to_anchor: 1/10
  },
  'K/mL': {
    name: {
      singular: 'KiloGram per mili litre'
    , plural: 'KiloGrams per mili litres'
    }
  , to_anchor: 1/1000
  },
  'pg/mL': {
    name: {
      singular: 'PicoGram per mili litre'
    , plural: 'PicoGrams per mili litres'
    }
  , to_anchor: (10^15)/1000
  },
  'pg/L': {
    name: {
      singular: 'PicoGram per litre'
    , plural: 'PicoGrams per litres'
    }
  , to_anchor: (10^15)
  },
  'pg/uL': {
    name: {
      singular: 'PicoGram per microlitre'
    , plural: 'PicoGrams per microlitres'
    }
  , to_anchor: (10^15)/(10^6)
  },
  'pg/dL': {
    name: {
      singular: 'PicoGram per decilitre'
    , plural: 'PicoGrams per decilitres'
    }
  , to_anchor: (10^15)/10
  },
  'ng/dL': {
    name: {
      singular: 'PicoGram per decilitre'
    , plural: 'PicoGrams per decilitres'
    }
  , to_anchor: (10^9)/10
  },
  'ng/L': {
    name: {
      singular: 'PicoGram per litre'
    , plural: 'PicoGrams per litres'
    }
  , to_anchor: (10^9)
  },
  'ng/mL': {
    name: {
      singular: 'PicoGram per mililitre'
    , plural: 'PicoGrams per mililitres'
    }
  , to_anchor: (10^9)/1000
  },
  'ng/uL': {
    name: {
      singular: 'PicoGram per microlitre'
    , plural: 'PicoGrams per microlitres'
    }
  , to_anchor: (10^9)/(10^6)
  },
};

module.exports = {
  metric: liquid
, _anchors: {
    metric: {
      unit: 'K/L'
    , ratio: 1
    }
  }
};
