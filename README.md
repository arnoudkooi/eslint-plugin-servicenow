# eslint-plugin-servicenow

ServiceNow lint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-servicenow`:

```
$ npm install eslint-plugin-servicenow --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-servicenow` globally.

## Usage

Add `servicenow` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "servicenow"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
      "servicenow/no-hardcoded-sysids": 1,
      "servicenow/dont-use-gr-as-variablename": 1,
      "servicenow/minimize-gs-log-print": 1,
      "servicenow/no-packages-calls": 1
    }
}
```

## Supported Rules

* listed in rules section





