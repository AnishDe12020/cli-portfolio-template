# CLI Portfolio Template

This is a template repository that lets you create an `npx <yourName>` cli portfolio extremely quickly. It is using [React Ink](https://github.com/vadimdemedes/ink).

# Demo


https://user-images.githubusercontent.com/63192115/133922256-42d12246-9c8c-488a-a232-ddd730d25784.mp4



# How to use this template
## Prequisities
- A GitHub account
- A NPM account
- A computer with NodeJS v10 or above and NPM installed (Note that NPM v5.2 or later is used for `npx`)

## Cloning the template
Firstly, you need to click the green "Use this template" button on the top right corner
![image](https://user-images.githubusercontent.com/63192115/133920749-481488b6-2a25-4ad6-87a7-c70459dda88d.png)

Next, you will be presented with this page-

![image](https://user-images.githubusercontent.com/63192115/133920763-8c2ef2de-5f91-4070-8146-dc3dcaa931b1.png)

Here you can fill up anything for the repository name (try to keep it in accordance with the topic)
> Note that putting your GitHub username for this repository won't work as it will overwrite your GitHub profile README repository

Now click the green button saying "Create repository from template"

![image](https://user-images.githubusercontent.com/63192115/133920801-6ba0bdf7-dba7-4168-a8f9-12583d727690.png)

Well done!!! Now you have created your cli portfolio repository. The next step would be to clone it down

![image](https://user-images.githubusercontent.com/63192115/133920846-76aaa539-7bbf-4177-9142-610732367890.png)

## Editing the required files

Now fill in the `source/data.json` file with your details. Note that the fields there are just given as an example, you can customize it to your preference by adding, renaming, and removing fields. Just remember to follow the JSON syntax.

Next, go to the `package.json` file.

![image](https://user-images.githubusercontent.com/63192115/133920913-d3e099cb-c098-4b58-8599-f57b9658eab4.png)

- Here in the `name` field, put in your name (note that it shouldn't have any whitespace characters and must be lowercase. This will be your npm package name)
- In the `url` field under repository, put your GitHub repository url.
- You can also fill out the `keywords` field by adding keywords as strings in the array.

We also need to edit the help command so go to `source/cli.tsx` and put in the package name in the field that says <package_name_here>

That is it!!! 
You are done with making your portfolio. Make sure you have NodeJS and NPM installed and then run `npm start` (this is important to populate th resulting js files with the updated details) to see your CLI portfolio.
Now you must publish the changes to GitHub and publish the package on the NPM registry.

Note that you can also edit this `README.md` file.

### Publishing changes to GitHub
Run the following commands - 
```bash
git add -A
```

```bash
git commit -m "Personalized cli-portfolio with my details"
```

You might want to customize the commit message to your liking.

```bash
git push -u origin master
```

### Publishing the package to the NPM Registry
You will need an NPM account for this which you can make [here](https://www.npmjs.com/signup).

> Note that this email will be a part of metadata of any packages you publish  hence will be public.

Next, we need to login to the NPM CLI. Do this by running the following command - 

```bash
npm login
```

Enter your username, password, and public email address

Now go to the project directory and run the following command - 

```bash
npm publish --access=public
```

That is it!!!

Now you can run `npx <yourPackagename>` to see your cli-portfolio

# Next Steps

You might choose to customize the portfolio further. You can do this by editing the `Field.tsx` and `ui.tsx` files. Make sure to increase the npm version with the `npm version` command each time you wish to publish the package to the registry. Also, don't forget to commit the changes to GitHub first.

# Contributing
Feel free to open a pull request.
