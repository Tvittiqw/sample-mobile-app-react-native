# sample-mobile-app-react-native

To build release apk:
1)react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
2)cd android && gradlew assembleRelease

To build debug apk:
1)react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
2)cd android && gradlew assembleDebug

To run on device:
1)react-native run-android

To logging:
react-native log-android