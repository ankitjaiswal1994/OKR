# OKR

## Assumptions
 1. Using mac m1 tested on both ios and android. (Not intel)
 2. UI is ordinary no fancy color combination. Just serving the logical purpose.
 3. Used context.
 4. Used typescript.
 5. Used functional based component approach.
 6. Havnt shown the detail pop up (which was optional)


## Project setup

Pre-Requirements

XCode
Android Studio
Node
yarn
react-native-cli
On the off chance that your system doesn't follow the requirements, you can alway follow the documentation Setting Up the Environment Variables for react-native

Clone the project

 $ git clone <ssh_url/http_url of the project>


Set up the project

Open OKRCentralApp folder in terminal.

$ cd OKRCentralApp
Install the dependencies required to run the project.

  $ yarn install


  $ cd ios
  $ pod install
it will manages library dependencies for your Xcode.



Run the project

Run the following command for different mobile OS:

IOS:

  yarn ios


Make sure to open android studio and sync the gradle, it will update the dependencies.

Android:

  yarn android
  
