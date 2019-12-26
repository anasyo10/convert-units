var milimol;

milimol = {
  'mmol/L': {
    name: {
      singular: 'MilliMole per litre'
    , plural: 'MilliMole per litres'
    }
  , to_anchor: 1
  },
  'mol/L': {
    name: {
      singular: 'Mole per litre'
    , plural: 'Mole per litres'
    }
  , to_anchor: 1/1000
  },
  'umol/L': {
    name: {
      singular: 'MicroMole per litre'
    , plural: 'MicroMole per litres'
    }
  , to_anchor: 1000
  },
  'nmol/L': {
    name: {
      singular: 'NanoMole per litre'
    , plural: 'NanoMole per litres'
    }
  , to_anchor: 10^6
  }
};

module.exports = {
  metric: milimol
, _anchors: {
    metric: {
      unit: 'mmol/L'
    , ratio: 1
    }
  }
};
