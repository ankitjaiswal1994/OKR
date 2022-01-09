# OKR

### Video demonstration
https://user-images.githubusercontent.com/20721521/148696335-576d9404-fe66-4ed8-a734-a29cb0f55264.mp4


## Assumptions
 1. Using mac m1 tested on both ios and android. (Not intel)
 2. UI is ordinary no fancy color combination. Just serving the logical purpose.
 3. Used context.
 4. Used typescript.
 5. Used functional based component approach.
 6. Have not shown the detail pop up (which was optional)
 7. Pngs used might be of low quality.


## Project setup


Clone the project

 $ git clone <ssh_url/http_url of the project>


Set up the project

Open OKRCentralApp folder in terminal.

$ cd OKRCentralApp
Install the dependencies required to run the project.

```
  $ yarn install
```

```
  $ cd ios
  $ pod install
```

it will manages library dependencies for your Xcode.



Run the project

Run the following command for different mobile OS:

IOS:

```
  yarn ios
```


Make sure to open android studio and sync the gradle, it will update the dependencies.

Android:

```
  yarn android
```
