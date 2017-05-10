how to start a new react native finzen app:

1. run: react-native init finzen
2. run: yarn add react-native-animatable react-native-router-flux firebase react-native-circular-progress react-native-image-crop-picker react-native-keyboard-aware-scroll-view react-native-linear-gradient react-native-material-kit@0.4.1 react-native-router-flux react-native-search-bar react-native-share react-native-snackbar react-native-snap-carousel@1.6.1 react-native-spinkit react-native-tab-view react-native-vector-icons react-native-view-transformer redux react-redux react-timer-mixin redux-thunk
3. Link packages
    1. run: react-native link
    2. Verify that the following packages have been linked: react-native-share react-native-vector-icons react-native-spinkit react-native-snackbar react-native-linear-gradient react-native-material-kit react-native-search-bar
4. Add and link react-native-maps with google maps:
    1. run: yarn add react-native-maps@0.13.0
    2. Create a Podfile at “PROJECT_FOLDER/ios/Podfile” and copy code from here: https://github.com/tedjames/finzenPodfile/blob/master/Podfile
    3. Navigate to your ios folder and run “pod install”
    4. Open the new .xcworkspace file. This is your project’s new home
    5. Drop the AirMaps and AirGoogleMaps folders into the root of your project from “/Users/tedwerbel/Documents/CodingProjects/finzen/finzen/node_modules/react-native-maps/ios” (Make sure Copy items if needed is ticked)
    6. Generate API key from: https://developers.google.com/maps/documentation/ios-sdk/get-api-key OR use this one: AIzaSyBF5tbxPwQSA0YPFmM2eDr1LmXviGE68r4
    7. Add the API key to AppDelegate.m
    8. Add “@import GoogleMaps;”, “[GMSServices provideAPIKey:@"AIzaSyBF5tbxPwQSA0YPFmM2eDr1LmXviGE68r4"];” to AppDelegate.m (image: https://imgur.com/a/1fOfN)
    9. Add “$(SRCROOT)/../node_modules/react-native-maps/ios/AirMaps” to header search paths for Pods project in build settings and change from non-recursive to recursive (image: https://gist.github.com/heron2014/e60fa003e9b117ce80d56bb1d5bfe9e0/raw/bab92a8621a8a940780a18796dbec69bd5ae8345/x2-images.png)
    10. References:
        1. https://github.com/airbnb/react-native-maps/issues/693#issuecomment-259804156
        2. https://gist.github.com/heron2014/e60fa003e9b117ce80d56bb1d5bfe9e0
5. Link ReactART for react-native-circular-progress:
    1. Go to: node_modules/react-native/Libraries/ART/ART.xcodeproj
    2. Drag that Xcode project to the “Libraries” folder
    3. Add libART.a under “Build Phases” and “Link Binary with Libraries”
6. Link react-native-image-crop-picker:
    1. Add the following 4 lines to info.plist just above the first key/string pair:
        1.     <key>NSPhotoLibraryUsageDescription</key>
        2.     <string>To upload receipts and images</string>
        3.     <key>NSCameraUsageDescription</key>
        4.     <string>To upload receipts and images</string>
    2. ONLY CONTINUE IF RNICP IS STILL NOT WORKING
    3. Drag and drop “react-native-image-crop-picker/ios/ImageCropPickerSDK” folder to your xcode project (Make sure Copy items if needed is ticked)
    4. Click on project General tab:
        1. Under Deployment Info set Deployment Target to 8.0
        2. Under Embedded Binaries click + and add “RSKImageCropper.framework” and “QBImagePicker.framework”
7. Drag and drop fonts to Resources folder (be sure to add to target, select the option to copy items and select the option to create groups)
8. Add fonts to info.plist:
```
<key>UIAppFonts</key>
	<array>
		<string>Montserrat-Bold.ttf</string>
		<string>Montserrat-Regular.ttf</string>
		<string>OpenSans-Bold.ttf</string>
		<string>OpenSans-BoldItalic.ttf</string>
		<string>OpenSans-ExtraBold.ttf</string>
		<string>OpenSans-ExtraBoldItalic.ttf</string>
		<string>OpenSans-Italic.ttf</string>
		<string>OpenSans-Light.ttf</string>
		<string>OpenSans-LightItalic.ttf</string>
		<string>OpenSans-Regular.ttf</string>
		<string>OpenSans-Semibold.ttf</string>
		<string>OpenSans-SemiboldItalic.ttf</string>
		<string>Entypo.ttf</string>
		<string>EvilIcons.ttf</string>
		<string>FontAwesome.ttf</string>
		<string>Foundation.ttf</string>
		<string>Ionicons.ttf</string>
		<string>MaterialCommunityIcons.ttf</string>
		<string>MaterialIcons.ttf</string>
		<string>Octicons.ttf</string>
		<string>SimpleLineIcons.ttf</string>
		<string>Zocial.ttf</string>
		<string>rubicon-icon-font.ttf</string>
		<string>Rubik-Black.ttf</string>
		<string>Rubik-BlackItalic.ttf</string>
		<string>Rubik-Bold.ttf</string>
		<string>Rubik-BoldItalic.ttf</string>
		<string>Rubik-Italic.ttf</string>
		<string>Rubik-Light.ttf</string>
		<string>Rubik-LightItalic.ttf</string>
		<string>Rubik-Medium.ttf</string>
		<string>Rubik-MediumItalic.ttf</string>
		<string>Rubik-Regular.ttf</string>
	</array>
```

Deployment notes:
1. Preparing image-crop-picker sdk for production: https://github.com/ivpusic/react-native-image-crop-picker#production-build
