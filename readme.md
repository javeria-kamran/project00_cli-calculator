
# cli_calculator

''' A cli simple calculator made by using typescript , node Js and inquirer.
First we have to make tsconfig file by running the following command in your terminal:
•tsc --init
In this tsconfig file you have to see the line 14 in which you will change the target to "es2020"
Then ,in line 28 change the module to "nodeNext"
And at last ,uncomment the line 30 and also change the module resolution to "nodeNext".

After this run the following command to make a package.json file:
•npm init
It will generate a package.json file in this file you have to add a type right after the 'main' heading in line 5 you will type it as:
"type": "module"

Now you have to install a inquirer.
To install inquirer you have to write the following command in your terminal :
•npm install --save inquirer
It will generate a packagelock.json file and it will create a folder of node modules in your project .
After this in your main.ts file write your code as mentioned above by importing inquirer in your file .
After completing your code , open your terminal and then compile your typescript file to JavaScript file and print it by writing following command in your terminal :
•tsc && node main.js
After this it will start giving you instruction you have wrote and it will continue .

NOTE:
While compiling your typescript file to JavaScript file , make sure you just write (tsc) in your terminal.if you write your file name along with tsc it will not take the change we made in previous files it doesn't update your code .''' 