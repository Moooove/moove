# moove

## APIs

### crate event

url: 'event/new', method: post
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

url: 'userLocation/record', method: post
```
{
    event_uuid:string,
    user_uuid:string,
    lat:number,
    long:number
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
        userLocations: [
            {   
                event_uuid:string,
                user_uuid:string,
                lat:number,
                long:number
            },
            ...
        ]
    }
}
```
