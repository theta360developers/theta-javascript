# theta-javascript

Building JavaScript examples to control RICOH THETA cameras through the WebAPI.

Run the programs in this repo by using Node.js.

Example:

`node getinfofake.js`

### Notes

There is a cloud API called fake-theta that allows you to test API commands without a THETA.
I am using Node.js, so I can run JavaScript programs from the command line. I’m running version 18.15.0.
I am on a MacBook Air, running Node.js from the Terminal. I connect directly to my THETA X by Wi-Fi.
Node.js

If you don’t have Node.js installed, here’s a good guide written by @erikrod1. Requires email registration.

[https://theta360developers.github.io/sdk/](https://theta360developers.github.io/sdk/)

Make sure to run `npm init` in the directory you’re working from.

`npm init` will help you build a basic package.json file. You can just accept all the defaults. After the setup is completed, you may need to edit the package.json file that has just been created and add the following line:

`"type": "module",`

So my package.json file looks like this:

{
  "type": "module",
  "name": "js",
  "version": "1.0.0",
  "description": "",
  "main": "takepic.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

### Links to API documentation

* [Overview](https://github.com/ricohapi/theta-api-specs/blob/main/core/products/theta.md) - RICOH THETA Developers
* [THETA Web API v2.1](https://github.com/ricohapi/theta-api-specs/blob/main/theta-web-api-v2.1/README.md)
* [theta-client SDK](https://github.com/ricohapi/theta-client)
* [fake-theta](https://github.com/ricohapi/theta-client)
* [theta360.guide developers community](https://www2.theta360.guide/)