---
sidebar_position: 7
---

# App build & release

To build and release your Flutter app, you can follow these general steps:

1. **Building the App:**

   - **For Android:**

     - Run `flutter build apk` to build the APK file of your app. This command generates the APK file in the `build/app/outputs/flutter-apk` directory.

   - **For iOS:**
     - If you want to build a release version for iOS, you need to use Xcode to archive and export the app.

2. **Releasing the App:**

   - **For Android:**

     - If you're releasing your app on the Google Play Store, you need to sign the APK with your app's signing key and then upload it to the Play Console. Follow the [Play Console's instructions to create a new release and upload your APK file.](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en)
     - If you want to distribute your app outside the Play Store, you can share the APK file directly with your users

   - **For iOS:**
     - To release your app on the App Store, you need to use Xcode to archive and submit your app. Follow [Apple's guidelines for App Store submission and distribution.](https://developer.apple.com/ios/submit/)
