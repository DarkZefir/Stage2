const CalcModel = require('./buisnessPage')

class CalcFactory {
    static getDefaultCalc() {
        const defaultCalcParameters = {
            series: 'n1',
            mashineType: 'CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8',
            numberOfGPUs: '1',
            gpuType: 'NVIDIA_TESLA_V100',
            localSSD: '2x375 GB',
            dataCenter: 'Frankfurt',
            commitedUsage: '1 Year'
        };
        return new CalcModel(defaultCalcParameters);
    };
};

module.exports = CalcFactory;
