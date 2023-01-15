# hash2f

With this tool you can encrypt inclusions and back again.
You need two things once the hash for example: `4Kss4f5ssK5sdK5s`.
And the key number for example: `2,1,0,0` to get the value back. 

How does the encryption work?
There are three types of encryption: `eh2f4`, `eh2f8`, and `eh2f16`.

### encrypt

```ts 
eh2f4("text") //['OtfvelfvOxfvOtfv','1,0,1,1']
```
or 

```ts 
var hash = eh2f4("text") //['OtfvelfvOxfvOtfv','1,0,1,1']
  
  hash[0] //'OtfvelfvOxfvOtfv'
  hash[1] //'1,0,1,1'
```


### decrypt

```ts
dh2f4(['OtfvelfvOxfvOtfv','1,0,1,1']) //text
```

You can only encrypt back if you have the hash and the key number. If you only have one thing you will not get further