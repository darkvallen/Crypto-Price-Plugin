# Crypto Price Plugin

## Introduction

This plugin fetches and displays the latest USD price of a cryptocurrency from CEX.io.

## Usage
```shell
$ extism call plugin.wasm run --wasi --allow-host="cex.io" --input="YOUR_TOKEN_SYMBOL"
```

## Example Usage
```shell
$ extism call plugin.wasm run --wasi --allow-host="cex.io" --input="BTC"
```

Result :

```
{"Token":"BTC","Price (USD)":"61300"}
```
