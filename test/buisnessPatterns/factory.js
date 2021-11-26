class Factory {
    series = "//md-option[@value='n1']";
    mashineType = "//md-option[@value='CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8']";
    numberOfGPUs = "//md-option[@ng-repeat='item in listingCtrl.supportedGpuNumbers[listingCtrl.computeServer.gpuType]']//div[contains(text(),'1')]";
    gpuType = "//md-option[@value='NVIDIA_TESLA_V100']/div";
    localSSD = "//div[contains(text(),'2x375 GB')]";
    dataCenter = "//md-select-menu[@class='md-overflow']//div[contains(text(),'Frankfurt')]";
    commitedUsage = "//div[@class='md-select-menu-container md-active md-clickable']//div[contains(text(),'1 Year')]";
};
module.exports = Factory;
