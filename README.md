# moove

## APIs

### crate event

method: post
```
{
    title:string
}   
```

callback
```
{
    status:boolean,
    msg:string,
    value:{
        url:string
    }
}
```

### update location

method: post
```
{
    event_uuid:string,
    user_uuid:string,
    latitude:number,
    longitude:number
}   
```
event_uuid and user_uuid will be provided

callback
```
{
    status:boolean,
    msg:string,
}
```

### get users location

method: post
```
{
    event_uuid:string
}
```
event_uuid will be provided

callback
```
{
    status:boolean,
    msg:string,
    value:{
        users: [
            {   
                event_uuid:string,
                user_uuid:string,
                latitude:number,
                longitude:number
            },
            ...
        ]
    }
}
```
