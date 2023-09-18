"Task": "https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view"

"How to run the app":
    This app is a calculator. I have implemented mathematical operations: addition,
    subtraction, multiplication, division, percent, mathematical root, change sign, raised to the power,
    factorial and memory operations. (other mathematical operations are locked). This app has button "Change Theme",
    and with this button you can change color App. 

    When entered left operand, right operand, and operation - when clicking next
    operation or “=” the current operation is executed and placed in
    left operand.

    When I created the application I used JS, CSS, HTML.
    Collected project with Webpack. I used Jest tests.

"Folder description":
    dist: collected project with Webpack
    src: folder with project    
        scripts: scripts folder. Folder connected with all the scripts that I use in the application.
            CommandPattern: Folder connected with CommandPattern witch I use in app. 
            Each folder in this folder has CommandPattern and jest-tests for this CommandPattern.
            functions: Folder connected with mathematical functions witch I use in app.
