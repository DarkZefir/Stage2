class CalcModel {
    constructor(CalcParameters) {
        this.series = CalcParameters.series;
        this.mashineType = CalcParameters.mashineType;
        this.numberOfGPUs = CalcParameters.numberOfGPUs;
        this.gpuType = CalcParameters.gpuType;
        this.localSSD = CalcParameters.localSSD;
        this.dataCenter = CalcParameters.dataCenter;
        this.commitedUsage = CalcParameters.commitedUsage;
    };
};

module.exports = CalcModel;