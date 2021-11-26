class GoogleModel {
    constructor(series, mashineType, numberOfGPUs, gpuType, localSSD, dataCenter, commitedUsage) {
        this.series = series;
        this.mashineType = mashineType;
        this.numberOfGPUs = numberOfGPUs;
        this.gpuType = gpuType;
        this.localSSD = localSSD;
        this.dataCenter = dataCenter;
        this.commitedUsage = commitedUsage;
    };
};

module.exports = GoogleModel;