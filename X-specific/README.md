# RICOH THETA X API

THETA X API differs from the Z1 and SC2 in these ways:

* internal GPS - [_gpsTagRecording](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/_gps_tag_recording.md)
* internal storage - osc/state, _currentStorage
* removable battery - osc/state, _batteryInsert
* LCD touchscreen control - option, [_cameraControlSource](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/_camera_control_source.md)
* LCD screen - option, [_cameraMode](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/_camera_mode.md)
* image and video file format. options - [fileFormat](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/file_format.md)
* [_bitrate](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/_bitrate.md)
* live [previewFormat](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/preview_format.md)
* differences in state error code, _cameraError
* [_powerSaving](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/_power_saving.md)
* [_topBottomCorrectionRotation](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/_top_bottom_correction_rotation.md)
* [_maxRecordableTime](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/_max_recordable_time.md)

## Other

### Object Detection

* [_faceDetect](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/_face_detect.md)
* [_aiAutoThumbnail](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/_ai_auto_thumbnail.md)

### Underwater

for the [TW-2](https://us.ricoh-imaging.com/product/underwater-housing-tw-2/)
water housing, not the TH-2

* [_waterHousing](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/_water_housing.md)
* [_waterHousingStitching](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/_water_housing_stitching.md)
* in options - [whiteBalance](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/options/white_balance.md), _underwater option
